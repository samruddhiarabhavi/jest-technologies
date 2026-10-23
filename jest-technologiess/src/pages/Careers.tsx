import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { perks, roles } from '../data/careers';

export default function Careers() {
  return (
    <PageTransition>
      <PageHeader title="Help us build the autopilot for marketing.">We are a small, remote-first team solving hard problems in AI and growth. Come do the best work of your career.</PageHeader>
      <section aria-labelledby="perks-title" className="wrap mt-24">
        <h2 id="perks-title" className="display text-3xl md:text-4xl">
          How we work
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.06} className="panel h-full p-6">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="roles-title" className="wrap section">
        <h2 id="roles-title" className="display text-3xl md:text-4xl">
          Open roles
        </h2>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {roles.map((r) => (
            <li key={r.title}>
              <Link to="/contact" aria-label={`Apply for ${r.title}`} className="group flex min-h-[84px] flex-col justify-center gap-1 py-4 transition-colors hover:text-mint md:flex-row md:items-center md:justify-between">
                <span className="text-lg md:text-xl">{r.title}</span>
                <span className="flex items-center gap-4 text-sm text-mute">
                  {r.team} · {r.location}
                  <ArrowUpRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
