import type { TestimonialData } from '../data/testimonials';

export default function Testimonial({ t }: { t: TestimonialData }) {
  const initials = t.name.split(' ').map((p) => p[0]).join('');
  return (
    <figure className="flex h-full flex-col justify-between gap-12">
      <blockquote className="display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.12] tracking-[-0.035em]">“{t.quote}”</blockquote>
      <figcaption className="flex items-center gap-4">
        <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-full border border-line bg-card text-sm text-mint">
          {initials}
        </span>
        <span>
          <span className="block font-medium">{t.name}</span>
          <span className="block text-sm text-mute">
            {t.role}, {t.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
