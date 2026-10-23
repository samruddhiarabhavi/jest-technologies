import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp } from '../animations/fade';

interface Props {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  amount?: number;
}

/** Viewport-triggered reveal. Reduced motion is handled globally by MotionConfig. */
export default function Reveal({ children, variants = fadeUp, delay = 0, className, amount = 0.25 }: Props) {
  return (
    <motion.div className={className} variants={variants} custom={delay} initial="hidden" whileInView="show" viewport={{ once: true, amount }}>
      {children}
    </motion.div>
  );
}
