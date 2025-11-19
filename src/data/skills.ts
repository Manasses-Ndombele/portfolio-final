import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaWordpress,
  FaElementor,
} from "react-icons/fa";
import {
  SiPhp,
  SiDjango,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoSass, IoLogoDocker } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { LuFileJson } from "react-icons/lu";
import { CgFigma } from "react-icons/cg";
import { DiLinux } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

import type { Skill } from "../types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", Icon: FaHtml5, category: "frontend" },
  { name: "CSS", Icon: FaCss3Alt, category: "frontend" },
  { name: "JavaScript", Icon: IoLogoJavascript, category: "frontend" },
  { name: "React", Icon: FaReact, category: "frontend" },
  { name: "Next.js", Icon: SiNextdotjs, category: "frontend" },
  { name: "TypeScript", Icon: SiTypescript, category: "frontend" },
  { name: "Bootstrap", Icon: FaBootstrap, category: "frontend" },
  { name: "Sass", Icon: IoLogoSass, category: "frontend" },
  { name: "Tailwind CSS", Icon: RiTailwindCssFill, category: "frontend" },

  // Backend
  { name: "Python", Icon: FaPython, category: "backend" },
  { name: "PHP", Icon: SiPhp, category: "backend" },
  { name: "Django", Icon: SiDjango, category: "backend" },
  { name: "Flask", Icon: SiFlask, category: "backend" },
  { name: "MySQL", Icon: SiMysql, category: "backend" },
  { name: "SQLite", Icon: SiSqlite, category: "backend" },
  { name: "PostgreSQL", Icon: BiLogoPostgresql, category: "backend" },

  // Other
  { name: "Wordpress", Icon: FaWordpress, category: "other" },
  { name: "Elementor", Icon: FaElementor, category: "other" },
  { name: "JSON", Icon: LuFileJson, category: "other" },
  { name: "Git", Icon: FaGitAlt, category: "other" },
  { name: "Docker", Icon: IoLogoDocker, category: "other" },
  { name: "Figma", Icon: CgFigma, category: "other" },
  { name: "Linux", Icon: DiLinux, category: "other" },
];
