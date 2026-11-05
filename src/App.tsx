import { Analytics } from '@vercel/analytics/react'
import { Footer, Header } from '@/components/layout'
import { sectionIds } from '@/data'
import { PrivacyNotice } from '@/features/privacy'
import { Terminal } from '@/features/terminal'
import { LocaleProvider } from '@/i18n'
import { sections } from '@/sections'

export default function App() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        {/* Rendered in the order defined by `sectionIds` (data/shared.ts). */}
        {sectionIds.map((id) => {
          const SectionComponent = sections[id]
          return <SectionComponent key={id} />
        })}
      </main>
      <Footer />
      <Terminal />
      <PrivacyNotice />
      <Analytics />
    </LocaleProvider>
  )
}
