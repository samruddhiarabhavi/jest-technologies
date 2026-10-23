import { Link } from 'react-router-dom';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" aria-label="Jest Technologies home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true" className="transition-transform duration-500 group-hover:rotate-[-8deg]">
        <rect width="32" height="32" rx="9" fill="#111" stroke="rgba(255,255,255,.14)" />
        <path d="M22 12a7 7 0 1 0 1.5 5" fill="none" stroke="#5CFFB1" strokeWidth="2.4" strokeLinecap="round" /><circle cx="23" cy="11" r="2" fill="#5CFFB1" />
      </svg>
      <span className="display text-[1.15rem] text-bone">Jest Technologies</span>
    </Link>
  );
}
