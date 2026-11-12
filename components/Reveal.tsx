"use client";
import { useEffect, useRef, useState } from "react";

/** Revela o conteúdo ao rolar (distance 100, 0.8s, threshold 0.1). */
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"init" | "hidden" | "shown">("init");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setState("shown"); return; }
    setState("hidden");
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setState("shown"); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);
  const hidden = state === "hidden";
  return (
    <div ref={ref} style={{
      opacity: hidden ? 0 : 1,
      transform: hidden ? "translateY(100px)" : "none",
      transition: state === "init" ? "none" : "opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)",
    }}>{children}</div>
  );
}
