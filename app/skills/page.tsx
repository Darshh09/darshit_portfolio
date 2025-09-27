'use client';

import { motion } from 'framer-motion';
import { PageWrap } from '@/components/containers';
import { FloatingDock } from '@/components/ui/floating-dock';
import { navigationLinks } from '@/lib/navigation';
import { Icon } from '@iconify/react';
import { IconCode, IconCpu, IconDatabase } from '@tabler/icons-react';

export default function SkillsPage() {

  const skillCategories = [
    {
      title: "LANGUAGES",
      skills: [
        { name: "JavaScript", icon: <Icon icon="devicon:javascript" className="w-5 h-5" /> },
        { name: "TypeScript", icon: <Icon icon="devicon:typescript" className="w-5 h-5" /> },
        { name: "HTML", icon: <Icon icon="devicon:html5" className="w-5 h-5" /> },
        { name: "CSS", icon: <Icon icon="devicon:css3" className="w-5 h-5" /> },
        { name: "NodeJs", icon: <Icon icon="devicon:nodejs" className="w-5 h-5" /> },
        { name: "Python", icon: <Icon icon="devicon:python" className="w-5 h-5" /> },
        { name: "SQL", icon: <Icon icon="devicon:mysql" className="w-5 h-5" /> },
        { name: "Postgres", icon: <Icon icon="devicon:postgresql" className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Icon icon="devicon:mongodb" className="w-5 h-5" /> },
        { name: "SVG Animation", icon: <Icon icon="devicon:svg" className="w-5 h-5" /> }
      ]
    },
    {
      title: "FRAMEWORKS",
      skills: [
        { name: "React", icon: <Icon icon="devicon:react" className="w-5 h-5" /> },
        { name: "NextJs", icon: <Icon icon="devicon:nextjs" className="w-5 h-5" /> },
        { name: "Vue.js", icon: <Icon icon="devicon:vuejs" className="w-5 h-5" /> },
        { name: "ExpressJs", icon: <Icon icon="devicon:express" className="w-5 h-5" /> },
        { name: "TailwindCSS", icon: <Icon icon="devicon:tailwindcss" className="w-5 h-5" /> },
        { name: "Bootstrap", icon: <Icon icon="devicon:bootstrap" className="w-5 h-5" /> },
        { name: "Sass", icon: <Icon icon="devicon:sass" className="w-5 h-5" /> },
        { name: "GSAP", icon: <Icon icon="devicon:gsap" className="w-5 h-5" /> },
        { name: "Framer Motion", icon: <Icon icon="devicon:framer" className="w-5 h-5" /> },
        { name: "Three.js", icon: <Icon icon="devicon:threejs" className="w-5 h-5" /> }
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Drizzle", icon: <Icon icon="simple-icons:drizzle" className="w-5 h-5" /> },
        { name: "Prisma", icon: <Icon icon="devicon:prisma" className="w-5 h-5" /> },
        { name: "NeonDB", icon: <Icon icon="devicon:postgresql" className="w-5 h-5" /> },
        { name: "Docker", icon: <Icon icon="devicon:docker" className="w-5 h-5" /> },
        { name: "Redis", icon: <Icon icon="devicon:redis" className="w-5 h-5" /> },
        { name: "Webpack", icon: <Icon icon="devicon:webpack" className="w-5 h-5" /> },
        { name: "Vite", icon: <Icon icon="devicon:vitejs" className="w-5 h-5" /> }
      ]
    },
    {
      title: "PLATFORMS",
      skills: [
        { name: "Github", icon: <Icon icon="devicon:github" className="w-5 h-5" /> },
        { name: "Netlify", icon: <Icon icon="devicon:netlify" className="w-5 h-5" /> },
        { name: "Vercel", icon: <Icon icon="devicon:vercel" className="w-5 h-5" /> },
        { name: "AWS", icon: <Icon icon="devicon:amazonwebservices" className="w-5 h-5" /> },
        { name: "Google Cloud", icon: <Icon icon="devicon:googlecloud" className="w-5 h-5" /> },
        { name: "Azure", icon: <Icon icon="devicon:azure" className="w-5 h-5" /> },
        { name: "Ubuntu", icon: <Icon icon="devicon:ubuntu" className="w-5 h-5" /> },
        { name: "Cloudflare", icon: <Icon icon="devicon:cloudflare" className="w-5 h-5" /> }
      ]
    },
    {
      title: "SOFTWARES",
      skills: [
        { name: "VS Code", icon: <Icon icon="devicon:vscode" className="w-5 h-5" /> },
        { name: "DataGrip", icon: <Icon icon="devicon:jetbrains" className="w-5 h-5" /> },
        { name: "Postman", icon: <Icon icon="devicon:postman" className="w-5 h-5" /> },
        { name: "Figma", icon: <Icon icon="devicon:figma" className="w-5 h-5" /> },
        { name: "Photoshop", icon: <Icon icon="devicon:photoshop" className="w-5 h-5" /> },
        { name: "Git", icon: <Icon icon="devicon:git" className="w-5 h-5" /> },
        { name: "NPM", icon: <Icon icon="devicon:npm" className="w-5 h-5" /> },
        { name: "Yarn", icon: <Icon icon="devicon:yarn" className="w-5 h-5" /> }
      ]
    },
    {
      title: "DEV OPS",
      skills: [
        { name: "TRPC", icon: <Icon icon="simple-icons:trpc" className="w-5 h-5" /> },
        { name: "Github Actions", icon: <Icon icon="devicon:githubactions" className="w-5 h-5" /> },
        { name: "Auth0", icon: <Icon icon="devicon:auth0" className="w-5 h-5" /> },
        { name: "Jenkins", icon: <Icon icon="devicon:jenkins" className="w-5 h-5" /> },
        { name: "Kubernetes", icon: <Icon icon="devicon:kubernetes" className="w-5 h-5" /> },
        { name: "Nginx", icon: <Icon icon="devicon:nginx" className="w-5 h-5" /> }
      ]
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
                <span>Skills</span>
              </span>
              <span className="text-sm font-medium text-neutral-400 md:text-sm ml-2">
                / <span className="font-mono">technologies</span>
              </span>
            </h1>
          </div>

          <div className="mt-5 space-y-2 text-neutral-300 md:mt-6">
            <p className="text-sm leading-relaxed md:text-base">
              Technologies and tools I use to build <strong className="text-neutral-100 font-semibold">amazing digital experiences</strong>.
            </p>
          </div>
        </div>

            {/* Main Tech Stack */}
            <div className="mb-8">
              <div className="text-white/90 text-lg mb-6 leading-relaxed">
                My main Tech stack is{' '}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium mx-1">
                  <Icon icon="devicon:nextjs" className="w-4 h-4" />
                  NextJs
                </span>
                {' '}framework with{' '}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium mx-1">
                  <Icon icon="devicon:tailwindcss" className="w-4 h-4" />
                  TailwindCSS
                </span>
                {' '}CSS as a styling library, for the database i use{' '}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-300 rounded-lg text-sm font-medium mx-1">
                  <Icon icon="devicon:postgresql" className="w-4 h-4" />
                  Postgres
                </span>
                {' '}deployed on{' '}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium mx-1">
                  <Icon icon="devicon:postgresql" className="w-4 h-4" />
                  NeonDB
                </span>
                {' '}with{' '}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-300 rounded-lg text-sm font-medium mx-1">
                  <Icon icon="simple-icons:drizzle" className="w-4 h-4" />
                  Drizzle
                </span>
                {' '}as an ORM, for database management i use{' '}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-medium mx-1">
                  <Icon icon="devicon:jetbrains" className="w-4 h-4" />
                  DataGrip
                </span>
                . At last, but not least, i use{' '}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium mx-1">
                  <Icon icon="devicon:vscode" className="w-4 h-4" />
                  Cursor
                </span>
                {' '}IDE for creating awesome projects. ❤️
              </div>
            </div>

        {/* Skill Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        {/* Secret message */}
        <div className="mt-12 mb-16 text-center">
          <p className="text-neutral-500 text-sm">And many more technologies I&apos;m constantly exploring... 🚀</p>
        </div>
      </div>
      <FloatingDock items={navigationLinks} />
    </PageWrap>
  );
}

/* ---------------- components ---------------- */

function SkillCategory({ category, index }: { category: { title: string; skills: { name: string; icon: React.ReactNode }[] }; index: number }) {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'LANGUAGES': return <IconCode className="h-4 w-4 text-cyan-300" />;
      case 'FRAMEWORKS': return <IconCpu className="h-4 w-4 text-cyan-300" />;
      case 'TOOLS': return <IconDatabase className="h-4 w-4 text-cyan-300" />;
      case 'PLATFORMS': return <IconCode className="h-4 w-4 text-cyan-300" />;
      case 'SOFTWARES': return <IconCode className="h-4 w-4 text-cyan-300" />;
      case 'DEV OPS': return <IconCode className="h-4 w-4 text-cyan-300" />;
      default: return <IconCode className="h-4 w-4 text-cyan-300" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur md:p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        {getCategoryIcon(category.title)}
        <h3 className="text-white/90 doto-font text-sm font-semibold tracking-wider">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: { name: string; icon: React.ReactNode }, skillIndex: number) => (
          <div
            key={skillIndex}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <span className="text-lg">{skill.icon}</span>
            <span className="text-white/90 doto-font text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
