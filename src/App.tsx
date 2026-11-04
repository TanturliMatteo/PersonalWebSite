import { Footer, Header } from '@/components/layout'
import { Terminal } from '@/features/terminal'
import { LocaleProvider } from '@/i18n'
import { About, Contact, Education, Experience, Hero, Projects, Skills, Stack } from '@/sections'

export default function App() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <Terminal />
    </LocaleProvider>
  )
}
