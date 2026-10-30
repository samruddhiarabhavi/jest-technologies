import { motion } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import Glyph from '../components/Glyph'
import { solutions } from '../data/content'

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow="Solutions" title="What We Build">
          Six capabilities, one engineering team. Hover a card to see it move.
        </SectionHead>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.a
              key={s.n}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 transition-colors hover:border-accent"
            >
              <span className="font-mono text-sm text-accent">{s.n}</span>
              <Glyph kind={s.glyph} className="my-6 h-24 w-full text-ink" />
              <h3 className="text-2xl font-extrabold">{s.title}</h3>
              <p className="mt-2 flex-1 text-mute">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
                <span className="font-mono text-mute">{s.tech}</span>
                <span className="font-semibold transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">Explore →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
