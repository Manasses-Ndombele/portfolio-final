"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects, Project } from "@/lib/data";
import Btn from "@/components/Btn";

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null);
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="projects-swiper"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.name}>
            <div
              onClick={() => setSel(p)}
              className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(56,189,248,.15)]"
            >
              <Image
                src={p.cardImage}
                alt={p.name}
                fill
                sizes="340px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-2 line-clamp-2 max-h-0 overflow-hidden text-sm text-gray-200 opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100">
                  {p.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {sel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSel(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative h-[560px] max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl border border-neon/30 bg-panel shadow-[0_0_50px_rgba(56,189,248,.2)]"
          >
            <button
              aria-label="Fechar"
              onClick={() => setSel(null)}
              className="absolute right-3 top-3 z-10 h-10 w-10 rounded-full bg-navy/80 text-xl text-white"
            >
              ✕
            </button>
            <img
              src={sel.modalImage}
              alt={sel.name}
              className="h-52 w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-extrabold text-white">{sel.name}</h3>
              <div className="mt-3 space-y-4 text-gray-300">
                {sel.description
                  .split("\n")
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .map((par, i) => (
                    <p key={i}>{par}</p>
                  ))}
              </div>
              <div className="mt-6">
                <Btn href={sel.link} newTab>
                  Abrir projeto
                </Btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
