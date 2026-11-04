import { Card, Section, TagList } from '@/components/ui'
import { skillGroups } from '@/data/skills'
import styles from './Skills.module.scss'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <Card key={group.title} hoverable>
            <h3 className={styles.title}>{group.title}</h3>
            <TagList items={group.items} variant={index === 0 ? 'accent' : 'neutral'} />
          </Card>
        ))}
      </div>
    </Section>
  )
}
