"use client";

import Image from "next/image";
import { useState } from "react";
import { hospitalGallery, locations } from "@/lib/content";
import { ArrowLeft, ArrowRight, PillButton, SectionLabel, cx } from "./ui";

const kromolj = locations.find((l) => l.id === "kromolj")!;

export default function DayHospital() {
  const [index, setIndex] = useState(0);
  const total = hospitalGallery.length;
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);
  const current = hospitalGallery[index];
  const next = hospitalGallery[(index + 1) % total];

  return (
    <section
      id="dnevna-bolnica"
      className="bg-[#eef5fa] mx-2 sm:mx-3 lg:mx-4 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] px-3 sm:px-5 lg:px-10 xl:px-16 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto max-w-[680px] text-center" data-reveal>
          <SectionLabel>Dnevna bolnica Kromolj</SectionLabel>
          <h2 className="mt-4 text-[34px] leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[46px] lg:text-[52px]">
            Hirurgija bez dugog boravka u bolnici
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-12">
          {/* Lijevo: trenutni prostor + kontrole */}
          <div className="order-2 lg:order-1" data-reveal>
            <p className="mb-3 text-xs font-medium text-muted">
              Sljedeće: {next.title}
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={`Prikaži: ${next.title}`}
              className="group relative block aspect-[4/3] w-[148px] overflow-hidden rounded-[16px] bg-white ring-4 ring-white"
            >
              <Image
                key={next.image}
                src={next.image}
                alt={`Sljedeće: ${next.title}`}
                fill
                sizes="148px"
                className="animate-[fade-up_0.6s_ease-out_both] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            <p
              className="mt-8 text-[22px] font-medium tracking-[-0.02em] text-ink"
              aria-live="polite"
            >
              {current.title}
            </p>
            <p className="mt-1 text-sm text-muted">
              Dnevna bolnica · Kromolj 25 D
            </p>
            <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-muted">
              {current.text}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Prethodna fotografija"
                className="grid size-11 place-items-center rounded-full bg-white text-ink ring-1 ring-line transition-colors hover:ring-brand/40"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Sljedeća fotografija"
                className="grid size-11 place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-deep"
              >
                <ArrowRight className="size-4" />
              </button>
              <span className="ml-2 text-xs font-medium text-muted tabular-nums">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Sredina: velika fotografija */}
          <div
            className="order-1 lg:order-2"
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
          >
            <div className="relative aspect-[4/4.7] overflow-hidden rounded-[22px] bg-night shadow-[0_30px_60px_-30px_rgba(15,27,45,0.5)]">
              {hospitalGallery.map((g, i) => (
                <Image
                  key={g.image}
                  src={g.image}
                  alt={`${g.title} — Dnevna bolnica ORTHOS, Kromolj`}
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className={cx(
                    "object-cover transition-all duration-700 ease-out",
                    i === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0",
                  )}
                />
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,26,44,0)_55%,rgba(14,26,44,0.6)_100%)]" />

              <div className="absolute top-4 right-4 overflow-hidden rounded-[14px] ring-2 ring-white/80">
                <div className="relative aspect-[3/4] w-[92px] sm:w-[104px]">
                  <Image
                    src="/images/kromolj-operacioni-blok.jpg"
                    alt="Ulaz u operacioni blok"
                    fill
                    sizes="104px"
                    className="object-cover object-[30%_center]"
                  />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-5 flex justify-center">
                <div className="flex items-center gap-1.5 rounded-full bg-white/20 p-1.5 ring-1 ring-white/30 backdrop-blur-xl">
                  {hospitalGallery.map((g, i) => (
                    <button
                      key={g.title}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Prikaži: ${g.title}`}
                      aria-current={i === index}
                      className={cx(
                        "h-2 rounded-full transition-all duration-300",
                        i === index
                          ? "w-7 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/80",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desno: ključna informacija + CTA */}
          <div
            className="order-3"
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            <p className="text-[56px] leading-none font-medium tracking-[-0.04em] text-ink">
              1 dan<span className="text-brand">.</span>
            </p>
            <p className="mt-3 text-[15px] text-ink-soft">
              jednodnevna artroskopska hirurgija
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {[
                "Rame, koljeno i gležanj",
                "Pre- i postoperativna rehabilitacija",
                "Kontrole prema uputi specijaliste",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span
                    className="size-1.5 rounded-full bg-brand-green"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[320px] text-sm leading-relaxed text-muted">
              Operacioni blok, ambulante i apartmani za pacijente na jednom
              mjestu omogućavaju da zahvat i prvi oporavak protiču mirno i bez
              nepotrebnog boravka u bolnici.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PillButton href={kromolj.phones[0].href} size="sm">
                Pozovite {kromolj.phones[0].label}
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
