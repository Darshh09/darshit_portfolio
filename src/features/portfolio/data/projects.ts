import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "opssight",
    title: "OpsSight",
    period: {
      start: "2025",
    },
    link: "",
    skills: [
      "SaaS",
      "Next.js",
      "Stripe",
      "OpenAI",
      "Postgres",
      "Analytics",
    ],
    description: `AI-powered revenue intelligence for modern SaaS teams.
- Tracks MRR, churn, dunning, and subscription health in one place
- Sends Slack / Email alerts for anomalies and failed payments
- Weekly AI-generated growth reports so founders know what to fix next
`,
    logo: "/logos/opssight.png",
    isExpanded: true,
  },
  {
    id: "ui-library",
    title: "Darshit UI (in progress)",
    period: {
      start: "2025",
    },
    link: "",
    skills: [
      "Design System",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Component Library",
      "shadcn/ui",
    ],
    description: `Work-in-progress UI library used across my projects.
- Opinionated, production-ready React components
- Built on top of shadcn/ui with custom motion and theming
- Aimed at speeding up dashboards, SaaS, and internal tools`,
    logo: "",
  },
  {
    id: "darshitdevdotcom",
    title: "darshitdev.in",
    period: {
      start: "01.2025",
    },
    link: "https://darshitdev.in",
    skills: [
      "Open Source",
      "Next.js 16",
      "Tailwind CSS v4",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "MDX",
      "Vercel",
    ],
    description:
      "My personal dev portfolio, interactive component library, and blog — built as a playground for modern Next.js, animation, and DX-focused UI patterns.",
    logo: "https://assets.darshitdev.in/images/project-logos/darshitdevdotcom.svg",
  },
];
