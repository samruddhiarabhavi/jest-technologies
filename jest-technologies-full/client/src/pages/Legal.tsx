import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

const copy: Record<'privacy' | 'terms', { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'We collect only the information you submit through the contact form (name, email, company, project details) so we can respond to your enquiry.',
      'We do not sell your information. It is stored securely and shared only with services needed to operate this website.',
      `To request access to or deletion of your data, email ${site.email}.`,
    ],
  },
  terms: {
    title: 'Terms of Use',
    body: [
      'The content on this website is provided for general information about JEST Technologies and its services.',
      'Project scope, pricing and delivery are agreed in a separate written agreement.',
      `Questions about these terms can be sent to ${site.email}.`,
    ],
  },
}

export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const c = copy[kind]
  useEffect(() => { document.title = `${c.title} | JEST Technologies` }, [c.title])
  return (
    <section className="container-x min-h-[70vh] max-w-3xl pb-24 pt-36">
      <h1 className="text-5xl font-extrabold">{c.title}</h1>
      <p className="mt-3 font-mono text-xs text-mute">Template text. Have it reviewed before launch.</p>
      <div className="mt-8 space-y-5 text-lg text-mute">
        {c.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <Link to="/" className="btn btn-ghost mt-10">← Back home</Link>
    </section>
  )
}
