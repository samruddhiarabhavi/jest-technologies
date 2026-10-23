import { useEffect } from 'react';
import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/** Spring-smoothed pointer offset in px (±strength/2). No-op on touch devices and reduced motion. */
export function useMouseParallax(strength = 24) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * strength);
      y.set((e.clientY / window.innerHeight - 0.5) * strength);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, strength, x, y]);

  return { x: sx, y: sy };
}
