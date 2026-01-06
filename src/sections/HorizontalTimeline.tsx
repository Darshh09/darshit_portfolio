'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IconEye } from '@tabler/icons-react';

const timelineData = [
  {
    id: 'quantel',
    title: 'Quantel AI',
    period: 'Jun/21 - Now',
    active: true,
    icon: (
      <Image src="/quantelLogoicon.png" alt="Quantel AI" width={12} height={12} />
    )
  },
  {
    id: 'opsight',
    title: 'Opsight',
    period: 'Aug/25 - Now',
    active: true,
    icon: (
     <IconEye />
    )
  },
  {
    id: 'freelance',
    title: 'Freelance',
    period: 'Jan/23 - Now',
    active: true,
    icon: (
      <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>user laptop</title>
          <g fill="#ffff">
          <path d="M14.925 16.25H8.75L10.618 12.047C10.698 11.866 10.877 11.75 11.075 11.75H16.481C16.843 11.75 17.085 12.122 16.938 12.453L15.382 15.953C15.302 16.134 15.123 16.25 14.925 16.25Z" fill="#ffff" fillOpacity="0.3" stroke="none"></path>
          <path d="M8 9.25C10.0711 9.25 11.75 7.57107 11.75 5.5C11.75 3.42893 10.0711 1.75 8 1.75C5.92893 1.75 4.25 3.42893 4.25 5.5C4.25 7.57107 5.92893 9.25 8 9.25Z" fill="none" stroke="#ffff"></path>
          <path d="M1.953 15C3.251 13.042 5.475 11.75 8 11.75" fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M14.925 16.25H8.75L10.618 12.047C10.698 11.866 10.877 11.75 11.075 11.75H16.481C16.843 11.75 17.085 12.122 16.938 12.453L15.382 15.953C15.302 16.134 15.123 16.25 14.925 16.25Z" fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M8.75 16.25H5.75" fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </g>
      </svg>
    )
  },
  {
    id: 'graduation',
    title: 'Graduation',
    period: 'Aug/17 - Apr/21',
    active: false,
    icon: (
      <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>graduation cap</title>
        <g fill="#ffff">
          <path d="M9.45799 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.45799 10.389C9.16999 10.537 8.82899 10.537 8.54199 10.389L2.20999 7.129C1.59699 6.813 1.59699 5.937 2.20999 5.621L8.54199 2.361C8.82999 2.213 9.17099 2.213 9.45799 2.361Z" fill="#ffff" fillOpacity="0.3" stroke="none"></path>
          <path d="M9.45799 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.45799 10.389C9.16999 10.537 8.82899 10.537 8.54199 10.389L2.20999 7.129C1.59699 6.813 1.59699 5.937 2.20999 5.621L8.54199 2.361C8.82999 2.213 9.17099 2.213 9.45799 2.361Z" fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M16.25 6.375C16.079 7.115 15.932 8.097 15.969 9.25C15.996 10.084 16.113 10.812 16.25 11.406" fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M4.25 10.75V14C4.25 15.104 6.377 16 9 16C11.623 16 13.75 15.104 13.75 14V10.75" fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </g>
      </svg>
    )
  }
];

export default function HorizontalTimeline() {
  return (
    <section className="mx-auto w-full max-w-6xl  mb-16">
      <div className="box relative flex w-full justify-between">
        {/* Timeline line */}
        <div className="absolute left-3 top-1 h-px w-[calc(100%-60px)] translate-y-[-0.5px] bg-border opacity-40"></div>

        {/* Timeline items */}
        <div className="relative flex w-full">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex flex-1 flex-col items-start">
              {/* Timeline dot */}
              <div className="relative z-10 mb-6">
                {item.active && (
                  <>
                    {/* Active gradient line */}
                    <div className="absolute left-4 top-1 h-px w-20 bg-gradient-to-r from-brand to-transparent sm:w-28"></div>
                    {/* Pulsing dot */}
                    <div className="absolute -left-0.5 -top-0.5 z-10 ml-2 h-3 w-3 animate-ping rounded-full bg-brand opacity-50"></div>
                  </>
                )}
                {/* Dot background */}
                <div className="absolute -left-1.5 -top-1.5 ml-2 h-5 w-5 rounded-full bg-background"></div>
                {/* Main dot */}
                <div className={`relative z-10 ml-2 h-2 w-2 rounded-full ${
                  item.active ? 'bg-brand' : 'bg-border'
                }`}></div>
              </div>

              {/* Content */}
              <div className="flex flex-col sm:gap-2">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                  {/* Icon */}
                  <div className="h-6 w-6 overflow-hidden rounded-md border">
                    <div className="flex h-6 w-6 items-center justify-center bg-gradient-to-br from-accent to-transparent text-xs">
                      <span className="-ml-[3px] -mt-[3px] text-lg">
                        {item.icon}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <span className={`text-xs font-medium sm:text-sm ${
                    item.active ? 'text-white' : 'opacity-60'
                  }`}>
                    {item.title}
                  </span>
                </div>

                {/* Period */}
                <span className="doto-font text-sm text-muted-light sm:text-sm">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ALL button */}
        <div className="relative flex pt-6">
          <div className="absolute -top-1 left-0 flex w-full justify-end">
            <Link href="/work">
              <span className="jetbrains-mono flex gap-1 text-xs font-medium text-muted-foreground duration-200 hover:text-white">
                <span>ALL</span>
                <svg height="1em" width="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>share all right</title>
                  <g fill="currentColor">
                    <path d="m2.5,15s.974-3.5,5.5-3.5v3.5s4.5-5,4.5-5l-4.5-5v3.5c-5.5,0-5.5,6.5-5.5,6.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="m13,15l4.5-5-4.5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-2 opacity-0">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 overflow-hidden rounded-md border">
                <div className="flex h-6 w-6 items-center justify-center bg-gradient-to-br from-accent to-transparent text-xs">
                  <span className="-ml-0.5">S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
