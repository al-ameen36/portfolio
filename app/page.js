import About from '@/components/about'
import Banner from '@/components/banner'
import Education from '@/components/education'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Education />
      <Skills />
      <Projects />
    </main>
  )
}
