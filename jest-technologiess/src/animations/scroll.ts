import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function registerGsap() {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

/** Reports 0..1 progress as `trigger` travels through the viewport. Returns a cleanup. */
export function scrubProgress(trigger: Element, onUpdate: (progress: number) => void, start = 'top 70%', end = 'bottom 55%') {
  const { ScrollTrigger: ST } = registerGsap();
  const st = ST.create({ trigger, start, end, scrub: true, onUpdate: (self) => onUpdate(self.progress) });
  // Fonts load after first paint and move content; recompute trigger positions once they settle.
  void document.fonts?.ready.then(() => ST.refresh());
  return () => st.kill();
}

/** Scroll-linked vertical parallax for decorative layers. Returns a cleanup. */
export function parallaxLayer(el: Element, distance = 80) {
  const { gsap: g } = registerGsap();
  const tween = g.fromTo(
    el,
    { y: -distance / 2 },
    { y: distance / 2, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
  );
  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}
