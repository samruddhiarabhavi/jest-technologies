import { Check } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Process from '../sections/Process';
import FinalCTA from '../sections/FinalCTA';
import { services } from '../data/services';

export default function Services() {
  return (
    <PageTransition>
      <PageHeader eyebrow="What we do" title="Full-cycle software, from first sketch to steady state.">
        Strategy, design, engineering, and operations under one roof, so nothing is lost in a handoff.
      </PageHeader>
      <div className="wrap mt-24 space-y-5 pb-28">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.slug}>
              <section id={s.slug} aria-labelledby={`svc-${s.slug}`} className="grid gap-10 rounded-3xl border border-line bg-card/70 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
                <div>
                  <p className="flex items-center gap-3 text-sm text-mint">
                    <Icon size={18} aria-hidden="true" /> {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 id={`svc-${s.slug}`} className="display mt-5 text-3xl leading-tight md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-mute">{s.detail}</p>
                </div>
                <ul className="space-y-4 md:self-center">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px]">
                      <Check size={16} className="mt-1 shrink-0 text-mint" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>
      <Process />
      <FinalCTA />
    </PageTransition>
  );
}
