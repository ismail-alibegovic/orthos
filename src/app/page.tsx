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

      <RevealObserver />
    </>
  );
}
