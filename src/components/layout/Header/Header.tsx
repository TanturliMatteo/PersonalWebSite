import { useCallback, useRef, useState } from 'react'
import { Container, Icon } from '@/components/ui'
import { navItems } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useActiveSection, useDismiss, useScrolled } from '@/hooks'
import { cx } from '@/utils/cx'
import { NavMenu } from '../NavMenu'
import styles from './Header.module.scss'

const SECTION_IDS = navItems.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const activeId = useActiveSection(SECTION_IDS)
  const menuRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])
  useDismiss(menuRef, open, close)

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <Container className={styles.bar}>
        <a href="#home" className={styles.brand} aria-label="Back to top">
          <span className={styles.logo}>MT</span>
          <span className={styles.name}>{profile.name}</span>
        </a>

        <div ref={menuRef} className={styles.menuWrapper}>
          <button
            type="button"
            className={cx(styles.toggle, open && styles.toggleOpen)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>

          <NavMenu id="site-menu" items={navItems} activeId={activeId} open={open} onNavigate={close} />
        </div>
      </Container>
    </header>
  )
}
