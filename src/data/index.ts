import type { Content, Locale } from '@/types'
import { en } from './locales/en'
import { it } from './locales/it'

export * from './shared'

/** Every translation. To add a language: add it to `Locale`, create locales/xx.ts, register it here. */
export const contentByLocale: Record<Locale, Content> = { en, it }

export const locales = Object.keys(contentByLocale) as Locale[]
