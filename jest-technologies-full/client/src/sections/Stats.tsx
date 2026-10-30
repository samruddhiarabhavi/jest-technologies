import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'
import { stats } from '../data/site'

export default function Stats() {
  return (
    <section id="stats" className="bg-accent py-20 text-white">
      <div className="container-x grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-6xl font-extrabold leading-none sm:text-7xl">
              {s.text !== undefined ? s.text : <CountUp to={s.value ?? 0} suffix={s.suffix} />}
            </p>
            <p className="mt-3 text-lg font-medium text-white/90">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
