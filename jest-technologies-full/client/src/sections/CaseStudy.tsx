import { motion } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'
import { caseStudy } from '../data/content'

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={`Featured: ${caseStudy.name}`} title="One Problem. One System. One Measurable Result." />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {caseStudy.steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-line bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">0{i + 1} {t}</p>
                <p className="mt-3 text-[15px] text-mute">{d}</p>
                {i < 3 && <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-accent text-xs text-white md:grid" aria-hidden="true">→</span>}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-4 rounded-2xl border border-line bg-mist/70 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-mute">System architecture</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {caseStudy.flow.map((n, i) => (
              <div key={n} className="flex items-center gap-3">
                <motion.span whileHover={{ y: -3 }} className="rounded-xl bg-white px-4 py-2.5 font-display text-lg font-bold shadow-sm">{n}</motion.span>
                {i < caseStudy.flow.length - 1 && <span className="font-mono text-accent" aria-hidden="true">──▶</span>}
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {caseStudy.metrics.map((m) => (
            <Reveal key={m.label}>
              <p className="font-display text-7xl font-extrabold leading-none text-accent sm:text-8xl">
                <CountUp to={m.to} suffix={m.suffix} decimals={m.decimals} />
              </p>
              <p className="mt-3 text-lg font-medium">{m.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 font-mono text-xs text-mute">Illustrative figures for a concept case study.</p>
      </div>
    </section>
  )
}
