import type { CSSProperties } from 'react'
import { locales } from '@/data'
import { useLocale } from '@/i18n'
import { cx } from '@/utils/cx'
import styles from './LanguageSwitch.module.scss'

/** Segmented IT / EN control. The sliding pill is positioned with a CSS variable. */
export function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale()
  const activeIndex = locales.indexOf(locale)

  return (
    <div
      className={styles.switch}
      role="group"
      aria-label={t.header.switchLanguage}
      style={{ '--active': activeIndex, '--count': locales.length } as CSSProperties}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={cx(styles.option, code === locale && styles.active)}
          aria-pressed={code === locale}
          lang={code}
          onClick={() => setLocale(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
