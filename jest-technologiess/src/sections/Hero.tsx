import Button from '../components/Button';
import TextLink from '../components/TextLink';
import ArtPanel from '../components/ArtPanel';
import Reveal from '../components/Reveal';

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="wrap grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <Reveal>
        <p className="text-sm font-medium text-clay">Software company · Since 2015</p>
        <h1 id="hero-title" className="h-serif mt-5 text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.05]">
          We build software that keeps working long after launch.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">Jest Technologies designs, builds, and looks after web, mobile, and AI products for companies that rely on them every day.</p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button to="/contact">Request a proposal</Button>
          <TextLink to="/projects">See our work</TextLink>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <ArtPanel kind="hero" className="aspect-[4/3] w-full rounded-md" />
      </Reveal>
    </section>
  );
}
