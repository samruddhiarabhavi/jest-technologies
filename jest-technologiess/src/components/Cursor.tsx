import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/** Decorative trailing ring. The native cursor stays visible; disabled on touch and reduced motion. */
export default function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHover(!!(e.target as Element | null)?.closest?.('a,button,[role="tab"],input,textarea'));
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [reduce, x, y]);

  if (!enabled) return null;
  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block" style={{ x: sx, y: sy }}>
      <motion.div animate={{ scale: hover ? 1.9 : 1, opacity: hover ? 0.9 : 0.5 }} className="-ml-3 -mt-3 h-6 w-6 rounded-full border border-mint" />
    </motion.div>
  );
}
