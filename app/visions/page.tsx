'use client';

import { motion } from 'framer-motion';
import { PageWrap } from '@/components/containers';
import { FloatingDock } from '@/components/ui/floating-dock';
import { navigationLinks } from '@/lib/navigation';
import { IconPalette } from '@tabler/icons-react';

export default function ArtistryPage() {
  const creativeWorks = [
    {
      title: "Digital Art Gallery",
      description: "A collection of digital illustrations and visual experiments exploring the intersection of technology and creativity. Each piece represents a unique exploration of digital aesthetics.",
      type: "Visual Art",
      year: "2024",
      medium: "Digital Illustration",
      status: "Ongoing"
    },
    {
      title: "Interactive Installations",
      description: "Code-driven art pieces that respond to user interaction and environmental data. Creating immersive experiences that blend physical and digital realms.",
      type: "Interactive Art",
      year: "2024",
      medium: "WebGL + Sensors",
      status: "Active"
    },
    {
      title: "Typography Experiments",
      description: "Exploring the intersection of typography and code through dynamic text animations and responsive letterforms that adapt to user behavior.",
      type: "Typography",
      year: "2023",
      medium: "CSS + JavaScript",
      status: "Completed"
    },
    {
      title: "Color Theory Studies",
      description: "Digital explorations of color relationships and harmony through algorithmic color generation and interactive color palettes.",
      type: "Color Studies",
      year: "2023",
      medium: "Algorithmic Design",
      status: "Research"
    }
  ];

  return (
    <PageWrap>
      <div className="mb-24 pb-32">
        <div className="mb-10">
          <div className="jetbrains-mono flex items-center gap-1.5 mb-2 text-sm tracking-tighter text-muted-light">
            <span>Hey It&apos;s me</span>
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

          <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
            <h1 className="doto-font text-3xl font-bold text-white">
              <span className="relative">
                <span>Visions</span>
              </span>
              <span className="text-sm font-medium text-neutral-400 md:text-sm ml-2">
                / <span className="font-mono">creativity</span>
              </span>
            </h1>
          </div>

          <div className="mt-5 space-y-2 text-neutral-300 md:mt-6">
            <p className="text-sm leading-relaxed md:text-base">
              Creative explorations where <strong className="text-neutral-100 font-semibold">code meets art</strong> and <strong className="text-neutral-100 font-semibold">design</strong>. A showcase of experimental projects and artistic endeavors.
            </p>
          </div>
        </div>

        <ul className="space-y-8">
          {creativeWorks.map((work, index) => (
            <VisionCard key={index} work={work} index={index} />
          ))}
        </ul>
      </div>
      <FloatingDock items={navigationLinks} />
    </PageWrap>
  );
}

/* ---------------- components ---------------- */

function VisionCard({ work, index }: { work: { title: string; description: string; type: string; year: string; medium: string; status: string }; index: number }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-300 ring-green-400/30';
      case 'Ongoing': return 'bg-blue-500/20 text-blue-300 ring-blue-400/30';
      case 'Completed': return 'bg-purple-500/20 text-purple-300 ring-purple-400/30';
      case 'Research': return 'bg-orange-500/20 text-orange-300 ring-orange-400/30';
      default: return 'bg-neutral-500/20 text-neutral-300 ring-neutral-400/30';
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur md:p-5"
    >
      {/* top row: title + status, right side: year */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-white font-semibold text-lg md:text-xl">{work.title}</h3>
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${getStatusColor(work.status)}`}>
              {work.status}
            </span>
          </div>
          <p className="mt-1 flex items-center gap-2 text-sm text-white/75">
            <IconPalette className="h-4 w-4 text-cyan-300" />
            {work.type}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-white/80">{work.year}</p>
          <p className="mt-0.5 text-xs text-white/50">{work.medium}</p>
        </div>
      </div>

      {/* description */}
      <p className="mt-4 text-[13px] leading-relaxed text-white/85">
        {work.description}
      </p>

      {/* visual placeholder */}
      <div className="mt-4 aspect-video bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 rounded-lg flex items-center justify-center border border-white/5">
        <div className="text-center">
          <div className="text-4xl opacity-50 mb-2">🎨</div>
          <p className="text-xs text-white/50">Creative Work</p>
        </div>
      </div>
    </motion.li>
  );
}
