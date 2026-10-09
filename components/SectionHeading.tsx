import Reveal from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, center, dark }: Props) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${dark ? "text-pop" : "text-brand"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{title}</h2>
      {text && <p className={`mt-4 text-lg ${dark ? "text-white/70" : "text-mute"}`}>{text}</p>}
    </Reveal>
  );
}
