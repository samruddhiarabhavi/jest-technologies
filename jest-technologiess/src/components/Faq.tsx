import { useId, useState } from 'react';
import { Plus } from 'lucide-react';

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
    <div className="divide-y divide-rule border-y border-rule">
      {faqItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-${i}`} id={`${uid}-btn-${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex min-h-[64px] w-full items-center justify-between gap-6 py-4 text-left font-serif text-xl transition-colors hover:text-forest">
                {item.q}
                <Plus aria-hidden="true" size={20} className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
              </button>
            </h3>
            {isOpen && (
              <div id={`${uid}-${i}`} role="region" aria-labelledby={`${uid}-btn-${i}`}>
                <p className="max-w-2xl pb-6 leading-relaxed text-soft">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
