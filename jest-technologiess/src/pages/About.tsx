import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import CtaBand from '../sections/CtaBand';
import { aboutStats, leaders, milestones, values } from '../data/company';

const tones = ['bg-forest text-paper', 'bg-clay text-paper', 'bg-sand text-ink', 'bg-rule text-ink'];

export default function About() {
  return (
    <PageTransition>
      <PageHeader eyebrow="About us" title="Eleven years of building software we are proud to put our name on.">
        Jest Technologies started in 2015 with eight engineers. We are a bigger team now, but we still work the way we did then: small steps, honest answers, and no shortcuts.
      </PageHeader>

      <section aria-labelledby="story-title" className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[300px_1fr] lg:gap-20">
        <aside aria-label="Company facts" className="grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-10">
          {aboutStats.map((s) => (
            <StatCounter key={s.label} {...s} size="sm" />
          ))}
        </aside>
        <Reveal>
          <h2 id="story-title" className="h-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15]">
            Our story
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-soft">
            <p>We started with a simple idea: shipping quickly is easy, but shipping software that is still reliable, secure, and easy to change three years later is the real work. Fixing rushed code is the slowest thing in software.</p>
            <p>Since then we have delivered more than 150 products. Senior engineers work on every project, every change is reviewed by a second person, and releases go through automated tests and a security check. Anyone on the team can stop a release that is not ready.</p>
            <p>Our clients include insurers, logistics companies, clinics, retailers, and schools. The products are different; the way we look after them is the same.</p>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="values-title" className="border-y border-rule bg-sand/50 py-16 md:py-24">
        <div className="wrap">
          <h2 id="values-title" className="h-serif text-[clamp(1.75rem,3vw,2.5rem)]">
            What we care about
          </h2>
          <ol className="mt-10 border-t border-rule">
            {values.map((v, i) => (
              <li key={v.title} className="grid gap-2 border-b border-rule py-7 md:grid-cols-[3rem_1fr_1.6fr] md:gap-8">
                <span className="text-sm text-clay">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h-serif text-2xl">{v.title}</h3>
                <p className="leading-relaxed text-soft">{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="milestones-title" className="wrap py-16 md:py-24">
        <h2 id="milestones-title" className="h-serif text-[clamp(1.75rem,3vw,2.5rem)]">
          How we got here
        </h2>
        <ol className="mt-10 border-t border-rule">
          {milestones.map((m) => (
            <li key={m.year} className="grid gap-1 border-b border-rule py-5 md:grid-cols-[10rem_1fr] md:gap-8">
              <p className="font-serif text-2xl text-forest">{m.year}</p>
              <p className="max-w-2xl leading-relaxed text-soft">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="people-title" className="wrap pb-20 md:pb-28">
        <h2 id="people-title" className="h-serif text-[clamp(1.75rem,3vw,2.5rem)]">
          Who you will talk to
        </h2>
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l, i) => (
            <li key={l.name}>
              <span aria-hidden="true" className={`grid h-20 w-20 place-items-center rounded-md font-serif text-2xl ${tones[i % tones.length]}`}>
                {l.initials}
              </span>
              <h3 className="h-serif mt-4 text-xl">{l.name}</h3>
              <p className="text-sm font-medium text-clay">{l.role}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-soft">{l.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </PageTransition>
  );
}
