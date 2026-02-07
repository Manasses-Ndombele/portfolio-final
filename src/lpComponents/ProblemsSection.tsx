import { AlertCircle } from 'lucide-react';

export default function ProblemsSection() {
  const problems = [
    "As pessoas procuram no Google e não encontram seu negócio",
    "Seu concorrente aparece antes de você",
    "Você não está bem posicionado na internet",
    "Você não consegue ver vendas que vêm da internet",
    "Seu negócio parece amador quando alguém busca por você online",
    "Você perde clientes para concorrentes que têm site"
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[#162536] text-center mb-4">
          Será que no seu negócio: 👇
        </h2>

        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-4"
            >
              <AlertCircle className="text-[#F2921D] flex-shrink-0 mt-1" size={24} />
              <p className="font-poppins text-[#162536] text-base leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
