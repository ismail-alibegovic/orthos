import Image from "next/image";
import { HeroNav } from "./Navbar";
import { PillButton } from "./ui";

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[20px] px-5 pt-5 pb-6 sm:min-h-[700px] sm:rounded-[24px] sm:px-8 sm:pt-7 lg:h-[min(800px,calc(100svh-48px))] lg:min-h-[700px] lg:px-14 lg:pt-8 lg:pb-12"
    >
      <Image
        src="/images/hero-pregled-koljena.jpg"
        alt="Specijalista pregleda koljeno pacijenta"
        fill
        priority
        sizes="(min-width: 1400px) 1360px, 100vw"
        className="-z-20 scale-[1.02] object-cover object-[72%_8%] animate-[fade-up_1.4s_ease-out_both]"
      />
      {/* Tonski slojevi: zatamnjenje kao u referenci + čitljivost teksta */}
      <div className="absolute inset-0 -z-10 bg-[#13202f]/30" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,22,36,0.62)_0%,rgba(11,22,36,0.25)_45%,rgba(11,22,36,0)_75%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[linear-gradient(0deg,rgba(11,22,36,0.6)_0%,rgba(11,22,36,0)_100%)]"
        aria-hidden="true"
      />

      <HeroNav />

      <div className="mt-auto pt-24 lg:mt-[clamp(72px,11vh,140px)] lg:pt-0">
        <p className="animate-fade-up text-[13px] font-medium text-white/80 [animation-delay:150ms]">
          Ortopedija · Traumatologija · Opšta hirurgija
        </p>
        <h1 className="mt-4 max-w-[12ch] animate-fade-up text-[44px] leading-[1.02] font-medium tracking-[-0.035em] text-white [animation-delay:250ms] sm:text-[60px] lg:text-[76px]">
          Za sve što vas pokreće
        </h1>
      </div>

      <div className="mt-10 flex flex-col gap-8 lg:mt-auto lg:flex-row lg:items-end lg:justify-between">
        {/* Staklena kartica dolje lijevo */}
        <a
          href="#dnevna-bolnica"
          className="group hidden w-[244px] animate-fade-up rounded-[18px] bg-white/12 p-2.5 ring-1 ring-white/25 backdrop-blur-xl transition-colors [animation-delay:450ms] hover:bg-white/20 sm:block"
        >
          <div className="relative h-[124px] overflow-hidden rounded-[12px]">
            <Image
              src="/images/kromolj-operaciona-sala.jpg"
              alt="Operaciona sala Dnevne bolnice ORTHOS"
              fill
              sizes="244px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <p className="px-1.5 pt-3 pb-1 text-[15px] leading-snug font-medium text-white">
            Jednodnevna artroskopska hirurgija
          </p>
        </a>

        {/* Tekst i CTA dolje desno */}
        <div className="max-w-[380px] animate-fade-up [animation-delay:550ms]">
          <p className="text-[15px] leading-relaxed text-white/85">
            Specijalistički pregledi, ambulantni zahvati i jednodnevna artroskopska hirurgija — u ambulanti
            u Importanne Centru i dnevnoj bolnici na Kromolju.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PillButton href="#kontakt">Zakažite pregled</PillButton>
            <a
              href="#usluge"
              className="inline-flex h-12 items-center rounded-full px-5 text-sm font-medium text-white ring-1 ring-white/35 ring-inset backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Naše usluge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
