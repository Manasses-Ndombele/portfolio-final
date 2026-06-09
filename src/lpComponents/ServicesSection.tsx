import { ShoppingCart, Star } from "lucide-react";
import { FC } from "react";
import useReveal from "../utils/useReveal";
import SectionHeading from "./SectionHeading";

interface Service {
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    title: "Site Institucional",
    description:
      "Sites institucionais profissionais que transmitem credibilidade, fortalecem sua marca, melhoram o posicionamento no Google e apresentam seu negócio com clareza, autoridade e confiança para clientes e parceiros.",
  },
  {
    title: "Página De Vendas",
    description:
      "Landing pages profissionais que aumentam a taxa de conversão e transformam tráfego em oportunidades reais de venda com performance, clareza, credibilidade e design moderno.",
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
const ServicesSection: FC = () => {
  const { ref, visible } = useReveal();
  const icons = [Star, ShoppingCart];

  return (
    <section
      id="servicos"
      ref={ref}
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg,#1F2937 0%,#111827 100%)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">
        {/* Left col: heading + photo */}
        <div>
          <SectionHeading>O QUE EU POSSO FAZER POR VOCÊ?</SectionHeading>
          <img
            src="/me 1.jpg"
            alt="Manasses"
            className="w-full rounded-3xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
          />
        </div>

        {/* Right col: cards */}
        <div className="flex flex-col gap-6">
          {SERVICES.map((s, i) => {
            const IconComponent = icons[i];

            return (
              <div
                key={i}
                className="relative bg-[#111827]/80 border border-[#60A5FA]/15 rounded-2xl p-8 backdrop-blur-sm overflow-hidden transition-all duration-[700ms] ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(44px)",
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                  style={{
                    background: "linear-gradient(90deg,#245EE3,#60A5FA)",
                  }}
                />

                <div
                  className="w-14 h-14 flex items-center justify-center rounded-[14px] text-2xl mb-5"
                  style={{
                    background: "linear-gradient(135deg,#1E3A8A,#245EE3)",
                  }}
                >
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>

                <h3
                  className="text-white text-xl font-bold mb-3"
                  style={{
                    fontFamily: '"Mona Sans", ui-sans-serif, system-ui',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#F5F5F5]/70 text-sm leading-[1.75]"
                  style={{ fontFamily: "Poppins, ui-sans-serif" }}
                >
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
