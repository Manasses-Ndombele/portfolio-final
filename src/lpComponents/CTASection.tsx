import { MessageCircle } from 'lucide-react';

interface CTASectionProps {
  whatsappNumber: string;
}

export default function CTASection({ whatsappNumber }: CTASectionProps) {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F2921D] to-[#d97e0f]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl text-white mb-6 leading-tight">
            Pronto para fazer seu negócio crescer na internet?
          </h2>
          <p className="font-poppins text-xl text-white mb-10 leading-relaxed">
            Vamos conversar sobre como posso ajudar você a aparecer no Google, ter uma imagem profissional e conquistar mais clientes.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white hover:bg-[#F9FAFB] text-[#162536] font-poppins font-bold text-lg px-10 py-5 rounded-lg shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
          >
            <MessageCircle size={24} />
            Falar Comigo no WhatsApp
          </button>
          <p className="font-poppins text-sm text-white mt-6 opacity-90">
            Respondo pessoalmente. Tire suas dúvidas sem qualquer custo.
          </p>
        </div>
      </div>
    </section>
  );
}
