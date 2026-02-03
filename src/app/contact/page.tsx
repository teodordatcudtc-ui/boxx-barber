'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Simulare trimitere – în producție înlocuiești cu API/email service
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
  };

  return (
    <div className="pt-20 md:pt-24">
      <section className="section-padding-x py-16 md:py-24">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Contact
          </p>
          <h1 className="font-display font-semibold text-display text-bark-900 leading-tight">
            Programează sau scrie-ne
          </h1>
          <p className="font-body text-bark-700 mt-6 text-lg leading-relaxed">
            Sună direct sau completează formularul și te contactăm noi.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Date contact + hartă */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-body font-semibold uppercase tracking-wider text-bark-900 text-sm mb-4">
                Adresă
              </h2>
              <p className="font-body text-bark-700">{SITE.address}</p>
            </div>
            <div>
              <h2 className="font-body font-semibold uppercase tracking-wider text-bark-900 text-sm mb-4">
                Telefon
              </h2>
              <a
                href={`tel:${SITE.phone}`}
                className="font-body text-bark-900 font-medium hover:text-gold transition-colors"
              >
                {SITE.phoneFormatted}
              </a>
            </div>
            <div>
              <h2 className="font-body font-semibold uppercase tracking-wider text-bark-900 text-sm mb-4">
                Program
              </h2>
              <p className="font-body text-bark-700">
                Lun–Sâm: 9–20<br />
                Duminică: 10–18
              </p>
            </div>

            <div className="rounded-lg overflow-hidden border border-bark-900/10 aspect-video bg-bark-800">
              <iframe
                src={SITE.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Boxx Barber Club pe Google Maps"
                className="w-full h-full min-h-[250px]"
              />
            </div>
          </div>

          {/* Formular */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
              aria-labelledby="form-heading"
            >
              <h2 id="form-heading" className="font-display font-semibold text-xl text-bark-900 mb-6">
                Trimite un mesaj
              </h2>

              <div>
                <label htmlFor="name" className="block font-body text-sm font-medium text-bark-800 mb-2">
                  Nume complet <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 font-body text-bark-900 bg-cream-50 border border-bark-900/20 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Numele tău"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-body text-sm font-medium text-bark-800 mb-2">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 font-body text-bark-900 bg-cream-50 border border-bark-900/20 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="email@exemplu.ro"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-body text-sm font-medium text-bark-800 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  className="w-full px-4 py-3 font-body text-bark-900 bg-cream-50 border border-bark-900/20 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="07xx xxx xxx"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-body text-sm font-medium text-bark-800 mb-2">
                  Subiect
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 font-body text-bark-900 bg-cream-50 border border-bark-900/20 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Ex: programare tuns"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-sm font-medium text-bark-800 mb-2">
                  Mesaj <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 font-body text-bark-900 bg-cream-50 border border-bark-900/20 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-y"
                  placeholder="Scrie-ne ce ai nevoie..."
                />
              </div>

              {status === 'sent' && (
                <p className="font-body text-green-700 bg-green-50 p-4 rounded" role="status">
                  Mesajul a fost trimis. Te contactăm în curând.
                </p>
              )}
              {status === 'error' && (
                <p className="font-body text-red-700 bg-red-50 p-4 rounded" role="alert">
                  A apărut o eroare. Te rugăm să încerci din nou sau să ne suni.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Se trimite...' : 'Trimite mesajul'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
