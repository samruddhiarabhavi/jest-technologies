import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Custom software",
    description: "CRMs, portals and internal tools shaped around how your team works.",
  },
  {
    title: "Web applications",
    description: "Fast, secure web apps and company websites that are easy to update.",
  },
  {
    title: "Mobile apps",
    description: "Android and iOS apps from one codebase, tested on real devices.",
  },
  {
    title: "UI/UX design",
    description: "Clear screens and flows, tested with your users before we write code.",
  },
  {
    title: "Cloud and DevOps",
    description: "Hosting, backups and automatic deployments, with monitoring.",
  },
  {
    title: "Testing and support",
    description: "Automated and manual QA, plus maintenance plans after launch.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
        What we offer
      </h2>
      <p className="mt-3 max-w-xl text-slate-600">
        One team for the whole product, from the first sketch to the support
        call after launch.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}