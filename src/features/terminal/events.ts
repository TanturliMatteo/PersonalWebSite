// Decoupled opener: any component can open the terminal without sharing state.
export const TERMINAL_OPEN_EVENT = 'terminal:open'

export function openTerminal() {
  window.dispatchEvent(new Event(TERMINAL_OPEN_EVENT))
}
