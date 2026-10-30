import { useState } from 'react'
import { motion } from 'framer-motion'

const W = 170
const H = 58
const NODES = [
  { k: 'Frontend', s: 'React interfaces people enjoy using', x: 20, y: 10 },
  { k: 'API', s: 'REST endpoints that stay fast and documented', x: 270, y: 105 },
  { k: 'Services', s: 'Business logic, queues and integrations', x: 20, y: 205 },
  { k: 'Database', s: 'MongoDB and PostgreSQL, modelled with care', x: 270, y: 305 },
  { k: 'AI', s: 'Models and LLMs where they add real value', x: 20, y: 400 },
]
type NodeT = (typeof NODES)[number]
const link = (a: NodeT, b: NodeT) => {
  const x1 = a.x + W / 2, y1 = a.y + H, x2 = b.x + W / 2, y2 = b.y, ym = (y1 + y2) / 2
  return `M${x1} ${y1} C${x1} ${ym} ${x2} ${ym} ${x2} ${y2}`
}
const CHIPS = [
  ['top-[2%] right-[2%]', 'idea → product'],
  ['top-[27%] left-[3%]', 'POST /api/ideas'],
  ['top-[52%] right-[3%]', '{ status: "live" }'],
  ['top-[73%] left-[3%]', 'model.predict(x)'],
  ['bottom-[1%] right-[3%]', 'deploy --scale'],
]

export default function ArchViz() {
  const [active, setActive] = useState(0)
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  return (
    <div className="relative rounded-[2rem] border border-line bg-white/70 p-4 shadow-[0_30px_80px_-40px_rgba(20,33,61,.35)] sm:p-6">
      <div className="grid-bg absolute inset-0 rounded-[2rem] opacity-70" aria-hidden="true" />
      <div className="relative">
        <svg viewBox="0 0 460 470" className="w-full" role="img" aria-label="System architecture: Frontend to API to Services to Database to AI">
          {NODES.slice(0, -1).map((n, i) => {
            const d = link(n, NODES[i + 1])
            return (
              <g key={i}>
                <path d={d} fill="none" stroke="#14213D" strokeOpacity=".25" strokeWidth="2" className="flow" />
                {!reduce && (
                  <circle r="4.5" fill="#FF5A1F">
                    <animateMotion dur="2.8s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={d} />
                  </circle>
                )}
              </g>
            )
          })}
          {NODES.map((n, i) => (
            <motion.g
              key={n.k}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              tabIndex={0}
              style={{ cursor: 'pointer', outline: 'none' }}
            >
              <rect x={n.x} y={n.y} width={W} height={H} rx="14" fill={active === i ? '#FFE3D6' : '#fff'} stroke={active === i ? '#FF5A1F' : '#14213D'} strokeWidth="2" />
              <text x={n.x + 16} y={n.y + 25} fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="19" fill="#14213D">{n.k}</text>
              <text x={n.x + 16} y={n.y + 44} fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="#56627A">{`0${i + 1} / layer`}</text>
              <circle cx={n.x + W - 18} cy={n.y + 18} r="5" fill={active === i ? '#FF5A1F' : '#D9D6CB'} />
            </motion.g>
          ))}
        </svg>
        {CHIPS.map(([pos, text], i) => (
          <motion.span
            key={text}
            className={`pointer-events-none absolute hidden rounded-lg bg-ink px-2.5 py-1 font-mono text-[11px] text-paper sm:block ${pos}`}
            animate={reduce ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {text}
          </motion.span>
        ))}
      </div>
      <p className="relative mt-2 min-h-[3rem] text-sm text-mute" aria-live="polite">
        <span className="font-semibold text-ink">{NODES[active].k}: </span>{NODES[active].s}
      </p>
    </div>
  )
}
