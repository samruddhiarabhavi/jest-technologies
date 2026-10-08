type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
}