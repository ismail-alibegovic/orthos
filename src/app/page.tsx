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
      <FloatingNav />

      <div className="p-2 sm:p-4 lg:p-8">
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
