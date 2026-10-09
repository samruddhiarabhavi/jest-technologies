import {
  Database, Workflow, BarChart3, Users, ShieldCheck, MapPin, Target, FileText,
  RefreshCw, Briefcase, Settings2, Wallet, Headphones, Lock, type LucideProps,
} from "lucide-react";

const icons = {
  Database, Workflow, BarChart3, Users, ShieldCheck, MapPin, Target, FileText,
  RefreshCw, Briefcase, Settings2, Wallet, Headphones, Lock,
};

export type IconName = keyof typeof icons;

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = icons[name as IconName] ?? FileText;
  return <Component aria-hidden="true" {...props} />;
}
