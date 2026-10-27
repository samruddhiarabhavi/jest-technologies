import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { blurIn } from '../animations/fade';

interface Props {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, eyebrow, children }: Props) {
  return (
    <header className="wrap pt-40 md:pt-52">
      {eyebrow && (
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 text-sm tracking-[0.14em] text-mint">
            <span className="h-px w-8 bg-mint" aria-hidden="true" />
            {eyebrow.toUpperCase()}
          </p>
        </Reveal>
      )}
      <Reveal variants={blurIn}>
        <h1 className="display max-w-5xl text-[clamp(2.75rem,7vw,6rem)] leading-[0.98]">{title}</h1>
      </Reveal>
      {children && (
        <Reveal delay={0.15} className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">
          {children}
        </Reveal>
      )}
    </header>
  );
}
