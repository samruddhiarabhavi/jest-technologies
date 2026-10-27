import StatCounter from '../components/StatCounter';
import { aboutStats } from '../data/company';

export default function StatsBand() {
  return (
    <section aria-label="Company statistics" className="section">
      <div className="wrap grid gap-12 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-4">
        {aboutStats.map((s) => (
          <StatCounter key={s.label} {...s} className="[&_p:first-child]:text-[clamp(3rem,6vw,5rem)]" />
        ))}
      </div>
    </section>
  );
}
