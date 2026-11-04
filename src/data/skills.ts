import type { Language, SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Python', 'Java', 'C'],
  },
  {
    title: 'Front-end',
    items: ['React', 'React Query', 'CSS / SCSS', 'Vite'],
  },
  {
    title: 'Back-end & Database',
    items: ['Supabase', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Tools & Methodologies',
    items: ['Git / GitHub', 'CI/CD', 'Azure DevOps', 'Agile'],
  },
]

export const languages: Language[] = [
  { name: 'Italian', level: 'Native' },
  { name: 'English', level: 'B2' },
  { name: 'Spanish', level: 'B1' },
]
