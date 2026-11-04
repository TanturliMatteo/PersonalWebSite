export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'external'
  | 'menu'
  | 'close'
  | 'arrow-down'
  | 'arrow-up'
  | 'briefcase'
  | 'graduation'
  | 'globe'
  | 'code'

export interface SocialLink {
  label: string
  href: string
  icon: IconName
}

export interface Profile {
  name: string
  role: string
  tagline: string
  about: string[]
  location: string
  email: string
  phone?: string
  avatarUrl: string
  socials: SocialLink[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Language {
  name: string
  level: string
}

/** Shared shape for experience, education and abroad entries (rendered by Timeline). */
export interface TimelineEntry {
  title: string
  organization: string
  location?: string
  period?: string
  badge?: string
  description?: string
  highlights?: string[]
}

export interface Project {
  name: string
  description: string
  tags: string[]
  repoUrl: string
  liveUrl?: string
  featured?: boolean
}

export interface NavItem {
  id: string
  label: string
}
