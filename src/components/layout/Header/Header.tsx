import { useCallback, useRef, useState } from 'react'
import { Container, Icon } from '@/components/ui'
import { profile, sectionIds } from '@/data'
import { useActiveSection, useDismiss, useScrolled } from '@/hooks'
import { useLocale } from '@/i18n'
import { cx } from '@/utils/cx'
import { LanguageSwitch } from '../LanguageSwitch'
import { NavMenu } from '../NavMenu'
import styles from './Header.module.scss'
import { ScrollRing } from './ScrollRing'

export function Header() {
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const activeId = useActiveSection(sectionIds)
  const menuRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])
  useDismiss(menuRef, open, close)

  const items = sectionIds.map((id) => ({ id, label: t.nav[id] }))

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <Container className={styles.bar}>
        <a href="#home" className={styles.brand} aria-label={t.header.backToTop}>
          <span className={styles.logo}>MT</span>
          <span className={styles.name}>{profile.name}</span>
        </a>

        <div className={styles.actions}>
          <LanguageSwitch />

          <div ref={menuRef} className={styles.menuWrapper}>
            <button
              type="button"
              className={cx(styles.toggle, open && styles.toggleOpen)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? 'close' : 'menu'} size={22} />
              <ScrollRing />
            </button>

            <NavMenu
              id="site-menu"
              label={t.header.navLabel}
              items={items}
              activeId={activeId}
              open={open}
              onNavigate={close}
            />
          </div>
        </div>
      </Container>
    </header>
  )
}
