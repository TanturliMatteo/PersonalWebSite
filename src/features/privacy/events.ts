// Decoupled opener, like the terminal: any component can open the notice.
export const PRIVACY_OPEN_EVENT = 'privacy:open'
/** Direct link to the notice: https://<site>/#privacy */
export const PRIVACY_HASH = '#privacy'

export function openPrivacy() {
  window.dispatchEvent(new Event(PRIVACY_OPEN_EVENT))
}
