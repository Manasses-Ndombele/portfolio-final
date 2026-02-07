export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[#162536] text-center mb-8">
            Quem sou eu
          </h2>

          <div className="bg-gradient-to-br from-[#056CF2] to-[#162536] p-8 lg:p-12 rounded-2xl shadow-xl">
            <p className="font-poppins text-lg text-white leading-relaxed mb-6">
              Olá! Meu nome é <span className="font-semibold text-[#F2921D]">Manassés Ndombele</span> e há anos ajudo negócios locais a crescerem através da internet.
            </p>
            <p className="font-poppins text-lg text-white leading-relaxed mb-6">
              Sei que nem todo mundo entende de marketing digital, Google ou sites. E não precisa! Meu trabalho é traduzir tudo isso em resultados práticos para o seu negócio: mais clientes, mais vendas, mais crescimento.
            </p>
            <p className="font-poppins text-lg text-white leading-relaxed">
              Trabalho com uma abordagem simples e direta, focada no que realmente importa: fazer seu negócio aparecer onde seus clientes estão procurando. Sem enrolação, sem termos complicados. Apenas soluções que funcionam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
