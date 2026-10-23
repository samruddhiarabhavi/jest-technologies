import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { posts } from '../data/posts';

export default function Blog() {
  const [featured, ...rest] = posts;
  return (
    <PageTransition>
      <PageHeader title="Notes on autonomous marketing.">Playbooks, experiments, and lessons from teams putting AI agents to work.</PageHeader>
      <section aria-label="Articles" className="wrap mt-20 pb-32">
        <Reveal>
          <Link to={`/blog/${featured.slug}`} className="group block rounded-3xl border border-line bg-card/70 p-8 transition-[border-color,background-color] duration-500 hover:border-mint/40 hover:bg-card md:p-14">
            <p className="text-sm text-mint">
              {featured.category} · {featured.read}
            </p>
            <h2 className="display mt-5 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{featured.title}</h2>
            <p className="mt-6 max-w-xl text-lg text-mute">{featured.excerpt}</p>
          </Link>
        </Reveal>
        <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <Link to={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-card/70 p-7 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-mint/40">
                  <p className="text-xs text-mute">
                    {p.category} · {p.date}
                  </p>
                  <h3 className="display mt-4 text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute">{p.excerpt}</p>
                  <p className="mt-auto pt-6 text-xs text-mute">{p.read}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
