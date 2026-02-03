import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/despre-noi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicii`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/galerie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/legal/politica-confidentialitate`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/termeni-si-conditii`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/servicii/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
