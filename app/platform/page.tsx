import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { DIFFERENCES, MODULES } from "@/data/site";

export const metadata: Metadata = {
  title: "Platform overview",
  description: "One platform for the full insurance lifecycle, from the first lead to annual renewal.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform overview"
        title="One platform for the full insurance lifecycle."
        text="JEST Policy CRM connects every part of an insurance agency's operation, from the first lead to annual renewal, in a single coherent workspace."
      >
        <Button href="/contact/" arrow>Book a demo</Button>
        <Button href="/modules/" variant="outline">See modules</Button>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="Why JEST" title="Built for how insurance agencies actually operate." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENCES.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.08}><FeatureCard {...d} /></Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Included modules" title="Five modules. One connected system." text="Every module shares the same data, so nothing lives in a silo." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 0.08}>
                <FeatureCard icon={m.icon} title={m.title} text={m.short} href={`/modules/${m.slug}/`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
