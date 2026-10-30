import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '../data/site'
import useScrolled from '../hooks/useScrolled'

export default function Navbar() {
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)
  return (
    <header className={'fixed inset-x-0 top-0 z-50 transition-all duration-300 ' + (scrolled ? 'border-b border-line bg-paper/80 py-2.5 backdrop-blur-md' : 'py-5')}>
      <div className="container-x flex items-center justify-between">
        <a href="/#home" className="flex items-baseline gap-2" aria-label="JEST Technologies home">
          <span className="font-display text-2xl font-extrabold tracking-tight">JEST<span className="text-accent">.</span></span>
          <span className="hidden text-sm font-medium text-mute sm:inline">Technologies</span>
        </a>
        <nav className="hidden items-center gap-7 text-[15px] font-medium text-mute lg:flex" aria-label="Primary">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-ink">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#contact" className="btn btn-primary hidden !py-2.5 text-sm sm:inline-flex">Start a Project →</a>
          <button
            className="grid h-11 w-11 place-items-center rounded-full ring-2 ring-inset ring-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="relative block h-3 w-5">
              <span className={'absolute left-0 h-0.5 w-5 bg-ink transition ' + (open ? 'top-1 rotate-45' : 'top-0')} />
              <span className={'absolute left-0 h-0.5 w-5 bg-ink transition ' + (open ? 'top-1 -rotate-45' : 'top-2.5')} />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-paper lg:hidden"
            aria-label="Mobile"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {nav.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-lg font-medium hover:bg-mist">{label}</a>
              ))}
              <a href="/#contact" onClick={() => setOpen(false)} className="btn btn-accent mt-2">Start a Project →</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
