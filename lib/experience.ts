// lib/experience.ts
export type Experience = {
  company: string;
  role: string;
  logo: string;           // /public path or remote
  period: string;         // "Jun 2021 – Present"
  location: string;       // "Chennai, India • Remote"
  type?: 'Full-Time'|'Founder'|'Freelance'|'Contract';
  bullets: string[];
  tags: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Quantel AI',
    role: 'Senior Software Engineer',
    logo: '/logos/quantel.png',
    period: 'Jun 2021 – Present',
    location: 'Chennai, India • Remote',
    type: 'Full-Time',
    bullets: [
      'Rebuilt core apps in React/React Native → +30% retention, −20% onboarding time.',
      'Split monolith to Node.js microservices; CI/CD cut deploy time by 60%.',
      'Instrumented auth, alerts & data jobs (Airflow/cron) → +35% reliability.',
      'Raised test coverage to 85% → ~40% fewer production bugs.',
    ],
    tags: ['React', 'React Native', 'Node.js', 'AWS (ECS/ALB)', 'Airflow', 'PostgreSQL'],
  },
  {
    company: 'BrotherhoodBytes',
    role: 'Co-founder',
    logo: '/logos/brotherhoodbytes.png',
    period: '2023 – Present',
    location: 'Remote',
    type: 'Founder',
    bullets: [
      'Boutique studio building SaaS dashboards & data products for startups.',
      'Delivered 6+ client projects with 100% on-time delivery.',
      'Reusable UI kit cut prototype time by ~65%.',
      'Avg Lighthouse 95+ on shipped frontends.',
    ],
    tags: ['Next.js', 'Tailwind', 'Stripe', 'PostgreSQL', 'Vercel'],
  },
  {
    company: 'OpsSight',
    role: 'Founder',
    logo: '/logos/opssight.svg', // use your DS mark
    period: '2025 – Present',
    location: 'Remote',
    type: 'Founder',
    bullets: [
      'AI-powered revenue intelligence: MRR, churn, failed payments, funnel health.',
      'Real-time dashboards, AI summaries, Slack/Email alerts, weekly growth reports.',
    ],
    tags: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'OpenAI'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    logo: '/logos/ds.svg', // your DS icon
    period: '2022 – Present',
    location: 'Global • Remote',
    type: 'Freelance',
    bullets: [
      'Shipped responsive SaaS MVPs with auth, billing, and analytics.',
      'Clean UX with micro-interactions; SEO & performance tuned.',
    ],
    tags: ['React', 'Next.js', 'NestJS', 'Kafka', 'Redis', 'Elasticsearch'],
  },
];
