'use client';

import { PageWrap } from '@/components/containers';
import FirstAnimation from '@/components/firstAnimation';
import Link from 'next/link';

export default function ArtsPage() {
  return (
    <PageWrap>
      <div className="mb-20">
        <div className="mb-10">


          <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
            <h1 className="doto-font text-3xl font-bold text-white">
              <span className="relative">
                <span>Arts</span>
              </span>
              <span className="text-sm font-medium text-neutral-400 md:text-sm ml-2">
                / <span className="font-mono">creations</span>
              </span>
            </h1>
          </div>
          <div className="mt-2">
            <p className="jetbrains-mono text-xs text-neutral-400">
              Animations are created with Code :3
            </p>
          </div>
        </div>

        {/* Art Card */}
        <div className="relative max-w-xl rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <FirstAnimation />

          {/* View Button and Twitter Like Prompt */}
          <div className="absolute bottom-4  right-4 flex flex-col items-end gap-2">
            <p className="text-[10px] text-neutral-400 text-right max-w-[100px]">
              If you like the animation please like this post on twitter
            </p>
            <Link
              href="https://x.com/Darshhh1800/status/2007458850216222733"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cardColor text-white hover:bg-cardColorForeground py-2 border border-border h-5 gap-1 px-1.5 text-[10px] hover:text-brand [&_svg]:size-3">
                <svg height="1em" width="1em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#737373">
                    <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                  </g>
                </svg>
                <span>View</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageWrap>
  );
}

