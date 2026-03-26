import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface PricingSectionProps {
  whatsappNumber: string;
}

const sitePlans = [
  {
    name: "Essencial",
    price: "R$500",
    description: "Ideal para negócios que precisam marcar presença online",
    features: [
      "Até 5 páginas",
      "Design de template",
      "SEO básico",
      "Google Meu Negócio",
      "1 revisão",
    ],
    highlight: false,
    cta: "Começar Agora",
    msg: "Olá estou interessado em um site institucional essencial para o meu negócio",
  },
  {
    name: "Profissional",
    price: "R$900",
    description: "Para negócios que querem se destacar da concorrência",
    features: [
      "Até 10 páginas",
      "Design personalizado",
      "SEO avançado",
      "Google Meu Negócio",
      "Catálogo de produtos",
      "Formulário de contacto",
      "3 revisões",
    ],
    highlight: true,
    cta: "Começar Agora",
    msg: "Olá estou interessado em um site institucional profissional para o meu negócio",
  },
  {
    name: "Premium",
    price: "Orçamento personalizado",
    description: "Solução completa para negócios ambiciosos",
    features: [
      "Acima de 10 páginas",
      "Catálogo profissional",
      "Integração com gateway de pagamento",
      "Funcionalidades específicas",
      "Integrações e sistemas",
    ],
    highlight: false,
    cta: "Começar Agora",
    msg: "Olá estou interessado em um site institucional premium para o meu negócio",
  },
];

const landingPlans = [
  {
    name: "Essencial",
    price: "R$400",
    description: "Página de vendas directa e eficaz para o seu produto",
    features: [
      "Até 5 secções",
      "Design de template",
      "Formulário de contacto",
      "SEO básico",
      "1 revisão",
    ],
    highlight: false,
    cta: "Começar Agora",
    msg: "Olá estou interessado em uma landing page essencial para o meu negócio",
  },
  {
    name: "Profissional",
    price: "R$700",
    description: "Página de alta conversão com design e recursos avançados",
    features: [
      "Até 10 secções",
      "Design personalizado",
      "Formulário avançado",
      "SEO optimizado",
      "Integração com WhatsApp",
      "Animações",
      "3 revisões",
    ],
    highlight: true,
    cta: "Começar Agora",
    msg: "Olá estou interessado em uma landing page profissional para o meu negócio",
  },
  {
    name: "Premium",
    price: "Orçamento personalizado",
    description: "Funil de vendas completo e totalmente personalizado",
    features: [
      "Secções ilimitadas",
      "Design exclusivo",
      "Integrações específicas",
      "Funil de vendas",
      "Gateway de pagamento",
    ],
    highlight: false,
    cta: "Começar Agora",
    msg: "Olá estou interessado em uma landing page premium para o meu negócio",
  },
];

const maintenanceBenefits = [
  "Garantia de funcionamento",
  "Pequenas alterações de texto/imagem",
  "Monitoramento contínuo",
  "Manutenção da hospedagem",
  "Suporte técnico",
  "Infraestrutura",
];

