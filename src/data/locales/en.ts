import type { Content } from '@/types'

export const en: Content = {
  languageName: 'English',
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    stack: 'Behind the site',
    contact: 'Contact',
  },
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
    switchLanguage: 'Language',
    navLabel: 'Sections',
  },
  hero: {
    greeting: 'Hi, I’m',
    status: 'Open to Front-End / Full Stack roles',
    role: 'Junior Full Stack Developer',
    tagline: 'Front-End & Full Stack Developer building clean, fast and typed web apps with React and TypeScript.',
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
    scrollHint: 'Scroll to {section}',
  },
  about: {
    eyebrow: 'About me',
    title: 'Who I am',
    paragraphs: [
      'Junior Full Stack Developer with a Bachelor’s degree in Computer Science from the University of Perugia.',
      'I have built full-stack and open source projects on my own, from data dashboards to database-backed management apps. I care about strict typing, clear component architecture and interfaces that feel effortless to use.',
      'I’m looking for a position as a Front-End or Full Stack Developer.',
    ],
    facts: { degree: 'Degree', basedIn: 'Based in', languages: 'Languages' },
  },
  location: 'Ronciglione (VT), Italy',
  languages: [
    { name: 'Italian', level: 'Native' },
    { name: 'English', level: 'B2' },
    { name: 'Spanish', level: 'B1' },
  ],
  skills: {
    eyebrow: 'Skills',
    title: 'What I work with',
    groups: {
      languages: 'Languages',
      frontend: 'Front-end',
      backend: 'Back-end & Database',
      tools: 'Tools & Methodologies',
    },
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where I’ve worked',
    abroadTitle: 'Experience abroad',
    work: [
      {
        title: 'Front-End Developer Intern',
        organization: 'Engage Labs Srl',
        location: 'Fidenza (PR)',
        period: 'Oct – Nov 2025',
        highlights: [
          'Developed React components and managed application state',
          'Integrated REST APIs and built the user interface',
          'Worked in an Agile team using Azure DevOps',
          'Managed branches and pull requests with Git/GitHub',
        ],
      },
    ],
    abroad: [
      {
        title: 'Erasmus+',
        organization: 'Barcelona',
        location: 'Spain',
        description: 'Study and life experience abroad within the Erasmus+ programme.',
      },
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Where I studied',
    entries: [
      {
        title: 'Java Testing Academy',
        organization: 'Forma.Temp',
        period: 'October – November 2026',
      },
      {
        title: 'Bachelor’s Degree in Computer Science',
        organization: 'Università degli Studi di Perugia',
        period: 'April 2026',
        badge: '96/110',
      },
      {
        title: 'Technical Diploma in Computer Science',
        organization: 'ITT Leonardo da Vinci',
        location: 'Viterbo',
        period: 'June 2022',
        badge: '95/100',
      },
    ],
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Selected projects',
    featured: 'Featured',
    code: 'Code',
    liveDemo: 'Live demo',
    more: 'More on GitHub',
    descriptions: {
      f1web:
        'Futuristic Formula 1 dashboard. Computes advanced stats in real time, such as head-to-head Teammate Battles and driver performance profiles, with a UI that re-themes itself in the selected team’s colors.',
      'class-management':
        'Student management dashboard with strict typing, PostgreSQL Row Level Security, relational joins in a single request and controlled forms inside animated modals.',
      'cv-drag-and-drop':
        'Web app to build a résumé on a real A4 sheet with drag and drop: text, lines, images and icons snap to a grid, rich text editing with Tiptap, and PDF export.',
      'unity-room':
        'Unity scene with base objects modelled and imported from Blender, lighting setup, player movement and collisions.',
    },
  },
  stack: {
    eyebrow: 'Behind the site',
    title: 'How this site is built',
    intro:
      'This website is a project too. React 19, TypeScript and SCSS modules, no UI library, and modern CSS doing the work that usually needs JavaScript.',
    stats: {
      components: 'React components',
      scssModules: 'SCSS modules',
      linesOfCode: 'lines of TS + SCSS',
      bundle: 'JS + CSS (gzip)',
      bundleDev: 'measured on build',
      dependencies: 'runtime dependencies',
    },
    techniquesTitle: 'Modern CSS under the hood',
    techniques: [
      {
        title: 'Scroll-driven animations',
        description:
          'Cards fade in and the ring around the menu button fills as you scroll, with animation-timeline and zero JavaScript.',
      },
      {
        title: '@property',
        description: 'A typed, animatable custom property rotates the gradient border of the featured projects.',
      },
      {
        title: 'Container queries',
        description: 'Project cards adapt to the space they get, not to the screen size.',
      },
      {
        title: 'Sass at compile time',
        description:
          'The hero particles are generated with math.random(), and every color tone comes from one Sass map.',
      },
    ],
    terminalHint: 'Press / to open the terminal.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s work together',
    intro:
      'I’m currently looking for a Front-End or Full Stack Developer role. Have a project or an opportunity in mind? I’d love to hear from you.',
    cta: 'Send me an email',
    copied: 'Email copied to clipboard',
    labels: { email: 'Email', phone: 'Phone', location: 'Location' },
  },
  footer: {
    builtWith: 'Built with React, TypeScript & SCSS.',
    openTerminal: 'Terminal',
    privacy: 'Privacy',
  },
  privacy: {
    title: 'Privacy & cookies',
    updated: 'Notice under Art. 13 GDPR · Last updated: 5 November 2026',
    close: 'Close the privacy notice',
    sections: [
      {
        heading: 'Data controller',
        body: ['Matteo Tanturli, private individual. Contact: {email}.'],
      },
      {
        heading: 'What data is processed',
        body: [
          'Hosting: the site is hosted by Vercel Inc. Like any web server, it logs technical request data (IP address, browser, date and time) to serve the site and protect it from abuse.',
          'Statistics: I use Vercel Web Analytics to see, in aggregate, how many visits the site gets, which pages, and from which countries, devices, browsers and referring sites. It sets no cookies: each visitor is only recognised by a hash of the request that resets every 24 hours, so you cannot be identified or followed across days or websites.',
          'Email: if you write to me, I use your address and message only to reply.',
        ],
      },
      {
        heading: 'Legal basis',
        body: [
          'Legitimate interest (Art. 6(1)(f) GDPR) in serving and securing the site and understanding its use in aggregate; for emails, your request to get in touch (Art. 6(1)(b)).',
        ],
      },
      {
        heading: 'Cookies and local storage',
        body: [
          'The site uses no cookies, neither for tracking nor for statistics. It only saves your chosen language in the browser’s local storage (localStorage): a technical tool needed for the feature you asked for, so no consent or banner is required.',
          'Fonts and images are hosted on the site itself: loading the page does not contact Google Fonts or any other external service. Links to GitHub, LinkedIn and the projects lead to third-party sites with their own policies.',
        ],
      },
      {
        heading: 'Recipients and transfers',
        body: [
          'Vercel Inc. processes the data on my behalf as a processor. It may transfer it to the United States under the safeguards required by the GDPR (EU-US Data Privacy Framework and/or Standard Contractual Clauses). Data is never sold or shared with anyone else.',
        ],
      },
      {
        heading: 'Retention',
        body: [
          'Statistics are kept only in aggregate; technical logs for the period set by Vercel; emails for as long as the conversation needs.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You can request access, rectification, erasure, restriction or object to processing (Arts. 15–22 GDPR) by writing to {email}. You can also lodge a complaint with your data protection authority (in Italy, the Garante per la protezione dei dati personali, garanteprivacy.it).',
        ],
      },
    ],
  },
  terminal: {
    title: 'matteo@portfolio: ~',
    close: 'Close terminal',
    welcome: 'Welcome! Type `help` to see the available commands.',
    placeholder: 'type a command…',
    notFound: 'command not found: {cmd}. Try `help`.',
    help: {
      help: 'list the commands',
      whoami: 'who I am',
      skills: 'what I work with',
      projects: 'my projects',
      contact: 'how to reach me',
      goto: 'scroll to a section, e.g. `goto projects`',
      lang: 'switch language: `lang it` / `lang en`',
      clear: 'clear the screen',
      exit: 'close the terminal',
    },
    hire: ['[sudo] password for recruiter: ********', 'Access granted. ✔', 'Opening your email client to hire Matteo…'],
    goto: 'Scrolling to {section}…',
    gotoUsage: 'usage: goto <section>. Sections: {list}',
    langSwitched: 'Language set to English.',
  },
}
