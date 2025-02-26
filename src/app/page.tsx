'use client'

import AboutMe from './aboutMe/aboutMe'
import HomePage from './homepage/homePage'
import Projects from './projects/projects'
import Skills from './skills/skills'
import Experiences from './experiences/experiences'

const Home: React.FC = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll('main section')

  //     sections.forEach((section) => {
  //       const top = window.scrollY
  //       const offset = section.offsetTop - 100
  //       const height = section.clientHeight
  //       const id = section.getAttribute('id')

  //       if (top >= offset && top < offset + height) {
  //         document
  //           .querySelector('.navbar a[href*=' + id + ']')
  //           ?.classList.add('active') // Correctly add the class without dot
  //       } else {
  //         document
  //           .querySelector('.navbar a[href*=' + id + ']')
  //           ?.classList.remove('active') // Correctly remove the class without dot
  //       }
  //     })
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

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
