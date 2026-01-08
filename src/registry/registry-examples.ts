import type { Registry } from 'shadcn/schema';

export const examples: Registry['items'] = [
  {
    name: 'magic-genie-tabs-demo',
    type: 'registry:example',
    registryDependencies: ['https://darshitdev.in/r/magic-genie-tabs'],
    files: [
      {
        path: 'examples/magic-genie-tabs-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
];

