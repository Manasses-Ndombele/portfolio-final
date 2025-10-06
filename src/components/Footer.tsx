import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Manasses-Ndombele",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/manassés-ndombele-384239327",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/manasses.webdev/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61569820958905",
      label: "Facebook",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/244951822925/",
      label: "Whatsapp",
    },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6"></h3>

            <div className="flex justify-center space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">Envie email para</p>
            <a
              href="mailto:devmanasses@outlook.com"
              className="inline-flex items-center text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              devmanasses@outlook.com
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">
              © 2025 – Desenvolvido por Manassés Ndombele.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
