import type { ComponentType } from 'react'
import type { SectionId } from '@/types'
import { About } from './About'
import { Contact } from './Contact'
import { Education } from './Education'
import { Experience } from './Experience'
import { Hero } from './Hero'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Stack } from './Stack'

/**
 * Registry of page sections. Each one is self-contained (component + styles).
 * Typed as Record<SectionId, …>: TypeScript fails the build if a section id
 * has no component. The ORDER comes from `sectionIds` in data/shared.ts.
 */
export const sections: Record<SectionId, ComponentType> = {
  home: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  education: Education,
  projects: Projects,
  stack: Stack,
  contact: Contact,
}
