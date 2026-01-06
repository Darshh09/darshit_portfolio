import type { User } from '@/features/portfolio/types/user';

export const USER = {
  firstName: 'Darshit',
  lastName: 'Shukla',
  displayName: 'Darshit Shukla',
  username: 'darshitshukla',
  gender: 'male' as const,
  pronouns: 'he/him',
  bio: 'I design & build SaaS, data platforms, and AI dashboards.',
  flipSentences: [
    'I design & build SaaS, data platforms, and AI dashboards.',
    'Full Stack Developer',
    'Open Source Contributor',
  ],
  address: 'India',
  phoneNumber: 'Kzg0Nzc3ODg4MTQ4', // E.164 format, base64 encoded
  email: 'ZGFyc2hpdHNodWtsYTE3NzdAZ21haWwuY29t', // base64 encoded: darshitshukla1777@gmail.com
  website: 'https://darshitdev.in',
  jobTitle: 'Full Stack Developer',
  jobs: [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      website: 'https://darshitdev.in',
    },
  ],
  about: `
**5+ years** of experience as a **Design Engineer** and **Frontend Engineer**.

Full Stack Developer specializing in modern web technologies and building scalable applications. Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications. Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.

Hey there! I'm a **Senior Full-Stack Developer** — but not the usual kind.

I build pixel-perfect, production-ready web apps with clean code and scalable architecture.

And yes, I'm also a **Freelance Developer** and a problem-solver startups rely on.

I combine design thinking with engineering precision to create products that look beautiful, feel intuitive, and scale effortlessly. Whether it's building SaaS platforms, developer tools, or complex dashboards — I love turning ambitious ideas into real, impactful software. Always exploring new technologies and new challenges to push the boundaries further.
`,
  avatar: '/dsmainlogo.png',
  ogImage: '/og-image.png',
  namePronunciationUrl: '',
  timeZone: 'Asia/Kolkata',
  keywords: [
    'darshit',
    'darshitshukla',
    'darshit shukla',
    'darshitdev',
    'full stack developer',
    'freelance developer',
  ],
  dateCreated: '2024-01-01', // YYYY-MM-DD
} satisfies User;
