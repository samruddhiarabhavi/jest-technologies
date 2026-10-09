"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          <span className="inline-block h-4 w-4 -rotate-12 rounded-[50%_50%_50%_0] bg-pop" aria-hidden="true" />
          JEST <span className="font-medium text-mute">Policy CRM</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-medium text-mute transition hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden rounded-full bg-brand px-5 py-2.5 font-semibold text-white transition hover:bg-brand-dark sm:inline-block"
          >
            Book a demo
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto max-w-6xl space-y-1 px-5 pb-6">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-lg font-semibold hover:bg-brand-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link href="/contact/" onClick={() => setOpen(false)} className="block rounded-full bg-brand px-5 py-3 text-center font-semibold text-white">
                  Book a demo
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
