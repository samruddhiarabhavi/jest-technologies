import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "How we work", href: "/how-we-work" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-extrabold">
          Jest Technologies
        </Link>

        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-slate-600 hover:text-black">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="rounded-full bg-violet-600 px-5 py-2 font-semibold text-white hover:bg-violet-700"
        >
          Talk to us
        </Link>
      </nav>
    </header>
  );
}