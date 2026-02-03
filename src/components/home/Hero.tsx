'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Secțiune principală"
    >
      {/* Pe telefon: fără imagine, doar fundal închis. De la md: imagine hero */}
      <div className="absolute inset-0 z-0">
        {/* Fundal mobil: doar culoare */}
        <div className="absolute inset-0 bg-bark-900 md:bg-transparent" aria-hidden />
        {/* Imagine hero (ascunsă pe telefon, vizibilă de la tabletă în sus) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: 'url(/hero.jpg)' }}
          role="img"
          aria-label="Atmosferă Boxx Barber Club – stație de frizerie și relaxare"
        />
        <div className="absolute inset-0 bg-bark-900/70 md:bg-bark-900/70 z-10" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-bark-900/90 via-bark-900/50 to-transparent z-10 hidden md:block"
          aria-hidden
        />
      </div>

      <div className="relative z-20 w-full pt-24 pb-16 flex flex-col px-5 sm:px-8 md:pl-16 lg:pl-24 xl:pl-32 md:pr-8 lg:pr-12">
        {/* Conținut: pe telefon centrat, pe PC spre stânga */}
        <div className="max-w-2xl w-full text-center md:text-left mx-auto md:mx-0">
          <p
            className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-gold-light mb-4 animate-fade-in opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            Frizerie · Coafor · Masaj
          </p>
          <h1
            className="font-display font-semibold text-hero text-cream-100 leading-tight mb-6 animate-slide-up opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Experiența premium la Boxx Barber Club
          </h1>
          <p
            className="font-body text-cream-200 text-lg md:text-xl max-w-lg mb-10 animate-slide-up opacity-0 mx-auto md:mx-0"
            style={{ animationDelay: '0.35s' }}
          >
            Tuns, coafură și masaj într-o atmosferă relaxantă, la Rotar Park. Fiecare vizită contează.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center md:justify-start animate-slide-up opacity-0"
            style={{ animationDelay: '0.5s' }}
          >
            <Link href="/contact" className="btn-primary">
              Programează o vizită
            </Link>
            <Link
              href="/servicii"
              className="inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 bg-cream-100 text-bark-900 border-2 border-cream-100 transition-all duration-300 hover:bg-cream-200 hover:border-cream-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Vezi serviciile
            </Link>
          </div>
        </div>
      </div>

      {/* Element decorativ – linie aurie subtilă */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent z-20"
        aria-hidden
      />
    </section>
  );
}
