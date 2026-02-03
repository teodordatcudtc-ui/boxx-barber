# Boxx Barber Club – Site web

Site multi-pagină Next.js (App Router) pentru **Boxx Barber Club** – frizerie, coafor și masaj, București, Rotar Park.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Limbaj:** TypeScript
- **Stilizare:** Tailwind CSS
- **Fonturi:** Cormorant Garamond (titluri), DM Sans (body)

**De ce App Router:** metadata API pentru SEO pe fiecare pagină, layout-uri imbricate, generateStaticParams pentru paginile de servicii, și aliniere cu direcția actuală Next.js.

---

## Structură pagini (rute reale)

| URL | Pagină |
|-----|--------|
| `/` | Acasă (hero, servicii strip, despre, contact strip, CTA) |
| `/despre-noi` | Despre noi (misiune, viziune, echipă) |
| `/servicii` | Listă servicii (frizerie, coafor, masaj) |
| `/servicii/[slug]` | Pagină dedicată fiecare serviciu |
| `/galerie` | Galerie (layout asimetric) |
| `/contact` | Contact (formular, date, Google Maps embed) |
| `/legal/politica-confidentialitate` | Politica de confidențialitate |
| `/legal/termeni-si-conditii` | Termeni și condiții |
| `/sitemap.xml` | Sitemap (generat automat) |
| `/robots.txt` | Robots (generat automat) |

---

## Comenzi (copy–paste)

```bash
# Instalare dependențe
npm install

# Development (server local)
npm run dev

# Build pentru producție
npm run build

# Rulare build (după npm run build)
npm start

# Lint
npm run lint
```

După `npm run dev`, deschide [http://localhost:3000](http://localhost:3000).

---

## Imagini de adăugat

Pentru aspect final complet, adaugă în **`public/`**:

- **`hero.jpg`** – fundal hero (vizibil de la tabletă în sus; pe telefon nu se afișează)
- **`despre-noi.jpg`** – imagine pentru secțiunea „Despre noi” pe pagina principală
- **`cta-bg.jpg`** – fundal pentru blocul CTA (opțional; dacă lipsește, se folosește culoare)
- **`galerie/1.jpg` … `galerie/12.jpg`** – poze pentru pagina Galerie (grid uniform; adaugi câte vrei, până la 12)

Poți folosi imaginile din locație (barber station, sala de masaj) pe care le-ai furnizat ca referință.

---

## Configurare producție

1. În **`src/lib/site.ts`** actualizează **`baseUrl`** cu domeniul real (ex: `https://boxxbarberclub.ro`).
2. Conectează formularul de contact la un serviciu de email sau API (acum formularul doar simulează trimiterea).
3. Opțional: adaugă Google Analytics sau alte scripturi în `layout.tsx`.

---

## SEO și accesibilitate

- **SEO:** Metadata (title, description) pe toate paginile; sitemap.xml și robots.txt generate; limbă `ro` setată pe `<html>`.
- **Accesibilitate:** Link „Sari la conținut”, focus vizibil (outline auriu), etichete pentru formulare, `aria-label` / `aria-labelledby` unde e cazul, structură de titluri (h1, h2).

---

## Checklist post-generare (TO-DO)

- [ ] Rulare `npm install` în rădăcina proiectului.
- [ ] Rulare `npm run dev` și verificare toate paginile în browser (Acasă, Despre noi, Servicii, Galerie, Contact, Legal).
- [ ] Verificare linkuri: navigare header/footer, butoane CTA, breadcrumb-uri.
- [ ] Adăugare imagini în `public/` (hero.jpg, about-blurb.jpg, cta-bg.jpg, galerie/1–6.jpg).
- [ ] Actualizare `baseUrl` în `src/lib/site.ts` pentru domeniul de producție.
- [ ] Testare formular contact (validare câmpuri, mesaj succes); conectare la backend/email la alegere.
- [ ] Rulare `npm run build` și verificare că nu există erori.
- [ ] Verificare `/sitemap.xml` și `/robots.txt` după deploy (URL-uri corecte).
- [ ] Test accesibilitate: navigare doar cu tastatura, screen reader dacă e posibil.
- [ ] Verificare afișare pe mobil (meniu hamburger, spațieri, butoane).

După aceste pași, site-ul este gata pentru deploy (Vercel, Netlify, sau alt host care suportă Next.js).
