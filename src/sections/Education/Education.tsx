import { Section, Timeline } from '@/components/ui'
import { useLocale } from '@/i18n'

export function Education() {
  const { education } = useLocale().t

  return (
    <Section id="education" eyebrow={education.eyebrow} title={education.title}>
      <Timeline entries={education.entries} icon="graduation" />
    </Section>
  )
}
