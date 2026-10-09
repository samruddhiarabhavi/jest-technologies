import Reveal from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, text, children }: {
  eyebrow: string; title: string; text: string; children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-paper">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:pb-20 md:pt-40">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-mute">{text}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
      </div>
    </header>
  );
}
