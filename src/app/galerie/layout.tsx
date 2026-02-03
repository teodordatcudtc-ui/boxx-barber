import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Galerie foto Boxx Barber Club – interior frizerie, coafor și spațiu masaj, București Rotar Park.',
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
