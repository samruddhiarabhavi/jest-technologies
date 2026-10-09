import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import FeatureCard from "@/components/FeatureCard";
import LifecycleRail from "@/components/LifecycleRail";
import ProductTabs from "@/components/ProductTabs";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";
import { DIFFERENCES, SOLUTIONS } from "@/data/site";

const stats = [
  { to: 7, label: "lifecycle stages, one continuous record" },
  { to: 5, label: "connected modules on one data model" },
  { to: 7, label: "role-based workspaces for your teams" },
  { to: 60, suffix: " days", label: "advance renewal flag, then 30 and 7" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-y border-line bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <dt className="text-5xl font-extrabold tracking-tight text-brand">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </dt>
              <dd className="mt-1 text-sm text-mute">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="What makes JEST different"
          title="Built for how insurance agencies actually operate."
          text="Not a generic CRM with insurance fields added. Every workflow, report and data field was designed around Indian insurance distribution."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENCES.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.08}>
              <FeatureCard {...d} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            dark
            eyebrow="The lifecycle"
            title="Seven connected stages. One continuous record."
            text="From first inquiry to long-term retention. Pick a stage to see what happens in JEST."
          />
          <div className="mt-12">
            <LifecycleRail />
          </div>
          <div className="mt-10">
            <Button href="/how-it-works/" variant="pop" arrow>See the full flow</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          center
          eyebrow="Product preview"
          title="Every module shares the same data."
          text="A lead becomes a contact, a contact has policies, policies trigger renewals. Nothing lives in a silo."
        />
        <Reveal className="mt-14">
          <ProductTabs />
        </Reveal>
      </section>

      <section className="bg-paper px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Solutions"
            title="One platform, seven distinct views."
            text="Each team gets a workspace matched to its job."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.07}>
                <FeatureCard icon={s.icon} title={s.title} text={s.short} href={`/solutions/${s.slug}/`} />
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <Link href="/solutions/" className="flex h-full min-h-[180px] items-center justify-center rounded-2xl bg-brand p-6 text-center text-xl font-bold text-white transition hover:bg-brand-dark">
                Explore all solutions
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
