import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

const dots = [[8, 20], [22, 70], [40, 30], [62, 78], [78, 25], [92, 62]]

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-mist py-28 sm:py-36">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M8 20L22 70L40 30L62 78L78 25L92 62" fill="none" stroke="#FF5A1F" strokeOpacity=".35" strokeWidth=".25" vectorEffect="non-scaling-stroke" className="flow" />
      </svg>
      {dots.map(([x, y], i) => (
        <motion.span
          key={i}
          className="absolute h-3 w-3 rounded-full bg-accent"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.9, 0.35, 0.9] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      ))}
      <div className="container-x relative text-center">
        <Reveal><h2 className="mx-auto max-w-3xl text-5xl font-extrabold leading-[1.02] sm:text-7xl">Have an idea worth building?</h2></Reveal>
        <Reveal delay={0.1}><p className="mx-auto mt-6 max-w-xl text-lg text-mute">Let's turn your concept into a product people can actually use.</p></Reveal>
        <Reveal delay={0.2} className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="btn btn-accent">Start a Conversation</a>
          <a href="#projects" className="btn btn-ghost">View Our Work</a>
        </Reveal>
      </div>
    </section>
  )
}
