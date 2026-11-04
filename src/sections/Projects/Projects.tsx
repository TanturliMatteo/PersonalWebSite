import { Button, Section } from '@/components/ui'
import { profile, projects } from '@/data'
import { useLocale } from '@/i18n'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.scss'

export function Projects() {
  const { t } = useLocale()

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className={styles.more}>
        <Button href={profile.githubUrl} variant="secondary" icon="github" external>
          {t.projects.more}
        </Button>
      </div>
    </Section>
  )
}
