import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import NetworkGraph from '../components/NetworkGraph';
import { blurIn, ease } from '../animations/fade';

const lines: { text: string; accent?: boolean }[][] = [
  [{ text: 'Marketing campaigns,' }],
  [{ text: 'running on' }, { text: 'autopilot.', accent: true }],
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  let w = 0;

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32">
      <NetworkGraph className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,transparent_18%,#000_85%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      <motion.div style={{ y, opacity }} className="wrap relative">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs tracking-[0.18em] text-mute">
          <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_10px_#5CFFB1]" />
          THE AUTONOMOUS MARKETING PLATFORM
        </motion.p>

        <h1 id="hero-title" className="display mt-8 max-w-6xl text-[clamp(3.25rem,10.5vw,10rem)] leading-[0.93]">
          {lines.map((line, li) => (
            <span key={li} className="block">
              {line.map((word) => (
                <Fragment key={word.text}>
                  <motion.span variants={blurIn} custom={0.15 + 0.14 * w++} initial="hidden" animate="show" className={`inline-block ${word.accent ? 'text-mint [text-shadow:0_0_60px_rgba(92,255,177,.35)]' : ''}`}>
                    {word.text}
                  </motion.span>{' '}
                </Fragment>
              ))}
            </span>
          ))}
        </h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease }} className="mt-8 max-w-xl text-lg leading-relaxed text-mute md:text-xl">
          Deploy intelligent AI agents that plan campaigns, create content, optimize spend, and turn scattered marketing into measurable growth.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8, ease }} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" size="lg">
            Book a Demo
          </Button>
          <Button to="/platform" variant="ghost" size="lg">
            Explore Platform
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
