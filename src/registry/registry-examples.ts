import type { Registry } from 'shadcn/schema';

export const examples: Registry['items'] = [
  {
    name: 'magic-3d-tabs-demo',
    type: 'registry:example',
    registryDependencies: ['@darx/magic-3d-tabs'],
    files: [
      {
        path: 'examples/magic-3d-tabs-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
];

