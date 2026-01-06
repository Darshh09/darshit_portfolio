import type { Post, PostMetadata } from '@/features/blog/types/post';

// Mock posts data structure - adapt this to your actual data source
const componentsPosts: Post[] = [
  {
    slug: 'react-instance-hook-pattern',
    metadata: {
      title: 'React Design Patterns: Instance Hook Pattern',
      icon: 'book',
      new: false,
      description: 'Learn how to create reusable components with controlled behavior using the Instance Hook Pattern',
      category: 'blog',
      createdAt: '2024-09-15',
      updatedAt: '2024-09-15',
    },
    content: `# React Design Patterns: Instance Hook Pattern

When building components, it's important to keep the logic clean and reusable. One handy way to do this is by using the Instance Hook Pattern. I first discovered this pattern in Ant Design's Form.useForm hook. I don't really know if there is a name for it already but "Instance Hook Pattern" sounds fancy. But because Forms are inherently complex, let's use something more basic to understand the concept behind this approach.

## A Custom Hook with Added Steps

So here's the basic idea: generally it is advisable for a component to handle its own state and logic. But sometimes, we might want to control that state from the outside. It is always good to have the option, for example in a UI components library. This pattern allows for this flexibility.

The Instance Hook Pattern ties a component's state and behavior to a custom hook. You can think of it like a remote control for the component—it gives the user control over specific actions.

Let's see this pattern in action with a simple Dialog component.

\`\`\`tsx
// SomePage.tsx
import Dialog from "../components/ui/Dialog";

const SomePage = () => {
    // NOTE: this custom hook will make it so that all the components on this page will
    // re-render when the dialog state changes. This is not ideal, but in return we are getting the flexibility
    // to control the dialog's state from anywhere on the page. Later on we'll see how to avoid this overhead.
    const dialogInstance = Dialog.useDialog();

    return (
        <>
            <Dialog dialog={dialogInstance} onClickOutside={dialogInstance.close}>
                <p>This is a dialog</p>
            </Dialog>

            <button onClick={dialogInstance.open}>Open Dialog</button>
            <div>
                Dialog is {dialogInstance.isOpen ? "open" : "closed"}
            </div>
        </>
    );
};
\`\`\`

## So what sets this apart from a Custom Hook?

- **Co-located Logic**: The hook and component live together. This makes sure that the Dialog component only uses the specific API that useDialog provides, making the whole thing easier to maintain.
- **Controlled API**: The hook returns a set of functions and state that the user can interact with. This creates a clear boundary for what the user can do with the component, so you avoid messy, unexpected behavior.
- **Unified State**: The component uses the packet of state that the hook provides internally as well (we'll see the working in a bit). So each part of the component has access to the component's state and it's available behaviours.
- **Totally Optional**: In a later section we'll see how to make the dialog prop optional, allowing the component to manage its own state by default.

## Composability: Why this pattern is awesome

The real power of this pattern comes when you have multiple instances of a component. Let's say you want to manage two dialogs on the same page:

\`\`\`tsx
// Example with 2 independent dialogs

const SomePage = () => {
    const dialog1 = Dialog.useDialog();
    const dialog2 = Dialog.useDialog();

    return (
        <>
            <Dialog dialog={dialog1} onClickOutside={dialog1.close}>
                <p>Dialog 1</p>
            </Dialog>
            <button onClick={() => {
                dialog1.open();
                dialog2.close();
            }}>
                Open Dialog 1 but Close Dialog 2
            </button>

            <Dialog dialog={dialog2}>
                <p>Dialog 2</p>
            </Dialog>
            <button onClick={dialog2.open}>Open Dialog 2</button>

            <div>
                Dialog 1 is {dialog1.isOpen ? "open" : "closed"} and
                Dialog 2 is {dialog1.isOpen === dialog2.isOpen && "also"} {dialog2.isOpen ? "open" : "closed"}
            </div>
        </>
    );
};
\`\`\`

Not only can you manage two dialogs intuitively, but you can also use both of their states to create complex interactions.

## Behind the Scenes

Let's dive into what the Dialog component looks like.

\`\`\`tsx
// Dialog.tsx
import { useDialog } from "./use-dialog";

export type DialogInstance = {
    open: () => void;
    close: () => void;
    toggle: () => void;
    isOpen: boolean;
};

const Dialog: React.FC<{
    dialog: DialogInstance, children?: React.ReactNode, onClickOutside?: () => void
}> = ({ dialog, children, onClickOutside }) => {

    // Omitting some template and logic stuff for brevity
    return (
        <dialog className="p-4">
            <DialogHeader dialog={dialog} closable title="My Dialog" />
            <div className="mt-4">
                {children}
            </div>
        </dialog>
    );
};

// This enables the \`Dialog.useDialog()\` API
Object.assign(Dialog, {
    useDialog,
});
\`\`\`

\`\`\`tsx
// use-dialog.ts
import { DialogInstance } from "./Dialog";

export const useDialog = (): DialogInstance => {
    const [isOpen, setIsOpen] = useState(false);

    return {
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen((op) => !op),
        isOpen,
    };
};
\`\`\`

And for completeness, here's the DialogHeader component.

\`\`\`tsx
// DialogHeader.tsx
import { DialogInstance } from "./Dialog";
import CrossIcon from "../../assets/cross.svg";

const DialogHeader: React.FC<{ dialog: DialogInstance; title: string; closable?: boolean }> = ({
    dialog,
    title,
    closable,
}) => {
    return (
        <div className="flex items-center justify-space-between p-4">
            <h1>{title}</h1>
            {closable && (
                <button onClick={dialog.close}>
                    <CrossIcon />
                </button>
            )}
        </div>
    );
};

export default DialogHeader;
\`\`\`

## Improving Flexibility

Sometimes, the consumer of the Dialog component might not need control over the dialog's state. In these cases, we can make passing a DialogInstance optional, allowing for more flexible usage.

To achieve this, we can modify the useDialog hook so it can either create its own DialogInstance or reuse an existing one if provided.

\`\`\`tsx
// use-dialog.ts
import { useMemo, useState, useCallback } from "react";
import { DialogInstance } from "./Dialog";

export const useDialog = (dialog?: DialogInstance): DialogInstance => {
    // Since we can't render hooks conditionally, this \`useState\` will always be
    // there even when an existing \`DialogInstance\` is passed in.
    const [isOpen, setIsOpen] = useState(false);

    // \`useCallback\` is used to memoize the functions so that they are created only once
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((op) => !op), []);

    return useMemo(() => {
        return (
            dialog ?? {
                open,
                close,
                toggle,
                isOpen,
            }
        );
    }, [dialog, isOpen]);
};
\`\`\`

This modification allows the Dialog component to function even when no DialogInstance is passed, if which case, it defaults to managing its own state.

\`\`\`tsx
// Dialog.tsx
import { useDialog } from "./use-dialog";
// ...

const Dialog: React.FC<{
    dialog?: DialogInstance;
    children?: React.ReactNode;
    onClickOutside?: () => void;
}> = ({ dialog, children, onClickOutside }) => {
    const dialogInstance = useDialog(dialog); // <-- passing in the dialog

    return (
        <dialog className="p-4">
            <DialogHeader dialog={dialogInstance} closable title="My Dialog" />
            <div className="mt-4">{children}</div>
        </dialog>
    );
};

// ...
\`\`\`

## Conclusion

The Instance Hook Pattern is a simple design pattern in React that allows you to create reusable components with controlled behavior. I like to think of it as a packet of state which can be passed around anywhere to control the component linked to it. This actually ties in well with the Compound Components Pattern and the Render Props Pattern but that's a topic for another time :)`,
  },
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

