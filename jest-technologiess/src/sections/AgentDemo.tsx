import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Loader2, RotateCcw, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ease } from '../animations/fade';

const PROMPT = 'Show me which campaigns are losing efficiency this month.';
const STEPS = ['Scanning 1,248 campaigns across 6 ad platforms', 'Comparing cost per result to 90-day baselines', 'Ranking campaigns by wasted spend'];
const METRICS = [
  { label: 'Campaigns analyzed', value: 1248 },
  { label: 'Underperformers found', value: 86 },
  { label: 'High-spend alerts', value: 21 },
  { label: 'Automated optimizations', value: 14 },
];
const ACTIONS = ['Shift 18% of budget to the top 5 ad sets', 'Pause 9 creatives showing fatigue', 'Refresh 3 audiences with stale data'];

function Metric({ label, value, start }: { label: string; value: number; start: boolean }) {
  const shown = useCountUp(value, { start, duration: 1400 });
  return (
    <div className="rounded-xl border border-line bg-panel p-4">
      <p className="display text-3xl tabular-nums">{shown}</p>
      <p className="mt-1 text-xs text-mute">{label}</p>
    </div>
  );
}

export default function AgentDemo() {
  const reduce = useReducedMotion();
  const { ref, inView } = useScrollAnimation<HTMLDivElement>({ amount: 0.35 });
  const [run, setRun] = useState(0);
  const [typed, setTyped] = useState(reduce ? PROMPT.length : 0);
  const [step, setStep] = useState(reduce ? STEPS.length : 0);
  const typing = typed < PROMPT.length;
  const done = step >= STEPS.length;

  useEffect(() => {
    if (reduce) {
      setTyped(PROMPT.length);
      setStep(STEPS.length);
      return;
    }
    if (!inView) return;
    setTyped(0);
    setStep(0);
    const timers: number[] = [];
    let i = 0;
    const type = window.setInterval(() => {
      setTyped(++i);
      if (i >= PROMPT.length) {
        window.clearInterval(type);
        let s = 0;
        const st = window.setInterval(() => {
          setStep(++s);
          if (s >= STEPS.length) window.clearInterval(st);
        }, 750);
        timers.push(st);
      }
    }, 30);
    timers.push(type);
    return () => timers.forEach((t) => window.clearInterval(t));
  }, [inView, reduce, run]);

  return (
    <section aria-labelledby="demo-title" className="section">
      <div className="wrap">
        <Reveal>
          <h2 id="demo-title" className="display max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
            Ask a question. Watch the work get done.
          </h2>
        </Reveal>
        <div ref={ref} className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 bg-coal lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between gap-10 border-b border-line p-6 md:p-10 lg:border-b-0 lg:border-r">
            <div>
              <p className="flex items-center gap-2 text-sm text-mute">
                <Sparkles size={15} className="text-mint" aria-hidden="true" /> Ask Jest Technologies
              </p>
              <p className="display mt-6 min-h-[7.5rem] text-2xl leading-snug md:text-[1.75rem]" aria-label={PROMPT}>
                <span aria-hidden="true">
                  {PROMPT.slice(0, typed)}
                  {typing && <span className="blink ml-0.5 inline-block h-6 w-[2px] translate-y-1 bg-mint" />}
                </span>
              </p>
            </div>
            <div>
              <Button variant="ghost" arrow={false} onClick={() => setRun((r) => r + 1)}>
                <span className="inline-flex items-center gap-2">
                  <RotateCcw size={14} aria-hidden="true" /> Run again
                </span>
              </Button>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between text-sm">
              <p className="text-mute">Campaign Agent</p>
              <p className="flex items-center gap-2 text-mute" role="status">
                {done ? <Check size={14} className="text-mint" aria-hidden="true" /> : <Loader2 size={14} className="animate-spin motion-reduce:animate-none" aria-hidden="true" />}
                {done ? 'Analysis complete' : typing ? 'Waiting for question' : 'Analyzing'}
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {STEPS.map((s, i) => (
                <motion.li key={s} initial={false} animate={{ opacity: step > i || (step === i && !typing) ? 1 : 0.25 }} className="flex items-center gap-3 text-[15px] text-mute">
                  {step > i ? <Check size={15} className="text-mint" aria-hidden="true" /> : <span className="h-3.5 w-3.5 rounded-full border border-line" />}
                  {s}
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {METRICS.map((m) => (
                <Metric key={m.label} label={m.label} value={m.value} start={done} />
              ))}
            </div>
            <motion.div initial={false} animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }} transition={{ duration: 0.6, ease, delay: 0.3 }} className="mt-8 rounded-xl border border-mint/25 bg-mint/[0.04] p-5">
              <p className="text-sm text-mint">Recommended actions</p>
              <ul className="mt-3 space-y-2 text-[15px]">
                {ACTIONS.map((a) => (
                  <li key={a} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-1 shrink-0 text-mint" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
