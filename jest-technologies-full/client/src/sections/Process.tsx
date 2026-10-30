import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import { process } from '../data/content'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  return (
    <section id="process" className="bg-white/50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow="Process" title="How We Build">
          Five steps, with working software and clear communication at every stage.
        </SectionHead>
        <div ref={ref} className="relative mt-16 space-y-12">
          <div className="absolute left-4 top-0 h-full w-px bg-line md:left-1/2" />
          <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-4 top-0 h-full w-0.5 origin-top bg-accent md:left-1/2" />
          {process.map(([n, t, d], i) => (
            <Reveal
              key={n}
              className={'relative pl-12 md:w-1/2 md:pl-0 ' + (i % 2 ? 'md:ml-auto md:pl-14' : 'md:pr-14 md:text-right')}
            >
              <span className={'absolute top-3 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-paper left-[9px] ' + (i % 2 ? 'md:left-[-7px]' : 'md:left-auto md:-right-[7px]')} />
              <p className="font-mono text-sm text-accent">{n}</p>
              <h3 className="text-3xl font-extrabold sm:text-4xl">{t}</h3>
              <p className="mt-2 text-lg text-mute">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
