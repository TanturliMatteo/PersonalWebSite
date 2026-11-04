import { Button, Card, Icon, Tag, TagList } from '@/components/ui'
import type { Project } from '@/types'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card as="article" hoverable className={styles.card}>
      <header className={styles.header}>
        <span className={styles.icon}>
          <Icon name="code" size={22} />
        </span>
        {project.featured && <Tag label="Featured" variant="accent" />}
      </header>

      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.tags}>
        <TagList items={project.tags} />
      </div>

      <footer className={styles.links}>
        <Button href={project.repoUrl} variant="secondary" icon="github" external>
          Code
        </Button>
        {project.liveUrl && (
          <Button href={project.liveUrl} variant="ghost" icon="external" external>
            Live demo
          </Button>
        )}
      </footer>
    </Card>
  )
}
