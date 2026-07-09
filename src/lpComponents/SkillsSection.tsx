import { FC, useState } from "react";
import useReveal from "../utils/useReveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/skills";

// ─── Skills ───────────────────────────────────────────────────────────────────
const SkillsSection: FC = () => {
  const { ref, visible } = useReveal();
  const [skillsPaused, setSkillsPaused] = useState(false);
  return (
    <section ref={ref} className="bg-[#0F172A] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeading centered>MINHAS HABILIDADES TÉCNICAS</SectionHeading>
        <div
          className="skills-container mt-4 overflow-hidden relative"
          onMouseEnter={() => setSkillsPaused(true)}
          onMouseLeave={() => setSkillsPaused(false)}
        >
          <div
            className="skills-scroll flex gap-8"
            style={{
              animationPlayState: skillsPaused ? "paused" : "running",
              WebkitAnimationPlayState: skillsPaused ? "paused" : "running",
            }}
          >
            {[...skills, ...skills].map(({ name, Icon }, i) => (
              <div
                key={`${name}-${i}`}
                className="w-[8rem] flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "scale(1)" : "scale(0.9)",
                  transition: `opacity 0.6s cubic-bezier(.16,1,.3,1) ${(i % skills.length) * 0.07}s, transform 0.6s cubic-bezier(.16,1,.3,1) ${(i % skills.length) * 0.07}s`,
                }}
              >
                <div className="text-blue-400 mb-2">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-gray-300 cursor-default">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
