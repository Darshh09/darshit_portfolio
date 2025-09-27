import React from 'react';
import {
  IconBrandGithub,
  IconBriefcase,
  IconCode,
  IconHome,
  IconPalette,
  IconPencil,
  IconFileText,
  IconFlask,
} from '@tabler/icons-react';

export const navigationLinks = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Work",
    icon: (
      <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/work",
  },
  {
    title: "Skills",
    icon: (
      <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/skills",
  },
  {
    title: "Blog",
    icon: (
      <IconPencil className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/blog",
  },

  {
    title: "Resume",
    icon: (
      <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/Darshit_Resume.pdf",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/darshh09",
  },
];
