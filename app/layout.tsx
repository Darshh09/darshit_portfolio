// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Doto } from 'next/font/google';
import { NavigationDock } from '@/components/navigation-dock';

const doto = Doto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-doto',
});

export const metadata: Metadata = {
  title: 'Darshit | Freelance Full-Stack Developer',
  description: 'I design & build SaaS, data platforms, and AI dashboards.',
  metadataBase: new URL('https://darshitdev.in'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body
        className={`${doto.variable} bg-[#0d0f10] text-[#D9D9D9] selection:bg-cyan-500/30 selection:text-white`}
      >
        <div className="min-h-dvh">
          {children}
        </div>
        <NavigationDock />
      </body>
    </html>
  );
}
