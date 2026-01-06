import type { Registry } from 'shadcn/schema';

export const components: Registry['items'] = [
  {
    name: 'magic-3d-tabs',
    type: 'registry:component',
    description: 'A beautiful 3D tabs component with perspective effects',
    title: 'Magic 3D Tabs',
    author: 'darshitdev <darshit@darshitdev.in>',
    dependencies: ['motion'],
    registryDependencies: [],
    files: [
      {
        path: 'magic-3d-tabs/magic-3d-tabs.tsx',
        type: 'registry:component',
      },
    ],
    docs: 'https://darshitdev.in/arts/components/magic-3d-tabs',
  },
];

