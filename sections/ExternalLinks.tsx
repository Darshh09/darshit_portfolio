'use client';

import Link from 'next/link';
import { IconMail, IconSend, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://x.com/Darshhh1800',
    icon: (
      <svg height="1em" width="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="#737373">
          <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
        </g>
      </svg>
    )
  },
  {
    name: 'Github',
    href: 'https://github.com/Darshh09',
    icon: (
      <svg height="1em" width="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="#737373">
          <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path>
        </g>
      </svg>
    )
  },
  {
    name: 'Resume',
    href: '/Darshit_Resume.pdf',
    icon: (
      <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <g fill="#737373">
          <path d="m15.487,5.427l-3.915-3.915c-.3278-.3279-.7724-.512-1.236-.512h-5.586c-1.5188,0-2.75,1.2312-2.75,2.75v10.5c0,1.5188,1.2312,2.75,2.75,2.75h8.5c1.5188,0,2.75-1.2312,2.75-2.75v-7.5845c0-.4646-.1845-.9102-.513-1.2385Zm-8.487,7.823c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-2.75c0-.4141.3359-.75.75-.75s.75.3359.75.75v2.75Zm2.75,0c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-5.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v5.25Zm2.75,0c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v1.5Zm1.933-6.75h-2.932c-.55,0-1-.45-1-1v-2.9209h-.001c.009-.0042.004-.001.013-.0051l3.922,3.9211s-.001.0029-.002.0049Z" fill="#737373" strokeWidth="0"></path>
        </g>
      </svg>
    )
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/darshitshukla/',
    icon: (
      <svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="#737373">
          <path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path>
        </g>
      </svg>
    )
  },
  {
    name: 'Book Meeting',
    href: '#cal-embed',
    icon: (
      <svg height="1em" width="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="#737373">
          <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" fillRule="evenodd"></path>
        </g>
      </svg>
    )
  }
];

export default function ExternalLinks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Book Meeting button click
  useEffect(() => {
    const handleBookMeeting = (e: Event) => {
      e.preventDefault();
      setIsModalOpen(true);
    };

    // Add event listener to Book Meeting button
    const bookMeetingBtn = document.querySelector('a[href="#cal-embed"]');
    if (bookMeetingBtn) {
      bookMeetingBtn.addEventListener('click', handleBookMeeting);
    }

    return () => {
      // Cleanup
      if (bookMeetingBtn) {
        bookMeetingBtn.removeEventListener('click', handleBookMeeting);
      }
    };
  }, []);

  // Handle modal state changes
  useEffect(() => {
    if (isModalOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="mx-auto w-full max-w-6xl  py-12">
        <div className="box">
          {/* Introductory text */}
          <span className="text-md text-white/70">
            You can check these <span className="font-medium text-white">links</span> if you wish to
          </span>

        {/* Link buttons */}
        <div className="mt-4 flex flex-row flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === 'Book Meeting' ? '_self' : '_blank'}
              rel={link.name === 'Book Meeting' ? '' : 'noopener noreferrer'}
            >
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5.5 [&_svg]:shrink-0 bg-cardColor text-white hover:bg-cardColorForeground py-4 shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] h-10 px-4.5 text-sm hover:text-brand">
                {link.icon}
                <span className="doto-font">{link.name}</span>
              </button>
            </a>
          ))}
        </div>

        {/* Cal.com Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-4xl mx-4 max-h-[90vh] bg-card rounded-lg shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <h3 className="text-lg font-medium text-white">Schedule a Meeting</h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-muted-foreground hover:text-white transition-colors rounded-md hover:bg-cardColorForeground"
                >
                  <IconX className="h-5 w-5" />
                </button>
              </div>

              {/* Cal.com iframe */}
              <div className="p-4">
                <iframe
                  src="https://cal.com/darshdev"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Schedule a meeting with Darshit"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
