"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function CTASection({ title = "Ready to see JEST in action?", text = "Book a demo and we will walk you through the platform, from first lead to renewal and claims." }: { title?: string; text?: string }) {
  return (
    <section className="px-5 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand px-6 py-16 text-center text-white md:py-20">
        <motion.div aria-hidden="true" className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-white/10" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div aria-hidden="true" className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-pop/30" animate={{ scale: [1.1, 0.95, 1.1] }} transition={{ duration: 10, repeat: Infinity }} />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact/" variant="light" arrow>Book a demo</Button>
            <Button href="/platform/" variant="pop">Explore the platform</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
