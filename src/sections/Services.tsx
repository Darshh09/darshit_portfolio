'use client';

import { motion } from 'framer-motion';
import {
  IconBolt, IconChartBar, IconBrain, IconCube, IconCloud, IconTimeline, IconMail,
} from '@tabler/icons-react';
import Link from 'next/link';

const services = [
  {
    title: 'Custom SaaS Platforms',
    icon: IconCube,
    bullets: [
      'From idea → production in weeks',
      'Auth, billing, dashboards, admin',
    ],
    tags: ['Next.js', 'Node.js', 'Postgres', 'Stripe'],
  },
  {
    title: 'Real-Time Dashboards',
    icon: IconChartBar,
    bullets: [
      'Live KPIs, cohort & funnel views',
      'Exportable reports & alerts',
    ],
    tags: ['Recharts', 'tRPC/REST', 'Elasticsearch', 'Redis'],
  },
  {
    title: 'AI-Powered Tools',
    icon: IconBrain,
    bullets: [
      'Chat, RAG, agents, automation',
      'Domain-specific copilots',
    ],
    tags: ['OpenAI', 'LangChain', 'Vector DB'],
  },
  {
    title: 'MVP Acceleration',
    icon: IconBolt,
    bullets: [
      'Clickable prototype in days',
      'Iterate with user feedback',
    ],
    tags: ['Design ↔ Build', 'Storybook', 'Shadcn'],
  },
  {
    title: 'Scalable Backends',
    icon: IconCloud,
    bullets: [
      'Events, queues, observability',
      'Security & cost-aware infra',
    ],
    tags: ['Kafka', 'NestJS', 'AWS', 'Railway'],
  },
  {
    title: 'Growth Analytics',
    icon: IconTimeline,
    bullets: [
      'Attribution & retention insights',
      'Churn, ARPU, LTV tracking',
    ],
    tags: ['ETL', 'dbt', 'GA4', 'Stripe'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-20">
      <header className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          What I build for founders & teams
        </h2>
        <p className="mt-2 text-white/60">
          Product thinking + production engineering. Ship fast, keep it stable.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/30 hover:bg-white/[0.08] transition"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/10 p-2">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                {s.bullets.map(b => <li key={b}>• {b}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-10">
        <Link
          href="mailto:darshitshukla1777@gmail.com?subject=Build with Darshit"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:opacity-90"
        >
          <IconMail className="h-4 w-4" />
          Let’s discuss your product
        </Link>
      </div>
    </section>
  );
}
