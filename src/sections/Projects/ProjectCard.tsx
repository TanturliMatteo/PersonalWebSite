import { Button, Card, Icon, Tag, TagList } from '@/components/ui'
import { useLocale } from '@/i18n'
import type { Project } from '@/types'
import { cx } from '@/utils/cx'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
}

/**
 * The wrapper is a size container: the card picks its layout from the space it
 * gets (container query), not from the viewport. Featured cards span the full
 * row, so they switch to the horizontal layout on their own.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLocale()

  return (
    <div className={cx(styles.container, project.featured && styles.featuredSlot)}>
      <Card as="article" hoverable className={cx(styles.card, project.featured && styles.featured)}>
        <header className={styles.header}>
          <span className={styles.icon}>
            <Icon name="code" size={22} />
          </span>
          {project.featured && <Tag label={t.projects.featured} variant="accent" />}
        </header>

        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.description}>{t.projects.descriptions[project.id]}</p>

        <div className={styles.tags}>
          <TagList items={project.tags} />
        </div>

        <footer className={styles.links}>
          <Button href={project.repoUrl} variant="secondary" icon="github" external>
            {t.projects.code}
          </Button>
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="ghost" icon="external" external>
              {t.projects.liveDemo}
            </Button>
          )}
        </footer>
      </Card>
    </div>
  )
}
