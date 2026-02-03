import Link from 'next/link';
import { SERVICES } from '@/lib/services';

export function ServicesStrip() {
  const featured = SERVICES.slice(0, 4);

  return (
    <section
      className="relative z-10 -mt-12 md:-mt-20 section-padding-x overlap-section--raise"
      aria-labelledby="services-strip-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-cream-50 border border-bark-900/10 shadow-xl p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((service, i) => (
            <Link
              key={service.slug}
              href={`/servicii/${service.slug}`}
              className="group block p-4 -m-4 rounded-lg hover:bg-cream-200/50 transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <span
                className="font-display text-3xl text-bark-900/20 group-hover:text-gold/40 transition-colors"
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-semibold text-lg text-bark-900 mt-2 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-sm text-bark-700 mt-1">
                {service.shortDescription}
              </p>
              {service.price && (
                <p className="font-body text-sm font-medium text-gold mt-2">
                  {service.price}
                </p>
              )}
            </Link>
          ))}
        </div>
        <p className="text-center mt-6">
          <Link
            href="/servicii"
            className="font-body text-sm font-semibold uppercase tracking-wider text-bark-800 link-underline"
          >
            Toate serviciile
          </Link>
        </p>
      </div>
    </section>
  );
}
