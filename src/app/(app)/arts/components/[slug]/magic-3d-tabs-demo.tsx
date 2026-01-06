'use client';

import { Magic3DTabs } from '@/components/magic-3d-tabs';

export function Magic3DTabsDemo() {
  return (
    <Magic3DTabs
      tabs={[
        {
          label: 'Overview',
          title: 'Overview',
          description: 'Get a quick overview of the Magic 3D Tabs component',
          content: (
            <div className="space-y-4">
              <p className="text-neutral-300">
                Magic 3D Tabs is a beautiful, interactive tabs component with immersive 3D effects.
                Move your mouse over the content card to see the 3D rotation effect.
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Mouse-interactive 3D rotation</li>
                <li>Dynamic tab scaling and animations</li>
                <li>Floating particles background</li>
                <li>Animated gradient backgrounds</li>
                <li>Fully customizable styling</li>
              </ul>
            </div>
          ),
          gradient: 'bg-gradient-to-br from-purple-700/50 to-violet-900/50',
        },
        {
          label: 'Features',
          title: 'Key Features',
          description: 'Explore the powerful features of Magic 3D Tabs',
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">3D Perspective</h4>
                  <p className="text-sm text-neutral-300">
                    Immersive 3D rotation effects that respond to mouse movement
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Smooth Animations</h4>
                  <p className="text-sm text-neutral-300">
                    Spring-based animations for all interactions
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Accessible</h4>
                  <p className="text-sm text-neutral-300">
                    Full keyboard navigation and ARIA support
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Customizable</h4>
                  <p className="text-sm text-neutral-300">
                    Extensive className props for styling control
                  </p>
                </div>
              </div>
            </div>
          ),
          gradient: 'bg-gradient-to-br from-cyan-700/50 to-blue-900/50',
        },
        {
          label: 'Usage',
          title: 'How to Use',
          description: 'Learn how to integrate Magic 3D Tabs into your project',
          content: (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-2">Installation</h4>
                <code className="block p-2 rounded bg-black/20 text-sm text-neutral-300 font-mono">
                  pnpm dlx shadcn add @darx/magic-3d-tabs
                </code>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-2">Basic Example</h4>
                <pre className="p-2 rounded bg-black/20 text-xs text-neutral-300 font-mono overflow-x-auto">
{`<Magic3DTabs
  tabs={[
    {
      label: 'Tab 1',
      title: 'My Tab',
      content: <div>Content</div>,
      gradient: 'bg-gradient-to-br from-purple-700 to-violet-900'
    }
  ]}
/>`}
                </pre>
              </div>
            </div>
          ),
          gradient: 'bg-gradient-to-br from-emerald-700/50 to-teal-900/50',
        },
      ]}
    />
  );
}

