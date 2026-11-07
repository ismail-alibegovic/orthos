import Image from "next/image";
import { ORIGINAL_SITE, contact, locations, navLinks, services } from "@/lib/content";
import { PhoneIcon, PillButton } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden rounded-[20px] bg-night px-5 pt-14 text-white sm:rounded-[24px] sm:px-8 lg:px-14 lg:pt-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between" data-reveal>
        <h2 className="max-w-[560px] text-[34px] leading-[1.1] font-medium tracking-[-0.035em] sm:text-[46px]">
          Za sve što vas pokreće — javite nam se danas
        </h2>
        <div className="max-w-[380px]">
          <p className="text-sm leading-relaxed text-white/60">
            Naš tim je tu da vas posavjetuje i dogovori termin kod odgovarajućeg specijaliste.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <PillButton href={contact.mobile.href} icon={<PhoneIcon className="size-4" />}>
              {contact.mobile.label}
            </PillButton>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex h-12 items-center rounded-full px-5 text-sm font-medium text-white ring-1 ring-white/20 ring-inset transition-colors hover:bg-white/10"
            >
              Pišite nam
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1fr_1.2fr_1.4fr_1.4fr]">
        <div>
          <p className="text-sm font-medium">Poliklinika</p>
          <ul className="mt-4 space-y-2.5 text-[13px] text-white/60">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Usluge</p>
          <ul className="mt-4 space-y-2.5 text-[13px] text-white/60">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {locations.map((l) => (
          <div key={l.id}>
            <p className="text-sm font-medium">{l.name}</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-white/60">
              <li>{l.address}</li>
              <li>{l.city}</li>
              {l.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="transition-colors hover:text-white">{p.label}</a>
                </li>
              ))}
              <li>
                <a href={l.maps} target="_blank" rel="noopener noreferrer" className="text-brand transition-colors hover:text-white">
                  Prikaži na mapi ↗
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-4 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image src="/images/orthos-logo-white.png" alt="Poliklinika ORTHOS" width={665} height={208} className="h-8 w-auto opacity-90" />
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
          <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
          <a href={ORIGINAL_SITE + "/"} target="_blank" rel="noopener noreferrer" className="hover:text-white">Službena stranica</a>
        </div>
      </div>

      {/* Veliki izblijedjeli natpis (referenca) */}
      <p
        aria-hidden="true"
        className="footer-wordmark pointer-events-none mt-6 -mb-[0.2em] text-center text-[19vw] leading-[0.9] font-semibold tracking-[-0.05em] select-none lg:text-[min(22vw,300px)]"
      >
        ORTHOS
      </p>

      <div className="relative py-6 text-center text-[12px] leading-relaxed text-white/45">
        © {year} Poliklinika ORTHOS Sarajevo · Ilustrativne fotografije: Unsplash
      </div>
    </footer>
  );
}
