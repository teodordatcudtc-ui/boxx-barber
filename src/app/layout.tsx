import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Boxx Barber Club | Frizerie, Coafor & Masaj București',
    template: '%s | Boxx Barber Club',
  },
  description:
    'Boxx Barber Club – frizerie, coafor și masaj la Rotar Park, București. Experiență premium, atmosferă relaxantă. Programează o vizită.',
  keywords: ['frizerie București', 'coafor bărbați', 'masaj București', 'Boxx Barber Club', 'Rotar Park'],
  authors: [{ name: 'Boxx Barber Club' }],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body text-bark-800 bg-cream-100 antialiased">
        <a
          href="#main-content"
          className="absolute -left-[9999px] top-4 z-[100] px-4 py-2 bg-gold text-bark-900 font-body text-sm font-medium focus:left-4 focus:outline-none"
        >
          Sari la conținut
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
