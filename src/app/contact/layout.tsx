import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Boxx Barber Club – adresă Rotar Park, Bulevardul Iuliu Maniu 244 j, București. Telefon 0785 803 113. Program și formular.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
