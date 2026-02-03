import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termeni și condiții',
  description: 'Termenii și condițiile de utilizare pentru serviciile Boxx Barber Club.',
};

export default function TermeniSiConditiiPage() {
  return (
    <div className="pt-20 md:pt-24">
      <article className="section-padding-x py-16 md:py-24 max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-body text-sm text-bark-600">
            <li><Link href="/" className="hover:text-gold transition-colors">Acasă</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/legal/termeni-si-conditii" className="hover:text-gold transition-colors">Legal</Link></li>
            <li aria-hidden>/</li>
            <li className="text-bark-900" aria-current="page">Termeni și condiții</li>
          </ol>
        </nav>

        <h1 className="font-display font-semibold text-display text-bark-900 leading-tight">
          Termeni și condiții
        </h1>
        <p className="font-body text-bark-600 mt-4">
          Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
        </p>

        <div className="font-body text-bark-700 mt-12 space-y-8 prose prose-bark max-w-none">
          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              1. Prezentare
            </h2>
            <p>
              Acest site este operat de Boxx Barber Club și oferă informații despre serviciile noastre (frizerie, coafor, masaj) și posibilitatea de a ne contacta sau programa. Utilizarea site-ului implică acceptarea acestor termeni.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              2. Servicii și programări
            </h2>
            <p>
              Prețurile și duratele afișate sunt orientative și pot fi confirmate la loc. Programările se fac telefonic sau prin formular; confirmarea programării se face de către noi. Ne rezervăm dreptul de a refuza sau reprograma în cazuri excepționale.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              3. Conținut și drepturi de autor
            </h2>
            <p>
              Conținutul site-ului (texte, imagini, logo) este protejat și aparține Boxx Barber Club sau partenerilor noștri. Nu este permisă copierea sau utilizarea comercială fără acord scris.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              4. Limitarea răspunderii
            </h2>
            <p>
              Ne străduim să menținem informațiile corecte și actualizate, dar nu garantăm că site-ul este lipsit de erori sau întreruperi. Nu suntem răspunsători pentru daune indirecte rezultate din utilizarea site-ului sau a serviciilor.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              5. Contact
            </h2>
            <p>
              Pentru întrebări legate de acești termeni: Boxx Barber Club, Rotar Park, Bulevardul Iuliu Maniu 244 j, 061126 București, tel. 0785 803 113.
            </p>
          </section>
        </div>

        <p className="mt-12">
          <Link href="/" className="font-body text-gold hover:underline">
            ← Înapoi la Acasă
          </Link>
        </p>
      </article>
    </div>
  );
}
