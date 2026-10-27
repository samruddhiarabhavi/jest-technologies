import { Link } from 'react-router-dom';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" aria-label="Jest Technologies home" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded bg-forest font-serif text-xl leading-none text-paper">
        J
      </span>
      <span className="font-serif text-xl font-medium tracking-tight">Jest Technologies</span>
    </Link>
  );
}
