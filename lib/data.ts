export const PROFILE = {
  handle: '@darshitdev',
  title: 'DARSHIT',
  bioLines: [
    `Hey there! I'm a Senior Full-Stack Developer — but not the usual kind.`,
    `I build pixel-perfect, production-ready web apps with clean code and scalable architecture.`,
    `And yes, I'm also a Freelance Developer and a problem-solver startups rely on.`,
  ],
  about:
    `I combine design thinking with engineering precision to create products that look beautiful, feel intuitive, and scale effortlessly. Whether it's building SaaS platforms, developer tools, or complex dashboards — I love turning ambitious ideas into real, impactful software. Always exploring new technologies and new challenges to push the boundaries further.`,
  actions: [
    { label: 'Twitter DM', href: 'https://x.com/Darshhh1800' },
    { label: 'Email Me', href: 'mailto:darshitshukla1777@gmail.com' },
  ],
};

export const TIMELINE_STAGES = [
  { id: 'canvas',    label: 'Canvas' },
  { id: 'concept',   label: 'Concept' },
  { id: 'delivery',  label: 'Delivery' },
  { id: 'refine',    label: 'Refinement' },
  { id: 'styling',   label: 'Styling' },
  { id: 'drafting',  label: 'Design Drafting' },
];

// 12 months x ~28 columns feel. 0-3 intensity
export const HEATMAP_ROWS = 7;
export const HEATMAP_COLS = 52;
export const HEATMAP = Array.from({ length: HEATMAP_ROWS }, () =>
  Array.from({ length: HEATMAP_COLS }, () => Math.floor(Math.random() * 4))
);
