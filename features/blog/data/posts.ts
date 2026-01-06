// Mock posts data structure - adapt this to your actual data source
interface PostMetadata {
  title: string;
  icon?: string;
  new?: boolean;
}

interface Post {
  slug: string;
  metadata: PostMetadata;
}

// This should be replaced with your actual components data
const componentsPosts: Post[] = [
  {
    slug: 'magic-3d-tabs',
    metadata: {
      title: 'Magic 3D Tabs',
      icon: 'tabs',
      new: false,
    },
  },
];

export function getPostsByCategory(category: string): Post[] {
  if (category === 'components') {
    return componentsPosts;
  }
  return [];
}

export type { Post, PostMetadata };

