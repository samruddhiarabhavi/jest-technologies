import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { ease } from '../animations/fade';

export const navLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Platform', to: '/platform' },
  { label: 'Industries', to: '/industries' },
  { label: 'Resources', to: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      data-scrolled={scrolled}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled || open ? 'border-line bg-ink/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[72px]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              aria-current={pathname === l.to.split('#')[0] ? 'page' : undefined}
              className="link-underline text-sm text-mute transition-colors duration-300 hover:text-bone aria-[current=page]:text-bone"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link to="/contact" className="link-underline text-sm text-mute transition-colors hover:text-bone">
            Log in
          </Link>
          <Button to="/contact">Get Started</Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-bone md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-ink px-5 pb-10 pt-6 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease }}
          >
            <ul className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.li key={l.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i + 0.05, duration: 0.35, ease }}>
                  <Link to={l.to} className="display flex min-h-[64px] items-center border-b border-line text-3xl">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <Button to="/contact" size="lg" className="w-full">
                Get Started
              </Button>
              <Button to="/contact" variant="ghost" size="lg" arrow={false} className="w-full">
                Log in
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
