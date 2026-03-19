import { useScrollReveal } from "../hooks/useScrollReveal";

interface SkillsSectionProps {
  profileImageSrc?: string;
}

const skills = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Next.js", color: "#162536" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "TailwindCSS", color: "#06B6D4" },
  { name: "Python", color: "#3776AB" },
  { name: "PHP", color: "#777BB4" },
  { name: "Django", color: "#092E20" },
  { name: "WordPress", color: "#21759B" },
  { name: "Elementor", color: "#92003B" },
  { name: "Figma", color: "#F24E1E" },
];

export default function SkillsSection({ profileImageSrc }: SkillsSectionProps) {

  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Frase de destaque — GitHub */}
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#162536] to-[#056CF2] text-white font-poppins text-sm lg:text-base font-semibold px-6 py-3 rounded-full shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.293 0 .319.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Um dos utilizadores mais activos no GitHub de Angola 🇦🇴
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Foto à esquerda */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F2921D] rounded-2xl transform rotate-3"></div>
                {profileImageSrc ? (
                  <img
                    src={profileImageSrc}
                    alt="Manassés Ndombele - Desenvolvedor Fullstack"
                    className="relative rounded-2xl shadow-2xl w-64 lg:w-72 object-cover"
                  />
                ) : (
                  /* Placeholder enquanto imagem não é fornecida */
                  <div className="relative rounded-2xl shadow-2xl w-64 lg:w-72 h-80 bg-gradient-to-br from-[#056CF2] to-[#162536] flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-3 opacity-60">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                      <p className="font-poppins text-sm opacity-60">[ Sua foto aqui ]</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Texto + Skills à direita */}
            <div className="flex-1">
              <span className="inline-block font-poppins text-sm font-semibold text-[#056CF2] uppercase tracking-widest mb-3">
                Stack Técnico
              </span>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-[#162536] leading-tight mb-5">
                Tecnologia ao serviço do{" "}
                <span className="text-[#F2921D]">seu negócio</span>
              </h2>
              <p className="font-poppins text-base text-gray-600 leading-relaxed mb-8">
                Sou desenvolvedor fullstack com domínio de ponta a ponta — do design no Figma até o deploy em produção. Não terceirizo nem dependo de terceiros: eu mesmo crio, optimizo e entrego cada detalhe do seu projecto com excelência técnica e visão de negócio.
              </p>

              {/* Grid de skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="font-poppins font-semibold text-sm px-4 py-2 rounded-full border-2 transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      borderColor: skill.color,
                      color: skill.color,
                      backgroundColor: `${skill.color}15`,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
