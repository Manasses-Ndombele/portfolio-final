import { motion } from "framer-motion";
import { skills } from "../data/skills";

export const Skills = () => {
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const otherSkills = skills.filter((skill) => skill.category === "other");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas Habilidades
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Esta é a área do portfólio que venho atualizar a todo o momento com o maior orgulho e prazer do mundo, porque acredito no aprendizado autodidata e que o uso das melhores ferramentas têm como consequência os melhores resultados para si.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-blue-400 mb-8">
              Frontend
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frontendSkills.map(({ name, Icon }) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-400 mb-2">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 cursor-default">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-blue-400 mb-8">
              Backend
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {backendSkills.map(({ name, Icon }) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-400 mb-2">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 cursor-default">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Other Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-blue-400 mb-8">
              Outras tecnologias
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {otherSkills.map(({ name, Icon }) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-400 mb-2">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 cursor-default">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
