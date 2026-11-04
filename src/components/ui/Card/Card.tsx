import type { ElementType, ReactNode } from 'react'
import type { Tone } from '@/types'
import { cx } from '@/utils/cx'
import styles from './Card.module.scss'

interface CardProps {
  children: ReactNode
  /** Render as another element, e.g. 'article' or 'li'. */
  as?: ElementType
  /** Lift on hover: use it for interactive cards. */
  hoverable?: boolean
  padding?: 'md' | 'lg'
  /** Color family for this card and its children (see styles/base/_tones.scss). */
  tone?: Tone
  /** Fade in on scroll (scroll-driven animation, see styles/base/_motion.scss). */
  reveal?: boolean
  className?: string
}

/** The rounded surface every block of the site is built on. */
export function Card({
  children,
  as: Tag = 'div',
  hoverable = false,
  padding = 'md',
  tone,
  reveal = true,
  className,
}: CardProps) {
  return (
    <Tag
      className={cx(styles.card, styles[padding], hoverable && styles.hoverable, className)}
      data-tone={tone}
      data-reveal={reveal || undefined}
    >
      {children}
    </Tag>
  )
}
