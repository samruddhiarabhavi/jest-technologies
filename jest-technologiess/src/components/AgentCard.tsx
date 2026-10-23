import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Agent, AgentVisualKind } from '../data/agents';

function AgentVisual({ kind }: { kind: AgentVisualKind }) {
  const heights = [22, 38, 28, 46, 34, 52, 30, 44, 24, 40];
  return (
    <svg viewBox="0 0 200 64" className="h-16 w-full text-mint" aria-hidden="true">
      {kind === 'bars' &&
        heights.map((h, i) => <rect key={i} className="v-bar" style={{ animationDelay: `${i * 0.08}s` }} x={10 + i * 19} y={64 - h} width="10" height={h} rx="2" fill="currentColor" opacity={0.25 + (i % 4) * 0.2} />)}
      {kind === 'radar' && (
        <>
          {[10, 20, 30].map((r) => <circle key={r} cx="100" cy="32" r={r} fill="none" stroke="currentColor" opacity=".25" />)}
          <line className="v-spin" x1="100" y1="32" x2="100" y2="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="124" cy="22" r="2.5" fill="#7AA9FF" />
          <circle cx="82" cy="44" r="2.5" fill="#7AA9FF" />
        </>
      )}
      {kind === 'lines' && (
        <>
          {[12, 26, 40, 54].map((y, i) => <rect key={y} x="30" y={y - 3} width={[140, 110, 130, 80][i]} height="5" rx="2.5" fill="currentColor" opacity=".3" />)}
          <rect className="v-scan" x="24" y="6" width="152" height="3" rx="1.5" fill="currentColor" />
        </>
      )}
      {kind === 'checks' &&
        [14, 32, 50].map((y, i) => (
          <g key={y}>
            <rect x="30" y={y - 7} width="14" height="14" rx="4" fill="none" stroke="currentColor" opacity=".5" />
            <path className="v-blink" style={{ animationDelay: `${i * 0.3}s` }} d={`M33 ${y} l3 3 l5 -6`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="54" y={y - 2.5} width={[110, 90, 100][i]} height="5" rx="2.5" fill="currentColor" opacity=".3" />
          </g>
        ))}
      {kind === 'chat' && (
        <>
          <rect x="20" y="8" width="96" height="22" rx="11" fill="currentColor" opacity=".25" />
          <rect x="84" y="36" width="96" height="22" rx="11" fill="#7AA9FF" opacity=".3" />
          {[0, 1, 2].map((i) => <circle key={i} className="v-blink" style={{ animationDelay: `${i * 0.25}s` }} cx={110 + i * 12} cy="47" r="2.5" fill="#7AA9FF" />)}
        </>
      )}
      {kind === 'analytics' && (
        <>
          <path d="M8 52 L40 40 L72 46 L104 24 L136 30 L170 10 L192 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="v-draw" />
          <path d="M8 60 H192" stroke="currentColor" opacity=".2" />
        </>
      )}
    </svg>
  );
}

export default function AgentCard({ agent }: { agent: Agent }) {
  const [active, setActive] = useState(false);
  const Icon = agent.icon;
  return (
    <motion.article
      tabIndex={0}
      data-active={active}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group relative flex h-full flex-col rounded-2xl border bg-card/80 p-7 transition-[border-color,box-shadow,background-color] duration-500 ${
        active ? 'border-mint/50 bg-card shadow-[0_0_0_1px_rgba(92,255,177,.25),0_20px_80px_-20px_rgba(92,255,177,.35)]' : 'border-line'
      }`}
    >
      <div className="flex items-start justify-between">
        <motion.div animate={{ rotate: active ? 12 : 0, scale: active ? 1.12 : 1 }} transition={{ type: 'spring', stiffness: 260, damping: 14 }} className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-mint">
          <Icon size={20} aria-hidden="true" />
        </motion.div>
        <p className="flex items-center gap-2 text-xs text-mute">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          {agent.status}
        </p>
      </div>
      <h3 className="display mt-8 text-2xl">{agent.name}</h3>
      <p className={`mt-3 text-[15px] leading-relaxed transition-colors duration-500 ${active ? 'text-bone' : 'text-mute'}`}>{agent.description}</p>
      <div className="mt-auto pt-8">
        <AgentVisual kind={agent.visual} />
        <p className="mt-3 border-t border-line pt-3 text-xs text-mute">{agent.metric}</p>
      </div>
    </motion.article>
  );
}
