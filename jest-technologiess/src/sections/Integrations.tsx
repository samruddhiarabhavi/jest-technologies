import { useReducedMotion } from 'framer-motion';
import Reveal from '../components/Reveal';

const apps = ['Google Ads', 'Meta', 'LinkedIn', 'HubSpot', 'Shopify', 'Salesforce', 'Mailchimp', 'Slack', 'Analytics'];

export default function Integrations() {
  const reduce = useReducedMotion();
  const pts = apps.map((name, i) => {
    const a = (i / apps.length) * Math.PI * 2 - Math.PI / 2;
    return { name, x: 400 + Math.cos(a) * 290, y: 260 + Math.sin(a) * 190 };
  });
  return (
    <section aria-labelledby="int-title" className="section border-t border-line">
      <div className="wrap">
        <Reveal>
          <h2 id="int-title" className="display max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1]">
            Works with your existing stack.
          </h2>
        </Reveal>

        <Reveal className="mt-16 hidden md:block">
          <svg viewBox="0 0 800 520" className="mx-auto w-full max-w-4xl" role="img" aria-label="Jest Technologies connected to Google Ads, Meta, LinkedIn, HubSpot, Shopify, Salesforce, Mailchimp, Slack and Analytics">
            {pts.map((p, i) => {
              const next = pts[(i + 1) % pts.length];
              return (
                <g key={p.name}>
                  <line x1="400" y1="260" x2={p.x} y2={p.y} stroke="#5CFFB1" strokeOpacity=".45" className="flow-dash" />
                  <line x1={p.x} y1={p.y} x2={next.x} y2={next.y} stroke="rgba(255,255,255,.07)" />
                  {!reduce && (
                    <circle r="3" fill="#5CFFB1">
                      <animateMotion dur={`${3 + (i % 3)}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" path={`M400 260 L${p.x} ${p.y}`} />
                    </circle>
                  )}
                </g>
              );
            })}
            <circle cx="400" cy="260" r="46" fill="#111" stroke="#5CFFB1" />
            <circle cx="400" cy="260" r="46" fill="none" stroke="#5CFFB1" className="node-pulse" />
            <text x="400" y="265" textAnchor="middle" fill="#ECEBE6" fontSize="14" fontFamily="Space Grotesk, sans-serif">Jest Technologies</text>
            {pts.map((p) => (
              <g key={p.name}>
                <rect x={p.x - 60} y={p.y - 20} width="120" height="40" rx="12" fill="#141414" stroke="rgba(255,255,255,.14)" />
                <text x={p.x} y={p.y + 5} textAnchor="middle" fill="#ECEBE6" fontSize="14" fontFamily="Inter, sans-serif">{p.name}</text>
              </g>
            ))}
          </svg>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:hidden" aria-label="Integrations">
          {apps.map((a) => (
            <li key={a} className="rounded-xl border border-line bg-card/70 px-4 py-4 text-center text-sm">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
