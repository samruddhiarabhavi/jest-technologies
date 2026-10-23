import { BadgeCheck, Database, Fingerprint, KeyRound, Lock, ScrollText, ShieldCheck } from 'lucide-react';
import Reveal from '../components/Reveal';
import { slideX, stagger, fadeUp } from '../animations/fade';
import { motion } from 'framer-motion';

const items = [
  { name: 'SOC 2', text: 'Audited controls for customer data.', icon: ShieldCheck },
  { name: 'Encryption', text: 'AES-256 at rest, TLS 1.3 in transit.', icon: Lock },
  { name: 'Role Based Access', text: 'Least privilege for people and agents.', icon: KeyRound },
  { name: 'Approval Rules', text: 'Nothing publishes without the sign-off you set.', icon: ScrollText },
  { name: 'SSO', text: 'SAML and OIDC with SCIM provisioning.', icon: Fingerprint },
  { name: 'Data Isolation', text: 'Audience data stays in your own environment.', icon: Database },
  { name: 'Brand Safety', text: 'Guardrails keep every message on-voice and on-policy.', icon: BadgeCheck },
];

function Shield() {
  const orbit = 'M200 230 m-150 0 a150 80 0 1 0 300 0 a150 80 0 1 0 -300 0';
  return (
    <svg viewBox="0 0 400 460" className="mx-auto w-full max-w-md" role="img" aria-label="Animated shield representing continuous security monitoring">
      <defs>
        <clipPath id="shield-clip">
          <path d="M200 40 L330 90 V220 C330 310 270 380 200 420 C130 380 70 310 70 220 V90 Z" />
        </clipPath>
        <linearGradient id="scan" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5CFFB1" stopOpacity="0" />
          <stop offset="1" stopColor="#5CFFB1" stopOpacity=".35" />
        </linearGradient>
      </defs>
      <path d="M200 40 L330 90 V220 C330 310 270 380 200 420 C130 380 70 310 70 220 V90 Z" fill="#101010" stroke="#5CFFB1" strokeOpacity=".7" strokeWidth="1.5" />
      <g clipPath="url(#shield-clip)">
        {Array.from({ length: 12 }, (_, r) => Array.from({ length: 10 }, (_, c) => <circle key={`${r}-${c}`} cx={80 + c * 26} cy={60 + r * 32} r="1.4" fill="#fff" opacity=".12" />))}
        <g className="scanline">
          <rect x="60" y="30" width="280" height="50" fill="url(#scan)" />
          <line x1="60" x2="340" y1="80" y2="80" stroke="#5CFFB1" />
        </g>
      </g>
      <path d="M155 225 L190 260 L250 190" fill="none" stroke="#5CFFB1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path d={orbit} fill="none" stroke="rgba(255,255,255,.08)" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="3.5" fill="#7AA9FF">
            <animateMotion dur="9s" begin={`${-i * 3}s`} repeatCount="indefinite" path={orbit} />
          </circle>
        ))}
      </g>
    </svg>
  );
}

export default function Security() {
  return (
    <section id="security" aria-labelledby="sec-title" className="section overflow-hidden border-t border-line bg-coal">
      <div className="wrap grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 id="sec-title" className="display text-[clamp(2.5rem,5.5vw,5rem)] leading-[1]">
              Built for brands that protect trust.
            </h2>
          </Reveal>
          <motion.ul variants={stagger(0.07)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {items.map((it) => (
              <motion.li key={it.name} variants={fadeUp} className="flex gap-4">
                <it.icon size={20} className="mt-0.5 shrink-0 text-mint" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">{it.name}</h3>
                  <p className="mt-1 text-sm text-mute">{it.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <Reveal variants={slideX(1)}>
          <Shield />
        </Reveal>
      </div>
    </section>
  );
}
