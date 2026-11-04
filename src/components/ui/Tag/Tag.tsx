import { cx } from '@/utils/cx'
import styles from './Tag.module.scss'

type TagVariant = 'neutral' | 'accent'

interface TagProps {
  label: string
  variant?: TagVariant
}

export function Tag({ label, variant = 'neutral' }: TagProps) {
  return <span className={cx(styles.tag, styles[variant])}>{label}</span>
}

interface TagListProps {
  items: string[]
  variant?: TagVariant
  /** Tags pop in one after another on scroll, and wave when the parent is hovered. */
  stagger?: boolean
}

export function TagList({ items, variant, stagger = false }: TagListProps) {
  return (
    <ul className={cx(styles.list, stagger && styles.staggered)}>
      {items.map((item) => (
        <li key={item}>
          <Tag label={item} variant={variant} />
        </li>
      ))}
    </ul>
  )
}
