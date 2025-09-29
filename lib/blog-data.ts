export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readTime: number; // in minutes
  featured: boolean;
  coverImage?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js 14",
    slug: "building-modern-web-applications-nextjs-14",
    excerpt: "Explore the latest features in Next.js 14 and how they can revolutionize your web development workflow. From Server Components to improved performance.",
    content: `# Building Modern Web Applications with Next.js 14

Next.js 14 has brought some incredible improvements to the React ecosystem. In this comprehensive guide, we'll explore the key features that make it a game-changer for modern web development.

## Server Components Revolution

One of the most significant changes in Next.js 14 is the enhanced support for Server Components. These components run on the server, reducing the JavaScript bundle size and improving performance.

\`\`\`jsx
// Server Component Example
async function BlogPost({ postId }) {
  const post = await fetchPost(postId);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

## Improved Performance

The new App Router provides better performance through:
- Automatic code splitting
- Optimized bundling
- Enhanced caching strategies

## Developer Experience

Next.js 14 focuses heavily on improving the developer experience with:
- Better error messages
- Enhanced debugging tools
- Improved TypeScript support

## Conclusion

Next.js 14 represents a significant step forward in React development. The combination of Server Components, improved performance, and better developer experience makes it an excellent choice for modern web applications.`,
    author: "Darshit Shukla",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-20",
    tags: ["Next.js", "React", "Web Development", "Performance"],
    readTime: 8,
    featured: true,
    coverImage: "/api/placeholder/800/400",
    seo: {
      title: "Building Modern Web Applications with Next.js 14 | Darshit's Blog",
      description: "Learn about Next.js 14 features including Server Components, improved performance, and enhanced developer experience for modern web applications.",
      keywords: ["Next.js 14", "React", "Server Components", "Web Development", "Performance", "JavaScript"],
      canonicalUrl: "https://darshitshukla.dev/blog/building-modern-web-applications-nextjs-14"
    }
  },
  {
    id: "2",
    title: "The Art of Clean Code: Principles Every Developer Should Know",
    slug: "art-of-clean-code-principles-developers",
    excerpt: "Discover the fundamental principles of writing clean, maintainable code that will make you a better developer and improve your team's productivity.",
    content: `# The Art of Clean Code: Principles Every Developer Should Know

Clean code is not just about making your code work—it's about making it readable, maintainable, and elegant. In this article, we'll explore the fundamental principles that every developer should internalize.

## What is Clean Code?

Clean code is code that is:
- **Readable**: Easy to understand at first glance
- **Maintainable**: Easy to modify and extend
- **Testable**: Easy to write unit tests for
- **Efficient**: Performs well without unnecessary complexity

## The SOLID Principles

### Single Responsibility Principle (SRP)
Every class should have only one reason to change.

\`\`\`javascript
// Bad
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save() {
    // Database logic
  }

  sendEmail() {
    // Email logic
  }
}

// Good
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    // Database logic
  }
}

class EmailService {
  sendEmail(user) {
    // Email logic
  }
}
\`\`\`

## Meaningful Names

Choose names that reveal intent:

\`\`\`javascript
// Bad
const d = new Date();
const u = users.filter(x => x.a > 18);

// Good
const currentDate = new Date();
const adultUsers = users.filter(user => user.age > 18);
\`\`\`

## Functions Should Do One Thing

Keep functions small and focused:

\`\`\`javascript
// Bad
function processUserData(user) {
  // Validate user
  if (!user.email || !user.name) {
    throw new Error('Invalid user');
  }

  // Save to database
  database.save(user);

  // Send welcome email
  emailService.send(user.email, 'Welcome!');

  // Log activity
  logger.log('User processed', user.id);
}

// Good
function processUserData(user) {
  validateUser(user);
  saveUser(user);
  sendWelcomeEmail(user);
  logUserActivity(user);
}
\`\`\`

## Conclusion

Clean code is an investment in the future. It may take more time initially, but it pays dividends in reduced bugs, easier maintenance, and happier developers.`,
    author: "Darshit Shukla",
    publishedAt: "2024-01-10",
    tags: ["Clean Code", "Programming", "Best Practices", "Software Engineering"],
    readTime: 12,
    featured: false,
    seo: {
      title: "The Art of Clean Code: Principles Every Developer Should Know | Darshit's Blog",
      description: "Learn the fundamental principles of writing clean, maintainable code including SOLID principles, meaningful naming, and function design.",
      keywords: ["Clean Code", "SOLID Principles", "Programming", "Best Practices", "Software Engineering", "Code Quality"],
      canonicalUrl: "https://darshitshukla.dev/blog/art-of-clean-code-principles-developers"
    }
  },
  {
    id: "3",
    title: "Mastering TypeScript: Advanced Patterns and Techniques",
    slug: "mastering-typescript-advanced-patterns-techniques",
    excerpt: "Dive deep into advanced TypeScript patterns, utility types, and techniques that will elevate your TypeScript skills to the next level.",
    content: `# Mastering TypeScript: Advanced Patterns and Techniques

TypeScript has evolved into one of the most powerful tools in modern web development. Let's explore advanced patterns that will make you a TypeScript expert.

## Utility Types Deep Dive

TypeScript provides powerful utility types that can transform your type definitions:

\`\`\`typescript
// Partial - makes all properties optional
interface User {
  id: string;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// { id?: string; name?: string; email?: string; }

// Pick - select specific properties
type UserName = Pick<User, 'name'>;
// { name: string; }

// Omit - exclude specific properties
type UserWithoutId = Omit<User, 'id'>;
// { name: string; email: string; }
\`\`\`

## Conditional Types

Create types that depend on other types:

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type ApiResponse<T> = T extends string
  ? { message: T }
  : T extends number
  ? { count: T }
  : { data: T };

// Usage
type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { count: number }
type ObjectResponse = ApiResponse<User>;   // { data: User }
\`\`\`

## Template Literal Types

Create string literal types with patterns:

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type ClickEvent = EventName<'click'>; // 'onClick'
type SubmitEvent = EventName<'submit'>; // 'onSubmit'

// Advanced example
type CSSProperty<T extends string> = \`--\${T}\`;
type CustomProperty = CSSProperty<'primary-color'>; // '--primary-color'
\`\`\`

## Mapped Types

Transform existing types:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Usage
interface User {
  id: string;
  name: string;
  email: string;
}

type UserWithOptionalEmail = Optional<User, 'email'>;
// { id: string; name: string; email?: string; }
\`\`\`

## Advanced Generic Constraints

\`\`\`typescript
// Constrain generic to have specific properties
function processEntity<T extends { id: string; createdAt: Date }>(
  entity: T
): T & { processed: boolean } {
  return {
    ...entity,
    processed: true
  };
}

// Multiple constraints
function merge<T extends object, U extends object>(
  target: T,
  source: U
): T & U {
  return { ...target, ...source };
}
\`\`\`

## Conclusion

These advanced TypeScript patterns will help you write more robust, type-safe code. Practice implementing them in your projects to become a TypeScript expert.`,
    author: "Darshit Shukla",
    publishedAt: "2024-01-05",
    tags: ["TypeScript", "JavaScript", "Advanced Patterns", "Type System"],
    readTime: 15,
    featured: true,
    seo: {
      title: "Mastering TypeScript: Advanced Patterns and Techniques | Darshit's Blog",
      description: "Learn advanced TypeScript patterns including utility types, conditional types, template literals, and mapped types for better type safety.",
      keywords: ["TypeScript", "Advanced Patterns", "Utility Types", "Generic Constraints", "Type System", "JavaScript"],
      canonicalUrl: "https://darshitshukla.dev/blog/mastering-typescript-advanced-patterns-techniques"
    }
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const allTags = blogPosts.flatMap(post => post.tags);
  return Array.from(new Set(allTags)).sort();
}
