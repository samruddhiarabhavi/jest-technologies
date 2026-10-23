import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';
import { parallaxLayer } from '../animations/scroll';

const heading = "Modern marketing shouldn't run on spreadsheets.".split(' ');

function Word({ word, i, progress }: { word: string; i: number; progress: MotionValue<number> }) {
  const start = (i / heading.length) * 0.65;
  const opacity = useTransform(progress, [start, start + 0.2], [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.22em] inline-block">
      {word}
    </motion.span>
  );
}

export const stats = [
  { value: 68, suffix: '%', label: 'Less manual campaign work', decimals: 0, prefix: '' },
  { value: 3.6, suffix: 'x', label: 'Faster from launch to learning', decimals: 1, prefix: '' },
  { value: 1.9, suffix: 'B', label: 'Ad spend intelligently optimized', decimals: 1, prefix: '$' },
];

export default function Problem() {
  const reduce = useReducedMotion();
  const headRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<SVGSVGElement>(null);
  const { scrollYProgress } = useScroll({ target: headRef, offset: ['start 85%', 'end 45%'] });

  useEffect(() => {
    if (reduce || !lineRef.current) return;
    return parallaxLayer(lineRef.current, 120);
  }, [reduce]);

  return (
    <section aria-labelledby="problem-title" className="section overflow-hidden">
      <svg ref={lineRef} aria-hidden="true" viewBox="0 0 600 600" className="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] text-white/[0.06]">
        {Array.from({ length: 14 }, (_, i) => (
          <line key={i} x1="0" x2="600" y1={i * 44 + 10} y2={i * 44 + 10} stroke="currentColor" />
        ))}
        <path d="M0 460 C120 440 160 300 260 320 S420 180 600 90" fill="none" stroke="#5CFFB1" strokeOpacity=".35" strokeWidth="1.5" />
      </svg>
      <div className="wrap relative">
        <h2 id="problem-title" ref={headRef} className="display max-w-5xl text-[clamp(2.5rem,7vw,6.25rem)] leading-[1.0]">
          {reduce ? heading.join(' ') : heading.map((w, i) => <Word key={i} word={w} i={i} progress={scrollYProgress} />)}
        </h2>
        <Reveal className="mt-10 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
          Marketing teams spend thousands of hours copying data between platforms, resizing creative, building reports, and chasing approvals instead of growing the brand.
        </Reveal>
        <div className="mt-24 grid gap-14 border-t border-line pt-14 md:grid-cols-3 md:gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
