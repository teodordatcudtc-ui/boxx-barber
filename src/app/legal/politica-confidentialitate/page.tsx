import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  description: 'Politica de confidențialitate și protecția datelor Boxx Barber Club.',
};

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="pt-20 md:pt-24">
      <article className="section-padding-x py-16 md:py-24 max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-body text-sm text-bark-600">
            <li><Link href="/" className="hover:text-gold transition-colors">Acasă</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/legal/politica-confidentialitate" className="hover:text-gold transition-colors">Legal</Link></li>
            <li aria-hidden>/</li>
            <li className="text-bark-900" aria-current="page">Politica de confidențialitate</li>
          </ol>
        </nav>

        <h1 className="font-display font-semibold text-display text-bark-900 leading-tight">
          Politica de confidențialitate
        </h1>
        <p className="font-body text-bark-600 mt-4">
          Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
        </p>

        <div className="font-body text-bark-700 mt-12 space-y-8 prose prose-bark max-w-none">
          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              1. Operatorul de date
            </h2>
            <p>
              Boxx Barber Club („nosotros”, „noi”) este operatorul datelor cu caracter personal colectate prin acest site și în cadrul activității noastre (programări, contact). Adresa: Rotar Park, Bulevardul Iuliu Maniu 244 j, 061126 București. Contact: 0785 803 113.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              2. Datele pe care le colectăm
            </h2>
            <p>
              Putem colecta: nume, prenume, număr de telefon, adresă de email și alte informații pe care ni le furnizați în formularul de contact sau la programare. Datele sunt utilizate exclusiv pentru a răspunde la solicitări, pentru programări și pentru comunicări legate de serviciile noastre.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              3. Temeiul și scopul prelucrării
            </h2>
            <p>
              Prelucrăm datele pe baza consimțământului (când completați formularul sau ne contactați) și, unde este cazul, pentru executarea contractului (programări). Nu folosim datele pentru marketing fără acordul tău explicit.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              4. Drepturile tale
            </h2>
            <p>
              Conform GDPR, ai dreptul la acces, rectificare, ștergere, restricționare, portabilitate și opoziție. Poți retrage consimțământul oricând. Pentru exercitarea drepturilor sau pentru plângeri ne poți contacta la datele de mai sus sau la ANSPDCP.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-bark-900 mt-10 mb-4">
              5. Securitate și perioada de păstrare
            </h2>
            <p>
              Păstrăm datele doar atât timp cât este necesar pentru scopurile indicate (ex.: programări, răspuns la mesaje) sau conform obligațiilor legale. Luăm măsuri tehnice și organizatorice adecvate pentru protecția datelor.
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
