import { FC } from "react";
import useReveal from "../utils/useReveal";
import SectionHeading from "./SectionHeading";

interface Problem {
  text: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────
const PROBLEMS: Problem[] = [
  { text: "As Pessoas Procuram No Google E Não Encontram Seu Negócio" },
  { text: "Seu Concorrente Aparece Antes De Você" },
  { text: "Você Não Está Bem Posicionado Na Internet" },
  { text: "Você Não Consegue Ter Vendas Que Vêm Da Internet" },
  { text: "Seu Negócio Parece Amador Quando Alguém Busca Por Você Online" },
  { text: "Você Perde Clientes Para Concorrentes Que Têm Site" },
];

// ─── Problems ─────────────────────────────────────────────────────────────────
const ProblemsSection: FC = () => {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-[#111827] py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* List */}
        <div>
          <SectionHeading>SERÁ QUE NO SEU NEGÓCIO… ⚡</SectionHeading>

          <div className="flex flex-col gap-4">
            {PROBLEMS.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#1F2937]/60 border border-[#60A5FA]/10 rounded-2xl px-5 py-4 transition-all duration-[600ms] ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-32px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <span className="shrink-0 w-9 h-9 flex items-center justify-center text-[#60A5FA] font-bold bg-[#60A5FA]/10 rounded-xl text-base">
                  {i + 1}
                </span>
                <p
                  className="text-[#F5F5F5]/85 text-sm leading-relaxed"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div
          className="hidden lg:flex justify-center transition-all duration-[900ms] ease-out delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(50px)",
          }}
        >
          <div className="relative">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2/5 blur-[40px]"
              style={{
                background:
                  "radial-gradient(ellipse,rgba(36,94,227,0.45) 0%,transparent 70%)",
              }}
            />
            <img
              src="/me 1.jpg"
              alt="Manasses Ndombele"
              className="relative z-10 w-full max-w-[420px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
