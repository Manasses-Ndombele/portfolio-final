import { useEffect } from "react";
import HeroSection from "../lpComponents/HeroSection";
import ProblemsSection from "../lpComponents/ProblemsSection";
import SolutionsSection from "../lpComponents/SolutionsSection";
import TestimonialsSection from "../lpComponents/TestimonialsSection";
import AboutSection from "../lpComponents/AboutSection";
import CTASection from "../lpComponents/CTASection";
import Footer from "../lpComponents/Footer";

function Solutions() {
  const whatsappNumber = "244955127247";
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
    <div className="min-h-screen bg-white">
      <HeroSection whatsappNumber={whatsappNumber} />
      <ProblemsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection whatsappNumber={whatsappNumber} />
      <Footer />
    </div>
  );
}

export default Solutions;
