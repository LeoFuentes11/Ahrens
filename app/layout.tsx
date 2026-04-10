import type { Metadata } from 'next';
import { Lexend, Source_Sans_3 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { MotionProvider } from '@/providers/MotionProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ahrens — Built to Last',
    default: 'Ahrens — Built to Last',
  },
  description:
    'Five generations of building Australia. Ahrens delivers construction, engineering, rural infrastructure, mining services, and steel fabrication across the country.',
  keywords: [
    'Ahrens',
    'Australian construction',
    'engineering',
    'mining services',
    'steel fabrication',
    'rural infrastructure',
    'water storage',
    'sheds',
    'silos',
  ],
  metadataBase: new URL('https://ahrens.com.au'),
  openGraph: {
    siteName: 'Ahrens',
    type: 'website',
    locale: 'en_AU',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${lexend.variable} ${sourceSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
