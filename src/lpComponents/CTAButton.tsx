import { FC, ReactNode } from "react";

// ─── Reusable: CTA button ─────────────────────────────────────────────────────
const CTAButton: FC<{ href: string; dark?: boolean; children: ReactNode }> = ({
  href,
  dark = false,
  children,
}) => (
  <a
    href={href}
    className={`inline-block font-bold tracking-widest text-sm px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
      dark
        ? "bg-white text-[#245EE3] hover:shadow-white/20"
        : "text-white hover:shadow-[#245EE3]/50"
    }`}
    style={
      dark
        ? undefined
        : { background: "linear-gradient(135deg,#245EE3,#60A5FA)" }
    }
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default CTAButton;
