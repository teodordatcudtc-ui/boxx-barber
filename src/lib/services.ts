export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: 'frizerie' | 'coafor' | 'masaj';
  price?: string;
  duration?: string;
  imagePlaceholder?: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'tuns-barba',
    title: 'Tuns & Barbă',
    shortDescription: 'Tuns clasic sau modern și îngrijire barbă.',
    description:
      'Tuns profesional adaptat stilului tău și îngrijire completă a bărbii: contur, modelare și produse premium. Experiență relaxantă în atmosfera Boxx Barber Club.',
    category: 'frizerie',
    price: 'de la 60 RON',
    duration: '~45 min',
  },
  {
    slug: 'tuns-copii',
    title: 'Tuns Copii',
    shortDescription: 'Tuns pentru cei mici, într-un mediu prietenos.',
    description:
      'Tuns pentru copii într-un mediu calm și distractiv. Folosim tehnici blânde și produse potrivite pentru pielea sensibilă.',
    category: 'frizerie',
    price: 'de la 40 RON',
    duration: '~30 min',
  },
  {
    slug: 'coafura-speciala',
    title: 'Coafură Specială',
    shortDescription: 'Coafuri pentru evenimente și ocazii speciale.',
    description:
      'Coafuri pentru nuntă, botez, evenimente. Stilizare și fixare profesională, în funcție de preferințele tale.',
    category: 'coafor',
    price: 'la cerere',
    duration: 'variabil',
  },
  {
    slug: 'masaj-relaxare',
    title: 'Masaj Relaxare',
    shortDescription: 'Masaj de relaxare în atmosferă caldă și intimă.',
    description:
      'Masaj de relaxare cu uleiuri naturale într-o cameră dedicată, cu lumină discretă și muzică ambient. Ideal pentru eliberarea tensiunii.',
    category: 'masaj',
    price: 'de la 120 RON',
    duration: '60 min',
  },
  {
    slug: 'masaj-terapeutic',
    title: 'Masaj Terapeutic',
    shortDescription: 'Masaj pentru dureri musculare și recuperare.',
    description:
      'Masaj terapeutic concentrat pe zonele tensionate. Tehnici adaptate nevoilor tale pentru ameliorarea durerilor și îmbunătățirea mobilității.',
    category: 'masaj',
    price: 'de la 150 RON',
    duration: '60 min',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service['category']) {
  return SERVICES.filter((s) => s.category === category);
}
