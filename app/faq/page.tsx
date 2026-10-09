import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQList from "@/components/FAQList";
import CTASection from "@/components/CTASection";
import { FAQS } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about JEST Policy CRM.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Common questions." text="Quick answers about how JEST Policy CRM works." />
      <section className="mx-auto max-w-3xl px-5 py-24">
        <FAQList items={FAQS} />
      </section>
      <CTASection />
    </>
  );
}
