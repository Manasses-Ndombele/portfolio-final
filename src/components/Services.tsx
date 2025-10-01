import { motion } from 'framer-motion';
import { ShoppingCart, Star, Settings, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
    <section id="services" className="py-20 bg-blue-600 dark:bg-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.services.items.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl cursor-default hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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