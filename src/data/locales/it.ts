import type { Content } from '@/types'

export const it: Content = {
  languageName: 'Italiano',
  nav: {
    home: 'Home',
    about: 'Chi sono',
    skills: 'Competenze',
    experience: 'Esperienza',
    education: 'Formazione',
    projects: 'Progetti',
    stack: 'Dietro le quinte',
    contact: 'Contatti',
  },
  header: {
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    backToTop: 'Torna su',
    switchLanguage: 'Lingua',
    scrollProgress: 'Avanzamento della pagina',
  },
  hero: {
    greeting: 'Ciao, sono',
    status: 'Disponibile per ruoli Front-End / Full Stack',
    role: 'Junior Full Stack Developer',
    tagline: 'Sviluppatore Front-End e Full Stack: creo web app pulite, veloci e tipizzate con React e TypeScript.',
    viewProjects: 'Vedi i progetti',
    getInTouch: 'Contattami',
    scrollHint: 'Vai a Chi sono',
  },
  about: {
    eyebrow: 'Chi sono',
    title: 'Due parole su di me',
    paragraphs: [
      'Junior Full Stack Developer laureato in Informatica all’Università degli Studi di Perugia.',
      'Ho realizzato in autonomia progetti full-stack e open source, dalle dashboard di dati alle app gestionali con database. Tengo a una tipizzazione rigorosa, a un’architettura dei componenti chiara e a interfacce semplici da usare.',
      'Cerco una posizione come Front-End o Full Stack Developer.',
    ],
    facts: { degree: 'Laurea', basedIn: 'Vivo a', languages: 'Lingue' },
  },
  location: 'Ronciglione (VT), Italia',
  languages: [
    { name: 'Italiano', level: 'madrelingua' },
    { name: 'Inglese', level: 'B2' },
    { name: 'Spagnolo', level: 'B1' },
  ],
  skills: {
    eyebrow: 'Competenze',
    title: 'Con cosa lavoro',
    groups: {
      languages: 'Linguaggi',
      frontend: 'Front-end',
      backend: 'Back-end e database',
      tools: 'Strumenti e metodologie',
    },
  },
  experience: {
    eyebrow: 'Esperienza',
    title: 'Dove ho lavorato',
    abroadTitle: 'Esperienza all’estero',
    work: [
      {
        title: 'Tirocinante Front-End Developer',
        organization: 'Engage Labs Srl',
        location: 'Fidenza (PR)',
        period: 'Ott – Nov 2025',
        highlights: [
          'Sviluppato componenti React e gestito lo stato dell’applicazione',
          'Integrato API REST e realizzato l’interfaccia utente',
          'Lavorato in un team Agile utilizzando Azure DevOps',
          'Gestito branch e pull request con Git/GitHub',
        ],
      },
    ],
    abroad: [
      {
        title: 'Erasmus+',
        organization: 'Barcellona',
        location: 'Spagna',
        description: 'Esperienza di studio e di vita all’estero con il programma Erasmus+.',
      },
    ],
  },
  education: {
    eyebrow: 'Formazione',
    title: 'Dove ho studiato',
    entries: [
      {
        title: 'Laurea Triennale in Informatica',
        organization: 'Università degli Studi di Perugia',
        period: 'Aprile 2026',
        badge: '96/110',
      },
      {
        title: 'Diploma di Perito Informatico',
        organization: 'ITT Leonardo da Vinci',
        location: 'Viterbo',
        period: 'Giugno 2022',
        badge: '95/100',
      },
    ],
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Progetti selezionati',
    featured: 'In evidenza',
    code: 'Codice',
    liveDemo: 'Demo live',
    more: 'Altro su GitHub',
    descriptions: {
      f1web:
        'Dashboard futuristica per la Formula 1. Calcola in tempo reale statistiche avanzate, come i confronti diretti con il compagno di squadra (Teammate Battle) e i profili di performance, con un’interfaccia che si colora con i colori del team selezionato.',
      'class-management':
        'Dashboard per la gestione degli studenti con tipizzazione rigorosa, Row Level Security su PostgreSQL, join relazionali in una sola richiesta e form controllati dentro modali animate.',
      'cv-drag-and-drop':
        'Web app per creare un curriculum su un vero foglio A4 con il drag and drop: testi, linee, immagini e icone si agganciano a una griglia, testo ricco con Tiptap ed esportazione in PDF.',
      'unity-room':
        'Scena Unity con oggetti modellati e importati da Blender, illuminazione, movimento del giocatore e collisioni.',
    },
  },
  stack: {
    eyebrow: 'Dietro le quinte',
    title: 'Com’è fatto questo sito',
    intro:
      'Anche questo sito è un progetto. React 19, TypeScript e moduli SCSS, nessuna libreria di UI, e CSS moderno che fa il lavoro che di solito richiede JavaScript.',
    stats: {
      components: 'componenti React',
      scssModules: 'moduli SCSS',
      linesOfCode: 'righe di TS + SCSS',
      bundle: 'JS + CSS (gzip)',
      bundleDev: 'misurato in build',
      dependencies: 'dipendenze runtime',
    },
    techniquesTitle: 'CSS moderno sotto il cofano',
    techniques: [
      {
        title: 'Animazioni legate allo scroll',
        description:
          'Le card compaiono e l’anello attorno al menu si riempie mentre scorri, con animation-timeline e zero JavaScript.',
      },
      {
        title: '@property',
        description: 'Una custom property tipizzata e animabile fa ruotare il bordo sfumato dei progetti in evidenza.',
      },
      {
        title: 'Container queries',
        description: 'Le card dei progetti si adattano allo spazio che hanno, non alla dimensione dello schermo.',
      },
      {
        title: 'Sass a compile-time',
        description:
          'Le particelle dell’hero sono generate con math.random() e ogni tonalità di colore nasce da un’unica mappa Sass.',
      },
    ],
    terminalHint: 'Premi / per aprire il terminale.',
  },
  contact: {
    eyebrow: 'Contatti',
    title: 'Lavoriamo insieme',
    intro:
      'Sto cercando un ruolo come Front-End o Full Stack Developer. Hai un progetto o un’opportunità in mente? Scrivimi volentieri.',
    cta: 'Scrivimi una email',
    labels: { email: 'Email', phone: 'Telefono', location: 'Dove' },
  },
  footer: {
    builtWith: 'Realizzato con React, TypeScript e SCSS.',
    openTerminal: 'Terminale',
  },
  terminal: {
    title: 'matteo@portfolio: ~',
    welcome: 'Benvenuto! Scrivi `help` per vedere i comandi disponibili.',
    placeholder: 'scrivi un comando…',
    notFound: 'comando non trovato: {cmd}. Prova `help`.',
    help: {
      help: 'elenca i comandi',
      whoami: 'chi sono',
      skills: 'con cosa lavoro',
      projects: 'i miei progetti',
      contact: 'come contattarmi',
      goto: 'scorri a una sezione, es. `goto projects`',
      lang: 'cambia lingua: `lang it` / `lang en`',
      clear: 'pulisci lo schermo',
      exit: 'chiudi il terminale',
    },
    hire: [
      '[sudo] password per recruiter: ********',
      'Accesso consentito. ✔',
      'Apro il client email per assumere Matteo…',
    ],
    goto: 'Scorro a {section}…',
    gotoUsage: 'uso: goto <sezione>. Sezioni: {list}',
    langSwitched: 'Lingua impostata su italiano.',
  },
}
