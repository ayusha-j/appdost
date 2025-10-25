import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import ServicesSection from "@/components/ServicesSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import AboutAppDostSection from "@/components/AboutAppDostSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutAppDostSection />
          <WhatWeDoSection />
          <ServicesSection />
          <DevelopmentProcess />
          <ProjectsSection /> 
        </main>
        <Footer />
      </div>
    </div>
  );
}
