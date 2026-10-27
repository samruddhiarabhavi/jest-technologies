import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ease } from '../animations/fade';

export const faqItems = [
  { q: 'How soon can a project start?', a: 'Most projects begin within two to three weeks of signing. A short discovery phase comes first so the plan is based on facts, not guesses.' },
  { q: 'How do you price projects?', a: 'We offer fixed-scope pricing for well-defined work and monthly team pricing for ongoing products. Every proposal lists its assumptions and risks.' },
  { q: 'Who owns the code?', a: 'You do. All source code and documentation are yours at handover, and we work in repositories you control.' },
  { q: 'Do you provide support after launch?', a: 'Yes. We offer monitored support plans with agreed response times, plus a team to keep improving the product.' },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${uid}-${i}`}
                id={`${uid}-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[72px] w-full items-center justify-between gap-6 py-4 text-left text-lg transition-colors hover:text-mint md:text-xl"
              >
                {item.q}
                <Plus aria-hidden="true" size={20} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-mint' : ''}`} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div id={`${uid}-${i}`} role="region" aria-labelledby={`${uid}-btn-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }} className="overflow-hidden">
                  <p className="max-w-2xl pb-7 leading-relaxed text-mute">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
