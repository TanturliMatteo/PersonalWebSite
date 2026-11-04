import { Section, Timeline } from '@/components/ui'
import { education } from '@/data/education'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied">
      <Timeline entries={education} icon="graduation" />
    </Section>
  )
}
