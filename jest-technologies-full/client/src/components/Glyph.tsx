import type { ReactNode } from 'react'
import type { GlyphKind } from '../types'

// Small abstract line illustrations. Wrap in an element with the `group` class for hover motion.
const A = '#FF5A1F'
const P = '#F6F4EE'
const fb = '[transform-box:fill-box]'

export default function Glyph({ kind, className = '' }: { kind: GlyphKind; className?: string }) {
  const shapes: Record<GlyphKind, ReactNode> = {
    web: (
      <>
        <rect x="8" y="6" width="144" height="88" rx="9" />
        <path d="M8 26h144" />
        <circle cx="19" cy="16" r="2.5" fill={A} stroke="none" />
        <circle cx="29" cy="16" r="2.5" fill="currentColor" stroke="none" opacity=".3" />
        <rect className={`origin-left ${fb} transition-transform duration-500 group-hover:scale-x-[1.4]`} x="20" y="38" width="56" height="9" rx="4.5" fill={A} stroke="none" />
        <rect x="20" y="54" width="100" height="6" rx="3" fill="currentColor" opacity=".18" stroke="none" />
        <rect x="20" y="66" width="76" height="6" rx="3" fill="currentColor" opacity=".18" stroke="none" />
        <rect x="104" y="38" width="36" height="9" rx="4.5" />
      </>
    ),
    mobile: (
      <>
        <rect x="52" y="4" width="56" height="92" rx="10" />
        <path d="M72 12h16" />
        {[[62, 64, 20], [76, 50, 34], [90, 58, 26]].map(([x, y, h], i) => (
          <rect key={i} className={`origin-bottom ${fb} transition-transform duration-500 group-hover:scale-y-[1.5]`} x={x} y={y} width="8" height={h} rx="3" fill={i === 1 ? A : 'currentColor'} opacity={i === 1 ? 1 : 0.25} stroke="none" />
        ))}
      </>
    ),
    ai: (
      <>
        <g className="opacity-30 transition-opacity duration-500 group-hover:opacity-100" stroke={A}>
          <path d="M30 50L80 20M30 50L80 50M30 50L80 80M80 20L130 50M80 50L130 50M80 80L130 50" />
        </g>
        {[[30, 50], [80, 20], [80, 50], [80, 80], [130, 50]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill={P} />
        ))}
        <circle cx="130" cy="50" r="3.5" fill={A} stroke="none" />
      </>
    ),
    api: (
      <g fontFamily="JetBrains Mono, monospace" fontSize="13" stroke="none">
        <text x="10" y="30" fill="currentColor">GET /orders</text>
        <text x="10" y="54" fill={A}>200 OK</text>
        <text x="10" y="78" fill="currentColor" className="opacity-30 transition-opacity duration-500 group-hover:opacity-100">{'{ id: 42 }'}</text>
      </g>
    ),
    flow: (
      <>
        <rect x="6" y="36" width="36" height="28" rx="6" />
        <rect x="62" y="36" width="36" height="28" rx="6" />
        <rect x="118" y="36" width="36" height="28" rx="6" />
        <path d="M42 50h20M98 50h20" />
        <circle className="transition-transform duration-700 group-hover:translate-x-[112px]" cx="24" cy="50" r="5" fill={A} stroke="none" />
      </>
    ),
    cloud: (
      <>
        <path d="M80 52l56 18-56 18-56-18z" fill={P} />
        <path className="transition-transform duration-500 group-hover:-translate-y-1.5" d="M80 34l56 18-56 18-56-18z" fill={P} />
        <path className="transition-transform duration-500 group-hover:-translate-y-3" d="M80 16l56 18-56 18-56-18z" fill="#FFE3D6" stroke={A} />
      </>
    ),
    chart: (
      <>
        <path d="M10 90h140" />
        {[[20, 60, 30], [50, 48, 42], [80, 66, 24], [110, 36, 54]].map(([x, y, h], i) => (
          <rect key={i} x={x} y={y} width="16" height={h} rx="3" fill="currentColor" opacity=".14" stroke="none" />
        ))}
        <path className="transition-[stroke-dashoffset] duration-700 [stroke-dasharray:150] [stroke-dashoffset:70] group-hover:[stroke-dashoffset:0]" d="M16 64L47 44L77 58L108 28L140 14" stroke={A} strokeWidth="3" />
      </>
    ),
    chat: (
      <>
        <rect x="8" y="10" width="86" height="28" rx="12" />
        <rect x="66" y="48" width="86" height="28" rx="12" fill={A} stroke="none" />
        <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" fill="currentColor" stroke="none">
          <circle cx="20" cy="90" r="3" /><circle cx="30" cy="90" r="3" /><circle cx="40" cy="90" r="3" />
        </g>
      </>
    ),
  }
  return (
    <svg viewBox="0 0 160 100" className={'overflow-visible ' + className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {shapes[kind]}
    </svg>
  )
}
