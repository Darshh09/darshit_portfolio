export type Project = {
  title: string;
  blurb: string;
  cover?: string;
  stars?: number;
  href?: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'Magic Genie Tabs',
    blurb: 'macOS-style genie animation with a sleek glass pill nav bar.',
    cover: '/project-covers/magic-genie-tabs.jpg',
    href: '/arts/components/magic-genie-tabs',
    tags: ['React', 'Framer Motion', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Portfolio Website',
    blurb: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    cover: '/project-covers/portfolio.jpg',
    href: 'https://github.com/darshitshukla/darshit-portfolio',
    stars: 42,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'E-commerce Platform',
    blurb: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'AI Dashboard',
    blurb: 'Real-time analytics dashboard with AI-powered insights and data visualization.',
    tags: ['React', 'TypeScript', 'Chart.js', 'AI/ML'],
  },
];

