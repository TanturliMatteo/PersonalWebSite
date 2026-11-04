import { Container, Icon } from '@/components/ui'
import { profile } from '@/data/profile'
import styles from './Footer.module.scss'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>
          © {YEAR} {profile.name}. Built with React, TypeScript &amp; SCSS.
        </p>
        <a href="#home" className={styles.top}>
          Back to top <Icon name="arrow-up" size={16} />
        </a>
      </Container>
    </footer>
  )
}
