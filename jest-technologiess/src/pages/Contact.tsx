import { useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Faq from '../components/Faq';

const field = 'mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-bone placeholder:text-mute/70 transition-colors focus:border-mint focus:outline-none';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <PageTransition>
      <PageHeader title="Book a demo.">Tell us about your marketing. We will show you the agents and campaigns that fit.</PageHeader>
      <section className="wrap mt-16 pb-28">
        {sent ? (
          <div role="status" className="panel flex max-w-xl items-start gap-4 p-8">
            <Check className="mt-1 text-mint" aria-hidden="true" />
            <div>
              <h2 className="display text-2xl">Request received</h2>
              <p className="mt-2 text-mute">Thanks. We will reply within one business day to schedule your demo.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid max-w-3xl gap-6 sm:grid-cols-2">
            <label className="text-sm text-mute">
              Name
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="text-sm text-mute">
              Work email
              <input required type="email" name="email" autoComplete="email" className={field} />
            </label>
            <label className="text-sm text-mute sm:col-span-2">
              Company
              <input name="company" autoComplete="organization" className={field} />
            </label>
            <label className="text-sm text-mute sm:col-span-2">
              What would you like to automate?
              <textarea name="message" rows={5} className={field} />
            </label>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg">
                Request demo
              </Button>
            </div>
          </form>
        )}
      </section>
      <section id="faq" aria-labelledby="faq-title" className="wrap pb-32">
        <h2 id="faq-title" className="display mb-10 text-4xl md:text-5xl">
          Frequently asked questions
        </h2>
        <Faq />
      </section>
    </PageTransition>
  );
}
