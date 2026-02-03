import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center section-padding-x py-24">
      <h1 className="font-display font-semibold text-4xl md:text-5xl text-bark-900">
        404
      </h1>
      <p className="font-body text-bark-700 mt-4 text-center">
        Pagina nu a fost găsită.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8"
      >
        Înapoi la Acasă
      </Link>
    </div>
  );
}
