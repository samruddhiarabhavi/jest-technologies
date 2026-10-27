import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { services } from '../data/services';
import { blurIn } from '../animations/fade';

export default function ServicesPreview() {
  return (
    <section aria-labelledby="services-title" className="section pt-0">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal variants={blurIn}>
            <h2 id="services-title" className="display max-w-3xl text-[clamp(2.5rem,6vw,5.25rem)] leading-[1]">
              Everything it takes to ship software well.
            </h2>
          </Reveal>
          <Button to="/services" variant="ghost">
            All services
          </Button>
        </div>
        <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
