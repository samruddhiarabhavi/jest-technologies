"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

// Frontend only. Opens the visitor's email app with the details filled in.
// To send to a service instead (Formspree, Web3Forms), change handleSubmit.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Agency: ${data.get("agency")}`,
      `Phone: ${data.get("phone")}`,
      `Team size: ${data.get("size")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("JEST demo request")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-line bg-white p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Your name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold">Agency name
          <input name="agency" required autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-semibold">Phone
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className="block text-sm font-semibold">Team size
          <select name="size" className={field} defaultValue="1-5">
            <option>1-5</option><option>6-20</option><option>21-50</option><option>50+</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-semibold">What would you like to see?
        <textarea name="message" rows={4} className={field} placeholder="For example: renewal tracking and claims" />
      </label>
      <button type="submit" className="rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark">
        Request a demo
      </button>
      {sent && <p role="status" className="text-sm text-ok">Your email app should open with the details filled in. Just press send.</p>}
    </form>
  );
}
