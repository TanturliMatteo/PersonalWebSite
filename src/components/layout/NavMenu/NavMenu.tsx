import type { NavItem } from '@/types'
import { cx } from '@/utils/cx'
import styles from './NavMenu.module.scss'

interface NavMenuProps {
  id: string
  items: NavItem[]
  activeId: string
  open: boolean
  /** Called after a link is chosen (closes the menu; the browser handles the smooth scroll). */
  onNavigate: () => void
}

export function NavMenu({ id, items, activeId, open, onNavigate }: NavMenuProps) {
  return (
    <nav id={id} className={cx(styles.menu, open && styles.open)} aria-label="Sections" inert={!open}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cx(styles.link, activeId === item.id && styles.active)}
              aria-current={activeId === item.id ? 'location' : undefined}
              onClick={onNavigate}
            >
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
