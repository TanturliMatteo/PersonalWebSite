import type { ElementType, ReactNode } from 'react'
import { cx } from '@/utils/cx'
import styles from './Card.module.scss'

interface CardProps {
  children: ReactNode
  /** Render as another element, e.g. 'article' or 'li'. */
  as?: ElementType
  /** Lift on hover: use it for interactive cards. */
  hoverable?: boolean
  padding?: 'md' | 'lg'
  className?: string
}

/** The rounded surface every block of the site is built on. */
export function Card({ children, as: Tag = 'div', hoverable = false, padding = 'md', className }: CardProps) {
  return <Tag className={cx(styles.card, styles[padding], hoverable && styles.hoverable, className)}>{children}</Tag>
}
