import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ease } from '../animations/fade';

export const faqItems = [
  { q: 'How long does it take to go live?', a: 'Most teams launch their first automated campaign within two weeks. We connect your ad and analytics accounts read-only first, then enable actions one channel at a time.' },
  { q: 'Can we approve what the agents publish?', a: 'Yes. Every action can run in suggest, approve, or auto mode, and your brand rules always apply.' },
  { q: 'Does Jest Technologies train models on our data?', a: 'No. Your audience and performance data stays in your isolated environment and is never used to train shared models.' },
  { q: 'Which tools do you integrate with?', a: 'Ad platforms, analytics, CRM, email, ecommerce, and chat tools, including Google Ads, Meta, HubSpot, Shopify, and Slack.' },
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
