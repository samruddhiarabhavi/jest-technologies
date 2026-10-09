"use client";

import { motion } from "framer-motion";
import { Bell, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Open leads", value: "128", tone: "text-brand" },
  { label: "Active policies", value: "1,942", tone: "text-ink" },
  { label: "Renewals due (60d)", value: "86", tone: "text-pop" },
  { label: "Claims in progress", value: "14", tone: "text-ok" },
];

const bars = [38, 55, 44, 70, 62, 85, 74];

export default function DashboardMockup() {
  return (
    <div className="relative" role="img" aria-label="Illustrative JEST dashboard with leads, policies, renewals and claims">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[10px_10px_0_var(--color-brand)]"
      >
        <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-pop" />
          <span className="h-3 w-3 rounded-full bg-ok" />
          <span className="ml-3 rounded-md bg-white px-3 py-1 text-xs text-mute">app.jest/dashboard</span>
        </div>

        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-bold">Agency overview</p>
            <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">Sample data</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="rounded-xl border border-line p-3"
              >
                <p className="text-xs text-mute">{s.label}</p>
                <p className={`text-2xl font-extrabold ${s.tone}`}>{s.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-line p-3">
            <p className="mb-2 text-xs text-mute">Renewal rate by month</p>
            <div className="flex h-24 items-end gap-2">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1.1 + i * 0.07, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 rounded-t-md bg-brand"
                  style={{ opacity: 0.45 + i * 0.08 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{ opacity: { delay: 1.6 }, x: { delay: 1.6 }, y: { delay: 2.2, duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -right-3 -top-5 hidden items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-lg sm:flex"
      >
        <span className="rounded-lg bg-pop/20 p-2 text-pop"><Bell className="h-4 w-4" aria-hidden="true" /></span>
        <span className="text-sm"><b>Renewal reminder sent</b><br /><span className="text-mute">60 days before expiry</span></span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.9 }, x: { delay: 1.9 }, y: { delay: 2.5, duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-lg sm:flex"
      >
        <span className="rounded-lg bg-ok/15 p-2 text-ok"><CheckCircle2 className="h-4 w-4" aria-hidden="true" /></span>
        <span className="text-sm"><b>Claim settled</b><br /><span className="text-mute">Full trail recorded</span></span>
      </motion.div>
    </div>
  );
}
