import Button from '../components/Button';
import { contact } from '../data/company';

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="bg-forest text-paper">
      <div className="wrap grid items-end gap-8 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 id="cta-title" className="h-serif text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.08]">
            Have something you want to build?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/80">Tell us about it. A person on our engineering team will reply within one business day.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4 lg:justify-end">
          <Button to="/contact" variant="light">
            Request a proposal
          </Button>
          <a href={`mailto:${contact.email}`} className="font-medium underline decoration-paper/40 underline-offset-4 hover:decoration-paper">
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
