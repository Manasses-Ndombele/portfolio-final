"use client";
import Image from "next/image";
import EchoText from "@/components/EchoText";
import HeroBackground from "@/components/HeroBackground";
import BorderGlow from "@/components/BorderGlow";
import GridBackground from "@/components/GridBackground";
import GlareHover from "@/components/GlareHover";
import Btn from "@/components/Btn";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_URL } from "@/lib/contact";

const problems = [
  "As Pessoas Procuram No Google E Não Encontram Seu Negócio",
  "Seu Concorrente Aparece Sempre Antes De Você",
  "Você Não Está Bem Posicionado Na Internet",
  "Você Não Consegue Ter Vendas Que Vêm Da Internet",
  "Seu Negócio Parece Amador Quando Alguém Busca Por Você Online",
  "Você Perde Clientes Para Concorrentes Que Têm Site",
];
const solutions = [
  {
    t: "Site Institucional",
    d: "Sites institucionais profissionais que transmitem credibilidade, fortalecem sua marca, melhoram o posicionamento no Google e apresentam seu negócio com clareza, autoridade e confiança para clientes e parceiros.",
  },
  {
    t: "Página de Vendas",
    d: "Landing pages de alta conversão que impulsionam vendas transformando tráfego em oportunidades reais de venda com performance, clareza, credibilidade e design moderno.",
  },
];
const H2 = ({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) => (
  <div className={center ? "text-center" : ""}>
    <h2 className="font-title text-3xl font-extrabold uppercase text-white md:text-4xl">
      {children}
    </h2>
    <div className={`neon-line mt-4 ${center ? "mx-auto" : ""}`} />
  </div>
);

export default function Home() {
  return (
    <main>
      {/* 1. Header */}
      <header className="flex w-full flex-col items-center overflow-hidden bg-navy px-6 pt-8 text-center">
        <EchoText
          text="MANASSÉS.dev"
          echoes={12}
          lag={0.24}
          offset={36}
          direction="right"
          fade={0.72}
          blur={3}
          tint="#38bdf8"
          echoStyle="solid"
          echoScale={1}
          mode="both"
          trail="pointer"
          clickBurst
          cursorRadius={320}
          duration={900}
          ease="ease-out"
          fontSize="clamp(1.1rem, 3vw, 1.75rem)"
          fontWeight={800}
        />
        <span className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-neon">
          DESENVOLVEDOR WEB FULLSTACK
        </span>
      </header>

      {/* 2. Hero */}
      <section className="overflow-hidden relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-navy via-[#101a3a] to-navy px-6 py-24">
        <HeroBackground />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="font-title break-words text-[1.9rem] font-black uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            FAÇO SEU NEGÓCIO{" "}
            <span className="neon-text">APARECER NO GOOGLE</span> E ATRAIR
            CLIENTES TODOS OS DIAS
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-gray-300">
            Sites profissionais que fazem seu negócio aparecer no Google quando
            novos clientes procuram por serviços. Mais visibilidade, mais
            contactos, mais vendas - sem precisar entender de tecnologia e
            marketing digital.
          </p>
          <div className="mt-10">
            <Btn href={WHATSAPP_URL} newTab>
              FALE COMIGO AGORA
            </Btn>
          </div>
        </div>
      </section>

      {/* 3. Problemas */}
      <section className="overflow-hidden bg-navy px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <H2>SERÁ QUE NO SEU NEGÓCIO:</H2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {problems.map((p, i) => (
                <div
                  key={p}
                  className="flex items-center gap-4 rounded-2xl border border-brand/30 bg-gradient-to-r from-card to-[#131d36] p-5 shadow-[0_0_20px_rgba(59,130,246,.12)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand2/30 font-semibold text-neon">
                    {i + 1}
                  </span>
                  <span className="font-medium text-gray-200">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Soluções */}
      <section className="overflow-hidden bg-panel px-6 py-24">
        <Reveal>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div>
              <H2>O QUE EU POSSO FAZER POR VOCÊ?</H2>
              <Image
                src="/images/manasses-ndombele-desenvolvedor-1.webp"
                alt="Manassés Ndombele, desenvolvedor web"
                width={420}
                height={530}
                className="mt-10 rounded-3xl shadow-[0_0_40px_rgba(56,189,248,.25)]"
              />
            </div>
            <div className="flex flex-col gap-6">
              {solutions.map((s) => (
                <BorderGlow
                  key={s.t}
                  edgeSensitivity={30}
                  glowColor="210 90 60"
                  backgroundColor="#0f1626"
                  borderRadius={28}
                  glowRadius={40}
                  glowIntensity={1}
                  coneSpread={25}
                  animated={false}
                  colors={["#38bdf8", "#3b82f6", "#6366f1"]}
                >
                  <div style={{ padding: "2em" }}>
                    <h3 className="text-2xl font-extrabold text-white">
                      {s.t}
                    </h3>
                    <p className="mt-3 font-light text-gray-400">{s.d}</p>
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. Habilidades */}
      <section className="overflow-hidden bg-navy px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <H2 center>HABILIDADES TÉCNICAS</H2>
            <div className="mt-12">
              <Skills />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. Projetos */}
      <section className="overflow-hidden bg-panel px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <H2 center>MEUS PROJETOS</H2>
            <div className="mt-8">
              <Projects />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 7. Quem sou eu */}
      <section className="overflow-hidden bg-navy">
        <Reveal>
          <div style={{ position: "relative", width: "100%" }}>
            <GridBackground>
              <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[320px_minmax(0,1fr)]">
                <div className="mx-auto">
                  <GlareHover
                    width="min(300px, 70vw)"
                    height="min(300px, 70vw)"
                    borderRadius="9999px"
                    mode="hover"
                    variant="streak"
                    glareColor="#ffffff"
                    glareOpacity={0.5}
                    glareSize={30}
                    softness={0.6}
                    glareAngle={-45}
                    blendMode="screen"
                    rimGlint
                    transitionDuration={650}
                  >
                    <img
                      src="/images/quem-sou-eu.webp"
                      alt="Manassés Ndombele"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        border: "4px solid #38bdf8",
                        borderRadius: "9999px",
                      }}
                    />
                  </GlareHover>
                </div>
                <div className="space-y-4 font-light leading-relaxed text-gray-300">
                  <H2>Quem Sou Eu</H2>
                  <p>
                    Olá! Meu nome é Manassés Ndombele e sou programador web full
                    stack apaixonado por criar soluções digitais profissionais.
                  </p>
                  <p>
                    Ao longo dos últimos 5 anos, estudei de forma autodidata
                    desenvolvimento web, copywritting, SEO e marketing digital,
                    construindo uma base sólida de conhecimentos e aplicando
                    essas competências em projetos de portfólio e projetos
                    reais.
                  </p>
                  <p>
                    Desenvolvo sites rápidos, modernos e responsivos, pensados
                    para transmitir credibilidade, fortalecer a presença digital
                    e facilitar que negócios sejam encontrados pelos seus
                    clientes.
                  </p>
                  <p>
                    Acredito que um site deve ir além de um bom design: ele
                    precisa representar bem a marca, oferecer uma excelente
                    experiência ao utilizador e contribuir para os objetivos do
                    negócio. É por isso que procuro unir tecnologia, estratégia
                    e atenção aos detalhes em cada projeto que desenvolvo.
                  </p>
                </div>
              </div>
            </GridBackground>
          </div>
        </Reveal>
      </section>

      {/* 8. CTA final */}
      <section
        id="contato"
        className="bg-gradient-to-b from-navy via-[#12234f] to-brand2/60 px-6 py-24"
      >
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-title text-3xl font-black uppercase text-white md:text-5xl">
              PRONTO PARA FAZER SEU NEGÓCIO CRESCER NA INTERNET?
            </h2>
            <p className="mt-6 font-light text-gray-200">
              Vamos Conversar Sobre Como Posso Ajudar Você A Aparecer No Google,
              Ter Uma Imagem Profissional E Conquistar Mais Clientes.
            </p>
            <div className="mt-10">
              <Btn href={WHATSAPP_URL} newTab>
                FALE COMIGO AGORA
              </Btn>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 9. Rodapé */}
      <footer className="bg-black px-6 py-6">
        <p className="text-center text-sm text-white">
          COPYRIGHT © 2026 MANASSES NDOMBELE · PROGRAMADOR WEB FULLSTACK
        </p>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
