"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/lib/content";
import { ArrowUpRight, CheckIcon, SectionLabel, cx } from "./ui";

const steps = ["Specijalistički pregled", "Dijagnostika i plan liječenja", "Zahvat i oporavak"];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="usluge" className="px-5 pb-20 sm:px-8 lg:px-14 lg:pb-28">
      <div className="mx-auto max-w-[620px] text-center" data-reveal>
        <SectionLabel>Usluge</SectionLabel>
        <h2 className="mt-4 text-[34px] leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[46px] lg:text-[52px]">
          Od pregleda do oporavka
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-muted">
          Od specijalističkog pregleda do jednodnevnog hirurškog zahvata — sve na jednom mjestu, uz isti tim
          ljekara.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
        {/* Fotografija s plutajućom karticom */}
        <div className="relative lg:sticky lg:top-28 lg:self-start" data-reveal>
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-[24px] bg-mist">
            {services.map((s, i) => (
              <Image
                key={s.image}
                src={s.image}
                alt={s.imageAlt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className={cx(
                  "object-cover transition-all duration-700 ease-out",
                  i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,26,44,0)_45%,rgba(14,26,44,0.55)_100%)]" />
          </div>

          <div className="absolute inset-x-4 bottom-4 rounded-[18px] bg-white p-3 shadow-[0_20px_50px_-20px_rgba(15,27,45,0.45)] sm:inset-x-6 sm:bottom-6 sm:flex sm:gap-4">
            <div className="relative hidden aspect-square w-[124px] shrink-0 overflow-hidden rounded-[12px] sm:block">
              <Image
                src="/images/rehabilitacija.jpg"
                alt="Ljekar provjerava pokretljivost ruke pacijenta"
                fill
                sizes="124px"
                className="object-cover object-[40%_center]"
              />
            </div>
            <div className="flex-1 px-1 py-1">
              <p className="text-sm font-medium text-ink">Put pacijenta</p>
              <ol className="mt-3 space-y-2.5">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-[13px] text-ink-soft">
                    <span
                      className={cx(
                        "grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold",
                        i < 2 ? "bg-brand text-white" : "bg-sky text-brand",
                      )}
                    >
                      {i < 2 ? <CheckIcon className="size-3.5" /> : i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-3 flex h-1.5 gap-1" aria-hidden="true">
                <span className="flex-[2] rounded-full bg-brand" />
                <span className="flex-1 rounded-full bg-brand/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Akordeon usluga s prekidačima (referenca: toggle pill) */}
        <ul className="border-t border-line lg:border-t-0">
          {services.map((s, i) => {
            const isOpen = i === active;
            return (
              <li key={s.title} className="border-b border-line" data-reveal style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isOpen}
                    aria-controls={`usluga-${i}`}
                    className="group flex w-full items-center gap-4 py-5 text-left sm:gap-5 lg:py-6"
                  >
                    <span
                      className={cx(
                        "relative inline-flex h-7 w-[52px] shrink-0 items-center rounded-full p-0.5 transition-colors duration-300",
                        isOpen ? "bg-brand" : "bg-mist ring-1 ring-line ring-inset group-hover:bg-sky",
                      )}
                      aria-hidden="true"
                    >
                      <span
                        className={cx(
                          "grid size-6 place-items-center rounded-full text-[10px] font-semibold tabular-nums transition-all duration-300",
                          isOpen ? "translate-x-6 bg-white text-brand" : "translate-x-0 bg-white text-muted shadow-sm",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span
                      className={cx(
                        "text-[18px] font-medium tracking-[-0.015em] transition-colors sm:text-[21px]",
                        isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink",
                      )}
                    >
                      {s.title}
                    </span>
                  </button>
                </h3>
                <div
                  id={`usluga-${i}`}
                  role="region"
                  className={cx(
                    "grid transition-[grid-template-rows] duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pl-[68px] sm:pl-[72px]">
                      <p className="max-w-[520px] text-sm leading-relaxed text-muted">{s.text}</p>
                      {s.points && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {s.points.map((p) => (
                            <li key={p} className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-brand-deep">
                              {p}
                            </li>
                          ))}
                        </ul>
                      )}
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isOpen ? 0 : -1}
                        className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-brand hover:text-brand-deep"
                      >
                        Opširnije o usluzi <ArrowUpRight className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="sr-only" aria-live="polite">
        Odabrana usluga: {current.title}
      </p>
    </section>
  );
}
