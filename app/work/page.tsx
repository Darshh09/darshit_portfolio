'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PageWrap } from '@/components/containers';
import { FloatingDock } from '@/components/ui/floating-dock';
import { navigationLinks } from '@/lib/navigation';
import {
  IconBriefcase,
} from '@tabler/icons-react';

/* ---------------- data ---------------- */

type Item = {
  org: string;
  role: string;
  type: 'Full-Time' | 'Freelance' | 'Contract' | 'Founder';
  period: string;
  location: string;
  logo?: string;
  fallback?: string;
  bullets: string[];
  stack?: string[];
};

const items: Item[] = [
  {
    org: 'Quantel AI',
    role: 'Senior Software Engineer',
    type: 'Full-Time',
    period: 'Jun 2021 – Present',
    location: 'Chennai, India · Remote',
    logo: 'quantelLogoicon.png',
    fallback: 'QA',
    bullets: [
      'Rebuilt core apps (React/React Native) → +30% retention, ~20% faster onboarding.',
      'Split monolith to Node.js microservices; cut CI/CD deploy time by ~60%.',
      'Instrumented auth, alerts & data jobs (Airflow/cron) → ~35% reliability boost.',
      'Raised test coverage to ~85% and reduced production bugs by ~40%.',
    ],
    stack: ['React', 'React Native', 'Node.js', 'AWS (EC2/ECS/ALB)', 'Airflow', 'Kubernetes', 'PostgreSQL'],
  },
  {
    org: 'OpsSight — AI Revenue Intelligence',
    role: 'Founder',
    type: 'Founder',
    period: '2023 – Present',
    location: 'Remote',
    logo: '/opsight.ico',
    fallback: 'OS',
    bullets: [
      'Built AI dashboard for MRR, churn & dunning with Slack/Email alerts.',
      'Stripe pipeline + anomaly detection; weekly AI summaries for founders.',
      'Pilot (mock data) surfaced ~₹50K/mo recoverable failed payments.',
      'Own UX, architecture, infra & pilots end-to-end.',
    ],
    stack: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'OpenAI', 'Kafka (roadmap)'],
  },
  {
    org: 'Freelance',
    role: 'Full-Stack Developer',
    type: 'Freelance',
    period: '2024 – Present',
    location: 'Remote',
    logo: '/dsmainlogo.png', // your DS logo
    fallback: 'DS',
    bullets: [
      'Delivered 20+ production apps (SaaS, e-commerce, analytics).',
      'Payments (Stripe/Razorpay), auth, admin tooling, dashboards.',
      'Lighthouse 90+ via image/route/code-split optimizations.',
      'Set up CI/CD, logging & monitoring; reduced release friction.',
    ],
    stack: ['React/Next.js', 'Node.js', 'Tailwind', 'PostgreSQL', 'Redis', 'Vercel/AWS'],
  },
];

/* ---------------- page ---------------- */

export default function WorkPage() {
  return (
    <PageWrap>
      <div className="mb-20">
        <div className="mb-10">
          <div className="jetbrains-mono flex items-center gap-1.5 mb-2 text-sm tracking-tighter text-muted-light">
            <span>Hey It&apos;s me</span>
            <svg
              height="1em"
              width="1em"
              className="opacity-50"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>heart hand</title>
              <g fill="#737373">
                <path d="M6.074 10.969L5.549 9.84899C5.143 8.98099 5.14 7.98499 5.539 7.11499C5.937 6.24599 6.698 5.59799 7.624 5.33799C7.898 5.26099 8.181 5.22199 8.465 5.22199C9.598 5.22199 10.657 5.83499 11.271 6.80899C11.71 5.98999 12.001 5.058 12.001 4.008C12.008 2.085 10.447 0.510993 8.508 0.498993C7.668 0.509993 6.871 0.818996 6.251 1.355C5.63 0.818996 4.83 0.508993 3.98 0.498993C2.055 0.510993 0.494 2.08499 0.501 4.00499C0.501 7.87899 4.379 10.202 5.567 10.822C5.727 10.905 5.9 10.948 6.074 10.969Z" fill="#737373"></path>
                <path d="M16.554 10.604C15.565 9.84798 13.332 9.68199 11.231 10.181L10.12 7.81799C9.74901 7.02899 8.86801 6.54698 8.02901 6.78298C6.96101 7.08298 6.45701 8.24998 6.90701 9.21298L9.05401 13.789L7.38401 13.482C6.65501 13.348 5.87201 13.631 5.49601 14.27C5.19701 14.779 5.17101 15.373 5.41301 15.89C5.60801 16.308 5.95601 16.624 6.39301 16.782L8.50201 17.525C9.39701 17.84 10.339 18.001 11.288 18.001H13.905C16.54 18.001 17.827 15.642 17.696 13.721C17.585 12.083 17.201 11.1 16.552 10.605L16.554 10.604Z" fill="#737373" opacity="0.4"></path>
              </g>
            </svg>
          </div>

          <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
            <h1 className="doto-font text-3xl font-bold text-white">
              <span className="relative">
                <span>Work</span>
              </span>
              <span className="text-sm font-medium text-neutral-400 md:text-sm ml-2">
                / <span className="font-mono">experience</span>
              </span>
            </h1>
          </div>

          <div className="mt-5 space-y-2 text-neutral-300 md:mt-6">
            <p className="text-sm leading-relaxed md:text-base">
              A selection of my recent experience across <strong className="text-neutral-100 font-semibold">product engineering</strong>, <strong className="text-neutral-100 font-semibold">founding</strong>, and <strong className="text-neutral-100 font-semibold">freelance delivery</strong>.
            </p>
          </div>
        </div>

        <ul className="space-y-8">
          {items.map((item, i) => (
            <WorkCard key={`${item.org}-${i}`} item={item} index={i} />
          ))}
        </ul>
      </div>

      <FloatingDock items={navigationLinks} />
    </PageWrap>
  );
}

/* ---------------- components ---------------- */

function WorkCard({ item, index }: { item: Item; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur md:p-5"
    >
      {/* top row: logo + org/role, right side: dates & location */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <Logo src={item.logo} fallback={item.fallback} />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-white font-semibold text-lg md:text-xl">{item.org}</h3>
              <Badge>{item.type}</Badge>
            </div>
            <p className="mt-1 flex items-center gap-2 text-sm text-white/75">
              <IconBriefcase className="h-4 w-4 text-cyan-300" />
              {item.role}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-white/80">{item.period}</p>
          <p className="mt-0.5 text-xs text-white/50">{item.location}</p>
        </div>
      </div>

      {/* bullets */}
      <ul className="mt-4 space-y-2.5">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-white/85">
            <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/30" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* stack tags */}
      {item.stack && item.stack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.li>
  );
}

function Logo({ src, fallback }: { src?: string; fallback?: string }) {
  return (
    <div className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white/5 md:h-12 md:w-12">
      {src ? (
        <Image
          src={src}
          alt="logo"
          width={48}
          height={48}
          className="object-contain opacity-90"
          unoptimized
        />
      ) : (
        <span className="text-[11px] font-semibold tracking-wide text-white/80">{fallback}</span>
      )}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/70 ring-1 ring-white/10">
      {children}
    </span>
  );
}
