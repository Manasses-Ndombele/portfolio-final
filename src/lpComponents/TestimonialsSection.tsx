import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      business: "Oficina Mecânica Silva",
      text: "Antes ninguém me encontrava no Google. Depois que o Manassés criou meu site e configurou tudo, comecei a receber ligações de clientes novos toda semana. Valeu cada centavo!"
    },
    {
      name: "Maria Santos",
      business: "Salão Beleza Pura",
      text: "Meu salão sempre teve clientes, mas eu queria crescer. Com o site e o Google Meu Negócio configurado, minha agenda ficou cheia. Agora tenho lista de espera!"
    },
    {
      name: "João Oliveira",
      business: "Padaria do Bairro",
      text: "Simples e direto, sem enrolação. O site ficou lindo e agora apareço quando as pessoas procuram padaria aqui no bairro. Recomendo de olhos fechados!"
    }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[#162536] text-center mb-4">
          Veja o que meus clientes dizem
        </h2>
        <p className="font-poppins text-lg text-[#162536] text-center mb-12">
          Resultados reais de negócios reais
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#F2921D] fill-[#F2921D]" size={20} />
                ))}
              </div>
              <p className="font-poppins text-[#162536] text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-poppins font-semibold text-[#162536]">
                  {testimonial.name}
                </p>
                <p className="font-poppins text-sm text-gray-600">
                  {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
