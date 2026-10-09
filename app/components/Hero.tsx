"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pop/25 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-32 md:pt-40 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
          <motion.p variants={item} className="mb-4 inline-block rounded-full border border-brand/30 bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            Built for Indian agencies and brokers
          </motion.p>
          <motion.h1 variants={item} className="text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            Insurance operations, <span className="text-brand">connected</span> from lead to renewal.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-mute">
            JEST Policy CRM manages the full insurance lifecycle, from lead capture to renewal and claims, in one connected workspace.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact/" arrow>Book a demo</Button>
            <Button href="/platform/" variant="outline">Explore the platform</Button>
          </motion.div>
          <motion.p variants={item} className="mt-5 text-sm text-mute">
            Leads, policies, renewals and claims, managed together.
          </motion.p>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
}
