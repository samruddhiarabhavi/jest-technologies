import { useState, type FormEvent } from 'react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Faq from '../components/Faq';
import { contact } from '../data/company';

const field = 'mt-1.5 w-full rounded-md border border-rule bg-white px-3.5 py-3 text-ink focus:border-forest focus:outline-none';
const next = ['We read your message and reply within one business day.', 'A short call with an engineer to understand what you need.', 'A written proposal with scope, timeline, and price.'];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <PageTransition>
      <PageHeader eyebrow="Contact" title="Request a proposal.">
        Tell us a little about what you are building. A person on our engineering team will reply.
      </PageHeader>
      <div className="wrap grid gap-14 py-14 md:py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <h2 className="h-serif text-2xl">What happens next</h2>
          <ol className="mt-5 space-y-4">
            {next.map((n, i) => (
              <li key={n} className="flex gap-4 leading-relaxed text-soft">
                <span className="font-serif text-xl text-clay">{i + 1}</span>
                {n}
              </li>
            ))}
          </ol>
          <h2 className="h-serif mt-12 text-2xl">Head office</h2>
          <address className="mt-4 space-y-3 not-italic leading-relaxed text-soft">
            <p>
              {contact.address[0]}
              <br />
              {contact.address[1]}
            </p>
            <p>
              <a className="underline underline-offset-4 hover:text-ink" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <br />
              <a className="underline underline-offset-4 hover:text-ink" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                {contact.phone}
              </a>
            </p>
            <p>{contact.hours}</p>
          </address>
        </div>
        {sent ? (
          <div role="status" className="self-start rounded-md border border-rule bg-sand/60 p-8">
            <h2 className="h-serif text-2xl">Request received</h2>
            <p className="mt-2 text-soft">Thank you. An engineer will reply within one business day.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} aria-label="Project enquiry" className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-soft">
              Name
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="text-sm text-soft">
              Work email
              <input required type="email" name="email" autoComplete="email" className={field} />
            </label>
            <label className="text-sm text-soft">
              Project type
              <select name="type" className={field} defaultValue="Web Applications">
                {['Web Applications', 'Mobile Apps', 'CRM & Enterprise Systems', 'AI & Automation', 'Cloud & DevOps', 'UI/UX Design', 'Not sure yet'].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="text-sm text-soft">
              Company
              <input name="company" autoComplete="organization" className={field} />
            </label>
            <label className="text-sm text-soft sm:col-span-2">
              Tell us about your project
              <textarea name="message" rows={6} className={field} />
            </label>
            <div className="sm:col-span-2">
              <Button type="submit">Send request</Button>
            </div>
          </form>
        )}
      </div>
      <section id="faq" aria-labelledby="faq-title" className="border-t border-rule bg-sand/50 py-14 md:py-20">
        <div className="wrap">
          <h2 id="faq-title" className="h-serif mb-8 text-[clamp(1.75rem,3vw,2.5rem)]">
            Common questions
          </h2>
          <Faq />
        </div>
      </section>
    </PageTransition>
  );
}
