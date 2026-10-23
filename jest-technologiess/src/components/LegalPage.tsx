import PageTransition from './PageTransition';
import PageHeader from './PageHeader';

export interface LegalSection {
  heading: string;
  body: string[];
}

interface Props {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}

export default function LegalPage({ title, intro, updated, sections }: Props) {
  return (
    <PageTransition>
      <PageHeader title={title}>{intro}</PageHeader>
      <div className="wrap mt-14 pb-32">
        <p className="text-sm text-mute">Last updated {updated}</p>
        <div className="mt-10 max-w-3xl space-y-12">
          {sections.map((s, i) => (
            <section key={s.heading} aria-labelledby={`legal-${i}`}>
              <h2 id={`legal-${i}`} className="display text-2xl">
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-mute">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
