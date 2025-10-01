import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-[28rem] h-auto mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dl2earg2m/image/upload/v1759230029/unnamed_totcjd.jpg"
                    alt="Manassés Ndombelie"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-600 rounded-2xl -z-10 opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full -z-10 opacity-10"></div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {t.about.title}
                </motion.h2>
                
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t.about.content}
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-6 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Anos de experiência</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">40+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projetos concluídos</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Satisfação dos clientes</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Suporte disponível</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};