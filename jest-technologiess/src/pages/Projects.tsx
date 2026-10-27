import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import FinalCTA from '../sections/FinalCTA';
import { projectCategories, projects, type ProjectCategory } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  return (
    <PageTransition>
      <PageHeader eyebrow="Projects portfolio" title="The evidence is in production.">
        A selection of products we have designed, built, and still run for clients across industries.
      </PageHeader>
      <section aria-label="Projects" className="wrap mt-16 pb-28">
        <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`min-h-[44px] rounded-full border px-5 text-sm transition-colors ${filter === c ? 'border-mint bg-mint/10 text-mint' : 'border-line text-mute hover:border-white/30 hover:text-bone'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <motion.li key={p.slug} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </ul>
      </section>
      <FinalCTA />
    </PageTransition>
  );
}
