import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Testimonial from '../components/Testimonial';
import { testimonials } from '../data/testimonials';
import { ease } from '../animations/fade';

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => setI((p) => (p + 1) % n), 7000);
    return () => window.clearInterval(id);
  }, [paused, reduce, n, i]);

  return (
    <section aria-roledescription="carousel" aria-label="Customer testimonials" className="section" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="wrap">
        <div className="overflow-hidden">
          <motion.div
            className="flex cursor-grab touch-pan-y active:cursor-grabbing"
            animate={{ x: `-${i * 100}%` }}
            transition={{ duration: 0.7, ease }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
          >
            {testimonials.map((t, idx) => (
              <div key={t.id} role="group" aria-roledescription="slide" aria-label={`${idx + 1} of ${n}`} aria-hidden={idx !== i} className="min-h-[380px] w-full shrink-0 basis-full select-none pr-4 md:min-h-[420px] md:pr-16">
                <Testimonial t={t} />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
          <div role="group" aria-label="Choose testimonial" className="flex items-center">
            {testimonials.map((t, idx) => (
              <button key={t.id} type="button" aria-label={`Show testimonial ${idx + 1}`} aria-current={idx === i} onClick={() => setI(idx)} className="grid h-11 w-8 place-items-center">
                <span className={`block h-1.5 rounded-full transition-all duration-500 ${idx === i ? 'w-8 bg-mint' : 'w-1.5 bg-white/25'}`} />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-white/40">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-white/40">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
