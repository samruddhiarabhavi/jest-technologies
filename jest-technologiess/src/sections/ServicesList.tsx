import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import TextLink from '../components/TextLink';
import { services } from '../data/services';

export default function ServicesList() {
  return (
    <section aria-labelledby="services-title" className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <h2 id="services-title" className="h-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1]">
          What we do
        </h2>
        <p className="mt-5 max-w-sm leading-relaxed text-soft">One team covers design, engineering, and day-to-day running, so nothing gets lost between handoffs.</p>
        <div className="mt-6">
          <TextLink to="/services">All services</TextLink>
        </div>
      </Reveal>
      <ul className="border-t border-rule">
        {services.map((s, i) => (
          <li key={s.slug} className="border-b border-rule">
            <Link to={`/services#${s.slug}`} className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-6 transition-colors hover:bg-sand/60 md:grid-cols-[3rem_1fr_1.4fr_auto] md:px-3">
              <span className="text-sm text-clay">{String(i + 1).padStart(2, '0')}</span>
              <span className="h-serif text-xl md:text-2xl">{s.title}</span>
              <span className="col-start-2 mt-1 text-[15px] leading-relaxed text-soft md:col-start-3 md:mt-0">{s.summary}</span>
              <span aria-hidden="true" className="row-start-1 col-start-3 text-xl text-forest transition-transform duration-200 group-hover:translate-x-1 md:col-start-4">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
