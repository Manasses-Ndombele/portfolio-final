"use client";
import { useEffect, useState } from "react";

/** null = a verificar, true = WebGPU disponível, false = indisponível */
export function useWebGPU() {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const gpu = (navigator as any).gpu;
        const adapter = gpu ? await gpu.requestAdapter() : null;
        setOk(!!adapter);
      } catch {
        setOk(false);
      }
    })();
  }, []);
  return ok;
}
