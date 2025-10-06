import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Interests } from "./components/Interests";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Manassés Ndombele - Desenvolvedor Full Stack";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Portfólio de Manassés Ndombele - Desenvolvedor Full Stack especializado em React, TypeScript, Python e desenvolvimento web moderno."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Portfólio de Manassés Ndombele - Desenvolvedor Full Stack especializado em React, TypeScript, Python e desenvolvimento web moderno.";
      document.head.appendChild(meta);
    }

    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(meta);
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

export default App;
