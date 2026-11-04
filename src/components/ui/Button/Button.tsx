import type { ReactNode } from 'react'
import type { IconName } from '@/types'
import { cx } from '@/utils/cx'
import { Icon } from '../Icon'
import styles from './Button.module.scss'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: IconName
  /** Opens in a new tab (for external links). */
  external?: boolean
}

/** A link styled as a button: the site only navigates, so it always renders an <a>. */
export function Button({ href, children, variant = 'primary', icon, external = false }: ButtonProps) {
  return (
    <a
      href={href}
      className={cx(styles.button, styles[variant])}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </a>
  )
}
