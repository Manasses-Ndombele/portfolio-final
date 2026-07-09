import { FC, ReactNode } from "react";
    
// ─── Reusable: section heading ────────────────────────────────────────────────
const SectionHeading: FC<{ children: ReactNode; centered?: boolean }> = ({
  children,
  centered = false,
}) => (
  <div className={centered ? "flex flex-col items-center mb-14" : "mb-14"}>
    <h2
      className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {children}
    </h2>
    <div
      className={`h-[3px] w-14 mt-3 rounded-full ${centered ? "mx-auto" : ""}`}
      style={{ background: "linear-gradient(90deg,#245EE3,#60A5FA)" }}
    />
  </div>
);

export default SectionHeading;
