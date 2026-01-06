'use client';

import { PageWrap } from '@/components/containers';
import { IconArrowLeft, IconCopy, IconClipboard, IconChevronDown, IconChevronUp, IconShare, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ComponentData {
  id: string;
  name: string;
  description: string;
  installation: string;
  usage: string;
  example: string;
  features: string[];
  props: Array<{ name: string; type: string; description: string; default?: string; required?: boolean }>;
  tabItemProps?: Array<{ name: string; type: string; description: string; required?: boolean }>;
  dependencies: Array<{ name: string; version: string }>;
  peerDependencies?: Array<{ name: string; version: string }>;
  browserCompatibility?: string;
  references?: Array<{ label: string; url: string }>;
  demo: React.ReactNode;
}

interface ComponentDetailClientProps {
  component: ComponentData;
}

export default function ComponentDetailClient({ component }: ComponentDetailClientProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [selectedInstallMethod, setSelectedInstallMethod] = useState<'CLI' | 'Manual'>('CLI');
  const [selectedPackageManager, setSelectedPackageManager] = useState<'pnpm' | 'yarn' | 'npm' | 'bun'>('pnpm');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tocItems = [
    { id: 'features', label: 'Features' },
    component.browserCompatibility && { id: 'browser-compatibility', label: 'Browser Compatibility' },
    { id: 'installation', label: 'Installation' },
    { id: 'usage', label: 'Usage' },
    { id: 'props', label: 'Props' },
    component.tabItemProps && { id: 'tab-item-interface', label: 'MagicTabItem Interface' },
    component.references && { id: 'references', label: 'References' },
  ].filter(Boolean) as Array<{ id: string; label: string }>;

  return (
    <PageWrap>
      <div className="mx-auto border-x border-edge md:max-w-3xl mb-20">
        {/* Top Screen Line Pattern */}
        <div className="h-8 px-2 screen-line-after before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"></div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between p-2 pl-4">
          <Link
            href="/arts"
            className="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline active:scale-none h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
          >
            <IconArrowLeft className="w-4 h-4" />
            Components
          </Link>
          <div className="flex items-center gap-2">
            {/* Copy MDX Button Group */}
            <div className="inline-flex items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-7 gap-0 divide-x px-0 font-sans active:scale-none dark:divide-white/10">
              <button
                onClick={() => copyToClipboard(component.example, `mdx-${component.id}`)}
                className="flex h-7 items-center gap-1.5 rounded-l-full pr-2 pl-2.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50"
              >
                {copiedCode === `mdx-${component.id}` ? (
                  <IconClipboard className="w-4 h-4" />
                ) : (
                  <IconCopy className="w-4 h-4" />
                )}
                MDX
              </button>
              <button
                type="button"
                className="flex size-7 items-center justify-center gap-2 rounded-r-full text-sm"
                aria-label="View Options"
              >
                <IconChevronDown className="w-4 h-4 mt-0.5" />
                <span className="sr-only">View Options</span>
              </button>
            </div>
            {/* Share Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 size-7 active:scale-none"
              aria-label="Share"
            >
              <IconShare className="w-4 h-4" />
            </button>
            {/* Previous Button */}
            <Link
              href="/arts"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 size-7"
              aria-label="Previous"
            >
              <IconArrowLeft className="w-4 h-4" />
              <span className="sr-only">Previous</span>
            </Link>
            {/* Next Button */}
            <Link
              href="/arts"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 size-7"
              aria-label="Next"
            >
              <span className="sr-only">Next</span>
              <IconChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Screen Line Before Content */}
        <div className="screen-line-before screen-line-after">
          <div className="h-8 before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"></div>
        </div>

        {/* Prose Container */}
        <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:text-balance prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-strong:font-medium prose-hr:border-edge prose-blockquote:border-s-border prose-blockquote:[&_p:first-of-type]:before:content-none prose-blockquote:[&_p:last-of-type]:after:content-none px-4">
          {/* Title and Description */}
          <h1 className="screen-line-after text-3xl font-semibold text-white mb-3">{component.name}</h1>
          <p className="text-muted-foreground">{component.description}</p>

          {/* On This Page - Collapsible */}
          <div className="not-prose rounded-xl bg-code font-sans mb-8">
            <button
              type="button"
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="group/toc inline-flex w-full items-center gap-2 py-2.5 pr-2 pl-4 text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 text-neutral-400"
                aria-hidden="true"
              >
                <path d="M21 5H3"></path>
                <path d="M15 12H3"></path>
                <path d="M17 19H3"></path>
              </svg>
              <span className="text-neutral-300">On this page</span>
              <div className="ml-auto shrink-0 text-muted-foreground" aria-hidden="true">
                {isTocOpen ? (
                  <IconChevronUp className="w-4 h-4 text-neutral-400" />
                ) : (
                  <IconChevronDown className="w-4 h-4 text-neutral-400" />
                )}
              </div>
            </button>
            {isTocOpen && (
              <div className="px-4 pb-4 space-y-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-neutral-400 hover:text-white transition-colors py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Demo Section */}
          <div className="my-[1.25em] not-prose">
            <div className="rounded-t-xl border p-2 bg-white/5 border-white/10">
              <div className="mb-2 flex justify-end gap-2">
                <button className="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-7 px-3 gap-1 rounded-md">
                  Open in
                  <svg viewBox="0 0 40 20" fill="none" className="size-5">
                    <path
                      d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex min-h-72 items-center justify-center font-sans rounded-lg border border-white/10 bg-black/20 p-4">
                {component.demo}
              </div>
            </div>
            <div className="mt-2 h-7"></div>
          </div>

          {/* Code Example */}
          <div className="**:data-rehype-pretty-code-figure:m-0">
            <div className="*:data-rehype-pretty-code-figure:rounded-t-none *:data-rehype-pretty-code-figure:border *:data-rehype-pretty-code-figure:border-t-0">
              <figure className="not-prose relative">
                <pre className="overflow-x-auto rounded-xl bg-code border border-white/10 p-4">
                  <code className="font-mono text-sm leading-relaxed text-neutral-300">
                    <span className="text-[#F97583]">import</span>{' '}
                    <span className="text-[#79B8FF]">*</span>{' '}
                    <span className="text-[#F97583]">as</span>{' '}
                    <span className="text-white">React</span>{' '}
                    <span className="text-[#F97583]">from</span>{' '}
                    <span className="text-[#9ECBFF]">&quot;react&quot;</span>;
                    <br />
                    <br />
                    <span className="text-[#F97583]">import</span>{' '}
                    <span className="text-white">{'{ Separator }'}</span>{' '}
                    <span className="text-[#F97583]">from</span>{' '}
                    <span className="text-[#9ECBFF]">
                      &quot;@/components/ui/separator&quot;
                    </span>
                    ;
                    <br />
                    <span className="text-[#F97583]">import</span>{' '}
                    <span className="text-white">{'{ Magic3DTabs }'}</span>{' '}
                    <span className="text-[#F97583]">from</span>{' '}
                    <span className="text-[#9ECBFF]">
                      &quot;@/components/magic-3d-tabs&quot;
                    </span>
                    ;
                    <br />
                    <br />
                    <span className="text-[#F97583]">const</span>{' '}
                    <span className="text-[#79B8FF]">tags</span>{' '}
                    <span className="text-[#F97583]">=</span>{' '}
                    <span className="text-white">Array.</span>
                    <span className="text-[#B392F0]">from</span>
                    <span className="text-white">({'{ length: '}</span>
                    <span className="text-[#79B8FF]">50</span>
                    <span className="text-white">{' }).'}</span>
                    <span className="text-[#B392F0]">map</span>
                    <span className="text-white">(</span>
                    <br />
                    <span className="text-white">  (</span>
                    <span className="text-[#FFAB70]">_</span>
                    <span className="text-white">, </span>
                    <span className="text-[#FFAB70]">i</span>
                    <span className="text-white">, </span>
                    <span className="text-[#FFAB70]">a</span>
                    <span className="text-white">) </span>
                    <span className="text-[#F97583]">=&gt;</span>{' '}
                    <span className="text-[#9ECBFF]">{'`v1.2.0-beta.${a.length - i}`'}</span>
                    <br />
                    <span className="text-white">);</span>
                    <br />
                    <br />
                    <span className="text-[#F97583]">export function</span>{' '}
                    <span className="text-[#B392F0]">Magic3DTabsDemo</span>
                    <span className="text-white">() {'{'}</span>
                    <br />
                    <span className="text-white">  return (</span>
                    <br />
                    <span className="text-white">    {'<'}</span>
                    <span className="text-[#85E89D]">div</span>{' '}
                    <span className="text-[#B392F0]">className</span>
                    <span className="text-[#F97583]">=</span>
                    <span className="text-[#9ECBFF]">&quot;rounded-lg border&quot;</span>
                    <span className="text-white">{'>'}</span>
                    <br />
                    <span className="text-white">      {'<'}</span>
                    <span className="text-[#79B8FF]">Magic3DTabs</span>{' '}
                    <span className="text-[#B392F0]">className</span>
                    <span className="text-[#F97583]">=</span>
                    <span className="text-[#9ECBFF]">&quot;h-72 w-48&quot;</span>
                    <span className="text-white">{'>'}</span>
                    <br />
                    <span className="text-white">        {'{/* content */}'}</span>
                    <br />
                    <span className="text-white">      {'</'}</span>
                    <span className="text-[#79B8FF]">Magic3DTabs</span>
                    <span className="text-white">{'>'}</span>
                    <br />
                    <span className="text-white">    {'</'}</span>
                    <span className="text-[#85E89D]">div</span>
                    <span className="text-white">{'>'}</span>
                    <br />
                    <span className="text-white">  );</span>
                    <br />
                    <span className="text-white">{'}'}</span>
                  </code>
                </pre>
                <button
                  onClick={() => copyToClipboard(component.example, `example-${component.id}`)}
                  className="absolute top-2 right-2 inline-flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 z-10 size-6 rounded-md"
                >
                  {copiedCode === `example-${component.id}` ? (
                    <IconClipboard className="size-3 text-green-400" />
                  ) : (
                    <IconCopy className="size-3 text-neutral-400" />
                  )}
                  <span className="sr-only">Copy</span>
                </button>
              </figure>
            </div>
          </div>

          {/* Features */}
          <h2 className="flex flex-row items-center gap-2" id="features">
            <a href="#features" className="peer not-prose text-white">
              Features
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
              aria-label="Link to section"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </h2>
          <ul>
            {component.features.map((feature, index) => (
              <li key={index} className="text-neutral-300">{feature}</li>
            ))}
          </ul>

          {/* Browser Compatibility */}
          {component.browserCompatibility && (
            <>
              <h2 className="flex flex-row items-center gap-2" id="browser-compatibility">
                <a href="#browser-compatibility" className="peer not-prose text-white">
                  Browser Compatibility
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
                  aria-label="Link to section"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h2>
              <p className="text-neutral-300">
                {component.browserCompatibility}
              </p>
            </>
          )}

          {/* Installation */}
          <h2 className="flex flex-row items-center gap-2" id="installation">
            <a href="#installation" className="peer not-prose text-white">
              Installation
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
              aria-label="Link to section"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </h2>
          <div className="not-prose">
            <div className="flex gap-2 mb-4">
              {(['CLI', 'Manual'] as const).map((method) => (
                <button
                  key={method}
                  onClick={() => setSelectedInstallMethod(method)}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    selectedInstallMethod === method
                      ? "bg-white/10 text-white border border-white/20"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                  )}
                >
                  {method === 'CLI' && (
                    <svg viewBox="0 0 256 256" className="size-4">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="m208 128-80 80M192 40 40 192"
                      ></path>
                    </svg>
                  )}
                  {method}
                </button>
              ))}
            </div>
            {selectedInstallMethod === 'CLI' && (
              <>
                <div className="flex gap-2 mb-4 px-4 shadow-[inset_0_-1px_0_0] shadow-border">
                  <div className="flex w-fit items-center justify-center text-muted-foreground h-10 rounded-none bg-transparent p-0">
                    <svg viewBox="0 0 24 24" className="size-4 me-2">
                      <path
                        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    {(['pnpm', 'yarn', 'npm', 'bun'] as const).map((pm) => (
                      <button
                        key={pm}
                        onClick={() => setSelectedPackageManager(pm)}
                        className={cn(
                          "flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-[color,background-color] h-7 rounded-lg px-2 font-mono",
                          selectedPackageManager === pm
                            ? "text-white bg-white/10"
                            : "text-neutral-400 hover:text-white"
                        )}
                      >
                        {pm}
                      </button>
                    ))}
                  </div>
                </div>
                <figure className="not-prose relative">
                  <div className="relative overflow-hidden rounded-xl bg-code border border-white/10">
                    <pre className="overflow-x-auto p-4">
                      <code className="font-mono text-sm text-neutral-300">
                        {component.installation.replace('pnpm', selectedPackageManager)}
                      </code>
                    </pre>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          component.installation.replace('pnpm', selectedPackageManager),
                          `install-${component.id}`
                        )
                      }
                      className="absolute top-2 right-2 inline-flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 z-10 size-6 rounded-md"
                    >
                      {copiedCode === `install-${component.id}` ? (
                        <IconClipboard className="size-3 text-green-400" />
                      ) : (
                        <IconCopy className="size-3 text-neutral-400" />
                      )}
                      <span className="sr-only">Copy</span>
                    </button>
                  </div>
                </figure>
              </>
            )}
          </div>

          {/* Usage */}
          <h2 className="flex flex-row items-center gap-2" id="usage">
            <a href="#usage" className="peer not-prose text-white">
              Usage
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
              aria-label="Link to section"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </h2>
          <figure className="not-prose relative">
            <div className="relative overflow-hidden rounded-xl bg-code border border-white/10">
              <pre className="overflow-x-auto p-4">
                <code className="font-mono text-sm text-neutral-300">{component.usage}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(component.usage, `usage-${component.id}`)}
                className="absolute top-2 right-2 inline-flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 z-10 size-6 rounded-md"
              >
                {copiedCode === `usage-${component.id}` ? (
                  <IconClipboard className="size-3 text-green-400" />
                ) : (
                  <IconCopy className="size-3 text-neutral-400" />
                )}
                <span className="sr-only">Copy</span>
              </button>
            </div>
          </figure>
          <figure className="not-prose relative">
            <div className="relative overflow-hidden rounded-xl bg-code border border-white/10">
              <pre className="overflow-x-auto p-4">
                <code className="font-mono text-sm text-neutral-300 whitespace-pre-wrap">
                  {component.example}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(component.example, `example-full-${component.id}`)}
                className="absolute top-2 right-2 inline-flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 z-10 size-6 rounded-md"
              >
                {copiedCode === `example-full-${component.id}` ? (
                  <IconClipboard className="size-3 text-green-400" />
                ) : (
                  <IconCopy className="size-3 text-neutral-400" />
                )}
                <span className="sr-only">Copy</span>
              </button>
            </div>
          </figure>

          {/* Props */}
          <h2 className="flex flex-row items-center gap-2" id="props">
            <a href="#props" className="peer not-prose text-white">
              Props
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
              aria-label="Link to section"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </h2>
          <div className="not-prose space-y-4">
            {component.props.map((prop) => (
              <div key={prop.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <code className="text-sm font-mono text-white font-semibold">{prop.name}</code>
                  {prop.required && (
                    <span className="px-2 py-0.5 rounded text-xs bg-red-500/20 text-red-400 border border-red-500/30">
                      required
                    </span>
                  )}
                  <code className="text-xs font-mono text-neutral-400">{prop.type}</code>
                  {prop.default && (
                    <span className="text-xs text-neutral-500">
                      default: <code className="text-neutral-400">{prop.default}</code>
                    </span>
                  )}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Tab Item Props */}
          {component.tabItemProps && component.tabItemProps.length > 0 && (
            <>
              <h2 className="flex flex-row items-center gap-2" id="tab-item-interface">
                <a href="#tab-item-interface" className="peer not-prose text-white">
                  MagicTabItem Interface
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
                  aria-label="Link to section"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h2>
              <p className="text-neutral-400 text-sm mb-4">
                Properties available on each tab object in the <code>tabs</code> array.
              </p>
              <div className="not-prose space-y-4">
                {component.tabItemProps.map((prop) => (
                  <div key={prop.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <code className="text-sm font-mono text-white font-semibold">{prop.name}</code>
                      {prop.required && (
                        <span className="px-2 py-0.5 rounded text-xs bg-red-500/20 text-red-400 border border-red-500/30">
                          required
                        </span>
                      )}
                      <code className="text-xs font-mono text-neutral-400">{prop.type}</code>
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">{prop.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* References */}
          {component.references && component.references.length > 0 && (
            <>
              <h2 className="flex flex-row items-center gap-2" id="references">
                <a href="#references" className="peer not-prose text-white">
                  References
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
                  aria-label="Link to section"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h2>
              <ul>
                {component.references.map((ref, index) => (
                  <li key={index}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-white underline underline-offset-4 hover:text-cyan-400 transition-colors"
                    >
                      {ref.url}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Footer */}
          <footer className="not-prose mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2 flex-wrap">
                <span>Inspired by</span>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors underline underline-offset-4"
                >
                  tailwindcss.com
                </a>
                <span>&</span>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors underline underline-offset-4"
                >
                  ui.shadcn.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>Built by</span>
                <a
                  href="https://darshitdev.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors font-medium"
                >
                  darshitdev
                </a>
              </div>
            </div>
          </footer>
        </div>

        {/* Bottom Screen Line Pattern */}
        <div className="screen-line-before h-4 w-full"></div>
      </div>
    </PageWrap>
  );
}
