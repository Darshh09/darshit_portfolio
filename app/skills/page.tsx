'use client';

import { motion } from 'framer-motion';
import { PageWrap } from '@/components/containers';
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
      <div className="mb-20">
        <div className="mb-10">

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
