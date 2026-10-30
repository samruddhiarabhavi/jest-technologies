import { Link } from 'react-router-dom'
import { site } from '../data/site'

const links = [['Solutions', '/#solutions'], ['Projects', '/#projects'], ['Technologies', '/#technologies'], ['About', '/#about'], ['Contact', '/#contact']]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist/60">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-extrabold">JEST<span className="text-accent">.</span> Technologies</p>
          <p className="mt-3 max-w-xs text-mute">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2">
            {links.map(([l, h]) => (<li key={l}><a href={h} className="hover:text-accent">{l}</a></li>))}
            <li><Link to="/privacy" className="hover:text-accent">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms</Link></li>
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Follow</p>
          <ul className="mt-4 space-y-2">
            <li><a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a></li>
            <li><a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-mute">© 2026 JEST Technologies. All rights reserved.</div>
    </footer>
  )
}
