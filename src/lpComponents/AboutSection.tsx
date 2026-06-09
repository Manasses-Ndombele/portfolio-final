import { FC } from "react";
import useReveal from "../utils/useReveal";

const ABOUT_PARAGRAPHS = [
  "Olá! Meu nome é Manasses Ndombelee e nos últimos 5 anos ajudei dezenas de negócios a conquistarem clientes através da internet.",
  "Criei mais de 10 sites profissionais para empresas no Brasil e em Angola, e implementei estratégias de marketing digital que geraram resultados reais: negócios que passaram a receber contactos diários, lojas que dependiam só de indicações começaram a vender online.",
  "Trabalho com criação de sites, SEO (posicionamento no Google) e presença digital estratégica. Não faço só sites bonitos – faço sites que vendem e atraem clientes de verdade.",
  "Se o seu negócio precisa crescer online mas você não sabe por onde começar, eu cuido de tudo: desde a criação do site até fazer seu negócio aparecer quando clientes procuram no Google.",
];

// ─── About ────────────────────────────────────────────────────────────────────
const AboutSection: FC = () => {
  const { ref, visible } = useReveal();
  return (
    <section
      id="sobre"
      ref={ref}
      className="py-24 px-6"
      style={{ background: "linear-gradient(135deg,#1F2937 0%,#0F172A 100%)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16 items-center">
        {/* Avatar ring */}
        <div
          className="flex justify-center transition-all duration-[800ms] ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.82)",
          }}
        >
          <div
            className="w-[200px] h-[200px] rounded-full p-[4px]"
            style={{
              background: "linear-gradient(135deg,#1E3A8A,#245EE3,#60A5FA)",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#1F2937]">
              <img
                src="/me 2.png"
                alt="Manasses"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          className="transition-all duration-[800ms] ease-out delay-150"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
          }}
        >
          <h2
            className="font-black text-[#60A5FA] text-2xl md:text-3xl tracking-tight mb-3"
            style={{ fontFamily: '"Mona Sans", ui-sans-serif, system-ui' }}
          >
            QUEM SOU EU?
          </h2>
          <div
            className="h-[3px] w-12 rounded-full mb-7"
            style={{ background: "linear-gradient(90deg,#245EE3,#60A5FA)" }}
          />
          <div className="flex flex-col gap-4">
            {ABOUT_PARAGRAPHS.map((text, i) => (
              <p
                key={i}
                className="text-[#F5F5F5]/75 text-[0.93rem] leading-[1.8]"
                style={{ fontFamily: "Poppins, ui-sans-serif" }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
