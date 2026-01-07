import type { Registry } from 'shadcn/schema';

export const components: Registry['items'] = [
  {
    name: 'magic-genie-tabs',
    type: 'registry:component',
    description: 'macOS-style genie animation with a sleek glass pill nav bar',
    title: 'Magic Genie Tabs',
    author: 'darshitdev <darshit@darshitdev.in>',
    dependencies: ['motion'],
    registryDependencies: [],
    files: [
      {
        path: 'magic-genie-tabs/magic-genie-tabs.tsx',
        type: 'registry:component',
      },
    ],
    docs: 'https://darshitdev.in/arts/components/magic-genie-tabs',
  },
];

