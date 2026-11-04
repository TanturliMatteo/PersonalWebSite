import type { ReactNode } from 'react'
import { cx } from '@/utils/cx'
import styles from './Container.module.scss'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Centers content and applies the page max-width and side gutters. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cx(styles.container, className)}>{children}</div>
}
