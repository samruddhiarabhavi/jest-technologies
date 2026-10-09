"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STAGES } from "@/data/site";

export default function LifecycleRail() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div>
      <div role="tablist" aria-label="Insurance lifecycle stages" className="relative flex gap-2 overflow-x-auto pb-3">
        {STAGES.map((s, i) => (
          <button
            key={s.n}
            role="tab"
            id={`stage-tab-${i}`}
            aria-selected={i === active}
            aria-controls="stage-panel"
            onClick={() => setActive(i)}
            className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              i === active ? "text-ink" : "text-white/70 hover:text-white"
            }`}
          >
            {i === active && (
              <motion.span layoutId="stage-pill" className="absolute inset-0 rounded-full bg-pop" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">{s.n} {s.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
        <motion.div className="h-full bg-pop" animate={{ width: `${((active + 1) / STAGES.length) * 100}%` }} transition={{ duration: 0.4 }} />
      </div>

      <div id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${active}`} className="mt-8 min-h-[190px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.n}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-7xl font-extrabold text-pop/90">{stage.n}</p>
            <h3 className="mt-2 text-3xl font-extrabold">{stage.name}</h3>
            <p className="mt-3 max-w-2xl text-lg text-white/75">{stage.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
