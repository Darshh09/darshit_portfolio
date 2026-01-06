import type { Registry } from 'shadcn/schema';

import { components } from './registry-components';
import { examples } from './registry-examples';

export const registry = {
  name: 'darshitdev',
  homepage: 'https://darshitdev.in/arts',
  items: [
    ...components,

    // Internal use only
    ...examples,
  ],
} satisfies Registry;

