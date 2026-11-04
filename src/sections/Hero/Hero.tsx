import { Button, Icon, Section } from '@/components/ui'
import { profile } from '@/data/profile'
import styles from './Hero.module.scss'

export function Hero() {
  const [firstName, ...rest] = profile.name.split(' ')

  return (
    <Section id="home">
      <div className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Open to Front-End / Full Stack roles
          </p>

          <h1 className={styles.title}>
            Hi, I’m {firstName} <span className={styles.highlight}>{rest.join(' ')}</span>
          </h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.actions}>
            <Button href="#projects" icon="code">
              View projects
            </Button>
            <Button href="#contact" variant="secondary" icon="mail">
              Get in touch
            </Button>
            {profile.socials.map((social) => (
              <Button key={social.label} href={social.href} variant="ghost" icon={social.icon} external>
                {social.label}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.portrait}>
          <img src={profile.avatarUrl} alt={profile.name} width={280} height={280} />
          <span className={styles.location}>
            <Icon name="pin" size={16} />
            {profile.location}
          </span>
        </div>
      </div>

      <a href="#about" className={styles.scrollHint} aria-label="Scroll to About">
        <Icon name="arrow-down" size={18} />
      </a>
    </Section>
  )
}
