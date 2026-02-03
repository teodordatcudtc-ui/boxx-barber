import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Despre noi',
  description:
    'Povestea Boxx Barber Club – frizerie, coafor și masaj la Rotar Park, București. Misiune, viziune și echipă.',
};

export default function DespreNoiPage() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="section-padding-x py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Despre noi
          </p>
          <h1 className="font-display font-semibold text-display text-bark-900 leading-tight">
            Misiunea noastră: o experiență memorabilă
          </h1>
          <p className="font-body text-bark-700 mt-8 text-lg leading-relaxed">
            Boxx Barber Club a luat naștere din dorința de a oferi un singur loc unde bărbații și cei care apreciază un serviciu de calitate pot veni atât pentru tuns și coafură, cât și pentru o pauză de relaxare prin masaj. Suntem la Rotar Park, pe Bulevardul Iuliu Maniu 244 j – un punct accesibil, într-o zonă verde.
          </p>
          <p className="font-body text-bark-700 mt-6 leading-relaxed">
            Credem în detalii: atmosferă caldă, lumină potrivită, produse alese și un personal atent la nevoile fiecărui client. Fiecare vizită trebuie să conteze – fie că ești aici pentru un tuns rapid, pentru o ocazie specială sau pentru o oră de liniște.
          </p>
        </div>
      </section>

      <section className="bg-cream-200 section-padding-x py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-bark-900 mb-12">
            Viziune
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-body font-semibold uppercase tracking-wider text-gold text-sm mb-3">
                Calitate
              </h3>
              <p className="font-body text-bark-700 leading-relaxed">
                Folosim tehnici și produse care respectă pielea și părul. De la tuns clasic la masaj terapeutic, fiecare serviciu este livrat cu același nivel de atenție.
              </p>
            </div>
            <div>
              <h3 className="font-body font-semibold uppercase tracking-wider text-gold text-sm mb-3">
                Experiență
              </h3>
              <p className="font-body text-bark-700 leading-relaxed">
                Spațiul este gândit să te facă să te simți bine: lemn cald, lumină discretă în zona de masaj, atmosferă de barber shop autentic în zona de frizerie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-x py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-bark-900 mb-8">
            Echipa
          </h2>
          <p className="font-body text-bark-700 leading-relaxed">
            Echipa Boxx Barber Club este formată din profesioniști pasionați: frizeri cu experiență în tuns clasic și modern, coafori pentru evenimente și terapeuti de masaj. Lucrăm împreună ca să oferim un flux coerent – poți programa atât un tuns, cât și un masaj în aceeași vizită.
          </p>
          <p className="font-body text-bark-700 mt-6 leading-relaxed">
            Te așteptăm să ne cunoști la fața locului. Programează o vizită sau sună-ne pentru orice întrebare.
          </p>
        </div>
      </section>
    </div>
  );
}
