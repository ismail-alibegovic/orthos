"use client";

import { useState, type FormEvent } from "react";
import { contact, doctors, locations } from "@/lib/content";
import { ArrowUpRight, MailIcon, PhoneIcon, SectionLabel } from "./ui";

const fieldCls =
  "h-12 w-full rounded-[12px] bg-white px-4 text-base text-ink sm:text-sm ring-1 ring-transparent transition placeholder:text-muted/70 focus:ring-brand/50 focus:outline-none";
const labelCls = "mb-2 block text-[13px] font-medium text-ink";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `Upit za termin — ${get("ime") || "pacijent"}`;
    const body = [
      `Ime i prezime: ${get("ime")}`,
      `Telefon: ${get("telefon")}`,
      `Lokacija: ${get("lokacija")}`,
      `Specijalista: ${get("doktor")}`,
      `Željeni termin: ${get("datum") || "—"}`,
      "",
      get("poruka"),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="kontakt" className="mx-auto w-full max-w-[1600px] px-5 pt-0 pb-16 sm:px-8 sm:pt-4 sm:pb-20 lg:px-14 xl:px-20 lg:pt-6 lg:pb-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div data-reveal>
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="mt-4 max-w-[480px] text-[34px] leading-[1.08] font-medium tracking-[-0.035em] text-ink sm:text-[46px] lg:text-[52px]">
            Zakažite pregled jednim pozivom
          </h2>
          <p className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-muted">
            Recite nam šta vas muči i dogovorit ćemo termin kod odgovarajućeg specijaliste, u ambulanti u
            Importanne Centru ili u dnevnoj bolnici na Kromolju.
          </p>

          <a href={contact.mobile.href} className="group mt-8 inline-flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-full bg-brand text-white shadow-[0_10px_30px_-10px_rgba(22,136,201,0.9)] transition-transform duration-300 group-hover:scale-105">
              <PhoneIcon className="size-5" />
            </span>
            <span>
              <span className="block text-[13px] text-muted">Pozovite nas</span>
              <span className="block text-[20px] font-medium tracking-[-0.01em] text-ink group-hover:text-brand">
                {contact.mobile.label}
              </span>
            </span>
          </a>

          <div className="mt-10 overflow-hidden rounded-[16px] ring-1 ring-line">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Radno vrijeme</caption>
              <thead className="bg-mist text-ink">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-medium sm:px-5">Dani</th>
                  <th scope="col" className="border-l border-line px-4 py-3.5 font-medium sm:px-5">Radno vrijeme</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {contact.hours.map((h) => (
                  <tr key={h.days} className="border-t border-line">
                    <td className="px-4 py-3.5 sm:px-5">{h.days}</td>
                    <td className="border-l border-line px-4 py-3.5 tabular-nums sm:px-5">{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            {locations.map((l) => (
              <div key={l.id} className="rounded-[14px] bg-mist px-4 py-3.5">
                <p className="font-medium text-ink">{l.name}</p>
                <p className="mt-1 text-muted">
                  {l.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && " · "}
                      <a href={p.href} className="hover:text-brand">{p.label}</a>
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-mist p-5 sm:p-8 lg:p-10" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
          <h3 className="text-center text-[22px] font-medium tracking-[-0.02em] text-ink">Pošaljite upit za termin</h3>
          <p className="mx-auto mt-2 max-w-[380px] text-center text-[13px] leading-relaxed text-muted">
            Obrazac otvara vaš e-mail program s pripremljenom porukom za {contact.email}.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ime" className={labelCls}>Ime i prezime</label>
              <input id="ime" name="ime" required autoComplete="name" placeholder="Vaše ime" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="telefon" className={labelCls}>Broj telefona</label>
              <input id="telefon" name="telefon" type="tel" required autoComplete="tel" placeholder="06x xxx xxx" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="lokacija" className={labelCls}>Lokacija</label>
              <select id="lokacija" name="lokacija" className={fieldCls} defaultValue={locations[0].name}>
                {locations.map((l) => (
                  <option key={l.id}>{l.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="datum" className={labelCls}>Željeni termin</label>
              <input id="datum" name="datum" placeholder="npr. utorak, poslije 12 h" className={fieldCls} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="doktor" className={labelCls}>Specijalista</label>
              <select id="doktor" name="doktor" className={fieldCls} defaultValue="Bez preferencije">
                <option>Bez preferencije</option>
                {doctors.map((d) => (
                  <option key={d.name}>{d.name}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="poruka" className={labelCls}>Razlog dolaska</label>
              <textarea
                id="poruka"
                name="poruka"
                rows={4}
                placeholder="Ukratko opišite tegobe ili zahvat koji vas zanima"
                className={`${fieldCls} h-auto resize-none py-3`}
              />
            </div>
            <div className="flex flex-col-reverse items-stretch gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center justify-center gap-2 py-2 text-[13px] text-muted hover:text-brand sm:justify-start sm:py-0">
                <MailIcon className="size-4" /> {contact.email}
              </a>
              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-between gap-4 rounded-full bg-brand pr-1.5 pl-5 text-sm font-medium text-white shadow-[0_8px_24px_-10px_rgba(22,136,201,0.8)] transition-colors hover:bg-brand-deep"
              >
                Pošalji upit
                <span className="grid size-9 place-items-center rounded-full bg-white text-brand transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </button>
            </div>
            {sent && (
              <p className="text-[13px] text-brand-deep sm:col-span-2" role="status">
                Ako se e-mail program nije otvorio, pišite nam na {contact.email} ili pozovite {contact.mobile.label}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
