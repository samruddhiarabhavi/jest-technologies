import { Link } from 'react-router-dom';
import Logo from './Logo';

export const footerColumns = [
  { title: 'Product', links: [{ label: 'Platform', to: '/platform' }, { label: 'Agents', to: '/solutions' }, { label: 'Campaigns', to: '/platform' }, { label: 'Analytics', to: '/platform' }] },
  { title: 'Company', links: [{ label: 'About', to: '/about' }, { label: 'Careers', to: '/careers' }, { label: 'Contact', to: '/contact' }, { label: 'Security', to: '/industries#security' }] },
  { title: 'Resources', links: [{ label: 'Documentation', to: '/docs' }, { label: 'Blog', to: '/blog' }, { label: 'Case Studies', to: '/case-studies' }, { label: 'FAQ', to: '/contact#faq' }] },
  { title: 'Legal', links: [{ label: 'Privacy', to: '/privacy' }, { label: 'Terms', to: '/terms' }, { label: 'Security', to: '/industries#security' }] },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-coal">
      <div className="wrap grid gap-14 py-20 lg:grid-cols-[1.4fr_2.6fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-mute">Autonomous intelligence for modern marketing.</p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
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
        </div>
      </div>
      <div className="border-t border-line">
        <p className="wrap py-6 text-xs text-mute">© 2026 Jest Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
