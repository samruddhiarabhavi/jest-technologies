import { Link } from 'react-router-dom';
import Logo from './Logo';
import { contact } from '../data/company';

export const footerColumns = [
  { title: 'Company', links: [{ label: 'About Us', to: '/about' }, { label: 'Projects Portfolio', to: '/projects' }, { label: 'Insights & News', to: '/blog' }, { label: 'Careers', to: '/careers' }, { label: 'Contact', to: '/contact' }] },
  { title: 'Services', links: [{ label: 'Web Applications', to: '/services#web' }, { label: 'Mobile Apps', to: '/services#mobile' }, { label: 'CRM & Enterprise Systems', to: '/services#crm' }, { label: 'AI & Automation', to: '/services#ai' }, { label: 'Cloud & DevOps', to: '/services#cloud' }] },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-coal">
      <div className="wrap grid gap-14 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-mute">An engineering-led software company building web, mobile, AI, and cloud products for ambitious teams.</p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-medium text-bone">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="link-underline text-sm text-mute transition-colors hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div>
          <h2 className="text-sm font-medium text-bone">Head Office</h2>
          <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-mute">
            <p>
              {contact.address[0]}
              <br />
              {contact.address[1]}
            </p>
            <p>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="link-underline hover:text-bone">
                {contact.phone}
              </a>
              <br />
              <a href={`mailto:${contact.email}`} className="link-underline hover:text-bone">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-mute sm:flex-row sm:justify-between">
          <p>© 2026 Jest Technologies. All rights reserved.</p>
          <p>Remote-first · Global delivery</p>
        </div>
      </div>
    </footer>
  );
}
