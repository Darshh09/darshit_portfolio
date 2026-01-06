'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
import { IconStar } from '@tabler/icons-react';

export default function ProjectGrid() {
  return (
    <section className="mx-auto w-full">
      <header className="mb-6 mt-2">
        <h2 className="text-[22px] font-bold tracking-tight text-white">
          Featured Work
        </h2>
        <p className="mt-1 text-[13px] text-white/50">
          Here are some projects I’ve built recently.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title + i} {...p} />
        ))}
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  blurb: string;
  cover?: string;
  stars?: number;
  href?: string;
  tags: string[];
};

function ProjectCard({ title, blurb, cover, stars, href, tags }: CardProps) {
  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative block rounded-2xl border border-white/10 bg-white/[0.04] p-4"
      >
        {/* dotted focus frame with corner brackets */}
        <div className="pointer-events-none absolute inset-0 z-10 -m-px border border-dashed border-white/15 bg-muted/15 focus-dots">
          <div className="absolute -left-px -top-px h-2 w-2 border-l border-t border-white/90"></div>
          <div className="absolute -right-px -top-px h-2 w-2 border-r border-t border-white/90"></div>
          <div className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-white/90"></div>
          <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-white/90"></div>
        </div>

        {/* cover */}
        <ProjectCardBody title={title} blurb={blurb} cover={cover} stars={stars} tags={tags} />
      </Link>
    );
  }

  return (
    <div className="group relative block rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      {/* dotted focus frame with corner brackets */}
      <div className="pointer-events-none absolute inset-0 z-10 -m-px border border-dashed border-white/15 bg-muted/15 focus-dots">
        <div className="absolute -left-px -top-px h-2 w-2 border-l border-t border-white/90"></div>
        <div className="absolute -right-px -top-px h-2 w-2 border-r border-t border-white/90"></div>
        <div className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-white/90"></div>
        <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-white/90"></div>
      </div>

      {/* cover */}
      <ProjectCardBody title={title} blurb={blurb} cover={cover} stars={stars} tags={tags} />
    </div>
  );
}

function ProjectCardBody({
  title,
  blurb,
  cover,
  stars,
  tags,
}: Pick<CardProps, 'title' | 'blurb' | 'cover' | 'stars' | 'tags'>) {
  return (
    <>
      {/* cover */}
      <div className="relative mb-3 h-[180px] w-full overflow-hidden rounded-xl border border-white/10 bg-black/50">
        {cover ? (
          <Image
            src={cover}
            alt={title}
            fill
            className={`object-cover transition-all duration-500 ${
              title.includes('OpsSight') || title.includes('E-commerce Microservices (CQRS/ES)')
                ? 'grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100'
                : 'opacity-90'
            }`}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-white/30 text-sm">
            preview
          </div>
        )}
      </div>

      {/* title + small stat */}
      <div className="mb-1 flex items-center gap-2">
        <h3 className="text-[16px] font-semibold text-white">{title}</h3>
        {typeof stars === 'number' && stars > 0 && (
          <span className="ml-auto inline-flex items-center gap-1 text-[12px] text-white/70">
            <IconStar size={14} className="text-yellow-400" />
            {stars}
          </span>
        )}
      </div>

      <p className="mb-3 text-[13px] leading-relaxed text-white/70">{blurb}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </>
  );
}
