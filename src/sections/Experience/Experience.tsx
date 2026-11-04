import { Section, Timeline } from '@/components/ui'
import { useLocale } from '@/i18n'
import styles from './Experience.module.scss'

export function Experience() {
  const { experience } = useLocale().t

  return (
    <Section id="experience" eyebrow={experience.eyebrow} title={experience.title}>
      <Timeline entries={experience.work} icon="briefcase" />

      <h3 className={styles.subheading}>{experience.abroadTitle}</h3>
      <Timeline entries={experience.abroad} icon="globe" />
    </Section>
  )
}
