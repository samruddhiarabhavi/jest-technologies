import Link from "next/link";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How we work", href: "/how-we-work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "What we do",
    links: [
      { label: "Services", href: "/services" },
      { label: "JEST Policy CRM", href: "/products" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold">Jest Technologies</p>
          <p className="mt-2 max-w-xs text-sm text-slate-600">
            Software that people actually enjoy using.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <p className="font-semibold">{column.heading}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-black">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">
        © 2026 Jest Technologies. All rights reserved.
      </div>
    </footer>
  );
}