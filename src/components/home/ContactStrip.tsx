import Link from 'next/link';
import { SITE } from '@/lib/site';

export function ContactStrip() {
  return (
    <section
      className="bg-bark-800 text-cream-200 py-12 md:py-16 section-padding-x"
      aria-labelledby="contact-strip-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2 id="contact-strip-heading" className="sr-only">
          Date de contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-gold mb-2" aria-hidden>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <p className="font-body text-sm uppercase tracking-wider text-cream-300">Adresă</p>
            <p className="font-body text-cream-100 mt-1">{SITE.address}</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-gold mb-2" aria-hidden>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <p className="font-body text-sm uppercase tracking-wider text-cream-300">Telefon</p>
            <a href={`tel:${SITE.phone}`} className="font-body text-cream-100 mt-1 hover:text-gold-light transition-colors">
              {SITE.phoneFormatted}
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-gold mb-2" aria-hidden>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p className="font-body text-sm uppercase tracking-wider text-cream-300">Program</p>
            <p className="font-body text-cream-100 mt-1">Lun–Sâm: 9–20 · Duminică: 10–18</p>
          </div>
        </div>
        <p className="text-center mt-8">
          <Link href="/contact" className="font-body text-sm font-semibold text-gold hover:text-gold-light transition-colors">
            Pagina de contact →
          </Link>
        </p>
      </div>
    </section>
  );
}
