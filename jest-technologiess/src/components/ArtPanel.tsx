import type { ProjectCategory } from '../data/projects';

const F = '#1F4D3A';
const C = '#B0502D';
const P = '#F7F4EE';

const bg: Record<string, string> = { hero: '#E2D9C6', Web: '#CBD8CE', Mobile: '#EBCDBE', CRM: '#E2D9C6', AI: '#CBD8CE', Cloud: '#EBCDBE' };

/** Flat geometric artwork. Decorative only, so hidden from assistive tech. */
export default function ArtPanel({ kind, className = '' }: { kind: ProjectCategory | 'hero'; className?: string }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden ${className}`} style={{ background: bg[kind] }}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {kind === 'hero' && (
          <>
            <path d="M70 300 V150 a80 80 0 0 1 160 0 V300 Z" fill={F} />
            <circle cx="290" cy="95" r="52" fill={C} />
            <rect x="250" y="170" width="110" height="130" fill={P} />
            <circle cx="305" cy="235" r="26" fill="#CBD8CE" />
            <line x1="0" y1="262" x2="400" y2="262" stroke={F} strokeWidth="1.5" />
          </>
        )}
        {kind === 'Web' && (
          <>
            <rect x="60" y="55" width="250" height="170" rx="6" fill={P} />
            <rect x="60" y="55" width="250" height="26" rx="6" fill={F} />
            {[0, 1, 2].map((i) => <rect key={i} x={80 + i * 74} y="104" width="60" height="50" fill="#E2D9C6" />)}
            <rect x="80" y="172" width="170" height="8" fill="#D8D0C0" />
            <circle cx="320" cy="215" r="44" fill={C} />
          </>
        )}
        {kind === 'Mobile' && (
          <>
            <rect x="140" y="30" width="120" height="240" rx="18" fill={F} />
            <rect x="152" y="52" width="96" height="196" rx="8" fill={P} />
            {[0, 1, 2].map((i) => <rect key={i} x="162" y={68 + i * 54} width="76" height="40" rx="4" fill={i === 1 ? C : '#E2D9C6'} />)}
            <circle cx="70" cy="70" r="30" fill="#CBD8CE" />
          </>
        )}
        {kind === 'CRM' && (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i}>
                <rect x="60" y={50 + i * 44} width="280" height="32" fill={i % 2 ? P : '#F0EADD'} />
                <circle cx="82" cy={66 + i * 44} r="8" fill={i === 2 ? C : F} />
                <rect x="104" y={61 + i * 44} width={120 - i * 12} height="10" fill="#D8D0C0" />
              </g>
            ))}
          </>
        )}
        {kind === 'AI' && (
          <>
            <circle cx="140" cy="150" r="90" fill={F} />
            {Array.from({ length: 20 }, (_, i) => <circle key={i} cx={230 + (i % 5) * 30} cy={70 + Math.floor(i / 5) * 50} r="5" fill={i % 7 === 0 ? C : F} opacity={i % 7 === 0 ? 1 : 0.5} />)}
            <circle cx="140" cy="150" r="34" fill={P} />
          </>
        )}
        {kind === 'Cloud' && (
          <>
            <ellipse cx="200" cy="215" rx="140" ry="30" fill={F} />
            <ellipse cx="200" cy="165" rx="110" ry="26" fill={P} />
            <ellipse cx="200" cy="118" rx="80" ry="22" fill={C} />
            <ellipse cx="200" cy="76" rx="48" ry="16" fill={F} />
          </>
        )}
      </svg>
    </div>
  );
}
