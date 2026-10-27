import Reveal from '../components/Reveal';

const steps = [
  { title: 'Understand', text: 'We start by listening: who uses this, what is not working today, and what has to be true for it to be a success. You get a short written plan and an honest estimate.' },
  { title: 'Build', text: 'Designers and engineers work together in small steps. You see working software every couple of weeks, and every change is reviewed and tested before it ships.' },
  { title: 'Look after', text: 'After launch we keep watching it. We fix what breaks, keep it secure and up to date, and help you decide what to improve next.' },
];

export default function HowWeWork() {
  return (
    <section aria-labelledby="how-title" className="wrap py-20 md:py-28">
      <h2 id="how-title" className="h-serif max-w-2xl text-[clamp(2rem,3.6vw,3rem)] leading-[1.1]">
        How we work with you
      </h2>
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t-2 border-forest pt-5">
            <Reveal delay={i * 0.08}>
              <p className="font-serif text-4xl text-clay">{i + 1}</p>
              <h3 className="h-serif mt-3 text-2xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-soft">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
