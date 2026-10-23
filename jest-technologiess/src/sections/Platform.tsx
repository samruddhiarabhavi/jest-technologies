import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Dashboard from '../components/Dashboard';
import Reveal from '../components/Reveal';
import { platformTabs, type PlatformTabId } from '../data/platform';
import { ease } from '../animations/fade';

function TabVisual({ id }: { id: PlatformTabId }) {
  const ring = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true">
      {id === 'agents' && (
        <>
          <circle cx="240" cy="150" r="100" fill="none" stroke="rgba(255,255,255,.1)" />
          <g className="orbit">
            {ring.map((i) => {
              const a = (i / 6) * Math.PI * 2;
              return <circle key={i} cx={240 + Math.cos(a) * 100} cy={150 + Math.sin(a) * 100} r="9" fill="#111" stroke="#5CFFB1" />;
            })}
          </g>
          <circle cx="240" cy="150" r="26" fill="#5CFFB1" fillOpacity=".12" stroke="#5CFFB1" />
          <circle cx="240" cy="150" r="5" fill="#5CFFB1" />
        </>
      )}
      {id === 'campaigns' && (
        <>
          {[40, 150, 260, 370].map((x, i) => (
            <rect key={x} x={x} y={i % 2 ? 150 : 90} width="80" height="56" rx="12" fill="#111" stroke={i === 3 ? '#5CFFB1' : 'rgba(255,255,255,.15)'} />
          ))}
          <path d="M120 118 C135 118 135 178 150 178 M230 178 C245 178 245 118 260 118 M340 118 C355 118 355 178 370 178" fill="none" stroke="#5CFFB1" strokeOpacity=".6" className="flow-dash" />
          <circle r="4" fill="#5CFFB1">
            <animateMotion dur="4s" repeatCount="indefinite" path="M120 118 C135 118 135 178 150 178 L230 178 C245 178 245 118 260 118 L340 118 C355 118 355 178 370 178" />
          </circle>
        </>
      )}
      {id === 'automations' &&
        [50, 110, 170, 230].map((y, i) => (
          <g key={y}>
            <rect x="50" y={y - 20} width="380" height="42" rx="12" fill="#111" stroke="rgba(255,255,255,.1)" />
            <rect x="70" y={y - 4} width={[170, 130, 200, 150][i]} height="8" rx="4" fill="rgba(255,255,255,.18)" />
            <rect x="370" y={y - 10} width="40" height="22" rx="11" fill="#5CFFB1" fillOpacity=".25" stroke="#5CFFB1" />
            <circle cy={y + 1} r="8" fill="#5CFFB1">
              <animate attributeName="cx" values="382;398;398;382" keyTimes="0;.2;.7;1" dur={`${3 + i}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      {id === 'analytics' && (
        <>
          {[60, 100, 80, 140, 110, 170, 130].map((h, i) => (
            <rect key={i} x={50 + i * 58} y={260 - h} width="30" height={h} rx="6" fill="#7AA9FF" fillOpacity=".35" />
          ))}
          <motion.path d="M60 200 L118 170 L176 185 L234 120 L292 140 L350 80 L408 60" fill="none" stroke="#5CFFB1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease }} />
        </>
      )}
      {id === 'integrations' && (
        <>
          {ring.map((i) => {
            const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
            const x = 240 + Math.cos(a) * 130;
            const y = 150 + Math.sin(a) * 100;
            return (
              <g key={i}>
                <line x1="240" y1="150" x2={x} y2={y} stroke="#5CFFB1" strokeOpacity=".5" className="flow-dash" />
                <rect x={x - 26} y={y - 14} width="52" height="28" rx="8" fill="#111" stroke="rgba(255,255,255,.2)" />
              </g>
            );
          })}
          <circle cx="240" cy="150" r="22" fill="#5CFFB1" fillOpacity=".15" stroke="#5CFFB1" />
        </>
      )}
    </svg>
  );
}

export default function Platform() {
  const [active, setActive] = useState<PlatformTabId>('agents');
  const tab = platformTabs.find((t) => t.id === active) ?? platformTabs[0];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    const next = platformTabs[(i + dir + platformTabs.length) % platformTabs.length];
    setActive(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <section aria-labelledby="platform-title" className="section">
      <div className="wrap">
        <Reveal>
          <h2 id="platform-title" className="display max-w-4xl text-[clamp(2.5rem,6.5vw,5.75rem)] leading-[1]">
            One intelligence layer.
            <br />
            Every marketing workflow.
          </h2>
        </Reveal>

        <div role="tablist" aria-label="Platform capabilities" className="mt-14 flex gap-1 overflow-x-auto pb-2 [scrollbar-width:none]">
          {platformTabs.map((t, i) => (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={active === t.id}
              aria-controls="platform-panel"
              tabIndex={active === t.id ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`relative shrink-0 rounded-full px-5 py-3 text-sm transition-colors ${active === t.id ? 'text-bone' : 'text-mute hover:text-bone'}`}
            >
              {active === t.id && <motion.span layoutId="platform-tab" transition={{ type: 'spring', stiffness: 400, damping: 34 }} className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.08]" />}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <div id="platform-panel" role="tabpanel" aria-labelledby={`tab-${tab.id}`} className="mt-6 grid overflow-hidden rounded-3xl border border-line bg-coal lg:grid-cols-2">
          <motion.div key={`${tab.id}-text`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }} className="p-8 md:p-12">
            <h3 className="display text-3xl leading-tight md:text-4xl">{tab.title}</h3>
            <p className="mt-5 max-w-md leading-relaxed text-mute">{tab.body}</p>
            <ul className="mt-8 space-y-3">
              {tab.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15px]">
                  <Check size={16} className="text-mint" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div key={`${tab.id}-art`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease }} className="min-h-[260px] border-t border-line bg-[radial-gradient(circle_at_50%_40%,rgba(92,255,177,.07),transparent_65%)] p-6 lg:border-l lg:border-t-0">
            <TabVisual id={tab.id} />
          </motion.div>
        </div>

        <Reveal className="mt-24">
          <Dashboard />
        </Reveal>
      </div>
    </section>
  );
}
