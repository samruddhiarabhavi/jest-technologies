import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
        <PageHeader title="Article not found.">That article may have moved. Browse the blog to find what you need.</PageHeader>
        <div className="wrap mt-10 pb-32">
          <Button to="/blog">All articles</Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <PageHeader title={post.title}>
        {post.category} · {post.date} · {post.read}
      </PageHeader>
      <article className="wrap mt-16 pb-32">
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-mute">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link to="/blog" className="link-underline mt-14 inline-flex items-center gap-2 text-sm text-mute hover:text-bone">
          <ArrowLeft size={16} aria-hidden="true" /> Back to blog
        </Link>
      </article>
    </PageTransition>
  );
}
