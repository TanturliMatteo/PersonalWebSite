// Pure command logic: input string in, output lines + side-effect description out.
// No React, no DOM, so it is easy to read and to test.
import { profile, projects, sectionIds, skillGroups, socials } from '@/data'
import { format } from '@/i18n'
import type { Content, Locale, SectionId } from '@/types'

export type LineKind = 'input' | 'output' | 'muted' | 'error' | 'success'

export interface Line {
  kind: LineKind
  text: string
}

export type Action =
  | { type: 'clear' }
  | { type: 'close' }
  | { type: 'goto'; id: SectionId }
  | { type: 'lang'; locale: Locale }
  | { type: 'mailto' }

export interface CommandResult {
  lines: Line[]
  action?: Action
}

interface Context {
  t: Content
}

const out = (text: string, kind: LineKind = 'output'): Line => ({ kind, text })

export const COMMANDS = ['help', 'whoami', 'skills', 'projects', 'contact', 'goto', 'lang', 'clear', 'exit'] as const

function isSectionId(value: string): value is SectionId {
  return (sectionIds as string[]).includes(value)
}

export function runCommand(raw: string, { t }: Context): CommandResult {
  const [command = '', ...args] = raw.trim().toLowerCase().split(/\s+/)
  const term = t.terminal

  switch (command) {
    case '':
      return { lines: [] }

    case 'help': {
      const width = Math.max(...COMMANDS.map((c) => c.length)) + 2
      return { lines: COMMANDS.map((c) => out(`${c.padEnd(width)}${term.help[c]}`)) }
    }

    case 'whoami':
      return {
        lines: [
          out(`${profile.name} · ${t.hero.role}`, 'success'),
          out(t.location, 'muted'),
          out(t.about.paragraphs[0]),
        ],
      }

    case 'skills':
      return {
        lines: skillGroups.map((group) => out(`${t.skills.groups[group.id]}: ${group.items.join(', ')}`)),
      }

    case 'projects':
      return {
        lines: projects.flatMap((project) => [
          out(project.name, 'success'),
          out(`  ${project.liveUrl ?? project.repoUrl}`, 'muted'),
        ]),
      }

    case 'contact':
      return {
        lines: [
          out(`email     ${profile.email}`),
          ...socials.map((s) => out(`${s.label.toLowerCase().padEnd(10)}${s.href}`)),
        ],
      }

    case 'ls':
      return { lines: [out(sectionIds.join('  '))] }

    case 'goto':
    case 'cd': {
      const target = args[0]?.replace(/^#/, '') ?? ''
      if (!isSectionId(target)) {
        return { lines: [out(format(term.gotoUsage, { list: sectionIds.join(', ') }), 'error')] }
      }
      return {
        lines: [out(format(term.goto, { section: t.nav[target] }), 'muted')],
        action: { type: 'goto', id: target },
      }
    }

    case 'lang': {
      const locale = args[0]
      if (locale !== 'it' && locale !== 'en') return { lines: [out(term.help.lang, 'error')] }
      return { lines: [], action: { type: 'lang', locale } }
    }

    case 'sudo':
      if (args.includes('hire')) {
        return {
          lines: term.hire.map((text, i) => out(text, i === term.hire.length - 1 ? 'success' : 'muted')),
          action: { type: 'mailto' },
        }
      }
      return { lines: [out('nice try 😉', 'error')] }

    case 'clear':
      return { lines: [], action: { type: 'clear' } }

    case 'exit':
      return { lines: [], action: { type: 'close' } }

    default:
      return { lines: [out(format(term.notFound, { cmd: command }), 'error')] }
  }
}

/** Tab completion: completes the command name when there is a single match. */
export function complete(input: string): string {
  const value = input.trimStart().toLowerCase()
  if (value.includes(' ')) return input
  const matches = COMMANDS.filter((c) => c.startsWith(value))
  return matches.length === 1 ? `${matches[0]} ` : input
}
