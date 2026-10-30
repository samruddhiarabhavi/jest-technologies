import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import { budgets, projectTypes, site } from '../data/site'
import type { ContactPayload } from '../types'

const API = import.meta.env.VITE_API_URL || ''

export default function Contact() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as unknown as ContactPayload
    setState('sending')
    try {
      const r = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const j: { message?: string } = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(j.message || 'Something went wrong. Please try again.')
      setState('done')
      form.reset()
    } catch (err) {
      setMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setState('error')
    }
  }

  const details: [string, string, string?][] = [
    ['Email', site.email, `mailto:${site.email}`],
    ['Phone', site.phone, `tel:${site.phone.replace(/\s/g, '')}`],
    ['Location', site.location],
    ['LinkedIn', 'Connect with us', site.linkedin],
    ['GitHub', 'See our code', site.github],
  ]

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHead eyebrow="Contact" title="Tell us what you're building.">
            Share a few details and we'll reply with next steps.
          </SectionHead>
          <ul className="mt-10 space-y-4">
            {details.map(([l, v, h]) => (
              <li key={l} className="flex gap-4 border-t border-line pt-4">
                <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-widest text-mute">{l}</span>
                {h ? <a href={h} className="font-medium hover:text-accent" target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{v}</a> : <span className="font-medium">{v}</span>}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={submit} className="rounded-3xl border border-line bg-white p-6 sm:p-9" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">Name
              <input name="name" required minLength={2} autoComplete="name" className="field mt-1.5" />
            </label>
            <label className="block text-sm font-medium">Email
              <input name="email" type="email" required autoComplete="email" className="field mt-1.5" />
            </label>
            <label className="block text-sm font-medium">Company
              <input name="company" autoComplete="organization" className="field mt-1.5" />
            </label>
            <label className="block text-sm font-medium">Project Type
              <select name="projectType" required defaultValue="" className="field mt-1.5">
                <option value="" disabled>Select one</option>
                {projectTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium sm:col-span-2">Budget Range
              <select name="budget" defaultValue="" className="field mt-1.5">
                <option value="">Select a range</option>
                {budgets.map((b) => <option key={b}>{b}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium sm:col-span-2">Message
              <textarea name="message" required minLength={10} rows={5} className="field mt-1.5" />
            </label>
          </div>
          {/* honeypot: real users never see or fill this */}
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
          <button type="submit" disabled={state === 'sending'} className="btn btn-accent mt-7 w-full disabled:opacity-60 sm:w-auto">
            {state === 'sending' ? 'Sending…' : "Let's Build It →"}
          </button>
          <AnimatePresence mode="wait">
            {state === 'done' && (
              <motion.p key="ok" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 rounded-xl bg-emerald-50 p-4 text-emerald-800">
                Thanks! Your message is in. We'll get back to you shortly.
              </motion.p>
            )}
            {state === 'error' && (
              <motion.p key="err" role="alert" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 rounded-xl bg-red-50 p-4 text-red-700">
                {msg}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  )
}
