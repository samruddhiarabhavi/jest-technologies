import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeadProps {
  eyebrow: string
  title: string
  children?: ReactNode
  className?: string
}

export default function SectionHead({ eyebrow, title, children, className = '' }: SectionHeadProps) {
  return (
    <div className={'max-w-3xl ' + className}>
      <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {children && (
        <Reveal delay={0.16}><p className="mt-5 text-lg text-mute">{children}</p></Reveal>
      )}
    </div>
  )
}
