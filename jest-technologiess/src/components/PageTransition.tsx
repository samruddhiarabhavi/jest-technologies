import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ease } from '../animations/fade';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      id="main"
      tabIndex={-1}
      className="outline-none"
      initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
      transition={{ duration: 0.4, ease }}
    >
      {children}
    </motion.main>
  );
}
