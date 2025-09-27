// lib/projects.ts
export type Project = {
  title: string;
  blurb: string;
  stars?: number;           // optional small stat
  cover?: string;           // image or video poster (optional)
  href?: string;            // link to detail/demo
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'OpsSight — AI-Powered Revenue Intelligence',
    blurb: 'Real-time MRR, churn, dunning, and funnel health with AI insights & alerts.',
    stars: 0,
    cover: '/Opsight.png',
    href: 'https://opsight.darshitdev.in',
    tags: ['Next.js','Tailwind','Node.js','Stripe','OpenAI'],
  },
  {
    title: 'E-commerce Microservices (CQRS/ES)',
    blurb: 'Orders • Payments • Inventory with Kafka & Stripe. Real-time order tracking.',
    stars: 0,
    cover: '/ecomm.png',
    href: '#',
    tags: ['Node.js','Kafka','Redis','PostgreSQL','Stripe'],
  },
];
