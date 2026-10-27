import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Code2, LifeBuoy, PenTool, Rocket, Search, ShieldCheck, type LucideIcon } from 'lucide-react';
import Reveal from '../components/Reveal';
import { scrubProgress } from '../animations/scroll';

const stages: { name: string; text: string; icon: LucideIcon }[] = [
  { name: 'Discover', text: 'We learn your goals, users, and constraints.', icon: Search },
  { name: 'Design', text: 'Flows and prototypes you can test early.', icon: PenTool },
  { name: 'Build', text: 'Senior engineers ship in small, reviewed steps.', icon: Code2 },
  { name: 'Test', text: 'Automated and manual QA before anything goes live.', icon: ShieldCheck },
  { name: 'Launch', text: 'Calm releases with monitoring from minute one.', icon: Rocket },
  { name: 'Support', text: 'We stay on to maintain, measure, and improve.', icon: LifeBuoy },
];

export default function Process() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(reduce ? stages.length : 0);

  useEffect(() => {
    if (reduce) {
      lineRef.current?.style.setProperty('--p', '1');
      setCount(stages.length);
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    return scrubProgress(el, (p) => {
      lineRef.current?.style.setProperty('--p', p.toFixed(3));
      setCount(p <= 0.01 ? 0 : Math.min(stages.length, Math.floor(p * (stages.length - 1) + 0.08) + 1));
    });
  }, [reduce]);

  const track = 'absolute left-7 top-7 bottom-7 w-px md:bottom-auto md:left-[8.333%] md:right-[8.333%] md:h-px md:w-auto';

  return (
    <section aria-labelledby="process-title" className="section border-y border-line bg-coal">
      <div className="wrap">
        <Reveal>
          <h2 id="process-title" className="display max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
            A delivery process you can see.
          </h2>
        </Reveal>
        <div ref={wrapRef} className="relative mt-20">
          <div aria-hidden="true" className={`${track} bg-line`} />
          <div aria-hidden="true" ref={lineRef} className={`${track} wf-line bg-mint shadow-[0_0_14px_#5CFFB1]`} />
          <ol className="relative flex flex-col gap-10 md:grid md:grid-cols-6 md:gap-4">
            {stages.map((s, i) => {
              const on = i < count;
              return (
                <li key={s.name} data-active={on} className="flex gap-5 md:flex-col md:items-center md:text-center">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full border bg-ink transition-[border-color,color,box-shadow] duration-500 ${on ? 'border-mint text-mint shadow-[0_0_30px_-4px_rgba(92,255,177,.6)]' : 'border-line text-mute'}`}>
                    <s.icon size={22} aria-hidden="true" />
                  </span>
                  <div className={`transition-opacity duration-500 ${on ? 'opacity-100' : 'opacity-40'}`}>
                    <h3 className="display text-xl">{s.name}</h3>
                    <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-mute md:mx-auto">{s.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
