import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import WorkCard from '../components/WorkCard';
import CtaBand from '../sections/CtaBand';
import { projectCategories, projects, type ProjectCategory } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  return (
    <PageTransition>
      <PageHeader eyebrow="Projects" title="Work we are still running today.">
        A selection of products we designed, built, and continue to look after for clients across industries.
      </PageHeader>
      <section aria-label="Projects" className="wrap py-12 md:py-16">
        <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-x-6 gap-y-2 border-b border-rule">
          {projectCategories.map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)} className={`-mb-px min-h-[44px] border-b-2 text-[15px] transition-colors ${filter === c ? 'border-forest font-medium text-forest' : 'border-transparent text-soft hover:text-ink'}`}>
              {c}
            </button>
          ))}
        </div>
        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {shown.map((p) => (
            <li key={p.slug}>
              <WorkCard project={p} />
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </PageTransition>
  );
}
