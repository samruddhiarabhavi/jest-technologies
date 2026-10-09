import type { Metadata } from "next";
import { Lock, ScrollText, FolderLock, UserCog } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Security",
  description: "Access controls, audit logs and document governance built into the platform.",
};

const items = [
  { Icon: UserCog, title: "Role-based access", text: "Each team sees the workspace and data that matches its job." },
  { Icon: Lock, title: "Access controls", text: "Control who can view and change records across leads, policies and claims." },
  { Icon: ScrollText, title: "Audit logs", text: "Key actions are recorded, so every step can be reviewed later." },
  { Icon: FolderLock, title: "Document governance", text: "KYC and policy documents are kept with the record they belong to." },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Security"
        title="Compliance is a feature, not a workaround."
        text="Access controls, audit logs and document governance are built into the platform, not bolted on."
      />
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <span className="mb-4 inline-flex rounded-xl bg-brand-soft p-3 text-brand"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-2 text-mute">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection title="Questions about security?" text="Ask the team during your demo and we will walk through how access and audit work." />
    </>
  );
}
