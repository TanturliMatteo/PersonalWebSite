import { useCallback, useEffect, useRef } from 'react'
import { Icon } from '@/components/ui'
import { profile } from '@/data'
import { useLocale } from '@/i18n'
import { PRIVACY_HASH, PRIVACY_OPEN_EVENT } from './events'
import styles from './PrivacyNotice.module.scss'

/**
 * Privacy notice (art. 13 GDPR) in a native <dialog>. Opened from the footer,
 * or directly via the `#privacy` URL hash so it can be linked to.
 */
export function PrivacyNotice() {
  const { t } = useLocale()
  const { privacy } = t
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    dialog.scrollTop = 0
  }, [])

  const close = useCallback(() => dialogRef.current?.close(), [])

  useEffect(() => {
    const openFromHash = () => window.location.hash === PRIVACY_HASH && open()
    openFromHash()
    window.addEventListener(PRIVACY_OPEN_EVENT, open)
    window.addEventListener('hashchange', openFromHash)
    return () => {
      window.removeEventListener(PRIVACY_OPEN_EVENT, open)
      window.removeEventListener('hashchange', openFromHash)
    }
  }, [open])

  // Drop the hash on close, so reopening via the same link works again.
  const onClose = () => {
    if (window.location.hash === PRIVACY_HASH) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="privacy-title"
      onClose={onClose}
      // Click on the backdrop (the dialog element itself, outside the panel) closes it.
      onClick={(event) => event.target === event.currentTarget && close()}
    >
      <article className={styles.panel}>
        <header className={styles.header}>
          <div>
            <h2 id="privacy-title" className={styles.title}>
              {privacy.title}
            </h2>
            <p className={styles.updated}>{privacy.updated}</p>
          </div>
          <button type="button" className={styles.close} onClick={close} aria-label={privacy.close}>
            <Icon name="close" size={18} />
          </button>
        </header>

        <div className={styles.body}>
          {privacy.sections.map((section) => (
            <section key={section.heading}>
              <h3>{section.heading}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph.replaceAll('{email}', profile.email)}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </dialog>
  )
}
