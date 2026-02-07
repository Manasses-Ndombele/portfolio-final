interface HeroSectionProps {
  whatsappNumber: string;
}

export default function HeroSection({ whatsappNumber }: HeroSectionProps) {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-[#056CF2] to-[#162536] py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
              Seu Negócio Merece Ser Encontrado Online
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-[#F9FAFB] mb-8 leading-relaxed">
              Ajudo donos de negócios locais a aparecerem no Google, terem uma presença digital profissional e conquistarem mais clientes através da internet. Sem complicação, sem termos técnicos. Apenas resultados reais.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#F2921D] hover:bg-[#d97e0f] text-white font-poppins font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero Crescer Meu Negócio
            </button>
          </div>

          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F2921D] rounded-2xl transform rotate-6"></div>
              <img
                src="/public/me.png"
                alt="Manassés Ndombele"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
