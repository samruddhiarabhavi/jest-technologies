import StatCounter from '../components/StatCounter';
import { aboutStats } from '../data/company';

export default function StatsBand() {
  return (
    <section aria-label="Company statistics" className="border-y border-rule bg-sand">
      <div className="wrap grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
        {aboutStats.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
