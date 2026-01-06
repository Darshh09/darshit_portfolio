'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Item = {
  company: string;
  role: string;
  period: string; // e.g., "Jun 2021 – Present"
  location?: string;
  logo?: string; // /public path
  type?: 'Full-Time' | 'Founder' | 'Freelance' | 'Contract';
  bullets: string[];
  stack?: string[];
};

const items: Item[] = [
  {
    company: 'Quantel AI',
    role: 'Senior Software Engineer',
    period: 'Jun 2021 – Present',
    location: 'Chennai, India · Remote',
    logo: '/logos/quantel.png',
    type: 'Full-Time',
    bullets: [
      'Rebuilt core apps in React/React Native → +30% retention, –20% onboarding time',
      'Split monolith → Node.js microservices; CI/CD deploy time –60%',
      'Instrumented auth, alerts, data jobs (Airflow, cron) → reliability +35%',
      'Raised test coverage to 85% → –40% production bugs',
    ],
    stack: ['React', 'React Native', 'Node.js', 'AWS', 'Kubernetes', 'PostgreSQL'],
  },
  {
    company: 'BrotherhoodBytes',
    role: 'Co-founder',
    period: '2023 – Present',
    location: 'Remote',
    logo: '/logos/brotherhoodbytes.png',
    type: 'Founder',
    bullets: [
      'Boutique studio building SaaS dashboards & data products for startups',
      '6+ client-style builds with on-time delivery and Lighthouse 95+ fronts',
      'Reusable UI kit cut prototype time by ~65%',
    ],
    stack: ['Next.js', 'Tailwind', 'Stripe', 'Prisma', 'PostgreSQL', 'Vercel'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: '2022 – Present',
    location: 'Remote',
    logo: '/logos/ds-mark.svg', // your DS logo here
    type: 'Freelance',
    bullets: [
      'Designed & built responsive products with animations and clean UX',
      'End-to-end delivery: scoping → wireframes → build → deploy → handover',
      'Deployed on Vercel/Cloudflare; added basic monitoring & SEO',
    ],
    stack: ['Next.js', 'Node.js', 'Railway', 'Cloudflare', 'Vercel'],
  },
];

export default function MilestoneTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20">
      <header className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Work</h2>
        <p className="text-white/60">Here is my work experience.</p>
      </header>

      <div className="relative">
        {/* right rail */}
        <div className="pointer-events-none absolute right-2 top-0 h-full w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0" />

        <ul className="space-y-8">
          {items.map((it, idx) => (
            <li key={it.company} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start gap-4">
                  {/* logo */}
                  <div className="mt-0.5 h-9 w-9 shrink-0 rounded-lg border border-white/10 bg-white/10 flex items-center justify-center overflow-hidden">
                    {it.logo ? (
                      <Image src={it.logo} alt={`${it.company} logo`} width={28} height={28} />
                    ) : (
                      <div className="h-5 w-5 rounded-full bg-white/30" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate text-white font-semibold">{it.company}</h3>
                          {it.type && (
                            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
                              {it.type}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-white/70">{it.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white/80">{it.period}</div>
                        {it.location && <div className="text-xs text-white/50">{it.location}</div>}
                      </div>
                    </div>

                    <ul className="mt-3 space-y-2 text-[13px] leading-6 text-white/85">
                      {it.bullets.map(b => <li key={b} className="flex gap-2"><span className="text-white/30">•</span><span>{b}</span></li>)}
                    </ul>

                    {it.stack && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {it.stack.map(t => (
                          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
