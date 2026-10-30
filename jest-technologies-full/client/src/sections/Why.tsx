import { motion } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import { why } from '../data/content'

export default function Why() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow="Why JEST" title="Why teams choose JEST" />
        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {why.map(([n, t, d], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={'group flex gap-5 border-t border-line pt-6 ' + (i % 2 ? 'md:mt-10' : '')}
            >
              <span className="font-display text-5xl font-extrabold text-line transition-colors duration-300 group-hover:text-accent">{n}</span>
              <div>
                <h3 className="text-2xl font-extrabold">{t}</h3>
                <p className="mt-1 text-lg text-mute">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
