import { Check } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import HowWeWork from '../sections/HowWeWork';
import CtaBand from '../sections/CtaBand';
import { services } from '../data/services';

export default function Services() {
  return (
    <PageTransition>
      <PageHeader eyebrow="Services" title="Everything between a rough idea and a stable product.">
        Design, engineering, and day-to-day running from one team, so you are not managing handoffs between suppliers.
      </PageHeader>
      <div className="wrap grid gap-10 py-14 md:py-20 lg:grid-cols-[220px_1fr] lg:gap-16">
        <nav aria-label="Services index" className="lg:sticky lg:top-28 lg:self-start">
          <ul className="flex gap-x-5 gap-y-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:border-l lg:border-rule lg:pb-0">
            {services.map((s) => (
              <li key={s.slug} className="shrink-0">
                <a href={`#${s.slug}`} className="block py-1 text-[15px] text-soft hover:text-forest lg:-ml-px lg:border-l lg:border-transparent lg:pl-4 lg:hover:border-forest">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          {services.map((s, i) => (
            <section key={s.slug} id={s.slug} aria-labelledby={`svc-${s.slug}`} className={`grid gap-6 py-12 md:grid-cols-[1.3fr_1fr] md:gap-12 ${i ? 'border-t border-rule' : 'pt-0'}`}>
              <div>
                <p className="text-sm text-clay">{String(i + 1).padStart(2, '0')}</p>
                <h2 id={`svc-${s.slug}`} className="h-serif mt-2 text-3xl md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-soft">{s.detail}</p>
              </div>
              <ul className="space-y-3 md:pt-9">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px]">
                    <Check size={16} className="mt-1 shrink-0 text-forest" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className="border-t border-rule bg-sand/50">
        <HowWeWork />
      </div>
      <CtaBand />
    </PageTransition>
  );
}
