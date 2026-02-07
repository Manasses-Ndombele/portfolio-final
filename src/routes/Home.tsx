import { useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import { Interests } from "../components/Interests";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

function Home() {
  useEffect(() => {
    document.title = "Manassés Ndombele - Desenvolvedor Web Fullstack";
    const canonicalHref = "https://www.manassesndombele.com/";

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    let metaDesc = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (metaDesc) {
      metaDesc.content =
        "Portfólio de Manassés Ndombele — Desenvolvedor Web Fullstack especializado em React, TypeScript e Python.";
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
        "Portfólio de Manassés Ndombele — Desenvolvedor Web Fullstack especializado em React, TypeScript e Python.";
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Interests />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
