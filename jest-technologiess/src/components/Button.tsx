import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useMagnetic } from '../animations/magnetic';

interface Props {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'lg';
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  arrow?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function Button({ children, variant = 'primary', size = 'md', to, onClick, type = 'button', arrow = true, className = '', disabled }: Props) {
  const magnet = useMagnetic<HTMLSpanElement>(0.22);
  const base = 'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[box-shadow,background-color,border-color] duration-300 active:scale-[0.96] disabled:opacity-50';
  const sizes = size === 'lg' ? 'min-h-[52px] px-7 text-base' : 'min-h-[44px] px-5 text-sm';
  const look =
    variant === 'primary'
      ? 'bg-mint text-ink shadow-[0_0_0_1px_rgba(92,255,177,.4),0_8px_40px_-10px_rgba(92,255,177,.55)] hover:shadow-[0_0_0_1px_rgba(92,255,177,.7),0_10px_60px_-6px_rgba(92,255,177,.7)]'
      : 'border border-white/15 bg-white/[0.03] text-bone hover:border-white/40 hover:bg-white/[0.07]';
  const cls = `${base} ${sizes} ${look} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight aria-hidden="true" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
  return (
    <span ref={magnet} className="inline-block transition-transform duration-200 ease-out will-change-transform">
      {to ? (
        <Link to={to} className={cls}>
          {inner}
        </Link>
      ) : (
        <button type={type} onClick={onClick} disabled={disabled} className={cls}>
          {inner}
        </button>
      )}
    </span>
  );
}
