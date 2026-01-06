export const PROFILE = {
  handle: '@Darshhh1800',
  title: 'Darshit Shukla',
  bioLines: [
    'I design & build SaaS, data platforms, and AI dashboards.',
    'Passionate about creating scalable, production-ready applications with clean code.',
  ],
  about:
    'A Full Stack Developer specializing in modern web technologies. I love building products that make a difference.',
  actions: [
    {
      label: 'DM Me',
      href: 'https://x.com/Darshhh1800',
    },
    {
      label: 'Email Me',
      href: 'mailto:darshitshukla1777@gmail.com',
    },
  ],
};

// Simple static heatmap data for the contributions section
export const HEATMAP_ROWS = 7;
export const HEATMAP_COLS = 20;
export const HEATMAP: number[][] = Array.from({ length: HEATMAP_ROWS }, (_, r) =>
  Array.from({ length: HEATMAP_COLS }, (_, c) => {
    // Make a slightly denser band in the middle columns
    const intensitySeed = r * HEATMAP_COLS + c;
    const base = (intensitySeed % 4);
    return base;
  })
);

