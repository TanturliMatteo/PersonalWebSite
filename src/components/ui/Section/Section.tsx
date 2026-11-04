import type { ReactNode } from 'react'
import { Container } from '../Container'
import styles from './Section.module.scss'

interface SectionProps {
  /** Anchor id: must match an entry in data/navigation.ts. */
  id: string
  /** Small label above the title, e.g. "02 · Experience". */
  eyebrow?: string
  title?: string
  children: ReactNode
}

/** Page section with a consistent heading and width. Every block of the page goes through it. */
export function Section({ id, eyebrow, title, children }: SectionProps) {
  const headingId = title ? `${id}-title` : undefined

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <Container>
        {title && (
          <header className={styles.header} data-reveal>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 id={headingId} className={styles.title}>
              {title}
            </h2>
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}
