import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, getServicesByCategory } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Servicii',
  description:
    'Servicii Boxx Barber Club: tuns, barbă, coafură, masaj relaxare și terapeutic. Prețuri și durate – București, Rotar Park.',
};

export default function ServiciiPage() {
  const frizerie = getServicesByCategory('frizerie');
  const coafor = getServicesByCategory('coafor');
  const masaj = getServicesByCategory('masaj');

  return (
    <div className="pt-20 md:pt-24">
      <section className="section-padding-x py-16 md:py-24">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Servicii
          </p>
          <h1 className="font-display font-semibold text-display text-bark-900 leading-tight">
            Ce oferim
          </h1>
          <p className="font-body text-bark-700 mt-6 text-lg leading-relaxed">
            De la tuns și îngrijirea bărbii la coafuri de ocazie și masaj – toate într-un singur loc, la Boxx Barber Club.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-20">
          {[
            { title: 'Frizerie', items: frizerie },
            { title: 'Coafor', items: coafor },
            { title: 'Masaj', items: masaj },
          ].filter(({ items }) => items.length > 0).map(({ title, items }) => (
            <div key={title}>
              <h2 className="font-display font-semibold text-2xl text-bark-900 mb-8 border-b border-bark-900/10 pb-4">
                {title}
              </h2>
              <ul className="space-y-6" role="list">
                {items.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/servicii/${service.slug}`}
                      className="group block p-6 md:p-8 bg-cream-50 border border-bark-900/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300 rounded-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-display font-semibold text-xl text-bark-900 group-hover:text-gold transition-colors">
                            {service.title}
                          </h3>
                          <p className="font-body text-bark-700 mt-2">
                            {service.shortDescription}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-4 md:text-right">
                          {service.price && (
                            <span className="font-body font-semibold text-gold">
                              {service.price}
                            </span>
                          )}
                          {service.duration && (
                            <span className="font-body text-sm text-bark-600">
                              {service.duration}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="font-body text-sm text-gold mt-4 inline-block group-hover:underline">
                        Detalii serviciu →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
