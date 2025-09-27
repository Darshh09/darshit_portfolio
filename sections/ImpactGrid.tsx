'use client';

type Win = {
  date: string;
  title: string;
  impact: string;
  meta?: string;
};

const wins: Win[] = [
  {
    date: 'Feb 2025',
    title: 'OpsSight MVP',
    impact: 'Flagged dunning & churn cohorts → simulated recovery of ₹50K/mo.',
    meta: 'Next.js • Stripe • OpenAI • Postgres',
  },
  {
    date: 'Mar 2025',
    title: 'SaaS Dashboard UI Kit',
    impact: 'Cut prototyping time by ~60% across client MVPs.',
    meta: 'React • Tailwind • Storybook',
  },
  {
    date: 'Apr 2025',
    title: 'E-Com CQRS Platform',
    impact: 'Processed 10K simulated orders in 24h with SAGA flows.',
    meta: 'NestJS • Kafka • Redis • ES',
  },
  {
    date: 'May 2025',
    title: 'AI Insight Engine',
    impact: 'Generated 200+ plain-English insights from raw events.',
    meta: 'OpenAI • RAG • Elasticsearch',
  },
];

export default function ImpactGrid() {
  return (
    <section id="impact" className="relative mx-auto w-full max-w-6xl px-6 py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Impact <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">Snapshots</span>
        </h2>
        <p className="mt-2 text-sm text-neutral-400 md:text-[15px]">
          Real outcomes from product builds and system design work.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {wins.map((w) => (
          <article
            key={w.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-white/10"
          >
            <p className="text-xs text-neutral-400">{w.date}</p>
            <h3 className="mt-1 text-[15px] font-semibold text-white">{w.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{w.impact}</p>
            {w.meta && <p className="mt-3 text-xs text-neutral-400">{w.meta}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
