import { FC } from "react";
import useReveal from "../utils/useReveal";
import CTAButton from "./CTAButton";

// ─── CTA ─────────────────────────────────────────────────────────────────────
const CTASection: FC = () => {
  const { ref, visible } = useReveal(0.3);

  return (
    <section
      ref={ref}
      id="contatos"
      className={`${visible ? "puff-in-center" : "opacity-0"} relative py-28 px-6 text-center overflow-hidden`}
      style={{
        background:
          "linear-gradient(135deg,#1E3A8A 0%,#111827 55%,#245EE3 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="w-[640px] h-[400px] rounded-full blur-[80px] opacity-25"
          style={{
            background: "radial-gradient(ellipse,#60A5FA 0%,transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2
          className="font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-5"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          PRONTO PARA FAZER SEU NEGÓCIO CRESCER NA INTERNET?
        </h2>
        <p
          className="text-[#F5F5F5]/70 text-base leading-[1.75] mb-10"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Vamos Conversar Sobre Como Posso Ajudar Você A Aparecer No Google, Ter
          Uma Imagem Profissional E Conquistar Mais Clientes.
        </p>
        <CTAButton href="https://wa.me/244955127247" dark>
          FALE COMIGO
        </CTAButton>
      </div>
    </section>
  );
};

export default CTASection;
