import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
