import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { SOLUTIONS } from "@/data/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: "JEST workspaces for management, sales, renewals, operations, accounts, customer service and compliance.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="One platform, seven distinct views."
        text="Sales, operations, accounts, compliance and more each get a workspace matched to their job."
      />
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 0.08}>
              <FeatureCard icon={m.icon} title={m.title} text={m.short} href={`/solutions/${m.slug}/`} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
