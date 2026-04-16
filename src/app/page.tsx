import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import DesignPhilosophy from "@/components/sections/DesignPhilosophy";
import Inspirations from "@/components/sections/Inspirations";
import DesignInterests from "@/components/sections/DesignInterests";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Global UI */}
      <ScrollProgress />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <DesignPhilosophy />
        <Inspirations />
        <DesignInterests />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
