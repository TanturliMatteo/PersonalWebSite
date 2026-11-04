import { createContext, useContext } from 'react'
import { contentByLocale } from '@/data'
import type { Content, Locale } from '@/types'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** All the translated content for the current locale. */
  t: Content
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: contentByLocale.en,
})

export function useLocale() {
  return useContext(LocaleContext)
}

/** Replaces `{key}` placeholders: format('Hi {name}', { name: 'Matteo' }). */
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}
