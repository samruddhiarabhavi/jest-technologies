import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { perks, roles } from '../data/careers';

export default function Careers() {
  return (
    <PageTransition>
      <PageHeader eyebrow="Careers" title="Come build software with us.">
        We are engineers and designers who care about craft. If that sounds like you, we would like to hear from you.
      </PageHeader>
      <section aria-labelledby="perks-title" className="wrap py-14 md:py-20">
        <h2 id="perks-title" className="h-serif text-[clamp(1.75rem,3vw,2.5rem)]">
          Why people stay
        </h2>
        <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {perks.map((p) => (
            <div key={p.title} className="border-t border-rule pt-4">
              <dt className="h-serif text-xl">{p.title}</dt>
              <dd className="mt-2 leading-relaxed text-soft">{p.text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section aria-labelledby="roles-title" className="border-t border-rule bg-sand/50 py-14 md:py-20">
        <div className="wrap">
          <h2 id="roles-title" className="h-serif text-[clamp(1.75rem,3vw,2.5rem)]">
            Open roles
          </h2>
          <ul className="mt-10 border-t border-rule">
            {roles.map((r) => (
              <li key={r.title} className="border-b border-rule">
                <Link to="/contact" aria-label={`Apply for ${r.title}`} className="group grid gap-1 py-5 md:grid-cols-[1.6fr_1fr_1fr_auto] md:items-center md:gap-6">
                  <span className="h-serif text-xl group-hover:text-forest">{r.title}</span>
                  <span className="text-[15px] text-soft">{r.team}</span>
                  <span className="text-[15px] text-soft">{r.location}</span>
                  <span aria-hidden="true" className="hidden text-forest md:block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
