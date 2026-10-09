import type { Metadata } from "next";
import { Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "Book a demo of JEST Policy CRM for your insurance agency.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a demo"
        title="See JEST Policy CRM in action."
        text="Tell us about your agency and we will walk you through the platform, from first lead to renewal and claims."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-24 lg:grid-cols-[1.3fr_.7fr]">
        <ContactForm />
        <aside className="h-fit rounded-2xl bg-ink p-8 text-white">
          <h2 className="text-2xl font-extrabold">Prefer email?</h2>
          <p className="mt-2 text-white/70">Write to us directly and we will reply within one working day.</p>
          <a href={`mailto:${SITE.email}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-pop">
            <Mail className="h-5 w-5" aria-hidden="true" /> {SITE.email}
          </a>
        </aside>
      </section>
    </>
  );
}
