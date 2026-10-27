import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import FinalCTA from '../sections/FinalCTA';
import { aboutStats, leaders, milestones, values } from '../data/company';

export default function About() {
  return (
    <PageTransition>
      <PageHeader eyebrow="About Jest Technologies" title="Eleven Years. One Standard. No Shortcuts.">
        Founded in 2015, Jest Technologies has grown from eight engineers into a trusted software partner for startups and enterprises, without ever outgrowing the discipline that built our name.
      </PageHeader>

      <section aria-labelledby="story-title" className="wrap mt-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-sm tracking-[0.14em] text-mint">OUR STORY</p>
            <h2 id="story-title" className="display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
              Built by Engineers Who Care About What Happens After Launch
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-mute">
            <p>We started with a simple idea: shipping fast is easy, but shipping software that is still reliable, secure, and maintainable three years later is the real work. Fixing rushed code is the slowest thing in software.</p>
            <p>Eleven years and more than 150 products later, that idea is how we operate. Senior engineers sit on every project. Every change is reviewed. Releases run through automated tests and a security check, and anyone on the team can stop a release that is not ready.</p>
            <p>Today our portfolio spans insurance CRMs, logistics apps, patient portals, and AI assistants, all held to the same handover standard.</p>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-12 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((s) => (
            <StatCounter key={s.label} {...s} className="[&_p:first-child]:text-[clamp(3rem,6vw,5rem)]" />
          ))}
        </div>
      </section>

      <section aria-labelledby="values-title" className="section">
        <div className="wrap">
          <Reveal>
            <p className="text-sm tracking-[0.14em] text-mint">OUR VALUES</p>
            <h2 id="values-title" className="display mt-4 text-[clamp(2rem,4.5vw,4rem)] leading-[1.03]">
              The Standards Behind the Standard
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={(i % 2) * 0.08} className="panel h-full p-8">
                  <h3 className="display text-2xl">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-mute">{v.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="milestones-title" className="wrap pb-28">
        <Reveal>
          <p className="text-sm tracking-[0.14em] text-mint">MILESTONES</p>
          <h2 id="milestones-title" className="display mt-4 text-[clamp(2rem,4.5vw,4rem)] leading-[1.03]">
            A Track Record Built Release by Release
          </h2>
        </Reveal>
        <ol className="mt-14 border-l border-line">
          {milestones.map((m) => (
            <li key={m.year}>
              <Reveal className="relative grid gap-2 py-6 pl-8 md:grid-cols-[160px_1fr] md:gap-10">
                <span aria-hidden="true" className="absolute -left-[5px] top-9 h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_12px_#5CFFB1]" />
                <p className="display text-3xl text-mint">{m.year}</p>
                <p className="max-w-xl text-lg leading-relaxed text-mute">{m.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="leaders-title" className="wrap pb-28">
        <Reveal>
          <p className="text-sm tracking-[0.14em] text-mint">LEADERSHIP</p>
          <h2 id="leaders-title" className="display mt-4 text-[clamp(2rem,4.5vw,4rem)] leading-[1.03]">
            Led by People Who Still Ship
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l, i) => (
            <li key={l.name}>
              <Reveal delay={i * 0.07} className="panel h-full p-7">
                <span aria-hidden="true" className="grid h-14 w-14 place-items-center rounded-full border border-line bg-ink text-sm text-mint">
                  {l.initials}
                </span>
                <h3 className="display mt-6 text-xl">{l.name}</h3>
                <p className="mt-1 text-sm text-mint">{l.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-mute">{l.bio}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <FinalCTA />
    </PageTransition>
  );
}
