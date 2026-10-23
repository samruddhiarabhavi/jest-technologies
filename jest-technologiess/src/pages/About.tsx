import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import FinalCTA from '../sections/FinalCTA';

const values = [
  { title: 'Explain every action', text: 'If an agent changes something, you can see what, why, and how to undo it.' },
  { title: 'Humans decide, agents do', text: 'We automate the routine so people can spend time on ideas and judgment.' },
  { title: 'Measure what matters', text: 'We optimize for real business outcomes, not vanity metrics.' },
  { title: 'Earn trust daily', text: 'Privacy, brand safety, and reliability are product features, not footnotes.' },
];

export default function About() {
  return (
    <PageTransition>
      <PageHeader title="We build the team behind your team.">Jest Technologies started with a simple observation: marketers spend most of their week moving data between tools. We set out to give that time back.</PageHeader>
      <section aria-labelledby="mission-title" className="wrap mt-24">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 id="mission-title" className="display text-3xl">
            Our mission
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-mute">To make growth marketing continuous, transparent, and effortless, so every team can run like the best-resourced one in its market.</p>
        </Reveal>
        <div className="mt-20 grid gap-12 border-t border-line pt-14 md:grid-cols-3">
          <StatCounter value={140} label="People across 18 countries" />
          <StatCounter value={600} suffix="+" label="Brands running on Jest Technologies" />
          <StatCounter value={12} label="Channels connected out of the box" />
        </div>
      </section>
      <section aria-labelledby="values-title" className="section">
        <div className="wrap">
          <h2 id="values-title" className="display text-4xl md:text-5xl">
            What we believe
          </h2>
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
      <FinalCTA />
    </PageTransition>
  );
}
