'use client';

import { PROFILE } from '@/lib/data';
import Link from 'next/link';
import { IconMail, IconSend } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const { handle, title, bioLines, about, actions } = PROFILE;

  return (
    <section
      aria-label="Intro"
      className="relative mx-auto w-full max-w-4xl mb-8"
    >
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(104,211,145,0.08)_0%,rgba(56,189,248,0.06)_40%,transparent_70%)] blur-2xl" />
      </div>

      {/* Main content with logo */}
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">

      <div className="jetbrains-mono flex items-center gap-1.5 mb-2 text-sm tracking-tighter text-muted-light">
        <span>Hey It's me</span>
        <svg
          height="1em"
          width="1em"
          className="opacity-50"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>heart hand</title>
          <g fill="#737373">
            <path d="M6.074 10.969L5.549 9.84899C5.143 8.98099 5.14 7.98499 5.539 7.11499C5.937 6.24599 6.698 5.59799 7.624 5.33799C7.898 5.26099 8.181 5.22199 8.465 5.22199C9.598 5.22199 10.657 5.83499 11.271 6.80899C11.71 5.98999 12.001 5.058 12.001 4.008C12.008 2.085 10.447 0.510993 8.508 0.498993C7.668 0.509993 6.871 0.818996 6.251 1.355C5.63 0.818996 4.83 0.508993 3.98 0.498993C2.055 0.510993 0.494 2.08499 0.501 4.00499C0.501 7.87899 4.379 10.202 5.567 10.822C5.727 10.905 5.9 10.948 6.074 10.969Z" fill="#737373"></path>
            <path d="M16.554 10.604C15.565 9.84798 13.332 9.68199 11.231 10.181L10.12 7.81799C9.74901 7.02899 8.86801 6.54698 8.02901 6.78298C6.96101 7.08298 6.45701 8.24998 6.90701 9.21298L9.05401 13.789L7.38401 13.482C6.65501 13.348 5.87201 13.631 5.49601 14.27C5.19701 14.779 5.17101 15.373 5.41301 15.89C5.60801 16.308 5.95601 16.624 6.39301 16.782L8.50201 17.525C9.39701 17.84 10.339 18.001 11.288 18.001H13.905C16.54 18.001 17.827 15.642 17.696 13.721C17.585 12.083 17.201 11.1 16.552 10.605L16.554 10.604Z" fill="#737373" opacity="0.4"></path>
          </g>
        </svg>
      </div>

      {/* Name + handle */}
      <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
        <h1 className="doto-font text-3xl font-bold">
          <span className="relative">
            <span>{title}</span>
          </span>
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className="text-sm font-medium text-neutral-400 md:text-sm"
        >
          / <span className="font-mono">{handle}</span>
        </motion.span>
        </h1>
      </div>

      {/* Bio lines */}
      <div className="mt-5 space-y-2 text-neutral-300 md:mt-6">
        {bioLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 * (i + 1) }}
            className="text-sm leading-relaxed md:text-base"
          >
            {emphasize(line)}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.25 }}
          className="mt-4 max-w-2xl text-sm text-neutral-400 md:text-base leading-relaxed"
        >
          {about}
        </motion.p>
      </div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.35 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <CTA href={actions[0]?.href || '#'} icon={<IconSend className="h-4 w-4" />}>
          {actions[0]?.label || 'DM Me'}
        </CTA>
        <CTA
          variant="ghost"
          href={actions[1]?.href || '#'}
          icon={<IconMail className="h-4 w-4" />}
        >
          {actions[1]?.label || 'Email Me'}
        </CTA>
      </motion.div>
        </div>

        {/* DS Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="hidden md:block flex-shrink-0"
        >
          <div className="relative w-32 h-32 lg:w-40 lg:h-40">
            <Image
              src="/dsmainlogo.png"
              alt="DS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Local layered background for dotted text */}
      <style jsx>{`
        .dotty-headline {
          /* Layer 1: dotted/LED pattern (uses currentColor) */
          /* Layer 2: the cyan→fuchsia gradient */
          background-image:
            radial-gradient(currentColor 58%, transparent 60%),
            linear-gradient(90deg, #67e8f9 0%, #f0abfc 100%);
          background-size:
            0.42rem 0.42rem,    /* dot size */
            100% 100%;          /* gradient covers the whole text */
          background-position:
            0 0,
            0 0;
          background-repeat:
            repeat,
            no-repeat;

          /* Clip both layers to the glyphs */
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent; /* for non-webkit */

          letter-spacing: 0.05em;
        }
        @media (min-width: 768px) {
          .dotty-headline {
            background-size: 0.5rem 0.5rem, 100% 100%;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------- helpers ---------- */

function emphasize(text: string) {
  const highlights = [
    'Design Engineer',
    'Full Stack Developer',
    'SaaS',
    'dashboards',
    'scalable',
    'production',
    'clean code',
  ];
  const pattern = new RegExp(`(${highlights.join('|')})`, 'gi');
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
          <strong key={i} className="text-neutral-100 font-semibold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function CTA({
  href,
  children,
  icon,
  variant = 'solid',
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'solid' | 'ghost';
}) {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5.5 [&_svg]:shrink-0 py-4 shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] h-10 px-4.5 text-sm';
  const solid =
    'bg-cardColor text-white hover:bg-cardColorForeground hover:text-brand';
  const ghost =
    'bg-cardColor text-white hover:bg-cardColorForeground hover:text-brand';

  return (
    <Link href={href} className={`${base} ${variant === 'solid' ? solid : ghost}`}>
      {icon}
      <span className="doto-font">{children}</span>
    </Link>
  );
}
