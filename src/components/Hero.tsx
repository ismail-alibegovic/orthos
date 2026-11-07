import Image from "next/image";
import { HeroNav } from "./Navbar";
import { PillButton } from "./ui";

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative isolate flex min-h-[640px] flex-col overflow-hidden px-5 sm:px-8 lg:px-14 xl:px-20 pt-5 pb-8 sm:min-h-[720px] sm:pt-7 lg:h-[100svh] lg:max-h-[1080px] lg:min-h-[720px] lg:pt-8 lg:pb-14"
    >
      <Image
        src="/images/hero-operaciona-sala.jpg"
        alt="Operaciona sala Dnevne bolnice Poliklinike ORTHOS na Kromolju"
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-[1.02] object-cover object-[62%_center] animate-[fade-up_1.4s_ease-out_both]"
      />
      {/* Tonski slojevi: zatamnjenje kao u referenci + čitljivost teksta */}
      <div
        className="absolute inset-0 -z-10 bg-[#0b1624]/40 sm:bg-[#0b1624]/25 lg:bg-[#0b1624]/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,18,30,0.55)_0%,rgba(9,18,30,0.2)_45%,rgba(9,18,30,0)_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[linear-gradient(0deg,rgba(11,22,36,0.6)_0%,rgba(11,22,36,0)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        <HeroNav />

        <div className="mt-auto pt-24 lg:mt-[clamp(72px,11vh,140px)] lg:pt-0">
          <p className="animate-fade-up text-[13px] font-medium text-white/80 [animation-delay:150ms]">
            Ortopedija · Traumatologija · Opšta hirurgija
          </p>
          <h1 className="mt-4 max-w-[12ch] animate-fade-up text-[44px] leading-[1.02] font-medium tracking-[-0.035em] text-white [animation-delay:250ms] sm:text-[60px] lg:text-[76px]">
            Za sve što vas pokreće
          </h1>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:mt-auto lg:flex-row lg:items-end lg:justify-end">
          {/* Tekst i CTA dolje desno */}
          <div className="max-w-[380px] animate-fade-up [animation-delay:550ms]">
            <p className="text-[15px] leading-relaxed text-white/85">
              Specijalistički pregledi, ambulantni zahvati i jednodnevna
              artroskopska hirurgija — u ambulanti u Importanne Centru i dnevnoj
              bolnici na Kromolju.
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
      </div>
    </section>
  );
}
