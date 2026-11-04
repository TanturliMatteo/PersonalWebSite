import type { IconName, TimelineEntry } from '@/types'
import { Card } from '../Card'
import { Icon } from '../Icon'
import { Tag } from '../Tag'
import styles from './Timeline.module.scss'

interface TimelineProps {
  entries: TimelineEntry[]
  icon: IconName
}

/** Vertical list of cards with a connecting line. Shared by Experience, Education and Abroad. */
export function Timeline({ entries, icon }: TimelineProps) {
  return (
    <ol className={styles.timeline}>
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.organization}`} className={styles.item}>
          <span className={styles.marker}>
            <Icon name={icon} size={18} />
          </span>

          <Card as="article" hoverable className={styles.card}>
            <header className={styles.header}>
              <div>
                <h3 className={styles.title}>{entry.title}</h3>
                <p className={styles.organization}>
                  {entry.organization}
                  {entry.location && <span className={styles.location}> · {entry.location}</span>}
                </p>
              </div>

              <div className={styles.meta}>
                {entry.period && <span className={styles.period}>{entry.period}</span>}
                {entry.badge && <Tag label={entry.badge} variant="accent" />}
              </div>
            </header>

            {entry.description && <p className={styles.description}>{entry.description}</p>}

            {entry.highlights && (
              <ul className={styles.highlights}>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </Card>
        </li>
      ))}
    </ol>
  )
}
