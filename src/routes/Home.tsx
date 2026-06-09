import { useEffect } from "react";
import Navbar from "../lpComponents/Navbar";
import HeroSection from "../lpComponents/Hero";
import ProblemsSection from "../lpComponents/ProblemsSection";
import ServicesSection from "../lpComponents/ServicesSection";
import SkillsSection from "../lpComponents/SkillsSection";
import ProjectsSection from "../lpComponents/ProjectsSection";
import AboutSection from "../lpComponents/AboutSection";
import CTASection from "../lpComponents/CTASection";
import Footer from "../lpComponents/Footer";

// ─── Font injection (add to index.html or App.tsx if preferred) ───────────────
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
// Mona Sans: add to your global CSS → @font-face from https://github.githubassets.com/assets/mona-sans.woff2
//
// tailwind.config.js → extend fontFamily:
//   monaSans: ['"Mona Sans"', 'ui-sans-serif', 'system-ui'],
//   poppins:  ['Poppins', 'ui-sans-serif', 'system-ui'],
//
// tailwind.config.js → extend colors:
//   brand:   { blue: '#60A5FA', dark: '#1F2937', light: '#F5F5F5',
//              royal: '#245EE3', navy: '#1E3A8A', deepDark: '#111827' }

export default function Home() {
  useEffect(() => {
      document.title =
        "Sites e Landing Pages para Negócios Locais | Manassés Ndombele";
      const canonicalHref = "https://www.manassesndombele.com/solutions";
  
      let canonical = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;
      let metaDesc = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement | null;
  
      if (metaDesc) {
        metaDesc.content =
          "Ajudo negócios locais a aparecerem no Google e conquistarem mais clientes online. Criação de sites profissionais e landing pages que convertem.";
      }
  
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = canonicalHref;
        document.head.appendChild(canonical);
      } else {
        canonical.href = canonicalHref;
      }
  
      const ogUrl = document.querySelector(
        'meta[property="og:url"]'
      ) as HTMLMetaElement | null;
      if (ogUrl) ogUrl.content = canonicalHref;
  
      const ogTitle = document.querySelector(
        'meta[property="og:title"]'
      ) as HTMLMetaElement | null;
      if (ogTitle) ogTitle.content = document.title;
  
      const ogDesc = document.querySelector(
        'meta[property="og:description"]'
      ) as HTMLMetaElement | null;
      if (ogDesc) {
        ogDesc.content =
          "Ajudo negócios locais a aparecerem no Google e conquistarem mais clientes online. Criação de sites profissionais e landing pages que convertem.";
      }
    }, []);

  return (
    <div className="bg-[#111827] min-h-screen antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
