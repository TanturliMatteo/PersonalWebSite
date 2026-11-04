// Data that does not change with the language: names, links, tags, order of sections.
import type { Project, SectionId, SkillGroup, SocialLink } from '@/types'

const GITHUB = 'https://github.com/TanturliMatteo'

export const profile = {
  name: 'Matteo Tanturli',
  email: 'matteotanturli@gmail.com',
  phone: undefined as string | undefined, // e.g. '+39 339 429 5075' to show it in Contact
  avatarUrl: 'https://avatars.githubusercontent.com/u/220749629?v=4',
  githubUrl: GITHUB,
  /** Repository of this website, shown in the "Behind the site" section once published. */
  siteRepoUrl: 'https://github.com/TanturliMatteo/PersonalWebSite',
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: GITHUB, icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matteo-tanturli',
    icon: 'linkedin',
  },
]

/**
 * Page order: the ONLY place where it is defined. The page (App), the menu,
 * the hero scroll arrow and the terminal `goto` command all follow it.
 * Projects come right after the hero: they are the strongest proof of skill.
 */
export const sectionIds: SectionId[] = [
  'home',
  'projects',
  'experience',
  'skills',
  'about',
  'education',
  'stack',
  'contact',
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    tone: 'indigo',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Python', 'Java', 'C'],
  },
  {
    id: 'frontend',
    tone: 'violet',
    items: ['React', 'React Query', 'CSS / SCSS', 'Vite'],
  },
  {
    id: 'backend',
    tone: 'emerald',
    items: ['Supabase', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'tools',
    tone: 'sky',
    items: ['Git / GitHub', 'CI/CD', 'Azure DevOps', 'Agile'],
  },
]

export const projects: Project[] = [
  {
    id: 'f1web',
    name: 'F1Web',
    tags: ['React', 'TypeScript', 'React Query', 'Vite', 'Data viz'],
    repoUrl: `${GITHUB}/F1Web`,
    liveUrl: 'https://f1-web-three.vercel.app/',
    featured: true,
  },
  {
    id: 'class-management',
    name: 'Class Management',
    tags: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'React Query'],
    repoUrl: `${GITHUB}/ClassManagement`,
    featured: true,
  },
  {
    id: 'cv-drag-and-drop',
    name: 'CV Drag & Drop',
    tags: ['React 19', 'TypeScript', 'SCSS', 'Tiptap', 'react-grid-layout'],
    repoUrl: `${GITHUB}/cv_drag_and_drop`,
  },
  {
    id: 'unity-room',
    name: 'Unity Room',
    tags: ['Unity', 'Blender', '3D'],
    repoUrl: `${GITHUB}/UnityRoom`,
  },
]
