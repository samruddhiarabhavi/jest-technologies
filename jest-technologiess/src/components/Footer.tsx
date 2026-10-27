import { Link } from 'react-router-dom';
import Logo from './Logo';
import { contact } from '../data/company';

export const footerColumns = [
  { title: 'Company', links: [{ label: 'About Us', to: '/about' }, { label: 'Projects Portfolio', to: '/projects' }, { label: 'Insights & News', to: '/blog' }, { label: 'Careers', to: '/careers' }, { label: 'Contact', to: '/contact' }] },
  { title: 'Services', links: [{ label: 'Web Applications', to: '/services#web' }, { label: 'Mobile Apps', to: '/services#mobile' }, { label: 'CRM & Enterprise Systems', to: '/services#crm' }, { label: 'AI & Automation', to: '/services#ai' }, { label: 'Cloud & DevOps', to: '/services#cloud' }] },
];

export default function Footer() {
  return (
    <footer className="bg-sand">
      <div className="wrap grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-[15px] leading-relaxed text-soft">A software company building web, mobile, and AI products, and looking after them once they are live.</p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-serif text-lg">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[15px] text-soft underline-offset-4 hover:text-ink hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div>
          <h2 className="font-serif text-lg">Head Office</h2>
          <address className="mt-4 space-y-3 text-[15px] not-italic leading-relaxed text-soft">
            <p>
              {contact.address[0]}
              <br />
              {contact.address[1]}
            </p>
            <p>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="underline-offset-4 hover:text-ink hover:underline">
                {contact.phone}
              </a>
              <br />
              <a href={`mailto:${contact.email}`} className="underline-offset-4 hover:text-ink hover:underline">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="wrap flex flex-col gap-1 py-5 text-sm text-soft sm:flex-row sm:justify-between">
          <p>© 2026 Jest Technologies. All rights reserved.</p>
          <p>{contact.hours}</p>
        </div>
      </div>
    </footer>
  );
}
