import About from "@/components/About";
import Contact from "@/components/Contact";
import DayHospital from "@/components/DayHospital";
import Doctors from "@/components/Doctors";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import { FloatingNav } from "@/components/Navbar";
import RevealObserver from "@/components/Reveal";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <p className="px-4 py-2.5 text-center text-[12px] leading-snug text-ink-soft/80 sm:py-3">
        <span className="mr-1.5 inline-block size-1.5 -translate-y-px rounded-full bg-brand-green align-middle" aria-hidden="true" />
        Demo koncept redizajna · nije službena stranica Poliklinike ORTHOS
      </p>

      <FloatingNav />

      <div className="px-2 pb-2 sm:px-4 sm:pb-4 lg:px-8 lg:pb-8">
        <div className="mx-auto max-w-[1376px] rounded-[24px] bg-white p-2 sm:rounded-[30px] sm:p-3 lg:p-4">
          <Hero />
          <main>
            <About />
            <Services />
            <Doctors />
            <DayHospital />
            <Locations />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>

      <RevealObserver />
    </>
  );
}
