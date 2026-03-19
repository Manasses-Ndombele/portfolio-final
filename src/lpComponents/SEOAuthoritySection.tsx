import { useScrollReveal } from "../hooks/useScrollReveal";

interface SEOAuthoritySectionProps {
  gifSrc?: string;
}

export default function SEOAuthoritySection({ gifSrc }: SEOAuthoritySectionProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* GIF à esquerda */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-[#056CF2] rounded-2xl transform -rotate-3 opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#056CF2]">
                  {gifSrc ? (
                    <img
                      src={gifSrc}
                      alt="Manassés Ndombele rankeado em 1º lugar no Google"
                      className="w-full max-w-sm object-cover"
                    />
                  ) : (
                    /* Placeholder visual enquanto o gif não é fornecido */
                    <div className="w-full max-w-sm bg-white p-6 min-h-[280px] flex flex-col justify-center items-center gap-4">
                      <div className="w-full bg-[#F9FAFB] rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          <div className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 text-xs text-gray-500 text-center">
                            google.com
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-[#056CF2] rounded p-2 flex items-center gap-2">
                            <span className="text-white text-xs font-bold">#1</span>
                            <span className="text-white text-xs font-semibold">Manassés Ndombele</span>
                          </div>
                          <div className="bg-gray-100 rounded p-2 flex items-center gap-2">
                            <span className="text-gray-500 text-xs">#2</span>
                            <span className="text-gray-400 text-xs">Concorrente</span>
                          </div>
                          <div className="bg-gray-100 rounded p-2 flex items-center gap-2">
                            <span className="text-gray-500 text-xs">#3</span>
                            <span className="text-gray-400 text-xs">Concorrente</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 italic text-center">[ Seu GIF aqui ]</p>
                    </div>
                  )}
                </div>
                {/* Badge de destaque */}
                <div className="absolute -top-4 -right-4 bg-[#F2921D] text-white font-poppins font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                  🏆 #1 no Google
                </div>
              </div>
            </div>

            {/* Copy à direita */}
            <div className="flex-1">
              <span className="inline-block font-poppins text-sm font-semibold text-[#056CF2] uppercase tracking-widest mb-3">
                Autoridade em SEO
              </span>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[#162536] leading-tight mb-6">
                Aparecer em 1º no Google{" "}
                <span className="text-[#056CF2]">não é sorte.</span>{" "}
                É estratégia.
              </h2>
              <p className="font-poppins text-lg text-gray-600 leading-relaxed mb-6">
                Enquanto a maioria fala sobre SEO, eu{" "}
                <span className="font-semibold text-[#162536]">pratico e comprovo</span>. Meu próprio site aparece em 1º lugar no Google para as buscas do meu mercado — e isso não acontece por acaso.
              </p>
              <p className="font-poppins text-lg text-gray-600 leading-relaxed mb-8">
                Aplico as mesmas estratégias que uso para mim nos sites dos meus clientes: optimização técnica, SEO local, conteúdo relevante e presença digital que os motores de busca reconhecem como autoridade.
              </p>

              <div className="space-y-4">
                {[
                  "Optimização técnica completa do seu site",
                  "SEO local para bairro, cidade e região",
                  "Google Meu Negócio configurado e optimizado",
                  "Resultados mensuráveis em semanas, não anos",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#056CF2] flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-poppins text-[#162536] text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
