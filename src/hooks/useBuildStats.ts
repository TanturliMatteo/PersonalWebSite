import { useEffect, useState } from 'react'

export interface BuildStats {
  jsGzip: number
  cssGzip: number
}

/** Reads dist/build-stats.json (written by vite/siteStats.ts). Null in dev or if missing. */
export function useBuildStats(): BuildStats | null {
  const [stats, setStats] = useState<BuildStats | null>(null)

  useEffect(() => {
    if (import.meta.env.DEV) return
    const controller = new AbortController()

    fetch(`${import.meta.env.BASE_URL}build-stats.json`, { signal: controller.signal })
      .then((response) => (response.ok ? (response.json() as Promise<BuildStats>) : null))
      .then(setStats)
      .catch(() => {})

    return () => controller.abort()
  }, [])

  return stats
}
