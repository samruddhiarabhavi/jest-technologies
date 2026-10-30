import { motion } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import Glyph from '../components/Glyph'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="bg-white/50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow="Projects" title="Built With Purpose.">
          Concept case studies showing how we approach problems. Hover a card for the challenge and solution.
        </SectionHead>
        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              tabIndex={0}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: (i % 2) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-line bg-white ${p.span}`}
            >
              <div className={`relative flex h-52 items-center justify-center sm:h-60 ${p.tone}`}>
                <span className="absolute left-5 top-4 font-mono text-sm text-ink/60">{p.n}</span>
                <span className="absolute right-5 top-4 rounded-full bg-white/70 px-3 py-1 font-mono text-xs">{p.industry}</span>
                <Glyph kind={p.glyph} className="h-32 w-56 text-ink transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-extrabold">{p.name}</h3>
                <p className="mt-1 text-mute">{p.line}</p>
                <p className="mt-4 font-mono text-xs text-mute">{p.tech}</p>
              </div>
              <div className="border-t border-line bg-white p-6 md:absolute md:inset-0 md:translate-y-full md:border-0 md:bg-ink md:text-paper md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-y-0 md:group-focus-within:translate-y-0 md:group-focus:translate-y-0">
                <dl className="space-y-4 text-[15px]">
                  <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Challenge</dt><dd className="mt-1">{p.challenge}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Solution</dt><dd className="mt-1">{p.solution}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-widest text-accent">Technology</dt><dd className="mt-1">{p.tech}</dd></div>
                </dl>
                <a href="#case-study" className="mt-5 inline-block font-semibold text-accent">View Case Study →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
