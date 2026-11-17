"use client";
import { useEffect, useRef } from "react";
import CursorGrid from "@/components/CursorGrid";
import { useWebGPU } from "@/components/useWebGPU";

function CanvasGrid() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!,
      host = c.parentElement!,
      ctx = c.getContext("2d")!;
    const CELL = 60,
      R = 160;
    let w = 0,
      h = 0,
      mx = -9999,
      my = -9999,
      vis = 0,
      active = false,
      last = 0,
      raf = 0;
    const pulses: { x: number; y: number; t: number }[] = [];
    const resize = () => {
      const r = host.getBoundingClientRect(),
        d = window.devicePixelRatio || 1;
      w = r.width;
      h = r.height;
      c.width = w * d;
      c.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    const lines = (alpha: number) => {
      ctx.strokeStyle = `rgba(56,189,248,${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= w; x += CELL) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
      }
      for (let y = 0; y <= h; y += CELL) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
      }
      ctx.stroke();
    };
    const draw = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      vis = Math.max(0, Math.min(1, vis + (active ? dt / 150 : -dt / 800)));
      ctx.clearRect(0, 0, w, h);
      lines(0.08);
      if (vis > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mx, my, R, 0, Math.PI * 2);
        ctx.clip();
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, R);
        g.addColorStop(0, `rgba(56,189,248,${0.16 * vis})`);
        g.addColorStop(1, "rgba(56,189,248,0)");
        ctx.fillStyle = g;
        ctx.fillRect(mx - R, my - R, R * 2, R * 2);
        lines(0.4 * vis);
        ctx.restore();
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += dt / 700;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = `rgba(56,189,248,${0.5 * (1 - p.t)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.t * 220, 0, Math.PI * 2);
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    const pos = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const move = (e: PointerEvent) => {
      pos(e);
      active = true;
    };
    const leave = () => {
      active = false;
    };
    const down = (e: PointerEvent) => {
      pos(e);
      pulses.push({ x: mx, y: my, t: 0 });
    };
    resize();
    raf = requestAnimationFrame(draw);
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    host.addEventListener("pointerdown", down);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      host.removeEventListener("pointerdown", down);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

export default function GridBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const gpu = useWebGPU();
  if (gpu) {
    return (
      <CursorGrid
        cellSize={60}
        color="#38bdf8"
        highlight="area"
        gridStyle="lines"
        radius={140}
        holdTime={400}
        fadeDuration={800}
        fillOpacity={0.06}
        gridOpacity={0.08}
        spotlight={0.6}
        clickPulse
      >
        {children}
      </CursorGrid>
    );
  }
  return (
    <div className="relative w-full overflow-hidden bg-navy">
      <CanvasGrid />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
