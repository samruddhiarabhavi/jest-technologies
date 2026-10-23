import type { Variants } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1] as const;

/** `custom` on the consuming element is used as a delay in seconds. */
const t = (d = 0, duration = 0.8) => ({ duration, ease, delay: d });

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (d: number = 0) => ({ opacity: 1, transition: t(d) }),
};
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number = 0) => ({ opacity: 1, y: 0, transition: t(d) }),
};
export const blurIn: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(14px)' },
  show: (d: number = 0) => ({ opacity: 1, y: 0, filter: 'blur(0px)', transition: t(d, 0.9) }),
};
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: (d: number = 0) => ({ opacity: 1, scale: 1, transition: t(d) }),
};
export const slideX = (dir: 1 | -1 = 1): Variants => ({
  hidden: { opacity: 0, x: 60 * dir },
  show: (d: number = 0) => ({ opacity: 1, x: 0, transition: t(d) }),
});
export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});
