import type { Post, PostMetadata } from '@/features/blog/types/post';

// Mock posts data structure - adapt this to your actual data source
const componentsPosts: Post[] = [
  {
    slug: 'magic-3d-tabs',
    metadata: {
      title: 'Magic 3D Tabs',
      icon: 'tabs',
      new: false,
      description: 'A beautiful 3D tabs component with perspective effects',
      category: 'components',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
    content: `# Magic 3D Tabs

A beautiful 3D tabs component with perspective effects.

## Features

- Mouse-interactive 3D rotation for content card
- Dynamic tab scaling and lifting based on active tab proximity
- Floating particles background effect
- Animated radial gradient backgrounds for content
- 3D content layers with translateZ for depth
- Subtle 3D edge highlights for depth perception
- Perspective container for immersive 3D experience
- Smooth spring animations for all interactions
- Fully customizable with className props
- Accessible with proper ARIA roles and keyboard navigation

## Installation

<CodeTabs>

<TabsListInstallType />

<TabsContent value="cli">

\`\`\`bash
npx shadcn add @darx/magic-3d-tabs
\`\`\`

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies</Step>

\`\`\`bash
npm install motion clsx tailwind-merge
\`\`\`

<Step>Add a cn helper</Step>

<ComponentSource
  src="src/lib/utils.ts"
  title="lib/utils.ts"
  showLineNumbers
  collapsible={false}
/>

<Step>Copy and paste the following code into your project</Step>

<ComponentSource
  name="magic-3d-tabs"
  title="components/magic-3d-tabs.tsx"
  showLineNumbers
/>

<Step>Update the import paths to match your project setup</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

\`\`\`tsx
import { Magic3DTabs } from "@/components/magic-3d-tabs";

<Magic3DTabs
  tabs={[
    {
      label: 'Tab 1',
      title: 'Title',
      content: <div>Content</div>,
      gradient: 'bg-gradient-to-br from-purple-700 to-violet-900',
      previewImage: 'optional-image-url'
    }
  ]}
  containerClassName="mb-8"
  tabClassName="custom-tab"
  activeTabClassName="custom-active"
  contentClassName="custom-content"
  defaultTab={0}
/>
\`\`\`

## API Reference

### Magic3DTabs

The root component that provides the 3D tabs functionality.

| Prop                | Type                    | Default | Description                                                          |
| ------------------- | ----------------------- | ------- | -------------------------------------------------------------------- |
| \`tabs\`            | \`MagicTabItem[]\`      |         | Array of tab objects. See MagicTabItem interface below for details.  |
| \`containerClassName\` | \`string\`            |         | Custom classes for the outer section wrapper.                        |
| \`tabClassName\`    | \`string\`              |         | Shared classes for each tab button.                                  |
| \`activeTabClassName\` | \`string\`           |         | Classes applied to the animated pill highlight.                      |
| \`contentClassName\` | \`string\`              |         | Classes for the content surface.                                     |
| \`defaultTab\`      | \`number\`              | \`0\`   | The index of the tab to show initially.                              |

### MagicTabItem

Interface for individual tab items.

| Prop            | Type                | Default | Description                                                          |
| --------------- | ------------------- | ------- | -------------------------------------------------------------------- |
| \`label\`       | \`string\`          |         | The label text displayed on the tab button. (required)               |
| \`title\`      | \`string\`          |         | Optional title displayed in the content area when this tab is active. |
| \`description\` | \`string\`          |         | Optional description shown in hover previews and tooltips.            |
| \`content\`     | \`React.ReactNode\` |         | The content to display when this tab is active.                      |
| \`gradient\`   | \`string\`          |         | Optional Tailwind CSS gradient classes for the content background.   |
| \`previewImage\` | \`string\`          |         | Optional image URL shown in hover previews on tab buttons.            |
`,
  },
];

export function getAllPosts(): Post[] {
  return componentsPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.metadata?.category === category);
}

export function findNeighbour(posts: Post[], slug: string) {
  const len = posts.length;

  for (let i = 0; i < len; ++i) {
    if (posts[i].slug === slug) {
      return {
        previous: i > 0 ? posts[i - 1] : null,
        next: i < len - 1 ? posts[i + 1] : null,
      };
    }
  }

  return { previous: null, next: null };
}

