'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Project = {
  title: string;
  subtitle?: string;
  blurb: string;
  href?: string;
  tags: string[];
  ctas?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: 'OpsSight — AI-Powered Revenue Intelligence',
    blurb: 'Real-time MRR, churn & funnel health with AI insights, alerts, and weekly growth reports.',
    tags: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'OpenAI'],
    ctas: [
      { label: 'Live Demo', href: 'https://builtbydarshit.netlify.app/opssight' },
      { label: 'Schedule Call', href: 'https://cal.com/darshit/opssight' },
    ],
  },
  {
    title: 'E-commerce Microservices (CQRS/ES)',
    blurb: 'Orders · Payments · Inventory with Kafka & Stripe. Event-driven, resilient design.',
    tags: ['NestJS', 'Kafka', 'Postgres', 'Redis', 'Stripe'],
    ctas: [{ label: 'View Repo', href: '#' }],
  },
  {
    title: 'SaaS Dashboard UI Kit',
    blurb: 'Reusable components & templates that cut prototype time by ~65%.',
    tags: ['React', 'Tailwind', 'Storybook', 'Shadcn'],
    ctas: [{ label: 'Docs', href: '#' }],
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 ">
      <header className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Work</h2>
        <p className="text-white/60">A few things I’ve built recently.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/30 hover:bg-white/[0.08] transition"
          >
            <h3 className="text-white font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-white/80">{p.blurb}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                  {t}
                </span>
              ))}
            </div>

            {p.ctas && (
              <div className="mt-4 flex flex-wrap gap-3">
                {p.ctas.map(c => (
                  <Link
                    key={c.label}
                    href={c.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-cyan-400/40 hover:text-white"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
