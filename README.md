# Matteo Tanturli · Personal Website

One-page personal website and portfolio, built with **React 19 + TypeScript + Vite + SCSS modules**,
in Italian and English.

```bash
npm install
npm run dev           # dev server
npm run build         # typecheck + production build (dist/)
npm run preview       # preview the production build
npm run lint          # oxlint (TS) + stylelint (SCSS: rules + property order)
npm run lint:fix      # same, with automatic fixes
npm run format        # prettier
```

## Project structure

```
vite/
└── siteStats.ts             # Vite plugin: source stats (__SITE_STATS__) + dist/build-stats.json

src/
├── main.tsx                 # entry: mounts <App> and imports the global stylesheet
├── App.tsx                  # page composition: provider, header, sections, footer, terminal
│
├── data/                    # ALL the content. Edit these to update the site
│   ├── shared.ts            #   language-independent: name, links, skills, projects, section order
│   ├── locales/en.ts        #   every English text
│   ├── locales/it.ts        #   every Italian text
│   └── index.ts             #   registry of locales
│
├── i18n/                    # LocaleProvider + useLocale() → { locale, setLocale, t }
├── types/                   # shared TypeScript types (Content = shape of a locale file)
│
├── components/
│   ├── ui/                  # generic, reusable building blocks
│   │   ├── Button/          #   <a> with href, <button> without (primary/secondary/ghost)
│   │   ├── Card/            #   rounded surface; `tone` and `reveal` props
│   │   ├── Container/  Icon/  Section/  Tag/  Timeline/
│   └── layout/              # page chrome
│       ├── Header/          #   glass header + hamburger, ScrollRing (scroll-progress SVG)
│       ├── LanguageSwitch/  #   IT / EN segmented control
│       ├── NavMenu/         #   dropdown that scrolls to sections
│       └── Footer/
│
├── features/
│   └── terminal/            # easter-egg terminal (press "/")
│       ├── commands.ts      #   pure command logic (no React)
│       ├── Terminal.tsx     #   UI in a native <dialog>
│       └── events.ts, useTerminalShortcut.ts
│
├── sections/                # one folder per page section
│   ├── Hero/  About/  Skills/  Experience/  Education/  Projects/  Stack/  Contact/
│
├── hooks/                   # useActiveSection, useScrolled, useDismiss, useBuildStats
├── utils/cx.ts              # className joiner
│
└── styles/
    ├── abstracts/           # compile-time only (no CSS output). @use '@/styles/abstracts' as *;
    │   ├── _palette.scss    #   $tones map: the single source of every color family
    │   ├── _functions.scss  #   fluid(), tone(), particles()
    │   ├── _mixins.scss     #   up(), hover, press, touch-target, card-surface, …
    │   ├── _effects.scss    #   motion-ok, supports-scroll-timeline, container-up, gradient-border
    │   └── _breakpoints.scss
    ├── base/
    │   ├── _properties.scss #   @property --angle (animatable custom property)
    │   ├── _tokens.scss     #   CSS variables (colors, spacing, radii, safe areas)
    │   ├── _tones.scss      #   [data-tone='…'] themes generated with @each from the palette
    │   ├── _motion.scss     #   [data-reveal] scroll-driven reveal
    │   └── _reset.scss, _global.scss
    └── main.scss
```

## Conventions

- Each component lives in its own folder: `Name.tsx` + `Name.module.scss` + `index.ts`.
- Every SCSS file opens with a `// ====` header saying what it is for; macro blocks are
  separated by `// ----` headers, and explanations live in those headers, not between properties.
- SCSS property order is enforced by stylelint (recess order: positioning → box model →
  typography → visual → animation). `npm run lint:fix` sorts it automatically.
- Formatting is Prettier (`.prettierrc.json`): single quotes, no semicolons, 120 columns.
- Import through barrels and the `@/` alias: `import { Card, Section } from '@/components/ui'`.
- No text in components: every string comes from `useLocale().t`.
- Colors, radii, shadows and spacing are CSS variables in `styles/base/_tokens.scss`.

### Adding a section

1. Create `src/sections/NewSection/` and wrap its content in `<Section id="new" …>`.
2. Add `'new'` to `SectionId` (`types`) and register the component in the `sections` map of
   `src/sections/index.ts` (TypeScript errors until every id has a component).
3. Put `'new'` where you want it in `sectionIds` (`data/shared.ts`) and add its label to `nav` in
   each locale file. Page, menu, hero arrow and terminal `goto` all follow that order.

To **reorder** the page, change `sectionIds` only.

### Adding a language

Add the code to `Locale`, create `data/locales/xx.ts` typed as `Content` (TypeScript lists every
missing string), and register it in `data/index.ts`. The switch picks it up automatically.

## Modern CSS features

All of them are progressive enhancements: browsers without support, or users with
`prefers-reduced-motion`, get the plain static site.

| Feature                                                                   | Where                                           |
| ------------------------------------------------------------------------- | ----------------------------------------------- |
| Scroll-driven reveal (`animation-timeline: view()`)                       | `base/_motion.scss`, any `[data-reveal]`        |
| Scroll progress ring (`scroll(root)` + SVG `pathLength`)                  | `layout/Header/ScrollRing`                      |
| Comet streak around featured cards (`@property --angle`)                  | `Projects/ProjectCard`, mixin `gradient-border` |
| Container queries                                                         | `Projects/ProjectCard`                          |
| Compile-time parallax spheres (`math.random()`)                           | `Hero`, function `particles()`                  |
| Staggered tags (`@for` → per-item `animation-range` / `transition-delay`) | `ui/Tag`, `<TagList stagger>`                   |
| Generated color themes (`@each` + `sass:color`)                           | `base/_tones.scss`                              |

## Mobile rules

- **Mobile-first**: base styles are for phones; add larger layouts with `@include up(sm|md|lg|xl)`.
- **Fluid sizes**: use `fluid($min, $max)` for font sizes and spacing instead of piling up breakpoints.
- **Hover only on pointer devices**: `@include hover { … }`, never a bare `&:hover`; `@include press`
  for tap feedback.
- **Touch targets**: at least 44×44px (`@include touch-target`).
- **Safe areas**: `--safe-top|right|bottom|left` (needs `viewport-fit=cover`, set in `index.html`).
- **Viewport height**: `svh` / `dvh` with a `vh` fallback line, not bare `100vh`.
- **Landscape phones**: `@include landscape-short { … }`.
