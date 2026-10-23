import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const categories = [
  { title: 'Getting started', items: ['Connect your first channel', 'Invite your team', 'Set approval rules'] },
  { title: 'Agents', items: ['How agents make decisions', 'Permissions and scopes', 'Reading the activity log'] },
  { title: 'Campaigns', items: ['Write a campaign brief', 'Budget guardrails', 'Test and roll back'] },
  { title: 'Integrations', items: ['Ad platforms', 'CRM and email', 'Ecommerce and analytics'] },
  { title: 'API', items: ['Authentication', 'Campaigns endpoint', 'Webhooks'] },
  { title: 'Security', items: ['Data handling', 'SSO and SCIM', 'Audit log export'] },
];

const snippet = `curl https://api.jesttechnologies.example/v1/campaigns \\
  -H "Authorization: Bearer $JEST_API_KEY" \\
  -d '{"name":"Autumn launch","goal":"leads","agents":["campaign","content"]}'`;

export default function Docs() {
  return (
    <PageTransition>
      <PageHeader title="Documentation.">Guides for setting up agents, launching campaigns, and connecting your stack.</PageHeader>
      <section aria-labelledby="quick-title" className="wrap mt-20">
        <h2 id="quick-title" className="display text-3xl md:text-4xl">
          Quickstart
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {['Connect an ad or analytics account', 'Choose an agent and set its mode', 'Launch a campaign and watch it learn'].map((s, i) => (
            <li key={s} className="panel p-6">
              <p className="text-sm text-mint">Step {i + 1}</p>
              <p className="mt-3 text-lg">{s}</p>
            </li>
          ))}
        </ol>
        <pre className="mt-6 overflow-x-auto rounded-2xl border border-line bg-coal p-6 text-sm leading-relaxed text-bone" aria-label="API example">
          <code>{snippet}</code>
        </pre>
      </section>
      <section aria-labelledby="topics-title" className="wrap section">
        <h2 id="topics-title" className="display text-3xl md:text-4xl">
          Browse by topic
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={(i % 3) * 0.06} className="panel h-full p-7">
                <h3 className="display text-xl">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-[15px] text-mute">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <Button to="/contact">Get API access</Button>
        </div>
      </section>
    </PageTransition>
  );
}
