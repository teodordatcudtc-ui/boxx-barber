import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Galerie foto Boxx Barber Club – interior frizerie, coafor și spațiu masaj, București Rotar Park.',
};

const GALERIE_IMAGES = 12;

function PlaceholderIcon() {
  return (
    <svg
      className="w-12 h-12 text-bark-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

export default function GaleriePage() {
  const images = Array.from({ length: GALERIE_IMAGES }, (_, i) => i + 1);

  return (
    <div className="pt-20 md:pt-24">
      <section className="section-padding-x py-16 md:py-24">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Galerie
          </p>
          <h1 className="font-display font-semibold text-display text-bark-900 leading-tight">
            Atmosfera Boxx Barber Club
          </h1>
          <p className="font-body text-bark-700 mt-6 text-lg leading-relaxed">
            Un glimpse în interior – frizerie, coafor și spațiul de masaj.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((num) => (
              <div
                key={num}
                className="relative aspect-square rounded-lg overflow-hidden bg-cream-300 flex items-center justify-center border border-bark-900/10"
              >
                <PlaceholderIcon />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
