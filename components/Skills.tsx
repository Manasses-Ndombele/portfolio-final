"use client";
import LogoLoop from "@/components/LogoLoop";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiBootstrap, SiSass, SiTailwindcss, SiPython, SiPhp, SiDjango, SiFlask, SiMysql, SiSqlite, SiPostgresql, SiWordpress, SiElementor, SiWix, SiJson, SiGit, SiDocker, SiFigma, SiLinux } from "react-icons/si";
const L = (node: React.ReactNode, title: string, hoverColor: string) => ({ node, title, hoverColor });
const logos = [
  L(<SiHtml5 />, "HTML", "#e34f26"), L(<SiCss3 />, "CSS", "#1572b6"), L(<SiJavascript />, "JavaScript", "#f7df1e"), L(<SiReact />, "React", "#61dafb"),
  L(<SiNextdotjs />, "Next.js", "#ffffff"), L(<SiTypescript />, "TypeScript", "#3178c6"), L(<SiBootstrap />, "Bootstrap", "#7952b3"), L(<SiSass />, "Sass", "#cc6699"),
  L(<SiTailwindcss />, "Tailwind CSS", "#38bdf8"), L(<SiPython />, "Python", "#3776ab"), L(<SiPhp />, "PHP", "#777bb4"), L(<SiDjango />, "Django", "#44b78b"),
  L(<SiFlask />, "Flask", "#ffffff"), L(<SiMysql />, "MySQL", "#4479a1"), L(<SiSqlite />, "SQLite", "#58b8e6"), L(<SiPostgresql />, "PostgreSQL", "#336791"),
  L(<SiWordpress />, "Wordpress", "#21759b"), L(<SiElementor />, "Elementor", "#92003b"), L(<SiWix />, "Wix", "#ffffff"), L(<SiJson />, "JSON", "#cbd5e1"),
  L(<SiGit />, "Git", "#f05032"), L(<SiDocker />, "Docker", "#2496ed"), L(<SiFigma />, "Figma", "#f24e1e"), L(<SiLinux />, "Linux", "#fcc624"),
];
export default function Skills() {
  return (
    <div style={{ height: 140, position: "relative", overflow: "hidden", color: "#94a3b8" }}>
      <LogoLoop logos={logos} speed={100} direction="left" logoHeight={48} gap={56} hoverSpeed={0} scaleOnHover fadeOut ariaLabel="Habilidades técnicas" />
    </div>
  );
}
