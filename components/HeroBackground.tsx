"use client";
import AeroShards from "@/components/AeroShards";
import { useWebGPU } from "@/components/useWebGPU";

const shards = [
  { l: "4%", w: 90, d: "0s" }, { l: "16%", w: 150, d: "-2s" }, { l: "30%", w: 70, d: "-4s" },
  { l: "46%", w: 180, d: "-1s" }, { l: "62%", w: 80, d: "-5s" }, { l: "75%", w: 140, d: "-3s" }, { l: "88%", w: 100, d: "-6s" },
];

export default function HeroBackground() {
  const gpu = useWebGPU();
  if (gpu) return <div className="absolute inset-0"><AeroShards /></div>;
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {shards.map((s, i) => <span key={i} className="shard" style={{ left: s.l, width: s.w, animationDelay: s.d }} />)}
    </div>
  );
}
