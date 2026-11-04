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
}

export function TagList({ items, variant }: TagListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>
          <Tag label={item} variant={variant} />
        </li>
      ))}
    </ul>
  )
}
