import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main id="main" tabIndex={-1} className="outline-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.main>
  );
}
