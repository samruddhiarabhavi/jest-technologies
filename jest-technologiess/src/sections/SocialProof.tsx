const logos = ['LUMEN', 'ORBIT', 'HALO', 'KINDRED', 'MERIDIAN', 'SPARKLINE'];

export default function SocialProof() {
  const row = [...logos, ...logos];
  return (
    <section aria-labelledby="proof-title" className="border-y border-line py-16">
      <h2 id="proof-title" className="wrap text-center text-sm text-mute">
        Built for teams that launch campaigns.
      </h2>
      <div className="marquee mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <ul className="marquee-track flex w-max items-center" aria-label="Customers">
          {row.map((l, i) => (
            <li key={i} aria-hidden={i >= logos.length} className="display px-10 text-3xl text-white/35 transition-colors duration-300 hover:text-bone md:px-14 md:text-4xl">
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
