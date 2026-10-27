import Reveal from '../components/Reveal';
import { testimonials } from '../data/testimonials';

export default function ClientNotes() {
  const [main, ...rest] = testimonials;
  return (
    <section aria-labelledby="notes-title" className="wrap py-20 md:py-28">
      <h2 id="notes-title" className="h-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1]">
        What clients say
      </h2>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <figure>
            <blockquote className="h-serif text-[clamp(1.5rem,2.8vw,2.25rem)] leading-snug">“{main.quote}”</blockquote>
            <figcaption className="mt-6 text-[15px] text-soft">
              <span className="font-medium text-ink">{main.name}</span>, {main.role}, {main.company}
            </figcaption>
          </figure>
        </Reveal>
        <div className="space-y-10 lg:border-l lg:border-rule lg:pl-12">
          {rest.map((t, i) => (
            <Reveal key={t.id} delay={0.08 * (i + 1)}>
              <figure>
                <blockquote className="leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-soft">
                  <span className="font-medium text-ink">{t.name}</span>, {t.role}, {t.company}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
