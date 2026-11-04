import { Card, Icon, Section } from '@/components/ui'
import { education } from '@/data/education'
import { profile } from '@/data/profile'
import { languages } from '@/data/skills'
import type { IconName } from '@/types'
import styles from './About.module.scss'

interface Fact {
  icon: IconName
  label: string
  value: string
}

const facts: Fact[] = [
  { icon: 'graduation', label: 'Degree', value: education[0].title },
  { icon: 'pin', label: 'Based in', value: profile.location },
  { icon: 'globe', label: 'Languages', value: languages.map((l) => `${l.name} (${l.level})`).join(', ') },
]

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Who I am">
      <div className={styles.grid}>
        <Card padding="lg" className={styles.bio}>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Card>

        <ul className={styles.facts}>
          {facts.map((fact) => (
            <Card as="li" key={fact.label} className={styles.fact}>
              <span className={styles.factIcon}>
                <Icon name={fact.icon} />
              </span>
              <div>
                <p className={styles.factLabel}>{fact.label}</p>
                <p className={styles.factValue}>{fact.value}</p>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  )
}
