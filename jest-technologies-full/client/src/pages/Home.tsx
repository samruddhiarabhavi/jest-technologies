import { useEffect } from 'react'
import Hero from '../sections/Hero'
import TechStrip from '../sections/TechStrip'
import About from '../sections/About'
import Solutions from '../sections/Solutions'
import Journey from '../sections/Journey'
import Stack from '../sections/Stack'
import Projects from '../sections/Projects'
import CaseStudy from '../sections/CaseStudy'
import Process from '../sections/Process'
import Why from '../sections/Why'
import Stats from '../sections/Stats'
import Testimonials from '../sections/Testimonials'
import CTA from '../sections/CTA'
import Contact from '../sections/Contact'

export default function Home() {
  useEffect(() => {
    document.title = 'JEST Technologies | Digital Products & Software Engineering'
  }, [])
  return (
    <>
      <Hero />
      <TechStrip />
      <About />
      <Solutions />
      <Journey />
      <Stack />
      <Projects />
      <CaseStudy />
      <Process />
      <Why />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}
