import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * Adiciona a classe "is-visible" ao elemento quando ele entra no viewport.
 * Usa IntersectionObserver, sem dependências externas.
 *
 * @param threshold - percentagem do elemento visível antes de disparar (default 0.15)
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el); // anima só uma vez
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
