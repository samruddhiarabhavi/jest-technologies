import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { industries, type IndustryArtKind } from '../data/industries';

function Art({ kind }: { kind: IndustryArtKind }) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMaxYMax slice" className="absolute inset-0 h-full w-full text-mint" aria-hidden="true">
      <g className="animate-drift transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:translate-x-4">
        {kind === 'pillars' && [0, 1, 2, 3, 4].map((i) => <rect key={i} x={190 + i * 38} y={90 - (i % 3) * 14} width="22" height={190 + (i % 3) * 14} fill="currentColor" opacity={0.08 + i * 0.02} />)}
        {kind === 'dots' && Array.from({ length: 32 }, (_, i) => <circle key={i} cx={170 + (i % 8) * 30} cy={50 + Math.floor(i / 8) * 32} r="3" fill="currentColor" opacity={i % 5 === 0 ? 0.7 : 0.18} />)}
        {kind === 'steps' && <path d="M160 240 H220 V190 H280 V140 H340 V90 H400" fill="none" stroke="currentColor" strokeWidth="2" opacity=".35" />}
        {kind === 'rings' && [30, 60, 90].map((r) => <circle key={r} cx="320" cy="150" r={r} fill="none" stroke="currentColor" opacity={0.35 - r / 400} />)}
        {kind === 'flow' && [0, 1, 2].map((i) => <path key={i} d={`M150 ${80 + i * 50} C230 ${40 + i * 50} 290 ${140 + i * 50} 400 ${80 + i * 50}`} fill="none" stroke="currentColor" opacity=".4" className="flow-dash" />)}
        {kind === 'grid' && Array.from({ length: 12 }, (_, i) => <rect key={i} x={190 + (i % 4) * 46} y={70 + Math.floor(i / 4) * 46} width="34" height="34" rx="6" fill="currentColor" opacity={i % 3 === 0 ? 0.28 : 0.07} />)}
      </g>
    </svg>
  );
}

export default function Industries() {
  return (
    <section aria-labelledby="industries-title" className="section">
      <div className="wrap">
        <Reveal>
          <h2 id="industries-title" className="display max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1]">
            Built for every kind of brand.
          </h2>
        </Reveal>
        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <li key={ind.id}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <Link to="/contact" className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl border border-line bg-card/60 p-7 transition-[background-color,border-color] duration-500 hover:border-mint/40 hover:bg-card">
                  <Art kind={ind.art} />
                  <ArrowUpRight aria-hidden="true" className="absolute right-6 top-6 -translate-x-2 translate-y-2 text-mint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" />
                  <h3 className="display relative text-4xl transition-transform duration-500 group-hover:-translate-y-1 md:text-[2.75rem]">{ind.name}</h3>
                  <p className="relative mt-3 max-w-[28ch] text-[15px] leading-relaxed text-mute transition-transform duration-500 group-hover:-translate-y-1">{ind.blurb}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
