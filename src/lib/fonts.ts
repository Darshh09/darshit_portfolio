import { Inter } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';

export const fontSans = Inter({
  weight: ['400', '500', '600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

