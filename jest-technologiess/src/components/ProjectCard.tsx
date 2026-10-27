import type { Project, ProjectCategory } from '../data/projects';

function Art({ kind }: { kind: ProjectCategory }) {
  return (
    <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full text-mint" aria-hidden="true">
      <g className="transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:translate-x-2">
        {kind === 'Web' && (
          <>
            <rect x="90" y="30" width="220" height="130" rx="10" fill="none" stroke="currentColor" opacity=".35" />
            <line x1="90" y1="52" x2="310" y2="52" stroke="currentColor" opacity=".3" />
            {[0, 1, 2].map((i) => <rect key={i} x={106 + i * 66} y="68" width="54" height="40" rx="6" fill="currentColor" opacity={0.1 + i * 0.07} />)}
          </>
        )}
        {kind === 'Mobile' && (
          <>
            <rect x="160" y="14" width="80" height="152" rx="14" fill="none" stroke="currentColor" opacity=".4" />
            {[0, 1, 2].map((i) => <rect key={i} x="172" y={34 + i * 34} width="56" height="22" rx="5" fill="currentColor" opacity={0.12 + i * 0.08} />)}
          </>
        )}
        {kind === 'CRM' &&
          [0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="80" y={30 + i * 32} width="240" height="22" rx="6" fill="currentColor" opacity={0.08 + (i % 2) * 0.1} />
              <circle cx="96" cy={41 + i * 32} r="4" fill="currentColor" opacity=".6" />
            </g>
          ))}
        {kind === 'AI' && (
          <>
            {[60, 140, 220, 300].map((x, i) => [40, 90, 140].map((y) => <circle key={`${x}${y}`} cx={x + 20} cy={y} r="5" fill="currentColor" opacity={0.25 + i * 0.12} />))}
            <path d="M80 40 L160 90 L240 140 L320 90 M80 140 L160 90 L240 40 L320 90" fill="none" stroke="currentColor" opacity=".25" className="flow-dash" />
          </>
        )}
        {kind === 'Cloud' &&
          [0, 1, 2].map((i) => <ellipse key={i} cx="200" cy={110 - i * 26} rx={90 - i * 14} ry="16" fill="none" stroke="currentColor" opacity={0.45 - i * 0.1} />)}
      </g>
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card/70 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-mint/40">
      <div className="relative h-44 border-b border-line bg-[radial-gradient(circle_at_50%_30%,rgba(92,255,177,.08),transparent_70%)]">
        <Art kind={project.category} />
        <span className="absolute left-5 top-5 rounded-full border border-line bg-ink/60 px-3 py-1 text-xs text-mute backdrop-blur">{project.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs text-mute">
          {project.sector} · {project.year}
        </p>
        <h3 className="display mt-3 text-2xl leading-tight">{project.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-mute">{project.summary}</p>
        <p className="mt-auto border-t border-line pt-5 text-sm text-mint">{project.metric}</p>
      </div>
    </article>
  );
}
