import Link from 'next/link';
import { NAV, SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer
      className="bg-bark-900 text-cream-200 section-padding-x py-16 md:py-20"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <h2 className="font-display font-semibold text-2xl text-cream-100 mb-4">
              {SITE.name}
            </h2>
            <p className="text-cream-300 text-sm leading-relaxed max-w-xs">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="font-body font-semibold uppercase tracking-wider text-cream-100 text-sm mb-4">
              Navigare
            </h3>
            <ul className="space-y-3">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream-300 hover:text-gold-light transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body font-semibold uppercase tracking-wider text-cream-100 text-sm mb-4">
              Contact
            </h3>
            <address className="not-italic text-cream-300 text-sm space-y-2">
              <p>{SITE.addressShort}</p>
              <a
                href={`tel:${SITE.phone}`}
                className="block hover:text-gold-light transition-colors"
              >
                {SITE.phoneFormatted}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bark-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-400 text-xs">
            © {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.
          </p>
          <nav aria-label="Linkuri legale">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/legal/politica-confidentialitate"
                  className="text-cream-400 hover:text-gold-light text-xs transition-colors"
                >
                  Politica de confidențialitate
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/termeni-si-conditii"
                  className="text-cream-400 hover:text-gold-light text-xs transition-colors"
                >
                  Termeni și condiții
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
