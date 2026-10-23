import AgentCard from '../components/AgentCard';
import Reveal from '../components/Reveal';
import { agents } from '../data/agents';
import { blurIn } from '../animations/fade';

export default function Agents() {
  return (
    <section aria-labelledby="agents-title" className="section">
      <div className="wrap">
        <Reveal variants={blurIn}>
          <h2 id="agents-title" className="display max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1]">
            Meet your autonomous workforce.
          </h2>
        </Reveal>
        <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => (
            <li key={a.id}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <AgentCard agent={a} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
