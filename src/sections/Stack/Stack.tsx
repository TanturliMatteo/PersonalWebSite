import { Button, Card, Icon, Section } from '@/components/ui'
import { profile } from '@/data'
import { openTerminal } from '@/features/terminal'
import { useBuildStats } from '@/hooks'
import { useLocale } from '@/i18n'
import type { Tone } from '@/types'
import styles from './Stack.module.scss'

const TECHNIQUE_TONES: Tone[] = ['indigo', 'violet', 'sky', 'emerald']

const formatKb = (bytes: number) => `${(bytes / 1024).toFixed(1)} kB`

export function Stack() {
  const { t, locale } = useLocale()
  const s = t.stack
  const build = useBuildStats()
  const number = new Intl.NumberFormat(locale)

  const stats = [
    { value: number.format(__SITE_STATS__.components), label: s.stats.components },
    { value: number.format(__SITE_STATS__.scssModules), label: s.stats.scssModules },
    { value: number.format(__SITE_STATS__.linesOfCode), label: s.stats.linesOfCode },
    { value: String(__SITE_STATS__.dependencies), label: s.stats.dependencies },
    {
      value: build ? formatKb(build.jsGzip + build.cssGzip) : '—',
      label: build ? s.stats.bundle : `${s.stats.bundle} · ${s.stats.bundleDev}`,
    },
  ]

  return (
    <Section id="stack" eyebrow={s.eyebrow} title={s.title}>
      <Card padding="lg" className={styles.intro}>
        <p>{s.intro}</p>
        <div className={styles.introActions}>
          <Button variant="secondary" icon="terminal" onClick={openTerminal}>
            {s.terminalHint}
          </Button>
          {profile.siteRepoUrl && (
            <Button href={profile.siteRepoUrl} variant="ghost" icon="github" external>
              GitHub
            </Button>
          )}
        </div>
      </Card>

      <ul className={styles.stats}>
        {stats.map((stat) => (
          <Card as="li" key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </Card>
        ))}
      </ul>

      <h3 className={styles.subheading}>{s.techniquesTitle}</h3>
      <ul className={styles.techniques}>
        {s.techniques.map((technique, index) => (
          <Card as="li" key={technique.title} tone={TECHNIQUE_TONES[index % TECHNIQUE_TONES.length]} hoverable>
            <span className={styles.techniqueIcon}>
              <Icon name="layers" />
            </span>
            <h4 className={styles.techniqueTitle}>{technique.title}</h4>
            <p className={styles.techniqueText}>{technique.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
