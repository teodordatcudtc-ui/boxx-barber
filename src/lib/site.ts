export const SITE = {
  name: 'Boxx Barber Club',
  shortDescription: 'Frizerie, coafor, masaj',
  description:
    'Boxx Barber Club – experiență premium de frizerie, coafor și masaj în București. Atmosferă relaxantă, servicii de încredere la Rotar Park.',
  phone: '0785803113',
  phoneFormatted: '0785 803 113',
  address: 'Rotar Park, Bulevardul Iuliu Maniu 244 j, 061126 București',
  addressShort: 'Bulevardul Iuliu Maniu 244 j, București',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.9594161361442!2d26.000865299999997!3d44.4339947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201f56047f167%3A0xc6b168837f1b35b!2sBoxx%20Barber%20Club!5e0!3m2!1sen!2sro!4v1770117155501!5m2!1sen!2sro',
  baseUrl: 'https://boxxbarberclub.ro',
} as const;

export const NAV = [
  { href: '/', label: 'Acasă' },
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
] as const;
