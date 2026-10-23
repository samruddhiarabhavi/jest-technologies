import { useCountUp } from '../hooks/useCountUp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function StatCounter({ value, label, prefix = '', suffix = '', decimals = 0, className = '' }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLDivElement>({ amount: 0.6 });
  const display = useCountUp(value, { start: inView, decimals });
  const final = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return (
    <div ref={ref} className={className}>
      <p className="display text-[clamp(3.5rem,8vw,7rem)] leading-none tabular-nums">
        <span className="sr-only">{final}</span>
        <span aria-hidden="true">
          {prefix}
          {display}
          <span className="text-mint">{suffix}</span>
        </span>
      </p>
      <p className="mt-4 text-base text-mute">{label}</p>
    </div>
  );
}
