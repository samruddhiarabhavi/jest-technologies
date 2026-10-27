import ArtPanel from './ArtPanel';
import type { Project } from '../data/projects';

export default function WorkCard({ project, tall = false }: { project: Project; tall?: boolean }) {
  return (
    <article className="group h-full">
      <ArtPanel kind={project.category} className={`w-full rounded-md ${tall ? 'aspect-[16/9]' : 'aspect-[4/3]'}`} />
      <p className="mt-5 text-sm text-soft">
        {project.sector} · {project.category} · {project.year}
      </p>
      <h3 className="h-serif mt-1.5 text-2xl leading-snug">{project.title}</h3>
      <p className="mt-2 max-w-xl leading-relaxed text-soft">{project.summary}</p>
      <p className="mt-3 text-[15px] font-medium text-clay">{project.metric}</p>
    </article>
  );
}
