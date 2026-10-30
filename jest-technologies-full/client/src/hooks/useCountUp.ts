import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function useCountUp(to: number, duration = 1.6) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: setValue })
    return () => c.stop()
  }, [inView, to, duration])
  return [ref, value] as const
}
