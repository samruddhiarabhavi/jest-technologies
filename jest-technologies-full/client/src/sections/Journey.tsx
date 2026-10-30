import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import { journey } from '../data/content'

function Stage({ i, p, name, text }: { i: number; p: MotionValue<number>; name: string; text: string }) {
  const start = i / journey.length
  const opacity = useTransform(p, [start - 0.1, start + 0.04], [0.18, 1])
  const x = useTransform(p, [start - 0.1, start + 0.04], [28, 0])
  const last = i === journey.length - 1
  return (
    <motion.div
      style={{ opacity, x, marginLeft: `${i * 4.5}%` }}
      className="flex flex-col gap-1 border-b border-ink/10 py-5 sm:flex-row sm:items-baseline sm:gap-8"
    >
      <span className="font-mono text-sm text-accent">0{i + 1}</span>
      <h3 className={'text-4xl font-extrabold sm:text-6xl lg:text-7xl ' + (last ? 'text-accent' : '')}>{name}</h3>
      <p className="max-w-xs text-mute sm:ml-auto">{text}</p>
    </motion.div>
  )
}

export default function Journey() {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  return (
    <section id="journey" className="grid-bg bg-mist/70 py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow="Signature process" title="From Idea → Interface → Intelligence">
          Every product we ship travels the same path. Scroll to follow it.
        </SectionHead>
        <div ref={ref} className="relative mt-14 pl-6 sm:pl-8">
          <div className="absolute left-0 top-0 h-full w-px bg-ink/15" />
          <motion.div style={{ scaleY: p }} className="absolute left-0 top-0 h-full w-0.5 origin-top bg-accent" />
          {journey.map(([name, text], i) => (
            <Stage key={name} i={i} p={p} name={name} text={text} />
          ))}
        </div>
      </div>
    </section>
  )
}
