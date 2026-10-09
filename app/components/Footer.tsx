import Link from "next/link";
import { MODULES, SITE, SOLUTIONS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="flex items-center gap-2 text-xl font-extrabold">
            <span className="inline-block h-4 w-4 -rotate-12 rounded-[50%_50%_50%_0] bg-pop" aria-hidden="true" />
            JEST Policy CRM
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/60">{SITE.tagline}</p>
          <Link href="/contact/" className="mt-5 inline-block rounded-full bg-pop px-5 py-2.5 text-sm font-semibold text-ink">
            Book a demo
          </Link>
        </div>

        <FooterColumn title="Platform" links={[
          { label: "Platform overview", href: "/platform/" },
          { label: "How it works", href: "/how-it-works/" },
          { label: "Security", href: "/security/" },
          { label: "FAQ", href: "/faq/" },
        ]} />
        <FooterColumn title="Modules" links={MODULES.map((m) => ({ label: m.title, href: `/modules/${m.slug}/` }))} />
        <FooterColumn title="Solutions" links={SOLUTIONS.map((s) => ({ label: s.title, href: `/solutions/${s.slug}/` }))} />
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        © 2026 JEST Policy CRM. All rights reserved. Built for Indian insurance agencies.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="font-semibold">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/60">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
