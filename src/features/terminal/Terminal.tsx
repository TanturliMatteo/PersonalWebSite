import { type FormEvent, type KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/ui'
import { contentByLocale, profile } from '@/data'
import { useLocale } from '@/i18n'
import { type Action, complete, type Line, runCommand } from './commands'
import styles from './Terminal.module.scss'
import { useTerminalShortcut } from './useTerminalShortcut'

const PROMPT = '~ $'

const LINE_CLASS: Record<Line['kind'], string> = {
  input: styles.lineInput,
  output: styles.lineOutput,
  muted: styles.lineMuted,
  error: styles.lineError,
  success: styles.lineSuccess,
}

/**
 * Easter-egg terminal in a native <dialog>: focus trap, Escape to close and
 * the backdrop come from the browser for free.
 */
export function Terminal() {
  const { t, setLocale } = useLocale()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const open = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    inputRef.current?.focus()
  }, [])

  const close = useCallback(() => dialogRef.current?.close(), [])

  useTerminalShortcut(open)

  // Keep the newest line in view.
  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight })
  }, [lines])

  const runAction = (action: Action) => {
    switch (action.type) {
      case 'clear':
        setLines([])
        break
      case 'close':
        close()
        break
      case 'goto':
        close()
        document.getElementById(action.id)?.scrollIntoView()
        break
      case 'lang':
        setLocale(action.locale)
        setLines((prev) => [...prev, { kind: 'success', text: contentByLocale[action.locale].terminal.langSwitched }])
        break
      case 'mailto':
        window.setTimeout(() => {
          window.location.href = `mailto:${profile.email}`
        }, 1200)
        break
    }
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const result = runCommand(input, { t })

    setLines((prev) => [...prev, { kind: 'input', text: input }, ...result.lines])
    if (input.trim()) setHistory((prev) => [input, ...prev])
    setHistoryIndex(-1)
    setInput('')
    if (result.action) runAction(result.action)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setInput(complete(input))
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault()
      const next =
        event.key === 'ArrowUp' ? Math.min(historyIndex + 1, history.length - 1) : Math.max(historyIndex - 1, -1)
      setHistoryIndex(next)
      setInput(next === -1 ? '' : history[next])
    } else if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault()
      setLines([])
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={t.terminal.title}
      // Click on the backdrop (the dialog element itself, outside the window) closes it.
      onClick={(event) => event.target === event.currentTarget && close()}
    >
      <div className={styles.window}>
        <header className={styles.titleBar}>
          <span className={styles.dots} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className={styles.title}>{t.terminal.title}</span>
          <button type="button" className={styles.close} onClick={close} aria-label={t.terminal.close}>
            <Icon name="close" size={18} />
          </button>
        </header>

        <div ref={outputRef} className={styles.output} onClick={() => inputRef.current?.focus()} aria-live="polite">
          <p className={styles.lineMuted}>{t.terminal.welcome}</p>
          {lines.map((line, index) => (
            <p key={index} className={LINE_CLASS[line.kind]}>
              {line.kind === 'input' && <span className={styles.prompt}>{PROMPT} </span>}
              {line.text}
            </p>
          ))}

          <form className={styles.inputRow} onSubmit={onSubmit}>
            <label htmlFor="terminal-input" className={styles.prompt}>
              {PROMPT}
            </label>
            <input
              ref={inputRef}
              id="terminal-input"
              className={styles.field}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onKeyDown}
              placeholder={t.terminal.placeholder}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
            />
          </form>
        </div>
      </div>
    </dialog>
  )
}
