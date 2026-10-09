import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import { SOLUTIONS } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTIONS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = SOLUTIONS.find((x) => x.slug === slug);
  return item ? { title: item.title, description: item.short } : {};
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const item = SOLUTIONS.find((m) => m.slug === slug);
  if (!item) notFound();
  const others = SOLUTIONS.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Solution" title={item.title} text={item.intro}>
        <Button href="/contact/" arrow>Book a demo</Button>
        <Button href="/solutions/" variant="outline">All solutions</Button>
      </PageHeader>

      <section className="mx-auto max-w-4xl px-5 py-24">
        <Reveal><h2 className="text-3xl font-extrabold">How it helps</h2></Reveal>
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
          <h2 className="text-2xl font-extrabold">Other solutions</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((m) => (
              <FeatureCard key={m.slug} icon={m.icon} title={m.title} text={m.short} href={`/solutions/${m.slug}/`} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
