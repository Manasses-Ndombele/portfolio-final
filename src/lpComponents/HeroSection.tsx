import profileImg from "../assets/manasses-ndombele-programador.png";

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
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-white leading-tight mb-6">
              Faço Seu Negócio Aparecer No Google e Atrair Clientes Todos os Dias
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-[#F9FAFB] mb-8 leading-relaxed">
              Sites profissionais que fazem seu negócio aparecer no Google quando novos clientes procuram por serviços. Mais visibilidade, mais contactos, mais vendas - sem precisar entender de tecnologia e marketing digital.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#F2921D] hover:bg-[#d97e0f] text-white font-poppins font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Começar Agora
            </button>
          </div>

          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F2921D] rounded-2xl transform rotate-6"></div>
              <img
                src={profileImg}
                alt="Manassés Ndombele - Programador Fullstack"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
