import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import { STAGES } from "@/data/site";

export const metadata: Metadata = {
  title: "How it works",
  description: "The lead-to-renewal flow, step by step, handled inside one workspace.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="The lead-to-renewal flow, step by step."
        text="Every stage is handled inside JEST. No switching between tools, no lost context."
      >
        <Button href="/contact/" arrow>Book a demo</Button>
      </PageHeader>

      <section className="mx-auto max-w-4xl px-5 py-24">
        <ol className="ml-5 border-l-2 border-line">
          {STAGES.map((s) => (
            <li key={s.n} className="relative pb-14 pl-10 last:pb-0">
              <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white" aria-hidden="true">
                {s.n}
              </span>
              <Reveal>
                <h2 className="text-2xl font-extrabold md:text-3xl">{s.name}</h2>
                <p className="mt-2 max-w-2xl text-lg text-mute">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
      <CTASection />
    </>
  );
}
