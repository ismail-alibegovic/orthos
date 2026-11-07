# Poliklinika ORTHOS Sarajevo — demo koncept redizajna

> Nezavisni demo koncept početne stranice. **Nije službena stranica Poliklinike ORTHOS** i nije objavljen.

Vizuelna osnova: Dribbble „Healthcare Landing Page UI“ (raspored, tipografija, kartice, pill-dugmad sa strelicom,
tamno podnožje s velikim izblijedjelim natpisom). Sadržaj: www.poliklinika-orthos.ba.

## Pokretanje

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Tehnologije

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4. Bez dodatnih biblioteka; ikone su inline SVG,
font Inter preko `next/font`, slike preko `next/image`.

## Struktura

- `src/lib/content.ts` — sav sadržaj (usluge, doktori, lokacije, kontakt), preuzet sa službene stranice
- `src/components/` — sekcije: Hero, About, Services, Doctors, DayHospital, Locations, Contact, Footer
- `public/images/` — optimizovane fotografije

## Fotografije

- **Stvarne fotografije ORTHOS-a** (sa službene stranice): hero (operaciona sala na Kromolju), portreti doktora (pozadina uklonjena),
  Dnevna bolnica Kromolj i ambulanta u Importanne Centru (blago posvijetljene).
- **Ilustrativne fotografije (Unsplash)**: modeli koljena, ortoza ručnog zgloba,
  pregled pokretljivosti ruke. Ne prikazuju osoblje niti prostorije poliklinike; preporuka je zamijeniti ih
  vlastitim fotografijama.

## Napomene

- Nema backenda ni booking sistema. Dugmad vode na telefon (`tel:`), e-mail (`mailto:`) i obrazac koji
  otvara e-mail program s pripremljenom porukom.
- „Opširnije o usluzi“ vodi na odgovarajuću podstranicu postojeće službene stranice.
- Stranica ima `noindex`, jer je riječ o internom konceptu.
