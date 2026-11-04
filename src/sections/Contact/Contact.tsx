import { Button, Card, Icon, Section } from '@/components/ui'
import { profile } from '@/data/profile'
import type { IconName } from '@/types'
import styles from './Contact.module.scss'

interface ContactItem {
  icon: IconName
  label: string
  value: string
  href?: string
}

const items: ContactItem[] = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  ...(profile.phone
    ? [{ icon: 'phone' as const, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` }]
    : []),
  ...profile.socials.map((social) => ({
    icon: social.icon,
    label: social.label,
    value: social.href.replace(/^https?:\/\/(www\.)?/, ''),
    href: social.href,
  })),
  { icon: 'pin', label: 'Location', value: profile.location },
]

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s work together">
      <Card padding="lg" className={styles.panel}>
        <div className={styles.intro}>
          <p>
            I’m currently looking for a Front-End or Full Stack Developer role. Have a project or an opportunity in
            mind? I’d love to hear from you.
          </p>
          <Button href={`mailto:${profile.email}`} icon="mail">
            Send me an email
          </Button>
        </div>

        <ul className={styles.list}>
          {items.map((item) => {
            const external = item.href?.startsWith('http')
            const content = (
              <>
                <span className={styles.icon}>
                  <Icon name={item.icon} />
                </span>
                <span className={styles.text}>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.value}>{item.value}</span>
                </span>
              </>
            )

            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={styles.item}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={styles.item}>{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Card>
    </Section>
  )
}
