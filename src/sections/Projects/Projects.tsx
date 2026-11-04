import { Button, Section } from '@/components/ui'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.scss'

export function Projects() {
  const github = profile.socials.find((social) => social.icon === 'github')

  return (
    <Section id="projects" eyebrow="Portfolio" title="Selected projects">
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {github && (
        <div className={styles.more}>
          <Button href={github.href} variant="secondary" icon="github" external>
            More on GitHub
          </Button>
        </div>
      )}
    </Section>
  )
}
