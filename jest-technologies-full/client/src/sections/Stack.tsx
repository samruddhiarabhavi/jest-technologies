import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import { stack } from '../data/content'

export default function Stack() {
  const [sel, setSel] = useState({ cat: 'Frontend', i: 0 })
  const group = stack.find((g) => g.cat === sel.cat) ?? stack[0]
  const [name, use, weight] = group.items[sel.i]
  return (
    <section id="technologies" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow="Technologies" title="Our Engineering Stack">
          Hover or tap any technology to see how we use it.
        </SectionHead>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-3">
            {stack.map((g) => (
              <div key={g.cat} className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="w-24 shrink-0 font-mono text-xs uppercase tracking-widest text-mute">{g.cat}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(([n], i) => {
                    const on = sel.cat === g.cat && sel.i === i
                    return (
                      <button
                        key={n}
                        onMouseEnter={() => setSel({ cat: g.cat, i })}
                        onFocus={() => setSel({ cat: g.cat, i })}
                        onClick={() => setSel({ cat: g.cat, i })}
                        className={'rounded-full px-4 py-2 text-[15px] font-medium transition duration-200 ' + (on ? 'scale-105 bg-accent text-white' : 'bg-mist text-ink hover:bg-accent-soft')}
                      >
                        {n}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-line bg-white p-8" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel.cat + sel.i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="eyebrow">{sel.cat}</p>
                  <h3 className="mt-3 text-5xl font-extrabold">{name}</h3>
                  <p className="mt-4 text-lg text-mute">{use}</p>
                  <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-widest text-mute">Stack weight</p>
                    <div className="mt-2 flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((d) => (
                        <motion.span
                          key={d}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: d * 0.05 }}
                          className={'h-2 flex-1 origin-left rounded-full ' + (d <= weight ? 'bg-accent' : 'bg-line')}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
