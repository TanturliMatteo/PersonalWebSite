import type { ReactNode } from 'react'
import type { IconName } from '@/types'
import { cx } from '@/utils/cx'
import { Icon } from '../Icon'
import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  /** With href it renders an <a> (navigation), without it a <button> (action). */
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: IconName
  /** Opens the link in a new tab. */
  external?: boolean
}

export function Button({ children, href, onClick, variant = 'primary', icon, external = false }: ButtonProps) {
  const className = cx(styles.button, styles[variant])
  const content = (
    <>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </>
  )

  if (!href) {
    return (
      <button type="button" className={className} onClick={onClick}>
        {content}
      </button>
    )
  }

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {content}
    </a>
  )
}
