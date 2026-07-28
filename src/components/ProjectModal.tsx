import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex justify-center items-start sm:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-4xl
                bg-gray-900
                rounded-2xl
                overflow-y-auto
                max-h-[calc(100dvh-2rem)]
                shadow-2xl
              "
            >
              {/* Botão Fechar */}
              <div className="sticky top-0 z-50 flex justify-end p-4 pointer-events-none">
                <button
                  onClick={onClose}
                  className="
                    pointer-events-auto
                    p-2
                    rounded-full
                    bg-black/70
                    backdrop-blur-md
                    text-white
                    hover:bg-black
                    transition-colors
                    shadow-lg
                  "
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Imagem */}
              <div className="relative h-56 sm:h-64 md:h-80 -mt-16 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Tecnologias utilizadas:
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      flex
                      items-center
                      justify-center
                      px-6
                      py-3
                      rounded-lg
                      text-white
                      font-medium
                      bg-gradient-to-r
                      from-blue-600
                      to-blue-700
                      hover:from-blue-700
                      hover:to-blue-800
                      transition-all
                    "
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Abrir projeto
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
