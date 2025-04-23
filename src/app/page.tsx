'use client'

import AboutMe from './aboutMe/aboutMe'
import HomePage from './homepage/homePage'
import Projects from './projects/projects'
import Skills from './skills/skills'
import Experiences from './experiences/experiences'

const Home: React.FC = () => {
  return (
    <main>
      <section id='home' className='min-h-screen'>
        <HomePage />
      </section>

      <section id='about' className='min-h-screen'>
        <AboutMe />
      </section>

      <section id='skills' className='min-h-screen'>
        <Skills />
      </section>

      <section id='projects' className='min-h-screen'>
        <Projects />
      </section>

      <section id='experiences' className='min-h-screen'>
        <Experiences />
      </section>
    </main>
  )
}

export default Home
