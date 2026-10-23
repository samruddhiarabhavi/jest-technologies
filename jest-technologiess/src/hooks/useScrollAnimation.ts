import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation<T extends Element = HTMLDivElement>(opts: { once?: boolean; amount?: number } = {}) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: opts.once ?? true, amount: opts.amount ?? 0.3 });
  return { ref, inView };
}
