import { Link, useParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageTransition>
        <PageHeader title="Article not found.">That article may have moved. Browse our insights to find what you need.</PageHeader>
        <div className="wrap py-12">
          <Button to="/blog">All articles</Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <PageHeader eyebrow={post.category} title={post.title}>
        {post.date} · {post.read}
      </PageHeader>
      <article className="wrap py-14 md:py-20">
        <div className="max-w-2xl space-y-6 text-lg leading-[1.75]">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link to="/blog" className="mt-12 inline-block font-medium text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest">
          ← Back to insights
        </Link>
      </article>
    </PageTransition>
  );
}
