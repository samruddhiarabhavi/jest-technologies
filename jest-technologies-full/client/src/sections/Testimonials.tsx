import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import { testimonials } from '../data/site'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow="Kind words" title="What clients say" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1} className={i === 1 ? 'md:mt-8' : ''}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                <span className="font-display text-6xl leading-none text-accent" aria-hidden="true">“</span>
                <blockquote className="flex-1 text-lg">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-mute">{t.role}, {t.company}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
