import type { Project } from '@/types'

const GITHUB = 'https://github.com/TanturliMatteo'

export const projects: Project[] = [
  {
    name: 'F1Web',
    description:
      'Futuristic Formula 1 dashboard. Computes advanced stats in real time, such as head-to-head Teammate Battles and driver performance profiles, with a UI that re-themes itself in the selected team’s colors.',
    tags: ['React', 'TypeScript', 'React Query', 'Vite', 'Data viz'],
    repoUrl: `${GITHUB}/F1Web`,
    featured: true,
  },
  {
    name: 'Class Management',
    description:
      'Student management dashboard with strict typing, PostgreSQL Row Level Security, relational joins in a single request and controlled forms inside animated modals.',
    tags: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'React Query'],
    repoUrl: `${GITHUB}/ClassManagement`,
    liveUrl: 'https://class-management-wheat.vercel.app',
    featured: true,
  },
  {
    name: 'CV Drag & Drop',
    description:
      'Web app to build a résumé on a real A4 sheet with drag and drop: text, lines, images and icons snap to a grid, rich text editing with Tiptap, and PDF export.',
    tags: ['React 19', 'TypeScript', 'SCSS', 'Tiptap', 'react-grid-layout'],
    repoUrl: `${GITHUB}/cv_drag_and_drop`,
  },
  {
    name: 'Unity Room',
    description:
      'Unity scene with base objects modelled and imported from Blender, lighting setup, player movement and collisions.',
    tags: ['Unity', 'Blender', '3D'],
    repoUrl: `${GITHUB}/UnityRoom`,
  },
]
