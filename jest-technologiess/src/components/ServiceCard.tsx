import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '../data/services';

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link to={`/services#${service.slug}`} className="group relative flex h-full flex-col rounded-2xl border border-line bg-card/70 p-7 transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-mint/40 hover:bg-card">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-mint transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Icon size={20} aria-hidden="true" />
      </span>
      <h3 className="display mt-8 text-2xl">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-mute transition-colors duration-500 group-hover:text-bone">{service.summary}</p>
      <ArrowUpRight aria-hidden="true" className="absolute right-6 top-6 -translate-x-2 translate-y-2 text-mint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
    </Link>
  );
}
