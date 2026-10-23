import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import FinalCTA from '../sections/FinalCTA';
import { cases } from '../data/cases';

export default function CaseStudies() {
  return (
    <PageTransition>
      <PageHeader title="Results from teams on autopilot.">Real outcomes from brands that put Jest Technologies agents to work.</PageHeader>
      <section aria-label="Case studies" className="wrap mt-20 space-y-5 pb-32">
        {cases.map((c) => (
          <Reveal key={c.id}>
            <article className="grid gap-10 rounded-3xl border border-line bg-card/70 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
              <div>
                <p className="text-sm text-mint">
                  {c.company} · {c.industry}
                </p>
                <h2 className="display mt-4 text-3xl leading-tight md:text-4xl">{c.title}</h2>
                <p className="mt-5 max-w-xl leading-relaxed text-mute">{c.summary}</p>
              </div>
              <StatCounter value={c.stat.value} suffix={c.stat.suffix} decimals={c.stat.decimals} label={c.stat.label} className="md:self-center" />
            </article>
          </Reveal>
        ))}
      </section>
      <FinalCTA />
    </PageTransition>
  );
}
