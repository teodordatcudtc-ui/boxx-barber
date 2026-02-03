import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, SERVICES } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Serviciu' };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="pt-20 md:pt-24">
      <section className="section-padding-x py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-body text-sm text-bark-600">
              <li><Link href="/servicii" className="hover:text-gold transition-colors">Servicii</Link></li>
              <li aria-hidden>/</li>
              <li className="text-bark-900" aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">
            {service.category}
          </p>
          <h1 className="font-display font-semibold text-display text-bark-900 leading-tight">
            {service.title}
          </h1>
          <p className="font-body text-bark-700 mt-6 text-lg">
            {service.shortDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            {service.price && (
              <span className="font-body font-semibold text-gold text-lg">
                {service.price}
              </span>
            )}
            {service.duration && (
              <span className="font-body text-bark-600">
                Durată: {service.duration}
              </span>
            )}
          </div>

          <div className="mt-12 pt-12 border-t border-bark-900/10">
            <p className="font-body text-bark-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Programează
            </Link>
            <Link href="/servicii" className="btn-secondary">
              Înapoi la servicii
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
