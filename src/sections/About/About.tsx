import { Card, Icon, Section } from '@/components/ui'
import { useLocale } from '@/i18n'
import type { IconName } from '@/types'
import styles from './About.module.scss'

export function About() {
  const { t } = useLocale()
  const { about } = t

  const facts: { icon: IconName; label: string; value: string }[] = [
    { icon: 'graduation', label: about.facts.degree, value: t.education.entries[0].title },
    { icon: 'pin', label: about.facts.basedIn, value: t.location },
    {
      icon: 'globe',
      label: about.facts.languages,
      value: t.languages.map((language) => `${language.name} (${language.level})`).join(', '),
    },
  ]

  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className={styles.grid}>
        <Card padding="lg" className={styles.bio}>
          {about.paragraphs.map((paragraph) => (
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
