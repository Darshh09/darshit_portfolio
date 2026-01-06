import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "quantel-ai",
    companyName: "Quantel AI",
    companyLogo: "/logos/quantel.png",
    positions: [
      {
        id: "quantel-software-engineer",
        title: "Software Engineer",
        employmentPeriod: {
          start: "2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Rebuilt core apps with React/React Native → +30% retention
- Split monolith to services (Flask/Django/Node) → −60% deploy time
- Added CI/CD, observability, and auth hardening`,
        skills: ["React", "RN", "Node", "Flask", "AWS", "K8s"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "opssight",
    companyName: "OpsSight",
    companyLogo: "/logos/opssight.png",
    positions: [
      {
        id: "opssight-founder",
        title: "Founder",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Full-time",
        icon: "idea",
        description: `- AI-powered revenue intelligence (MRR, churn, dunning)
- Slack/Email alerts + weekly AI growth reports`,
        skills: ["Next.js", "Stripe", "OpenAI", "Postgres"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "brotherhoodbytes",
    companyName: "BrotherhoodBytes",
    companyLogo: "/logos/brotherhoodbytes.svg",
    positions: [
      {
        id: "brotherhoodbytes-cofounder",
        title: "Co-founder",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Full-time",
        icon: "idea",
        description: `- Led delivery across 10+ client projects
- Built reusable UI kit to speed up MVPs`,
        skills: ["React", "Tailwind", "Storybook"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    companyLogo: "/logos/ds-mark.svg",
    positions: [
      {
        id: "freelance-fullstack",
        title: "Full-Stack Engineer",
        employmentPeriod: {
          start: "2022",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Delivered SaaS dashboards & e-com builds end-to-end
- Productized offers with fixed scope & timelines`,
        skills: ["Next.js", "NestJS", "Kafka", "Redis"],
      },
    ],
    isCurrentEmployer: true,
  },
];
