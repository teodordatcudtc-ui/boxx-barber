import Link from 'next/link';

export function AboutBlurb() {
  return (
    <section
      className="py-20 md:py-28 bg-cream-200 section-padding-x"
      aria-labelledby="about-blurb-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text bloc – asimetric, 5 coloane */}
          <div className="lg:col-span-5 lg:pr-8">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Despre noi
            </p>
            <h2
              id="about-blurb-heading"
              className="font-display font-semibold text-display text-bark-900 leading-tight"
            >
              Frizerie, coafor și masaj – un singur loc, experiența ta.
            </h2>
            <p className="font-body text-bark-700 mt-6 leading-relaxed">
              La Boxx Barber Club combinăm tunsul și coafura de calitate cu spațiul de masaj, într-o atmosferă caldă și profesională. Fie că vii pentru un tuns rapid, pentru o coafură de ocazie sau pentru o oră de relaxare, te așteptăm la Rotar Park.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <span className="font-display text-4xl text-gold block">+10</span>
                <span className="font-body text-sm text-bark-700">ani experiență</span>
              </div>
              <div>
                <span className="font-display text-4xl text-gold block">100%</span>
                <span className="font-body text-sm text-bark-700">dedicație</span>
              </div>
            </div>
            <Link
              href="/despre-noi"
              className="btn-primary mt-10 inline-block"
            >
              Povestea noastră
            </Link>
          </div>

          {/* Imagine secțiune Despre noi – pune poza ta în public ca despre-noi.jpg */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative aspect-[4/3] lg:aspect-[5/4] rounded-lg overflow-hidden shadow-xl bg-bark-800 bg-cover bg-center"
              style={{ backgroundImage: 'url(/despre-noi.jpg)' }}
              role="img"
              aria-label="Interior Boxx Barber Club – atmosferă caldă și profesională"
            >
              <div className="absolute inset-0 bg-bark-900/20" aria-hidden />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg z-0"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
