import Reveal from '../components/Reveal';
import TextLink from '../components/TextLink';
import WorkCard from '../components/WorkCard';
import { projects } from '../data/projects';

export default function FeaturedWork() {
  const [a, b, c, d] = projects;
  return (
    <section aria-labelledby="work-title" className="bg-sand/50 py-20 md:py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 id="work-title" className="h-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1]">
            Selected work
          </h2>
          <TextLink to="/projects">All projects</TextLink>
        </div>
        <ul className="mt-12 grid gap-x-8 gap-y-14 lg:grid-cols-3">
          <li className="lg:col-span-2">
            <Reveal><WorkCard project={a} tall /></Reveal>
          </li>
          <li>
            <Reveal delay={0.08}><WorkCard project={b} /></Reveal>
          </li>
          <li>
            <Reveal><WorkCard project={c} /></Reveal>
          </li>
          <li className="lg:col-span-2">
            <Reveal delay={0.08}><WorkCard project={d} tall /></Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
