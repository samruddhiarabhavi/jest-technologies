const clients = ['Northwind Insurance', 'Helix Logistics', 'Cascade Retail', 'Clinova Health', 'Vantage Learning', 'Oakridge Finance'];

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className="border-y border-rule bg-sand/50">
      <div className="wrap flex flex-col gap-4 py-7 md:flex-row md:items-center md:gap-10">
        <h2 id="clients-title" className="shrink-0 text-sm text-soft">
          Teams we have worked with
        </h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 font-serif text-lg">
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
