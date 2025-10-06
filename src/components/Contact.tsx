import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  contact: string;
  projectName: string;
  domain: string;
  description: string;
}

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_8ouorvx",
        "template_i3hsnzd",
        {
          name: data.name,
          whatsapp_email: data.contact,
          project_name: data.projectName,
          project_domain: data.domain,
          description: data.description,
        },
        "GvdRTAYVa7UWwph3T"
      );

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      alert(
        "❌ Não foi possível notificar-me com os dados. Melhor será clicar no botão de WhatsApp no rodapé para conversarmos por lá."
      );
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400 transition-all duration-200";
  const errorClasses = "border-red-500 focus:ring-red-500 animate-pulse";

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-600 to-blue-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos Tirar Sua Ideia Do Papel!
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Preencha os seus dados e descreva o seu projeto. Vou analisar tudo
              com atenção e te enviar um orçamento o quanto antes, através do
              contacto informado. Esse é o primeiro passo para transformar sua
              ideia em uma solução real.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Mensagem enviada com sucesso!
                </h3>
                <p className="text-gray-300">
                  Obrigado pelo contato. Retornarei em breve!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className={`${inputClasses} ${
                        errors.name ? errorClasses : ""
                      }`}
                    />
                    {errors.name && (
                      <motion.p
                        className="mt-1 text-sm text-red-500 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Nome é obrigatório
                      </motion.p>
                    )}
                  </div>

                  {/* Contact (Email ou WhatsApp) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email / WhatsApp
                    </label>
                    <input
                      type="text"
                      {...register("contact", {
                        required: true,
                        validate: (value) => {
                          const emailRegex = /^\S+@\S+\.\S+$/;
                          const phoneRegex = /^\+\d{7,15}$/;
                          return (
                            emailRegex.test(value) || phoneRegex.test(value)
                          );
                        },
                      })}
                      className={`${inputClasses} ${
                        errors.contact ? errorClasses : ""
                      }`}
                    />
                    {errors.contact && (
                      <motion.p
                        className="mt-1 text-sm text-red-500 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Contato inválido
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome do projeto
                    </label>
                    <input
                      type="text"
                      {...register("projectName")}
                      className={inputClasses}
                    />
                  </div>

                  {/* Domain */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Domínio do projeto (se possuir)
                    </label>
                    <input
                      type="text"
                      {...register("domain")}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Descrição
                  </label>
                  <textarea
                    rows={6}
                    {...register("description", {
                      required: true,
                      minLength: 10,
                    })}
                    className={`${inputClasses} resize-none ${
                      errors.description ? errorClasses : ""
                    }`}
                  />
                  {errors.description && (
                    <motion.p
                      className="mt-1 text-sm text-red-500 flex items-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Descrição deve ter pelo menos 10 caracteres
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
