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
          <h2 id="cta-title" className="display mx-auto max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.96]">
            Put your marketing on autopilot.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-mute">
          Build intelligent campaigns that run continuously, learn from every result, and keep your team focused on the ideas that matter.
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/contact" size="lg">
            Book a Demo
          </Button>
          <Button to="/platform" variant="ghost" size="lg">
            Explore Platform
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
