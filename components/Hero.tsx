import Link from "next/link";

const tasks = [
  { label: "Discovery workshop", time: "Week 1", done: true },
  { label: "Clickable design", time: "Week 2", done: true },
  { label: "Build and weekly demos", time: "Weeks 3–8", done: false },
  { label: "Testing and launch", time: "Week 9", done: false },
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2">
      {/* Left side: text */}
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Software that people actually enjoy using.
        </h1>
        <p className="mt-5 max-w-md text-lg text-slate-600">
          Jest Technologies designs, builds and runs web apps, mobile apps and
          business software for growing companies.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700"
          >
            Start a project
          </Link>
          <Link
            href="/how-we-work"
            className="rounded-full border-2 border-slate-900 px-6 py-3 font-semibold"
          >
            See how we work
          </Link>
        </div>
      </div>

      {/* Right side: project card */}
      <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-[8px_8px_0_#7c3aed]">
        <h3 className="mb-3 text-sm font-semibold text-slate-500">
          A typical project, week by week
        </h3>
        {tasks.map((task) => (
          <div
            key={task.label}
            className="flex items-center gap-3 border-t border-slate-200 py-3"
          >
            <span
              className={`h-3 w-3 rounded-full ${
                task.done ? "bg-emerald-500" : "bg-slate-300"
              }`}
            />
            <span>{task.label}</span>
            <span className="ml-auto text-sm text-slate-500">{task.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}