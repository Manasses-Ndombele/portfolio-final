import { CheckCircle2 } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    "Criação de site simples, bonito e profissional para o seu negócio",
    "Configuração completa do Google Meu Negócio para você ser encontrado",
    "SEO local básico otimizado para seu bairro e cidade",
    "Landing pages que convertem visitantes em clientes",
    "Design responsivo que funciona perfeitamente no celular",
    "Presença digital que transmite confiança e profissionalismo"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[#162536] text-center mb-4">
          Eu posso te ajudar...
        </h2>
        <p className="font-poppins text-lg text-[#162536] text-center mb-12 max-w-2xl mx-auto">
          Com soluções práticas e diretas que fazem seu negócio crescer na internet
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#056CF2] to-[#162536] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-start gap-4"
            >
              <CheckCircle2 className="text-[#F2921D] flex-shrink-0 mt-1" size={24} />
              <p className="font-poppins text-white text-base leading-relaxed">
                {solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
