import Image from "next/image";
import { doctors } from "@/lib/content";
import { PillButton, SectionLabel } from "./ui";

const highlights = [
  {
    title: "Minimalno invazivno",
    text: "Artroskopski zahvati kroz male rezove za brži oporavak.",
  },
  {
    title: "Svjetski standardi",
    text: "Najnovije tehnike i metode operativnih zahvata.",
  },
  {
    title: "Dnevna bolnica",
    text: "Operacioni blok i apartmani za pacijente na Kromolju.",
  },
  {
    title: "Dvije lokacije",
    text: "Importanne Centar i Kromolj, u centru Sarajeva.",
  },
];

export default function About() {
  return (
    <section id="o-nama" className="mx-auto w-full max-w-[1600px] px-5 pt-20 pb-20 sm:px-8 lg:px-14 xl:px-20 lg:pt-28 lg:pb-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.15fr)] lg:gap-16">
        {/* Lijeva kolona: oznaka + ključna brojka */}
        <div className="flex flex-col justify-between gap-10" data-reveal>
          <SectionLabel>O nama</SectionLabel>
          <div className="hidden lg:block">
            <p className="text-[56px] leading-none font-medium tracking-[-0.04em] text-ink">
              3<span className="text-brand">.</span>
            </p>
            <p className="mt-3 text-[15px] text-ink-soft">specijalista vodi naš medicinski tim</p>
            <div className="mt-4 flex items-center">
              {doctors.map((d, i) => (
                <span
                  key={d.name}
                  className="relative -ml-2 size-11 overflow-hidden rounded-full bg-sky ring-[3px] ring-white first:ml-0"
                  style={{ zIndex: 3 - i }}
                >
                  <Image
                    src={d.image}
                    alt={d.shortName}
                    fill
                    sizes="44px"
                    className="origin-[50%_12%] scale-[2.3] object-cover object-top"
                  />
                </span>
              ))}
              <a
                href="#doktori"
                className="-ml-2 grid size-11 place-items-center rounded-full bg-brand text-xs font-semibold text-white ring-[3px] ring-white transition-colors hover:bg-brand-deep"
                aria-label="Pogledajte naše doktore"
              >
                Tim
              </a>
            </div>
          </div>
        </div>

        {/* Desna kolona */}
        <div>
          <h2
            className="text-[26px] leading-[1.25] font-medium tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[36px]"
            data-reveal
          >
            Poliklinika ORTHOS je moderno opremljena poliklinika za ortopediju i opštu hirurgiju{" "}
            <span className="text-muted/80">
              sa jednodnevnom artroskopskom hirurgijom — za brži i kvalitetniji oporavak svakog pacijenta.
            </span>
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-end lg:mt-14 lg:gap-12">
            <div className="grid grid-cols-2 gap-3 sm:w-[400px]" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
              <figure className="group relative aspect-[4/4.6] overflow-hidden rounded-[18px] bg-mist">
                <Image
                  src="/images/importanne-cekaonica.jpg"
                  alt="Čekaonica ambulante ORTHOS u Importanne Centru"
                  fill
                  sizes="(min-width: 640px) 200px, 50vw"
                  className="object-cover object-[60%_center] transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
              <figure className="group relative aspect-[4/4.6] overflow-hidden rounded-[18px] bg-mist">
                <Image
                  src="/images/kromolj-soba.jpg"
                  alt="Soba za oporavak u Dnevnoj bolnici Kromolj"
                  fill
                  sizes="(min-width: 640px) 200px, 50vw"
                  className="object-cover object-[35%_center] transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            </div>

            <div className="max-w-[340px]" data-reveal style={{ ["--reveal-delay" as string]: "200ms" }}>
              <p className="text-sm leading-relaxed text-muted">
                Prim. mr. sci. dr. Senad Maksić i mr. sci. dr. Semin Bećirbegović, uz ljubazno i edukovano
                osoblje, savremeno opremljene ambulante i dnevnu bolnicu, predvode tim koji garantuje vrhunsku
                uslugu.
              </p>
              <PillButton href="#doktori" size="sm" className="mt-6">
                Upoznajte naš tim
              </PillButton>
            </div>
          </div>
        </div>
      </div>

      {/* Prednosti */}
      <ul className="mt-16 grid gap-px overflow-hidden rounded-[20px] bg-line ring-1 ring-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <li
            key={h.title}
            className="bg-white p-6 lg:p-7"
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
          >
            <span className="text-xs font-medium text-brand tabular-nums">0{i + 1}</span>
            <p className="mt-3 text-[17px] font-medium tracking-[-0.01em] text-ink">{h.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
