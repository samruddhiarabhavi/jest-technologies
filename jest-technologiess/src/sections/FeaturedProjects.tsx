import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
  return (
    <section aria-labelledby="featured-title" className="section border-t border-line">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <h2 id="featured-title" className="display max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02]">
              Work that holds up in production.
            </h2>
          </Reveal>
          <Button to="/projects" variant="ghost">
            View all projects
          </Button>
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 0.08} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
