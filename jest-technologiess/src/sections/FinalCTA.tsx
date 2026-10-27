import Button from '../components/Button';
import NetworkGraph from '../components/NetworkGraph';
import Reveal from '../components/Reveal';
import { blurIn } from '../animations/fade';

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-line py-32 md:py-48">
      <NetworkGraph count={12} seed={5} labels={false} className="absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000_90%)]" />
      <div className="wrap relative text-center">
        <Reveal variants={blurIn}>
          <h2 id="cta-title" className="display mx-auto max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.96]">
            Your next product deserves an engineering team that cares.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-mute">
          Tell us what you want to build. An engineer, not a salesperson, will reply within one business day.
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/contact" size="lg">
            Request a Proposal
          </Button>
          <Button to="/projects" variant="ghost" size="lg">
            See Our Work
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
