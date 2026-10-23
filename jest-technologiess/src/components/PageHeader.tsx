import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { blurIn } from '../animations/fade';

export default function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className="wrap pt-40 md:pt-52">
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
