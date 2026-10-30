import { techStrip } from '../data/content'

export default function TechStrip() {
  const row = [...techStrip, ...techStrip]
  return (
    <section aria-label="Technologies we work with" className="overflow-hidden border-y border-line bg-white/60 py-5">
      <div className="marquee flex w-max gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-mute">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">{t}<span className="text-accent" aria-hidden="true">/</span></span>
        ))}
      </div>
    </section>
  )
}
