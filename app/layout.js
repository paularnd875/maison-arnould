import '@fontsource/bodoni-moda/400.css';
import '@fontsource/bodoni-moda/400-italic.css';
import '@fontsource/bodoni-moda/500.css';
import '@fontsource/eb-garamond/400.css';
import '@fontsource/eb-garamond/400-italic.css';
import '@fontsource/eb-garamond/500.css';
import '@fontsource/courier-prime/400.css';
import './globals.css';
import AgeGate from './components/AgeGate';
import { site } from '../site.config';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · liqueurs de plantes, ${site.city}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/goulot.jpg', width: 900, height: 1200, alt: 'Feuilles de verveine et zestes de citron vus par le goulot' }],
  },
  icons: { icon: '/icon.svg' },
};

export const viewport = {
  themeColor: '#F4ECD6',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    foundingLocation: site.city,
    description: site.description,
  };
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(localStorage.getItem('ma-age-ok')==='1')document.documentElement.setAttribute('data-age','ok')}catch(e){}",
          }}
        />
      </head>
      <body>
        <AgeGate />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
