import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ease } from '../animations/fade';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Gentle fade-up on first view. Reduced motion is handled globally by MotionConfig. */
export default function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease, delay }}>
      {children}
    </motion.div>
  );
}
