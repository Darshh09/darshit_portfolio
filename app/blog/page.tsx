'use client';

import { motion } from 'framer-motion';
import { PageWrap } from '@/components/containers';
import { FloatingDock } from '@/components/ui/floating-dock';
import { navigationLinks } from '@/lib/navigation';
import { IconPencil } from '@tabler/icons-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn how to structure and optimize React applications for scale and performance. Deep dive into component architecture, state management, and performance optimization techniques.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "Performance", "Architecture"],
      featured: true
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies shaping the future of web development. From AI integration to edge computing and beyond.",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Web Development", "Trends", "Technology"],
      featured: false
    },
    {
      title: "Design Systems in Practice",
      excerpt: "How to create and maintain effective design systems for modern applications. A comprehensive guide to building scalable design systems.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Design", "UI/UX", "Systems"],
      featured: false
    },
    {
      title: "TypeScript Best Practices",
      excerpt: "Essential TypeScript patterns and practices for better code quality and maintainability. Advanced techniques for enterprise applications.",
      date: "2024-01-01",
      readTime: "7 min read",
      tags: ["TypeScript", "Best Practices", "Development"],
      featured: false
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
                <span>Blog</span>
              </span>
              <span className="text-sm font-medium text-neutral-400 md:text-sm ml-2">
                / <span className="font-mono">thoughts</span>
              </span>
            </h1>
          </div>

          <div className="mt-5 space-y-2 text-neutral-300 md:mt-6">
            <p className="text-sm leading-relaxed md:text-base">
              Thoughts, tutorials, and insights about <strong className="text-neutral-100 font-semibold">web development</strong>, <strong className="text-neutral-100 font-semibold">design</strong>, and <strong className="text-neutral-100 font-semibold">technology</strong>.
            </p>
          </div>
        </div>

        <ul className="space-y-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </ul>
      </div>
      <FloatingDock items={navigationLinks} />
    </PageWrap>
  );
}

/* ---------------- components ---------------- */

function BlogCard({ post, index }: { post: { title: string; excerpt: string; date: string; readTime: string; tags: string[]; featured: boolean }; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
      className={`rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur md:p-5 ${index === 0 ? 'ring-1 ring-cyan-400/30' : ''}`}
    >
      {/* top row: title + featured badge, right side: read time */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-white font-semibold text-lg md:text-xl hover:text-cyan-400 transition-colors">
              {post.title}
            </h3>
            {post.featured && (
              <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-medium text-cyan-300 ring-1 ring-cyan-400/30">
                Featured
              </span>
            )}
          </div>
          <p className="mt-1 flex items-center gap-2 text-sm text-white/75">
            <IconPencil className="h-4 w-4 text-cyan-300" />
            Article
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-white/80">{post.readTime}</p>
          <p className="mt-0.5 text-xs text-white/50">{post.date}</p>
        </div>
      </div>

      {/* excerpt */}
      <p className="mt-4 text-[13px] leading-relaxed text-white/85">
        {post.excerpt}
      </p>

      {/* tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag: string) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.li>
  );
}
