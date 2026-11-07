import Image from "next/image";
import { contact, doctors } from "@/lib/content";
import { ArrowUpRight, PillButton, SectionLabel, cx } from "./ui";

export default function Doctors() {
  const [lead, ...rest] = doctors;

  return (
    <section id="doktori" className="mx-auto w-full max-w-[1600px] px-5 pb-20 sm:px-8 lg:px-14 xl:px-20 lg:pb-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
        <div>
          <SectionLabel>Naši doktori</SectionLabel>
          <h2 className="mt-4 max-w-[680px] text-[34px] leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[46px] lg:text-[52px]">
            Iskusni specijalisti, posvećeni svakom pacijentu
          </h2>
        </div>
        <PillButton href={contact.mobile.href} size="sm" className="self-start sm:self-auto">
          Termin kod specijaliste
        </PillButton>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[1.45fr_1fr_1fr] lg:gap-6">
        {/* Istaknuti doktor */}
        <article className="group sm:col-span-2 lg:col-span-1" data-reveal>
          <div className="portrait-bg-strong relative aspect-[4/3.6] overflow-hidden rounded-[20px] sm:aspect-[16/10] lg:aspect-[4/4.4]">
            <Image
              src={lead.image}
              alt={lead.name}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="origin-bottom object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.03] lg:scale-[1.12] lg:group-hover:scale-[1.15]"
            />
            <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-[110%] place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow-lg backdrop-blur transition-all duration-500 group-hover:-translate-y-[130%] group-hover:opacity-100">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
          <h3 className="mt-4 text-[20px] font-medium tracking-[-0.015em] text-ink">{lead.name}</h3>
          <p className="mt-1 text-sm text-muted">{lead.role}</p>
        </article>

        {rest.map((d, i) => (
          <article
            key={d.name}
            className="group lg:pt-14"
            data-reveal
            style={{ ["--reveal-delay" as string]: `${(i + 1) * 100}ms` }}
          >
            <div className={cx("portrait-bg relative aspect-[4/4.2] overflow-hidden rounded-[20px]")}>
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                className="origin-bottom scale-[1.12] object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.16]"
              />
            </div>
            <h3 className="mt-4 text-[18px] font-medium tracking-[-0.015em] text-ink">{d.name}</h3>
            <p className="mt-1 text-sm text-muted">{d.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
