import type { User } from '@/features/portfolio/types/user';

export const USER = {
  firstName: 'Darshit',
  lastName: 'Shukla',
  displayName: 'Darshit Shukla',
  username: 'darshitshukla',
  gender: 'male' as const,
  pronouns: 'he/him',
  bio: 'I design & build Landing Pages, data platforms and AI dashboards.',
  flipSentences: [
    'I design & build Landing Pages, data platforms and AI dashboards.',
    'Design Engineer',
    'Senior Frontend Engineer',
  ],
  address: 'India',
  phoneNumber: 'KzkxOTEzMTM3MTgwMA==', // E.164 format, base64 encoded: +919131371800
  email: 'ZGFyc2hpdHNodWtsYTE3NzdAZ21haWwuY29t', // base64 encoded: darshitshukla1777@gmail.com
  website: 'https://darshitdev.in',
  jobTitle: 'Design Engineer',
  jobs: [
    {
      title: 'Senior Software Engineer',
      company: 'Quantel AI',
      website: 'https://darshitdev.in',
    },
  ],
  about: `I'm **Darshit Shukla**, a passionate **Design Engineer** and **Senior Full-Stack Developer** with over **5 years** of experience building modern, scalable, and impactful web applications.

My expertise spans **Next.js**, **React**, and **TypeScript**, delivering pixel-perfect, user-focused solutions—from SaaS platforms and developer tools to advanced dashboards. As a **freelance developer**, I help startups and businesses turn their ideas into powerful, high-quality products with clean code and scalable architecture.

Driven by curiosity, I love exploring new technologies, tackling complex problems, and creating software that looks great, feels intuitive, and makes a real difference.`,
  avatar: '/profile.jpeg',
  ogImage: '/dsmainlogo.png',
  namePronunciationUrl: '',
  timeZone: 'Asia/Kolkata',
  keywords: [
    'darshit',
    'darshitshukla',
    'darshit shukla',
    'darshitdev',
    'full stack developer',
    'freelance developer',
    'design engineer',
    'senior frontend engineer',
  ],
  dateCreated: '2026-01-06', // YYYY-MM-DD
} satisfies User;
