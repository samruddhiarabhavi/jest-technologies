"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Row = [string, string, string];
const tabs: { id: string; label: string; heading: string; cols: [string, string, string]; rows: Row[] }[] = [
  { id: "leads", label: "Leads", heading: "Lead pipeline", cols: ["Lead", "Product", "Status"], rows: [["Ravi Kulkarni", "Health", "Qualified"], ["Meera Shetty", "Motor", "Contacted"], ["A. Patil & Sons", "Fire", "New"], ["Sana Mulla", "Life", "Qualified"]] },
  { id: "policies", label: "Policies", heading: "Policy register", cols: ["Policy", "Insurer", "Status"], rows: [["POL-1042", "Insurer A", "Active"], ["POL-1043", "Insurer B", "Endorsed"], ["POL-1044", "Insurer A", "Active"], ["POL-1045", "Insurer C", "Active"]] },
  { id: "renewals", label: "Renewals", heading: "Renewal queue", cols: ["Policy", "Expires in", "Status"], rows: [["POL-0988", "7 days", "Reminder sent"], ["POL-1011", "30 days", "In progress"], ["POL-1020", "60 days", "Flagged"], ["POL-0971", "Expired", "Lapsed"]] },
  { id: "claims", label: "Claims", heading: "Claims tracker", cols: ["Claim", "Stage", "Status"], rows: [["CLM-210", "Documents", "Collecting"], ["CLM-211", "Insurer", "Submitted"], ["CLM-208", "Query", "Awaiting reply"], ["CLM-205", "Settlement", "Settled"]] },
  { id: "reports", label: "Reports", heading: "Reports", cols: ["Report", "Owner", "Frequency"], rows: [["Renewal rate", "Management", "Monthly"], ["Claim settlement", "Operations", "Quarterly"], ["Lead conversion", "Sales", "Weekly"], ["Premium schedule", "Accounts", "Monthly"]] },
];

export default function ProductTabs() {
  const [active, setActive] = useState("leads");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[10px_10px_0_var(--color-pop)]">
      <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-pop" /><span className="h-3 w-3 rounded-full bg-ok" />
        <span className="ml-3 hidden rounded-md bg-white px-3 py-1 text-xs text-mute sm:inline">app.jest/{tab.id}</span>
        <span className="ml-auto rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">Sample data</span>
      </div>

      <div className="grid md:grid-cols-[170px_1fr]">
        <div role="tablist" aria-label="Product preview" className="flex gap-1 overflow-x-auto border-b border-line p-3 md:flex-col md:border-b-0 md:border-r">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === active}
              aria-controls="preview-panel"
              onClick={() => setActive(t.id)}
              className={`relative shrink-0 rounded-lg px-4 py-2 text-left text-sm font-semibold transition ${t.id === active ? "text-brand" : "text-mute hover:text-ink"}`}
            >
              {t.id === active && <motion.span layoutId="tab-bg" className="absolute inset-0 rounded-lg bg-brand-soft" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <div id="preview-panel" role="tabpanel" className="min-h-[300px] p-5">
          <AnimatePresence mode="wait">
            <motion.div key={tab.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }}>
              <p className="mb-4 text-lg font-bold">{tab.heading}</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-line text-mute">
                      {tab.cols.map((c) => <th key={c} className="pb-2 font-semibold">{c}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {tab.rows.map((r, i) => (
                      <motion.tr key={r[0]} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="border-b border-line/70">
                        <td className="py-3 font-semibold">{r[0]}</td>
                        <td className="py-3 text-mute">{r[1]}</td>
                        <td className="py-3"><span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">{r[2]}</span></td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
