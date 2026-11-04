# Matteo Tanturli · Personal Website

One-page personal website and portfolio, built with **React 19 + TypeScript + Vite + SCSS modules**.

```bash
npm install
npm run dev       # dev server
npm run build     # typecheck + production build (dist/)
npm run lint      # oxlint
npm run preview   # preview the production build
```

## Project structure

```
src/
├── main.tsx                 # entry: mounts <App> and imports the global stylesheet
├── App.tsx                  # page composition: Header, sections in order, Footer
│
├── data/                    # ALL the content. Edit these to update the site
│   ├── profile.ts           #   name, role, bio, email, socials, avatar
│   ├── skills.ts            #   skill groups + spoken languages
│   ├── experience.ts        #   work experience + experience abroad
│   ├── education.ts         #   degrees
│   ├── projects.ts          #   portfolio projects
│   └── navigation.ts        #   hamburger menu entries (id = section anchor)
│
├── types/index.ts           # shared TypeScript types for the data
│
├── components/
│   ├── ui/                  # generic, reusable building blocks
│   │   ├── Button/          #   link styled as a button (primary/secondary/ghost)
│   │   ├── Card/            #   the rounded surface used everywhere
│   │   ├── Container/       #   max-width + gutters
│   │   ├── Icon/            #   inline SVG icon set
│   │   ├── Section/         #   anchor + eyebrow + title wrapper for every section
│   │   ├── Tag/             #   pill tag and TagList
│   │   └── Timeline/        #   vertical card timeline (experience, education)
│   └── layout/              # page chrome
│       ├── Header/          #   fixed glass header + hamburger toggle
│       ├── NavMenu/         #   dropdown menu that scrolls to sections
│       └── Footer/
│
├── sections/                # one folder per page section (composes ui components)
│   ├── Hero/  About/  Skills/  Experience/  Education/  Projects/  Contact/
│
├── hooks/                   # useActiveSection, useScrolled, useDismiss
├── utils/cx.ts              # className joiner
│
└── styles/
    ├── abstracts/           # compile-time only: breakpoints + mixins (no CSS output)
    │   └── _index.scss      #   @use '@/styles/abstracts' as *;
    ├── base/                # tokens (CSS variables), reset, global rules
    └── main.scss            # global entry, imported once in main.tsx
```

### Conventions

- Each component lives in its own folder: `Name.tsx` + `Name.module.scss` + `index.ts`.
- Import through barrels and the `@/` alias: `import { Card, Section } from '@/components/ui'`.
- Colors, radii, shadows and spacing are CSS variables in `styles/base/_tokens.scss`. Change the
  theme there.
- Shared style patterns (`card-surface`, `card-hover`, `focus-ring`, `up(md)` media queries, …)
  are mixins in `styles/abstracts/_mixins.scss`.

### Mobile rules

- **Mobile-first**: base styles are for phones; add larger layouts with `@include up(sm|md|lg|xl)`.
- **Fluid sizes**: use `fluid($min, $max)` (from `abstracts/_functions.scss`) for font sizes and
  spacing instead of piling up breakpoints. Spacing tokens (`--container-gutter`, `--grid-gap`,
  `--card-padding`, `--section-gap`) are already fluid.
- **Hover only on pointer devices**: write hover styles with `@include hover { … }`, never a bare
  `&:hover`, so effects don't stick after a tap. Use `@include press` for tap feedback.
- **Touch targets**: interactive elements are at least 44×44px (`@include touch-target`).
- **Safe areas**: notch / home-indicator insets are exposed as `--safe-top|right|bottom|left`
  (needs `viewport-fit=cover`, set in `index.html`).
- **Viewport height**: use `svh` / `dvh` with a `vh` fallback line, not bare `100vh`.
- **Landscape phones**: `@include landscape-short { … }` for screens shorter than 500px.

### Adding a section

1. Create `src/sections/NewSection/` and wrap its content in `<Section id="new" title="…">`.
2. Export it from `src/sections/index.ts` and place it in `App.tsx`.
3. Add `{ id: 'new', label: '…' }` to `src/data/navigation.ts`, and it shows up in the menu.
