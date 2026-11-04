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
  | 'terminal'
  | 'layers'

export type Locale = 'en' | 'it'

export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'experience'
  | 'education'
  | 'projects'
  | 'stack'
  | 'contact'

/** Color families generated in styles/abstracts/_palette.scss. */
export type Tone = 'indigo' | 'violet' | 'sky' | 'emerald' | 'amber'

// ---------------------------------------------------------------------------
// Language-independent data (data/shared.ts)
// ---------------------------------------------------------------------------

export interface SocialLink {
  label: string
  href: string
  icon: IconName
}

export interface SkillGroup {
  id: string
  tone: Tone
  items: string[]
}

export interface Project {
  id: string
  name: string
  tags: string[]
  repoUrl: string
  liveUrl?: string
  featured?: boolean
}

// ---------------------------------------------------------------------------
// Translated content (data/locales/*.ts)
// ---------------------------------------------------------------------------

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

export interface Language {
  name: string
  level: string
}

interface SectionHeading {
  eyebrow: string
  title: string
}

export interface Content {
  languageName: string
  nav: Record<SectionId, string>
  header: {
    openMenu: string
    closeMenu: string
    backToTop: string
    switchLanguage: string
    scrollProgress: string
  }
  hero: {
    greeting: string
    status: string
    role: string
    tagline: string
    viewProjects: string
    getInTouch: string
    scrollHint: string
  }
  about: SectionHeading & {
    paragraphs: string[]
    facts: { degree: string; basedIn: string; languages: string }
  }
  location: string
  languages: Language[]
  skills: SectionHeading & { groups: Record<string, string> }
  experience: SectionHeading & { abroadTitle: string; work: TimelineEntry[]; abroad: TimelineEntry[] }
  education: SectionHeading & { entries: TimelineEntry[] }
  projects: SectionHeading & {
    featured: string
    code: string
    liveDemo: string
    more: string
    descriptions: Record<string, string>
  }
  stack: SectionHeading & {
    intro: string
    stats: {
      components: string
      scssModules: string
      linesOfCode: string
      bundle: string
      bundleDev: string
      dependencies: string
    }
    techniquesTitle: string
    techniques: { title: string; description: string }[]
    terminalHint: string
  }
  contact: SectionHeading & {
    intro: string
    cta: string
    labels: { email: string; phone: string; location: string }
  }
  footer: { builtWith: string; openTerminal: string }
  terminal: {
    title: string
    welcome: string
    placeholder: string
    notFound: string
    help: Record<string, string>
    hire: string[]
    goto: string
    gotoUsage: string
    langSwitched: string
  }
}
