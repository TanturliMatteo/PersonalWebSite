import { useEffect } from 'react'
import { TERMINAL_OPEN_EVENT } from './events'

function isTyping(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  )
}

/** Calls `onOpen` on the `/` or backtick key (outside text fields) and on openTerminal(). */
export function useTerminalShortcut(onOpen: () => void) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.key === '/' || event.key === '`') && !event.ctrlKey && !event.metaKey && !isTyping(event.target)) {
        event.preventDefault()
        onOpen()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener(TERMINAL_OPEN_EVENT, onOpen)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener(TERMINAL_OPEN_EVENT, onOpen)
    }
  }, [onOpen])
}
