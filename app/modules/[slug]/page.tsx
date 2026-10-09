import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import { MODULES } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = MODULES.find((x) => x.slug === slug);
  return item ? { title: item.title, description: item.short } : {};
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const item = MODULES.find((m) => m.slug === slug);
  if (!item) notFound();
  const others = MODULES.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Module" title={item.title} text={item.intro}>
        <Button href="/contact/" arrow>Book a demo</Button>
        <Button href="/modules/" variant="outline">All modules</Button>
      </PageHeader>

      <section className="mx-auto max-w-4xl px-5 py-24">
        <Reveal><h2 className="text-3xl font-extrabold">What you can do</h2></Reveal>
        <ul className="mt-8 space-y-4">
          {item.points.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <li className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 text-lg">
                <span className="mt-0.5 rounded-full bg-ok/15 p-1 text-ok"><Check className="h-5 w-5" aria-hidden="true" /></span>
                {p}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-paper px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold">Other modules</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((m) => (
              <FeatureCard key={m.slug} icon={m.icon} title={m.title} text={m.short} href={`/modules/${m.slug}/`} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
