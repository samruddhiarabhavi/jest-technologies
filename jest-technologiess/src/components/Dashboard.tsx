import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Activity, Bot, Gauge, LayoutDashboard, Settings, Wallet } from 'lucide-react';

const FEED = [
  ['Campaign Agent', 'Shifted budget to 5 top ad sets'],
  ['Content Agent', 'Drafted 24 ad variations'],
  ['SEO Agent', 'Fixed 18 page title issues'],
  ['Social Agent', 'Scheduled 32 posts for next week'],
  ['Audience Agent', 'Refreshed 4 customer segments'],
  ['Analytics Agent', 'Published weekly growth report'],
] as const;

const W = 400;
const H = 140;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const linePath = (pts: number[]) => pts.map((v, i) => `${i ? 'L' : 'M'}${((i / (pts.length - 1)) * W).toFixed(1)} ${(H - v).toFixed(1)}`).join(' ');

function Kpi({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl border border-line bg-panel p-4">
      <p className="text-xs text-mute">{label}</p>
      <p className="display mt-2 text-2xl tabular-nums">{value}</p>
      <p className="mt-1 text-xs text-mint">{delta}</p>
    </div>
  );
}

export default function Dashboard() {
  const reduce = useReducedMotion();
  const [series, setSeries] = useState([50, 62, 55, 74, 68, 86, 78, 96, 90, 108, 100, 118, 112, 126]);
  const [bars, setBars] = useState([64, 42, 78, 30, 55, 70]);
  const [health, setHealth] = useState(94);
  const [agents, setAgents] = useState(24);
  const [feed, setFeed] = useState(() => FEED.slice(0, 4).map((f, i) => ({ id: i, who: f[0], what: f[1] })));

  useEffect(() => {
    if (reduce) return;
    let n = 4;
    const id = window.setInterval(() => {
      setSeries((s) => [...s.slice(1), clamp(s[s.length - 1] + (Math.random() - 0.4) * 22, 40, 130)]);
      setBars((b) => b.map((v) => clamp(v + (Math.random() - 0.5) * 22, 15, 90)));
      setHealth((h) => clamp(h + (Math.random() - 0.5) * 2, 90, 98));
      setAgents((a) => clamp(a + (Math.random() > 0.5 ? 1 : -1), 22, 26));
      const [who, what] = FEED[n % FEED.length];
      setFeed((f) => [{ id: n++, who, what }, ...f].slice(0, 4));
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduce]);

  const last = series[series.length - 1];
  const volume = `${(last * 0.0245).toFixed(2)}M`;
  const r = 44;
  const circ = 2 * Math.PI * r;

  return (
    <div role="group" aria-label="Jest Technologies dashboard preview" className="overflow-hidden rounded-2xl border border-white/10 bg-coal shadow-[0_40px_120px_-30px_rgba(92,255,177,.18)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-xs text-mute">jesttechnologies.app / overview</span>
      </div>
      <div className="flex">
        <div className="hidden w-14 shrink-0 flex-col items-center gap-5 border-r border-line py-5 text-mute sm:flex" aria-hidden="true">
          {[LayoutDashboard, Wallet, Bot, Gauge, Settings].map((I, i) => (
            <I key={i} size={18} className={i === 0 ? 'text-mint' : ''} />
          ))}
        </div>
        <div className="grid min-w-0 flex-1 gap-4 p-4 md:p-5 lg:grid-cols-3">
          <div className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-cols-4">
            <Kpi label="Monthly Reach" value={volume} delta="+12.4% vs last week" />
            <Kpi label="Cost per Lead" value={`$${(12.4 - (health - 94) * 0.3).toFixed(2)}`} delta="Below target" />
            <Kpi label="Automation Rate" value={`${(87 + (health - 94) * 0.4).toFixed(1)}%`} delta="+3.1 pts" />
            <Kpi label="Active Agents" value={String(agents)} delta="All operational" />
          </div>

          <div className="rounded-xl border border-line bg-panel p-4 lg:col-span-2">
            <p className="text-sm text-mute">Engagement flow (24h)</p>
            <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-40 w-full" role="img" aria-label="Line chart of engagement">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#5CFFB1" stopOpacity=".25" />
                  <stop offset="1" stopColor="#5CFFB1" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[35, 70, 105].map((y) => <line key={y} x1="0" x2={W} y1={y} y2={y} stroke="rgba(255,255,255,.06)" />)}
              <motion.path animate={{ d: `${linePath(series)} L${W} ${H} L0 ${H} Z` }} transition={{ duration: 0.9 }} fill="url(#area)" />
              <motion.path animate={{ d: linePath(series) }} transition={{ duration: 0.9 }} fill="none" stroke="#5CFFB1" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-panel p-4">
            <p className="self-start text-sm text-mute">Campaign Health</p>
            <svg viewBox="0 0 120 120" className="mt-2 h-36 w-36" role="img" aria-label={`Campaign health ${Math.round(health)} out of 100`}>
              <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="8" />
              <motion.circle cx="60" cy="60" r={r} fill="none" stroke="#5CFFB1" strokeWidth="8" strokeLinecap="round" strokeDasharray={circ} initial={{ strokeDashoffset: circ }} animate={{ strokeDashoffset: circ * (1 - health / 100) }} transition={{ duration: 0.9 }} transform="rotate(-90 60 60)" />
              <text x="60" y="66" textAnchor="middle" fontSize="24" fill="#ECEBE6" fontFamily="Space Grotesk, sans-serif">
                {Math.round(health)}
              </text>
            </svg>
          </div>

          <div className="rounded-xl border border-line bg-panel p-4">
            <p className="text-sm text-mute">Conversions by channel</p>
            <svg viewBox="0 0 240 110" className="mt-3 h-32 w-full" role="img" aria-label="Bar chart of conversions by channel">
              {bars.map((v, i) => (
                <motion.rect key={i} x={8 + i * 38} width="22" rx="4" fill={i % 3 === 1 ? '#7AA9FF' : '#5CFFB1'} fillOpacity=".8" animate={{ y: 110 - v, height: v }} transition={{ duration: 0.8 }} />
              ))}
            </svg>
          </div>

          <div className="rounded-xl border border-line bg-panel p-4 lg:col-span-2">
            <p className="flex items-center gap-2 text-sm text-mute">
              <Activity size={14} aria-hidden="true" /> Agent activity
            </p>
            <ul className="mt-3 space-y-2" aria-live="off">
              <AnimatePresence initial={false}>
                {feed.map((f) => (
                  <motion.li key={f.id} layout initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center justify-between gap-4 rounded-lg bg-white/[0.03] px-3 py-2 text-sm">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                      {f.who}
                    </span>
                    <span className="truncate text-mute">{f.what}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
