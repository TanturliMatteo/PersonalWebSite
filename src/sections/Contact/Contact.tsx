import { useEffect, useState } from 'react'
import { Button, Card, Icon, Section } from '@/components/ui'
import { profile, socials } from '@/data'
import { useLocale } from '@/i18n'
import type { IconName } from '@/types'
import { cx } from '@/utils/cx'
import styles from './Contact.module.scss'

interface ContactItem {
  icon: IconName
  label: string
  value: string
  href?: string
  /** Also copies the value to the clipboard on click. */
  copy?: boolean
}

type CopySource = 'cta' | 'list'

export function Contact() {
  const { t } = useLocale()
  const { contact } = t
  const [copied, setCopied] = useState<CopySource | null>(null)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(null), 3000)
    return () => window.clearTimeout(timer)
  }, [copied])

  // Copies the address too, for visitors without a configured mail app.
  // The mailto navigation still happens normally, and the feedback shows next
  // to whichever control was clicked.
  const copyEmail = (source: CopySource) => {
    navigator.clipboard
      ?.writeText(profile.email)
      .then(() => setCopied(source))
      .catch(() => {})
  }

  const items: ContactItem[] = [
    { icon: 'mail', label: contact.labels.email, value: profile.email, href: `mailto:${profile.email}`, copy: true },
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
          <Button href={`mailto:${profile.email}`} icon="mail" onClick={() => copyEmail('cta')}>
            {contact.cta}
          </Button>
          <p className={styles.copied} role="status" aria-live="polite">
            {copied === 'cta' && contact.copied}
          </p>
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
                  {item.copy ? (
                    // Swaps the label for the confirmation, so the row keeps its height.
                    <span className={cx(styles.label, copied === 'list' && styles.labelCopied)} aria-live="polite">
                      {copied === 'list' ? contact.copied : item.label}
                    </span>
                  ) : (
                    <span className={styles.label}>{item.label}</span>
                  )}
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
                    {...(item.copy && { onClick: () => copyEmail('list') })}
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
