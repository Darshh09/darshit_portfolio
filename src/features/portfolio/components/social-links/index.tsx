'use client';

import { IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

import { SOCIAL_LINKS } from '../../data/social-links';
import { Panel } from '../panel';
import { SocialLinkItem } from './social-link-item';

export function SocialLinks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Book Meeting button click
  useEffect(() => {
    const handleBookMeeting = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[data-book-meeting="true"]');
      if (link) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    // Add event listener to Book Meeting button
    const bookMeetingBtn = document.querySelector('a[data-book-meeting="true"]');
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
    <>
      <Panel>
        <h2 className="sr-only">Social Links</h2>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-edge"></div>
            <div className="border-l border-edge"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SOCIAL_LINKS.map((link, index) => {
              return <SocialLinkItem key={index} {...link} />;
            })}
          </div>
        </div>
      </Panel>

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
    </>
  );
}
