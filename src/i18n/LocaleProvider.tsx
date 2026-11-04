import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { contentByLocale, locales } from '@/data'
import type { Locale } from '@/types'
import { LocaleContext } from './context'

const STORAGE_KEY = 'locale'

function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as string[]).includes(value)
}

/** Saved choice first, then the browser language, then English. */
function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // Storage blocked (private mode): fall through.
  }
  const browser = navigator.language.slice(0, 2)
  return isLocale(browser) ? browser : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Not critical: the choice just will not be remembered.
    }
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, t: contentByLocale[locale] }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
