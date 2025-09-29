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
      <IconHome className="h-full w-full text-white/70" />
    ),
    href: "/",
  },
  {
    title: "Work",
    icon: (
      <svg
        className="h-full w-full text-white/70"
        height="18px"
        width="18px"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>graduation cap</title>
        <g fill="currentColor">
          <path
            d="M9.45799 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.45799 10.389C9.16999 10.537 8.82899 10.537 8.54199 10.389L2.20999 7.129C1.59699 6.813 1.59699 5.937 2.20999 5.621L8.54199 2.361C8.82999 2.213 9.17099 2.213 9.45799 2.361Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="none"
          />
          <path
            d="M9.45799 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.45799 10.389C9.16999 10.537 8.82899 10.537 8.54199 10.389L2.20999 7.129C1.59699 6.813 1.59699 5.937 2.20999 5.621L8.54199 2.361C8.82999 2.213 9.17099 2.213 9.45799 2.361Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            d="M16.25 6.375C16.079 7.115 15.932 8.097 15.969 9.25C15.996 10.084 16.113 10.812 16.25 11.406"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            d="M4.25 10.75V14C4.25 15.104 6.377 16 9 16C11.623 16 13.75 15.104 13.75 14V10.75"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </svg>
    ),
    href: "/work",
  },
  {
    title: "Skills",
    icon: (
      <svg
        className="h-full w-full text-white/70"
        height="18px"
        width="18px"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <path
            d="M15.183 2.74329C8.17788 3.2182 4.68522 8.77876 3.81453 11.4997C4.49946 12.0114 6.58006 12.9064 9.42299 12.3924C12.2659 11.8784 12.9751 9.74808 12.9743 8.74715C15.1281 7.42278 14.0847 5.37604 15.183 2.74329Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="none"
          />
          <path
            d="M12.974 8.731C12.5 12.422 9.25 12.844 6 12.25"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            d="M2.75 15.25C2.75 15.25 4.062 3.729 15.25 2.75C14.69 3.726 14.677 5.355 14.304 6.989C13.78 9 11.969 9.25 9.75 9.25"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </svg>
    ),
    href: "/skills",
  },
        {
          title: "Blog",
          icon: (
            <svg
              className="h-full w-full text-white/70"
              height="18px"
              width="18px"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <path
                  d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                  stroke="none"
                />
                <path
                  d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.094"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <path
                  d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
              </g>
            </svg>
          ),
          href: "/blog",
        },

  {
    title: "Resume",
    icon: (
      <IconFileText className="h-full w-full text-white/70" />
    ),
    href: "/Darshit_Resume.pdf",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-white/70" />
    ),
    href: "https://github.com/darshh09",
  },
];
