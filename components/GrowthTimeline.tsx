'use client';

import Image from 'next/image';

type Item = {
  company: string;
  role: string;
  period: string;
  logoSrc: string;
  points: string[];
  tech: string[];
  highlight?: boolean;
};

const items: Item[] = [
  {
    company: 'Quantel AI',
    role: 'Software Engineer',
    period: '2021 — Present',
    logoSrc: '/logos/quantel.png', // put your PNG/SVG in public/logos
    points: [
      'Rebuilt core apps with React/React Native → +30% retention',
      'Split monolith to services (Flask/Django/Node) → −60% deploy time',
      'Added CI/CD, observability, and auth hardening',
    ],
    tech: ['React', 'RN', 'Node', 'Flask', 'AWS', 'K8s'],
    highlight: true,
  },
  {
    company: 'OpsSight',
    role: 'Founder',
    period: '2025 — Present',
    logoSrc: '/logos/opssight.png',
    points: [
      'AI-powered revenue intelligence (MRR, churn, dunning)',
      'Slack/Email alerts + weekly AI growth reports',
    ],
    tech: ['Next.js', 'Stripe', 'OpenAI', 'Postgres'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Engineer',
    period: '2022 — Present',
    logoSrc: '/logos/ds-mark.svg', // your DS monogram
    points: [
      'Delivered SaaS dashboards & e-com builds end-to-end',
      'Productized offers with fixed scope & timelines',
    ],
    tech: ['Next.js', 'NestJS', 'Kafka', 'Redis'],
  },
  {
    company: 'BrotherhoodBytes',
    role: 'Co-founder',
    period: '2023 — Present',
    logoSrc: '/logos/brotherhoodbytes.svg',
    points: [
      'Led delivery across 10+ client projects',
      'Built reusable UI kit to speed up MVPs',
    ],
    tech: ['React', 'Tailwind', 'Storybook'],
  },
];

export default function GrowthTimeline() {
  return (
    <section id="experience" className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <header className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Work <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="mt-2 text-sm text-neutral-400 md:text-[15px]">
          Roles, timelines, and the impact that actually moved the needle.
        </p>
      </header>

      <div className="relative">
        {/* vertical line */}
        <div className="pointer-events-none absolute left-[28px] top-0 h-full w-px bg-white/10" />

        <ul className="space-y-6">
          {items.map((it, idx) => (
            <li key={it.company} className="relative flex gap-4">
              {/* node */}
              <div className="relative z-10 mt-2 h-4 w-4 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 shadow-[0_0_0_6px_rgba(255,255,255,0.05)]" />

              {/* card */}
              <div
                className={`w-full rounded-2xl border p-5 transition ${
                  it.highlight
                    ? 'border-cyan-400/30 bg-white/10'
                    : 'border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-md border border-white/10 bg-white/5">
                      <Image
                        src={it.logoSrc}
                        alt={it.company}
                        width={40}
                        height={40}
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-white">{it.company}</h3>
                      <p className="text-sm text-neutral-300">{it.role}</p>
                    </div>
                  </div>
                  <p className="shrink-0 text-xs text-neutral-400">{it.period}</p>
                </div>

                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {it.points.map((p) => (
                    <li key={p} className="leading-relaxed before:mr-2 before:align-[-1px] before:text-cyan-300 before:content-['—']">
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {it.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
