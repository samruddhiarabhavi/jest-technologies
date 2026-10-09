import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { MODULES } from "@/data/site";

export const metadata: Metadata = {
  title: "Modules",
  description: "Lead management, policy management, renewals, claims and reporting in one connected system.",
};

export default function ModulesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Modules"
        title="Five modules. One connected system."
        text="Every module shares the same data. A lead becomes a contact, a contact has policies, policies trigger renewals."
      />
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 0.08}>
              <FeatureCard icon={m.icon} title={m.title} text={m.short} href={`/modules/${m.slug}/`} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
