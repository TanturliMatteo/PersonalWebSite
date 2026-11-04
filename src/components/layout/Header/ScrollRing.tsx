import { useId } from 'react'
import styles from './ScrollRing.module.scss'

// Geometry in the SVG's own units: a 54x54 box = 46px button + 4px gap on each side.
const SIZE = 54
const STROKE = 2.5
const RADIUS = 20 // button radius (16px) + 4px gap → concentric corners

/**
 * Rounded-square ring that draws itself as the page scrolls.
 * pathLength="100" normalizes the perimeter to 100 units, so dashoffset 100 → 0
 * means 0% → 100% of the REAL perimeter, corners included. The animation is driven
 * by the root scroll timeline in CSS: no scroll listeners.
 */
export function ScrollRing() {
  const gradientId = useId()
  const inset = STROKE / 2

  return (
    <svg className={styles.ring} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-accent)" />
          <stop offset="1" stopColor="#9333ea" />
        </linearGradient>
      </defs>
      <rect
        className={styles.track}
        x={inset}
        y={inset}
        width={SIZE - STROKE}
        height={SIZE - STROKE}
        rx={RADIUS - inset}
        strokeWidth={STROKE}
      />
      <rect
        className={styles.progress}
        x={inset}
        y={inset}
        width={SIZE - STROKE}
        height={SIZE - STROKE}
        rx={RADIUS - inset}
        strokeWidth={STROKE}
        stroke={`url(#${CSS.escape(gradientId)})`}
        pathLength={100}
      />
    </svg>
  )
}
