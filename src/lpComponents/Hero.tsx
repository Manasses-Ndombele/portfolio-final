import { FC } from "react";
import useReveal from "../utils/useReveal";
import CTAButton from "./CTAButton";

// ─── Hero ─────────────────────────────────────────────────────────────────────
const HeroSection: FC = () => {
  const { ref, visible } = useReveal(0.05);
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#111827 0%,#1E3A8A 55%,#111827 100%)",
      }}
    >
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute top-[8%] right-[4%] w-[520px] h-[520px] rounded-full opacity-40 blur-[80px]"
        style={{
          background: "radial-gradient(circle,#245EE3 0%,transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[6%] left-[-4%] w-[360px] h-[360px] rounded-full opacity-20 blur-[60px]"
        style={{
          background: "radial-gradient(circle,#60A5FA 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text block */}
        <div
          className="transition-all duration-[900ms] ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(48px)",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#60A5FA]/30 bg-[#60A5FA]/10 rounded-full px-4 py-1.5 mb-6">
            <span
              className="text-[#60A5FA] text-xs font-semibold tracking-[0.1em] uppercase"
              style={{ fontFamily: "Poppins, ui-sans-serif" }}
            >
              Fullstack Web Developer
            </span>
          </div>

          <h1
            className="font-black text-white leading-[1.08] tracking-tight text-4xl md:text-5xl lg:text-[3.25rem] mb-6"
            style={{ fontFamily: '"Mona Sans", ui-sans-serif, system-ui' }}
          >
            FAÇO SEU NEGÓCIO{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(90deg,#60A5FA,#245EE3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              APARECER
            </span>{" "}
            NO GOOGLE E ATRAIR CLIENTES TODOS OS DIAS
          </h1>

          <p
            className="text-[#F5F5F5]/70 text-base leading-[1.8] mb-10 max-w-[480px]"
            style={{ fontFamily: "Poppins, ui-sans-serif" }}
          >
            Sites profissionais que fazem seu negócio aparecer no Google quando
            novos clientes procuram por serviços. Mais visibilidade, mais
            contactos, mais vendas. Ajudo a entender da tecnologia e marketing
            digital.
          </p>

          <CTAButton href="https://wa.me/244955127247">FALE COMIGO</CTAButton>
        </div>

        {/* Laptop image */}
        <div
          className="flex justify-center lg:justify-end transition-all duration-[1000ms] ease-out delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0) scale(1)"
              : "translateX(60px) scale(0.88)",
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-[-40px] rounded-full blur-[60px] opacity-50"
              style={{
                background:
                  "radial-gradient(circle,#245EE3 0%,transparent 70%)",
              }}
            />
            <img
              src="/pc.png"
              alt="MacBook Pro"
              className="relative z-10 w-[22rem] max-w-[540px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.75)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
