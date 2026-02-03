'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV, SITE } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-cream-100/90 backdrop-blur-md border-b border-bark-900/10"
      role="banner"
    >
      <div className="section-padding-x flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-display font-semibold text-xl md:text-2xl text-bark-900 tracking-tight hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
          aria-label={`${SITE.name} – Acasă`}
        >
          {SITE.name}
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navigație principală"
        >
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-sm font-medium uppercase tracking-wider link-underline ${
                pathname === href ? 'text-gold after:w-full' : 'text-bark-800'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${SITE.phone}`}
          className="hidden md:inline-flex font-body text-sm font-semibold text-bark-900 hover:text-gold transition-colors"
        >
          {SITE.phoneFormatted}
        </a>

        <button
          type="button"
          className="md:hidden p-2 text-bark-900 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
        >
          <span className="sr-only">{menuOpen ? 'Închide' : 'Meniu'}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="section-padding-x py-6 bg-cream-200 border-t border-bark-900/10 flex flex-col gap-4"
          aria-label="Navigație mobilă"
        >
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-sm font-medium uppercase tracking-wider ${
                pathname === href ? 'text-gold' : 'text-bark-800'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className="font-body text-sm font-semibold text-bark-900"
            onClick={() => setMenuOpen(false)}
          >
            {SITE.phoneFormatted}
          </a>
        </nav>
      </div>
    </header>
  );
}
