import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface Props {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, eyebrow, children }: Props) {
  return (
    <header className="border-b border-rule">
      <div className="wrap pb-14 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          {eyebrow && <p className="mb-4 text-sm font-medium text-clay">{eyebrow}</p>}
          <h1 className="h-serif max-w-4xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.08]">{title}</h1>
          {children && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">{children}</p>}
        </Reveal>
      </div>
    </header>
  );
}
