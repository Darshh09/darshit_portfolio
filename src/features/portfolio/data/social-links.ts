import React from 'react';

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
    icon: React.createElement(TwitterIcon),
    title: 'Twitter',
    description: '@Darshhh1800',
    href: 'https://x.com/Darshhh1800',
  },
  {
    icon: React.createElement(GithubIcon),
    title: 'Github',
    description: 'Darshh09',
    href: 'https://github.com/Darshh09',
  },
  {
    icon: React.createElement(ResumeIcon),
    title: 'Resume',
    description: 'View my resume',
    href: '/Darshit_Resume.pdf',
  },
  {
    icon: React.createElement(LinkedinIcon),
    title: 'Linkedin',
    description: 'darshitshukla',
    href: 'https://www.linkedin.com/in/darshitshukla/',
  },
  {
    icon: React.createElement(BookMeetingIcon),
    title: 'Book Meeting',
    description: 'Schedule a call',
    href: '#cal-embed',
    isBookMeeting: true,
  },
];
