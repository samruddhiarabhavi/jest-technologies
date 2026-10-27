import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function TextLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-1.5 font-medium underline underline-offset-4 ${light ? 'decoration-paper/40 hover:decoration-paper' : 'text-forest decoration-forest/30 hover:decoration-forest'}`}>
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
