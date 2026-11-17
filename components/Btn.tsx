"use client";
import { useRef } from "react";
import SpecularButton from "@/components/SpecularButton";
import { useWebGPU } from "@/components/useWebGPU";

type Props = { children: React.ReactNode; href?: string; newTab?: boolean };

export default function Btn({
  children,
  href = "#contato",
  newTab = false,
}: Props) {
  const gpu = useWebGPU();
  const ref = useRef<HTMLButtonElement>(null);
  const go = () => {
    if (newTab) window.open(href, "_blank", "noopener,noreferrer");
    else window.location.href = href;
  };

  if (gpu) {
    return (
      <SpecularButton
        size="lg"
        radius={18}
        tint="#ffffff"
        tintOpacity={0.04}
        textColor="#e0f2fe"
        lineColor="#38bdf8"
        baseColor="#2563eb"
        intensity={1}
        idleIntensity={0.35}
        shineSize={10}
        shineFade={34}
        thickness={1.2}
        glow={1}
        followMouse
        proximity={250}
        onClick={go}
      >
        {children}
      </SpecularButton>
    );
  }
  // Alternativa sem WebGPU: brilho especular que segue o rato
  return (
    <button
      ref={ref}
      type="button"
      onClick={go}
      className="spec-btn"
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
