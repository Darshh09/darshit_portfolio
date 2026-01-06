import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { WebSite, WithContext } from 'schema-dts';

import { ConsentManager } from '@/components/consent-manager';
import { Providers } from '@/components/providers';
import { META_THEME_COLORS, SITE_INFO } from '@/config/site';
import { fontMono, fontSans } from '@/lib/fonts';

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_INFO.name,
    url: SITE_INFO.url,
  };
}

const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: '/',
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: SITE_INFO.name,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: 'darshitdev',
      url: SITE_INFO.url,
    },
  ],
  creator: 'darshitdev',
  openGraph: {
    siteName: SITE_INFO.name,
    url: '/',
    type: 'website',
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@darshitdev',
    images: [SITE_INFO.ogImage],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, '\\u003c'),
          }}
        />
      </head>

      <body>
        <Providers>
          <NuqsAdapter>
            <ConsentManager>{children}</ConsentManager>
          </NuqsAdapter>
        </Providers>
      </body>
    </html>
  );
}