export default function PricingSection({ whatsappNumber }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<"sites" | "landing">("sites");

  // encodeURIComponent converte espaços em %20 (e caracteres especiais),
  // que o WhatsApp interpreta correctamente como texto pré-preenchido
  const handleWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  const activePlans = activeTab === "sites" ? sitePlans : landingPlans;
  const ref1 = useScrollReveal<HTMLElement>();
  const ref2 = useScrollReveal<HTMLElement>();

  return (
    <>
      <section ref={ref1} className="reveal py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[#162536] text-center mb-4">
            Preços
          </h2>
          <p className="font-poppins text-lg text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Escolha o plano ideal para o seu negócio. Sem surpresas, sem taxas ocultas.
          </p>

          {/* Abas */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl shadow-md p-1.5 gap-1">
              <button
                onClick={() => setActiveTab("sites")}
                className={`font-poppins font-semibold text-sm lg:text-base px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === "sites"
                    ? "bg-gradient-to-r from-[#056CF2] to-[#162536] text-white shadow-md"
                    : "text-[#162536] hover:bg-gray-100"
                }`}
              >
                Sites Institucionais
              </button>
              <button
                onClick={() => setActiveTab("landing")}
                className={`font-poppins font-semibold text-sm lg:text-base px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === "landing"
                    ? "bg-gradient-to-r from-[#056CF2] to-[#162536] text-white shadow-md"
                    : "text-[#162536] hover:bg-gray-100"
                }`}
              >
                Páginas de Vendas
              </button>
            </div>
          </div>

          {/* Cards de planos */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">
            {activePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#056CF2] to-[#162536] shadow-2xl scale-105 text-white"
                    : "bg-white shadow-md hover:shadow-xl text-[#162536]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F2921D] text-white font-poppins font-bold text-xs px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      ⭐ Mais escolhido
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <h3
                    className={`font-montserrat font-bold text-xl mb-2 ${
                      plan.highlight ? "text-white" : "text-[#162536]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <div className="mb-3">
                    {plan.price === "Orçamento personalizado" ? (
                      <span
                        className={`font-poppins font-semibold text-base ${
                          plan.highlight ? "text-[#F2921D]" : "text-[#056CF2]"
                        }`}
                      >
                        Orçamento personalizado
                      </span>
                    ) : (
                      <span
                        className={`font-montserrat font-bold text-4xl ${
                          plan.highlight ? "text-[#F2921D]" : "text-[#056CF2]"
                        }`}
                      >
                        {plan.price}
                      </span>
                    )}
                  </div>

                  <p
                    className={`font-poppins text-sm leading-relaxed mb-6 ${
                      plan.highlight ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`border-t mb-6 ${
                      plan.highlight ? "border-white/20" : "border-gray-100"
                    }`}
                  />

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className={`flex-shrink-0 mt-0.5 ${
                            plan.highlight ? "text-[#F2921D]" : "text-[#056CF2]"
                          }`}
                        />
                        <span
                          className={`font-poppins text-sm leading-relaxed ${
                            plan.highlight ? "text-white" : "text-[#162536]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Cada botão passa a mensagem específica do plano */}
                  <button
                    onClick={() => handleWhatsApp(plan.msg)}
                    className={`w-full font-poppins font-bold text-sm py-3.5 rounded-lg transition-all duration-300 hover:scale-105 ${
                      plan.highlight
                        ? "bg-[#F2921D] hover:bg-[#d97e0f] text-white"
                        : "bg-gradient-to-r from-[#056CF2] to-[#162536] text-white hover:opacity-90"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref2} className="reveal py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[#162536] text-center mb-4">
              Preços de Manutenção
            </h2>
            <p className="font-poppins text-lg text-gray-500 text-center mb-12 max-w-xl mx-auto">
              Mantenha o seu site sempre no ar, seguro e actualizado todos os meses.
            </p>

            <div className="bg-gradient-to-br from-[#056CF2] to-[#162536] rounded-2xl shadow-xl p-8 lg:p-12">
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {maintenanceBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#F2921D] flex-shrink-0" />
                    <span className="font-poppins text-white text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/20 mb-10" />

              <div className="text-center">
                <p className="font-poppins font-semibold text-sm text-blue-200 uppercase tracking-widest mb-2">
                  Manutenção Mensal
                </p>
                <p className="font-montserrat font-bold text-6xl text-[#F2921D] mb-2">
                  R$100
                </p>
                <p className="font-poppins text-blue-100 text-sm mb-8">
                  por mês · cancele quando quiser
                </p>
                <button
                  onClick={() =>
                    handleWhatsApp(
                      "Olá estou interessado em contratar o serviço de manutenção mensal para o meu site"
                    )
                  }
                  className="inline-flex items-center gap-3 bg-[#F2921D] hover:bg-[#d97e0f] text-white font-poppins font-bold text-base px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={20} />
                  Contratar Manutenção
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
