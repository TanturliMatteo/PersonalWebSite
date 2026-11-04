import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, so the menu can highlight it.
 * A section counts as active when it crosses a horizontal band near the top of the viewport.
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-30% 0px -65% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
