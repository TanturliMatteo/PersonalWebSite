import { Button, Card, Icon, Section } from '@/components/ui'
import { profile, socials } from '@/data'
import { useLocale } from '@/i18n'
import type { IconName } from '@/types'
import styles from './Contact.module.scss'

interface ContactItem {
  icon: IconName
  label: string
  value: string
  href?: string
}

export function Contact() {
  const { t } = useLocale()
  const { contact } = t

  const items: ContactItem[] = [
    { icon: 'mail', label: contact.labels.email, value: profile.email, href: `mailto:${profile.email}` },
    ...(profile.phone
      ? [
          {
            icon: 'phone' as const,
            label: contact.labels.phone,
            value: profile.phone,
            href: `tel:${profile.phone.replace(/\s/g, '')}`,
          },
        ]
      : []),
    ...socials.map((social) => ({
      icon: social.icon,
      label: social.label,
      value: social.href.replace(/^https?:\/\/(www\.)?/, ''),
      href: social.href,
    })),
    { icon: 'pin', label: contact.labels.location, value: t.location },
  ]

  return (
    <Section id="contact" eyebrow={contact.eyebrow} title={contact.title}>
      <Card padding="lg" className={styles.panel}>
        <div className={styles.intro}>
          <p>{contact.intro}</p>
          <Button href={`mailto:${profile.email}`} icon="mail">
            {contact.cta}
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
