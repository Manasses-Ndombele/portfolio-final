import { motion } from "framer-motion";
import { ShoppingCart, Star, Settings, Zap } from "lucide-react";

export const Services = () => {
  const icons = [ShoppingCart, Star, Settings, Zap];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            que eu posso fazer por você?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Toda a ideia pode ser transformada em um código, e todo código pode
            ser transformado em uma solução para o mercado! Eis algumas das
            soluções que posso prover.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Sites de vendas",
              description:
                "Uma das minhas especialidades é o desenvolvimento de páginas de vendas e lojas online onde o foco principal é a venda de um produto ou serviço, geralmente apresentados com um design arrojado e modelados para o público alvo do vendedor.",
            },
            {
              title: "Site para branding",
              description:
                "Como resposta a alta demanda por sites que têm o objetivo de passar uma mensagem consistente com a identidade visual de uma marca trabalho na prestação do serviço de criação de sites institucionais! Se você deseja um site que reflita a sua marca este serviço é perfeito para si.",
            },
            {
              title: "Sistemas web",
              description:
                "Poucos desenvolvedores conseguem alcançar a excelência em design, segurança e eficiência em sistemas web, sites que têm uma funcionalidade em específica ou diversas são o desafio que superei e posso diligentemente sarar essa grande dor nesse mercado adequadamente.",
            },
            {
              title: "Automações",
              description:
                "Em especial através da linguagem Python sou capaz de criar bots, fazer integrações com APIs, manipular planilhas do Excel, etc. Para criar uma solução bem específica para resolver tarefas repetitivas do seu dia à dia de trabalho. Toda tarefa pode ser automatizada para aumentar a produtividade e performance do seu negócio.",
            },
          ].map((service, index) => {
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-xl cursor-default hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
