import Reveal from '../components/Reveal'
import { principles } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal><p className="eyebrow">About JEST</p></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            We don't just write code. <span className="text-accent">We build systems.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg text-mute">
            JEST Technologies solves real business problems through software engineering: understanding the people, the process and the data first, then building something that lasts.
          </p>
        </Reveal>
        <div className="mt-16 space-y-4">
          {principles.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.06}>
              <div className="grid items-baseline gap-3 border-t border-line pt-6 md:grid-cols-[auto_1fr_1fr] md:gap-10" style={{ marginLeft: `min(${i * 7}%, 9rem)` }}>
                <span className="font-mono text-sm text-accent">{n}</span>
                <h3 className="text-4xl font-extrabold sm:text-6xl">{t}</h3>
                <p className="max-w-sm text-lg text-mute">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
