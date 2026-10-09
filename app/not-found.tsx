import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-48 text-center">
      <p className="text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">This page does not exist.</h1>
      <div className="mt-8"><Button href="/" arrow>Back to home</Button></div>
    </section>
  );
}
