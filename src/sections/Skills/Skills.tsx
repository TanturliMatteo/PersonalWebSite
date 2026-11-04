import { Card, Section, TagList } from '@/components/ui'
import { skillGroups } from '@/data'
import { useLocale } from '@/i18n'
import styles from './Skills.module.scss'

/** One card per skill group, each in its own tone (data-tone, generated from the Sass palette). */
export function Skills() {
  const { t } = useLocale()

  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <Card key={group.id} tone={group.tone} hoverable className={styles.card}>
            <h3 className={styles.title}>{t.skills.groups[group.id]}</h3>
            <TagList items={group.items} variant="accent" stagger />
          </Card>
        ))}
      </div>
    </Section>
  )
}
