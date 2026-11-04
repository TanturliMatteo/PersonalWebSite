import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { gzipSync } from 'node:zlib'
import type { Plugin } from 'vite'

export interface SourceStats {
  components: number
  scssModules: number
  linesOfCode: number
  dependencies: number
}

export interface BundleStats {
  jsGzip: number
  cssGzip: number
}

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  })
}

function collectSourceStats(root: string): SourceStats {
  const files = walk(join(root, 'src'))
  const code = files.filter((file) => /\.(tsx?|scss)$/.test(file))

  const components = files
    .filter((file) => file.endsWith('.tsx'))
    .reduce((sum, file) => sum + (readFileSync(file, 'utf8').match(/export function [A-Z]/g)?.length ?? 0), 0)

  const linesOfCode = code.reduce(
    (sum, file) => sum + readFileSync(file, 'utf8').split('\n').filter((line) => line.trim() !== '').length,
    0,
  )

  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { dependencies?: object }

  return {
    components,
    scssModules: files.filter((file) => file.endsWith('.module.scss')).length,
    linesOfCode,
    dependencies: Object.keys(pkg.dependencies ?? {}).length,
  }
}

/**
 * Real numbers for the "Behind the site" section:
 * - source stats are counted when Vite starts and injected as the __SITE_STATS__ constant;
 * - bundle sizes only exist after a production build, so they are written to
 *   dist/build-stats.json and fetched by the page at runtime.
 */
export function siteStats(): Plugin {
  let root = process.cwd()

  return {
    name: 'site-stats',

    config(config) {
      root = config.root ?? root
      return { define: { __SITE_STATS__: JSON.stringify(collectSourceStats(root)) } }
    },

    generateBundle(_options, bundle) {
      const stats: BundleStats = { jsGzip: 0, cssGzip: 0 }

      for (const file of Object.values(bundle)) {
        const source = file.type === 'chunk' ? file.code : file.source
        const size = gzipSync(typeof source === 'string' ? source : Buffer.from(source)).length
        if (file.fileName.endsWith('.js')) stats.jsGzip += size
        if (file.fileName.endsWith('.css')) stats.cssGzip += size
      }

      this.emitFile({ type: 'asset', fileName: 'build-stats.json', source: JSON.stringify(stats) })
      this.info(`bundle stats written (${relative(root, 'dist/build-stats.json')})`)
    },
  }
}
