import Link from 'next/link';

export function CtaBlock() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="cta-block-heading"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-bark-900"
        style={{ backgroundImage: 'url(/cta-bg.jpg)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-bark-900/75 z-10" aria-hidden />

      <div className="relative z-20 section-padding-x text-center">
        <h2
          id="cta-block-heading"
          className="font-display font-semibold text-display md:text-4xl text-cream-100 max-w-3xl mx-auto leading-tight"
        >
          Programează o vizită. Te așteptăm.
        </h2>
        <p className="font-body text-cream-200 mt-6 max-w-xl mx-auto">
          Sună sau trimite un mesaj pentru programare. Suntem la Rotar Park, Bulevardul Iuliu Maniu 244 j.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="tel:0785803113" className="btn-primary">
            Sună 0785 803 113
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase text-sm px-8 py-4 bg-cream-100 text-bark-900 border-2 border-cream-100 transition-all duration-300 hover:bg-cream-200 hover:border-cream-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Formular contact
          </Link>
        </div>
      </div>
    </section>
  );
}
