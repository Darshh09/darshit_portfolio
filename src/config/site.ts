export const SITE_INFO = {
  name: 'Darshit | Design Engineer',
  url: process.env.APP_URL || 'https://darshitdev.in',
  ogImage: '/og-image.png',
  description: 'I design & build SaaS, data platforms, and AI dashboards.',
  keywords: ['design', 'engineer', 'portfolio'],
};

export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
};

export type NavItem = {
  title: string;
  href: string;
};

export const MAIN_NAV: NavItem[] = [
  {
    title: 'Portfolio',
    href: '/',
  },
  {
    title: 'Arts',
    href: '/arts',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];

export const GITHUB_USERNAME = 'Darshh09';
export const SOURCE_CODE_GITHUB_REPO = 'Darshh09/darshit-portfolio';
export const SOURCE_CODE_GITHUB_URL = 'https://github.com/Darshh09';

export const SPONSORSHIP_URL = 'https://github.com/sponsors/Darshh09';

export const UTM_PARAMS = {
  utm_source: 'darshitdev.in',
  utm_medium: 'referral',
  utm_campaign: 'portfolio',
};

