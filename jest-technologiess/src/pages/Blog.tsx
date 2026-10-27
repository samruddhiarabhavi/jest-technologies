import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { posts } from '../data/posts';

export default function Blog() {
  return (
    <PageTransition>
      <PageHeader eyebrow="Insights" title="Notes from our engineers.">
        Practical lessons on architecture, delivery, AI, and running software in production.
      </PageHeader>
      <section aria-label="Articles" className="wrap py-12 md:py-16">
        <ul className="border-t border-rule">
          {posts.map((p) => (
            <li key={p.slug} className="border-b border-rule">
              <Link to={`/blog/${p.slug}`} className="group grid gap-2 py-8 transition-colors hover:bg-sand/50 md:grid-cols-[11rem_1fr] md:gap-10 md:px-3">
                <p className="text-sm text-soft">
                  {p.date}
                  <br />
                  <span className="text-clay">{p.category}</span>
                </p>
                <div>
                  <h2 className="h-serif text-2xl leading-snug group-hover:text-forest md:text-3xl">{p.title}</h2>
                  <p className="mt-2 max-w-2xl leading-relaxed text-soft">{p.excerpt}</p>
                  <p className="mt-3 text-sm text-soft">{p.read}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
