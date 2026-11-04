import { Container, Icon } from '@/components/ui'
import { profile } from '@/data'
import { openTerminal } from '@/features/terminal'
import { useLocale } from '@/i18n'
import styles from './Footer.module.scss'

const YEAR = new Date().getFullYear()

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>
          © {YEAR} {profile.name}. {t.footer.builtWith}
        </p>
        <div className={styles.links}>
          <button type="button" className={styles.link} onClick={openTerminal}>
            <Icon name="terminal" size={16} /> {t.footer.openTerminal}
          </button>
          <a href="#home" className={styles.link}>
            {t.header.backToTop} <Icon name="arrow-up" size={16} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
