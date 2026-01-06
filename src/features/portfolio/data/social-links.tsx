import type { SocialLink } from '../types/social-links';

import {
  BookMeetingIcon,
  GithubIcon,
  LinkedinIcon,
  ResumeIcon,
  TwitterIcon,
} from '../components/social-links/icons';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <TwitterIcon />,
    title: 'Twitter',
    description: '@Darshhh1800',
    href: 'https://x.com/Darshhh1800',
  },
  {
    icon: <GithubIcon />,
    title: 'Github',
    description: 'Darshh09',
    href: 'https://github.com/Darshh09',
  },
  {
    icon: <ResumeIcon />,
    title: 'Resume',
    description: 'View my resume',
    href: '/Darshit_Resume.pdf',
  },
  {
    icon: <LinkedinIcon />,
    title: 'Linkedin',
    description: 'darshitshukla',
    href: 'https://www.linkedin.com/in/darshitshukla/',
  },
  {
    icon: <BookMeetingIcon />,
    title: 'Book Meeting',
    description: 'Schedule a call',
    href: '#cal-embed',
    isBookMeeting: true,
  },
];
