import { useCountUp } from '../hooks/useCountUp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  size?: 'md' | 'sm';
  className?: string;
}

export default function StatCounter({ value, label, prefix = '', suffix = '', decimals = 0, size = 'md', className = '' }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLDivElement>({ amount: 0.6 });
  const display = useCountUp(value, { start: inView, decimals });
  const final = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return (
    <div ref={ref} className={className}>
      <p className={`h-serif leading-none tabular-nums ${size === 'sm' ? 'text-4xl' : 'text-5xl md:text-6xl'}`}>
        <span className="sr-only">{final}</span>
        <span aria-hidden="true">
          {prefix}
          {display}
          {suffix}
        </span>
      </p>
      <p className="mt-3 text-[15px] text-soft">{label}</p>
    </div>
  );
}
