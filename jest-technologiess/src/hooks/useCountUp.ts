import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Options {
  start?: boolean;
  duration?: number;
  decimals?: number;
}

/** Counts from 0 to `target` once `start` is true. Returns a formatted string. */
export function useCountUp(target: number, { start = true, duration = 1800, decimals = 0 }: Options = {}) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (reduce) {
      setValue(target);
      return;
    }
    if (!start) {
      setValue(0);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setValue(target * (p === 1 ? 1 : 1 - Math.pow(2, -10 * p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration, reduce]);

  return value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
