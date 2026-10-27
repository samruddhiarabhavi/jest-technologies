import { Link } from 'react-router-dom';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" aria-label="Jest Technologies home" className={`group inline-flex items-center gap-3 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" className="transition-transform duration-500 group-hover:rotate-[-8deg]">
        <rect width="32" height="32" rx="9" fill="#111" stroke="rgba(255,255,255,.14)" />
        <path d="M11 9h10v9a5 5 0 0 1-10 0" fill="none" stroke="#5CFFB1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="23.5" r="0" fill="#5CFFB1" />
      </svg>
      <span className="leading-none">
        <span className="display block text-lg tracking-wide text-bone">JEST</span>
        <span className="mt-0.5 block text-[10px] tracking-[0.32em] text-mute">TECHNOLOGIES</span>
      </span>
    </Link>
  );
}
