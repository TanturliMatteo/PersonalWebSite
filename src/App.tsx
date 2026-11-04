import { Footer, Header } from '@/components/layout'
import { About, Contact, Education, Experience, Hero, Projects, Skills } from '@/sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
