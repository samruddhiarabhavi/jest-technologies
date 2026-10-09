import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "pop";
  arrow?: boolean;
  external?: boolean;
};

const styles = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-brand-soft",
  pop: "bg-pop text-ink hover:brightness-95",
};

export default function Button({ href, children, variant = "primary", arrow, external }: ButtonProps) {
  const className = `group inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${styles[variant]}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
