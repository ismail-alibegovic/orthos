import Image from "next/image";
import { contact, locations } from "@/lib/content";
import { ArrowUpRight, PinIcon, SectionLabel } from "./ui";

export default function Locations() {
  return (
    <section id="lokacije" className="mx-auto w-full max-w-[1600px] px-5 pt-20 pb-20 sm:px-8 lg:px-14 xl:px-20 lg:pt-28 lg:pb-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
        <div>
          <SectionLabel>Lokacije</SectionLabel>
          <h2 className="mt-4 max-w-[560px] text-[34px] leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[46px] lg:text-[52px]">
            Dvije lokacije u Sarajevu
          </h2>
        </div>
        <p className="max-w-[340px] text-sm leading-relaxed text-muted">
          Pregledi i manji zahvati u centru grada, hirurški zahvati i oporavak u dnevnoj bolnici na Kromolju.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14">
        {locations.map((l, i) => (
          <article
            key={l.id}
            className="group flex flex-col"
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-mist">
              <Image
                src={l.image}
                alt={l.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink backdrop-blur">
                {l.tag}
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-[21px] font-medium tracking-[-0.015em] text-ink">{l.name}</h3>
                <p className="mt-1 text-sm text-muted">{l.subtitle}</p>
                <p className="mt-4 flex items-start gap-2 text-sm text-ink-soft">
                  <PinIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    {l.address}, {l.city}
                  </span>
                </p>
                <p className="mt-2 text-sm text-ink-soft">
                  {l.phones.map((p, j) => (
                    <span key={p.href}>
                      {j > 0 && <span className="text-muted"> · </span>}
                      <a href={p.href} className="hover:text-brand">{p.label}</a>
                    </span>
                  ))}
                  <span className="text-muted"> · </span>
                  <a href={`mailto:${contact.email}`} className="hover:text-brand">{contact.email}</a>
                </p>
              </div>
              <a
                href={l.maps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Otvori ${l.name} u Google mapama`}
                className="grid size-11 shrink-0 place-items-center rounded-full ring-1 ring-line transition-all duration-300 hover:bg-brand hover:text-white hover:ring-brand"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
