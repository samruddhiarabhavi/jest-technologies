import { useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Faq from '../components/Faq';
import { contact } from '../data/company';

const field = 'mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-bone placeholder:text-mute/70 transition-colors focus:border-mint focus:outline-none';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <PageTransition>
      <PageHeader eyebrow="Contact" title="Request a proposal.">Share your brief. An engineer will reply within one business day.</PageHeader>
      <section className="wrap mt-16 pb-28">
        {sent ? (
          <div role="status" className="panel flex max-w-xl items-start gap-4 p-8">
            <Check className="mt-1 text-mint" aria-hidden="true" />
            <div>
              <h2 className="display text-2xl">Request received</h2>
              <p className="mt-2 text-mute">Thanks. An engineer will reply within one business day.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} aria-label="Project enquiry" className="grid max-w-3xl gap-6 sm:grid-cols-2">
            <label className="text-sm text-mute">
              Name
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="text-sm text-mute">
              Work email
              <input required type="email" name="email" autoComplete="email" className={field} />
            </label>
            <label className="text-sm text-mute">
              Project type
              <select name="type" className={field} defaultValue="Web Applications">
                {['Web Applications', 'Mobile Apps', 'CRM & Enterprise Systems', 'AI & Automation', 'Cloud & DevOps', 'UI/UX Design', 'Not sure yet'].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="text-sm text-mute">
              Company
              <input name="company" autoComplete="organization" className={field} />
            </label>
            <label className="text-sm text-mute sm:col-span-2">
              Tell us about your project
              <textarea name="message" rows={5} className={field} />
            </label>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg">
                Send request
              </Button>
            </div>
          </form>
        )}
      </section>
      <section aria-labelledby="office-title" className="wrap pb-24">
        <h2 id="office-title" className="display text-3xl">
          Head office
        </h2>
        <address className="mt-6 grid gap-6 text-mute not-italic sm:grid-cols-3">
          <p>
            {contact.address[0]}
            <br />
            {contact.address[1]}
          </p>
          <p>
            <a className="link-underline hover:text-bone" href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            <a className="link-underline hover:text-bone" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
          </p>
          <p>{contact.hours}</p>
        </address>
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
