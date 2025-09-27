'use client';

import { IconChartBar, IconBrain, IconShoppingCart, IconTopologyComplex } from '@tabler/icons-react';

type Offer = {
  title: string;
  punch: string;
  bullets: string[];
  icon: React.ReactNode;
  cta?: { label: string; href: string };
};

const offers: Offer[] = [
  {
    title: 'AI Revenue Dashboard',
    punch: 'Recover 10–20% MRR by catching churn & payment leaks early.',
    bullets: [
      'Live MRR, churn, cohort & dunning tracking',
      'Slack/Email alerts + weekly AI reports',
      'Stripe, GA, HubSpot integrations',
    ],
    icon: <IconBrain className="h-5 w-5" />,
    cta: { label: 'Book a Pilot', href: 'mailto:darshitshukla1777@gmail.com?subject=AI Revenue Dashboard Pilot' },
  },
  {
    title: 'SaaS Analytics Platform',
    punch: 'Unify funnels, retention, and product signals in one place.',
    bullets: [
      'Real-time dashboards & anomaly insights',
      'Role-based access, audit, export',
      'Next.js + Node + Postgres + Elasticsearch',
    ],
    icon: <IconChartBar className="h-5 w-5" />,
    cta: { label: 'See Case Study', href: '#projects' },
  },
  {
    title: 'E-Commerce (End-to-End)',
    punch: 'Catalog → Cart → Stripe Checkout → Order Tracking.',
    bullets: [
      'Inventory, SAGA flows, CQRS/ES',
      'Redpanda/Kafka events; Redis cache',
      'Admin ops & customer portal',
    ],
    icon: <IconShoppingCart className="h-5 w-5" />,
    cta: { label: 'View Demo', href: '#projects' },
  },
  {
    title: 'Microservices Architecture',
    punch: 'Event-driven backends built for scale and observability.',
    bullets: [
      'NestJS services, OpenAPI, CI/CD',
      'Kafka topics, idempotent consumers',
      'Tracing & dashboards (OTel, Grafana)',
    ],
    icon: <IconTopologyComplex className="h-5 w-5" />,
    cta: { label: 'Discuss Architecture', href: 'mailto:darshitshukla1777@gmail.com' },
  },
];

export default function WhatIBuild() {
  return (
    <section id="services" className="relative mx-auto w-full max-w-6xl px-6 py-16">
      {/* soft top glow */}
      <div className="pointer-events-none absolute -top-10 left-1/2 h-48 w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,rgba(217,70,239,0.06)_40%,transparent_70%)] blur-2xl" />

      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          What I <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">Build</span>
        </h2>
        <p className="mt-2 text-sm text-neutral-400 md:text-[15px]">
          Outcome-oriented product builds you can hire me for — clear scope, clear value.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {offers.map((o) => (
          <article
            key={o.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-white/10"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="text-cyan-300">{o.icon}</span>
              <span className="font-medium">{o.title}</span>
            </div>

            <p className="text-[15px] text-white/90">{o.punch}</p>

            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              {o.bullets.map((b) => (
                <li key={b} className="leading-relaxed before:mr-2 before:align-[-1px] before:text-cyan-300 before:content-['•']">
                  {b}
                </li>
              ))}
            </ul>

            {o.cta && (
              <a
                href={o.cta.href}
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90"
              >
                {o.cta.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
