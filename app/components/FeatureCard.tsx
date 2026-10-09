"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Icon from "@/components/Icon";

type Props = { icon: string; title: string; text: string; href?: string };

export default function FeatureCard({ icon, title, text, href }: Props) {
  const body = (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-brand/10"
    >
      <span className="mb-4 inline-flex rounded-xl bg-brand-soft p-3 text-brand transition group-hover:bg-brand group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="flex items-center justify-between text-xl font-bold">
        {title}
        {href && <ArrowUpRight className="h-5 w-5 text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden="true" />}
      </h3>
      <p className="mt-2 text-mute">{text}</p>
    </motion.div>
  );
  return href ? <Link href={href} className="block h-full">{body}</Link> : body;
}
