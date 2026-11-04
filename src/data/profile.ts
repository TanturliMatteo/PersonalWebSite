import type { Profile } from '@/types'

export const profile: Profile = {
  name: 'Matteo Tanturli',
  role: 'Junior Full Stack Developer',
  tagline: 'Front-End & Full Stack Developer building clean, fast and typed web apps with React and TypeScript.',
  about: [
    'Junior Full Stack Developer with a Bachelor’s degree in Computer Science from the University of Perugia.',
    'I have built full-stack and open source projects on my own, from data dashboards to database-backed management apps. I care about strict typing, clear component architecture and interfaces that feel effortless to use.',
    'I’m looking for a position as a Front-End or Full Stack Developer.',
  ],
  location: 'Ronciglione (VT), Italy',
  email: 'matteotanturli@gmail.com',
  // phone: '+39 339 429 5075', // uncomment to show it in the Contact section
  avatarUrl: 'https://avatars.githubusercontent.com/u/220749629?v=4',
  socials: [
    { label: 'GitHub', href: 'https://github.com/TanturliMatteo', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matteo-tanturli', icon: 'linkedin' },
  ],
}
