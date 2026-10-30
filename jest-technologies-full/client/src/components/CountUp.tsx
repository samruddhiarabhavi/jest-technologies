import useCountUp from '../hooks/useCountUp'

interface CountUpProps {
  to: number
  decimals?: number
  suffix?: string
  prefix?: string
}

export default function CountUp({ to, decimals = 0, suffix = '', prefix = '' }: CountUpProps) {
  const [ref, v] = useCountUp(to)
  return <span ref={ref}>{prefix}{v.toFixed(decimals)}{suffix}</span>
}
