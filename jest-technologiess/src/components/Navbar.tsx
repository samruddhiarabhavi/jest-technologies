import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Insights', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

const isActive = (pathname: string, to: string) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="wrap flex h-[68px] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.label} to={l.to} className="nav-link" aria-current={isActive(pathname, l.to) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button to="/contact">Request a proposal</Button>
        </div>
        <button type="button" className="flex h-11 items-center gap-2 rounded-md border border-rule px-3 text-sm lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-rule bg-paper lg:hidden">
          <ul className="wrap py-2">
            {navLinks.map((l) => (
              <li key={l.label} className="border-b border-rule last:border-0">
                <Link to={l.to} aria-current={isActive(pathname, l.to) ? 'page' : undefined} className="flex min-h-[52px] items-center font-serif text-xl aria-[current=page]:text-forest">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Button to="/contact" className="w-full">
                Request a proposal
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
