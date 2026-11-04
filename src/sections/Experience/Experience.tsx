import { Section, Timeline } from '@/components/ui'
import { abroad, experience } from '@/data/experience'
import styles from './Experience.module.scss'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <Timeline entries={experience} icon="briefcase" />

      <h3 className={styles.subheading}>Experience abroad</h3>
      <Timeline entries={abroad} icon="globe" />
    </Section>
  )
}
