"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { services } from "@/lib/content";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  SectionLabel,
  cx,
} from "./ui";

export default function Services() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const current = services[active];
  const total = services.length;
  const running = autoplay && inView && !hover;

  // Ručni izbor zaustavlja automatsko smjenjivanje
  const select = useCallback(
    (i: number) => {
      setAutoplay(false);
      setActive(((i % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) setAutoplay(false);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="usluge"
      className="mx-auto w-full max-w-[1600px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-14 xl:px-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[620px] text-center" data-reveal>
        <SectionLabel>Usluge</SectionLabel>
        <h2 className="mt-4 text-[34px] leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[46px] lg:text-[52px]">
          Od pregleda do oporavka
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-muted">
          Od specijalističkog pregleda do jednodnevnog hirurškog zahvata — sve
          na jednom mjestu, uz isti tim ljekara.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
        {/* Fotografija s plutajućom karticom */}
        <div className="relative lg:sticky lg:top-28 lg:self-start" data-reveal>
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/4.3] rounded-[24px] bg-mist">
            {services.map((s, i) => (
              <Image
                key={s.image}
                src={s.image}
                alt={s.imageAlt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className={cx(
                  "object-cover transition-all duration-700 ease-out",
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-[1.04] opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,26,44,0)_45%,rgba(14,26,44,0.55)_100%)]" />
          </div>

          <div
            className="absolute inset-x-3 bottom-3 rounded-[18px] bg-white/95 p-4 shadow-[0_20px_50px_-20px_rgba(15,27,45,0.45)] backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-muted tabular-nums">
                Usluga{" "}
                <span className="text-brand">
                  {String(active + 1).padStart(2, "0")}
                </span>{" "}
                / {String(total).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => select(active - 1)}
                  aria-label="Prethodna usluga"
                  className="grid size-10 place-items-center rounded-full bg-mist sm:size-8 text-ink transition-colors hover:bg-sky"
                >
                  <ArrowLeft className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => select(active + 1)}
                  aria-label="Sljedeća usluga"
                  className="grid size-10 place-items-center rounded-full bg-brand sm:size-8 text-white transition-colors hover:bg-brand-deep"
                >
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>

            <div key={active} className="animate-[fade-up_0.5s_ease-out_both]">
              <p className="mt-3 text-[18px] leading-snug font-medium tracking-[-0.015em] text-ink">
                {current.title}
              </p>
              {current.points && (
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {current.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 text-[13px] text-ink-soft"
                    >
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                        <CheckIcon className="size-3" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              className="mt-4 flex gap-1"
              role="tablist"
              aria-label="Odabir usluge"
            >
              {services.map((sv, i) => (
                <button
                  key={sv.title}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={sv.title}
                  onClick={() => select(i)}
                  className="group relative h-6 flex-1 sm:h-4"
                >
                  <span className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-brand/15 transition-colors group-hover:bg-brand/30">
                    <span
                      key={i === active ? `a-${active}-${autoplay}` : `i-${i}`}
                      onAnimationEnd={
                        i === active
                          ? () => setActive((n) => (n + 1) % total)
                          : undefined
                      }
                      className={cx(
                        "block h-full rounded-full bg-brand",
                        i < active && "w-full",
                        i > active && "w-0",
                        i === active &&
                          (autoplay
                            ? "w-0 animate-[progress_6s_linear_forwards]"
                            : "w-full"),
                        i === active &&
                          autoplay &&
                          !running &&
                          "[animation-play-state:paused]",
                      )}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Akordeon usluga s prekidačima (referenca: toggle pill) */}
        <ul className="border-t border-line lg:border-t-0">
          {services.map((s, i) => {
            const isOpen = i === active;
            return (
              <li
                key={s.title}
                className="border-b border-line"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => select(i)}
                    aria-expanded={isOpen}
                    aria-controls={`usluga-${i}`}
                    className="group flex w-full items-center gap-4 py-5 text-left sm:gap-5 lg:py-6"
                  >
                    <span
                      className={cx(
                        "relative inline-flex h-7 w-[52px] shrink-0 items-center rounded-full p-0.5 transition-colors duration-300",
                        isOpen
                          ? "bg-brand"
                          : "bg-mist ring-1 ring-line ring-inset group-hover:bg-sky",
                      )}
                      aria-hidden="true"
                    >
                      <span
                        className={cx(
                          "grid size-6 place-items-center rounded-full text-[10px] font-semibold tabular-nums transition-all duration-300",
                          isOpen
                            ? "translate-x-6 bg-white text-brand"
                            : "translate-x-0 bg-white text-muted shadow-sm",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span
                      className={cx(
                        "text-[18px] font-medium tracking-[-0.015em] transition-colors sm:text-[21px]",
                        isOpen
                          ? "text-ink"
                          : "text-ink-soft group-hover:text-ink",
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
                      <p className="max-w-[520px] text-sm leading-relaxed text-muted">
                        {s.text}
                      </p>
                      {s.points && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {s.points.map((p) => (
                            <li
                              key={p}
                              className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-brand-deep"
                            >
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
                        className="mt-4 inline-flex items-center gap-1 py-1.5 text-[13px] font-medium text-brand hover:text-brand-deep"
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
