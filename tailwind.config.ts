import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { navy: "#0b1020", panel: "#111827", card: "#0f1626", brand: "#3b82f6", brand2: "#2563eb", neon: "#38bdf8", violet: "#6366f1" },
    fontFamily: { title: ["var(--font-montserrat)"], body: ["var(--font-poppins)"] },
  } },
  plugins: [],
};
export default config;
