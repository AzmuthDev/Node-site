"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Home, 
  ChevronDown, 
  Cpu, 
  Layers, 
  Search, 
  Zap, 
  ExternalLink,
  Code,
  Sparkles,
  Smartphone,
  Server
} from "lucide-react";

export default function SitePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(4); // Default to last one open like the image
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whyUsData = [
    {
      id: 1,
      title: "PERFORMANCE ULTRA-RÁPIDA",
      description: "Desenvolvemos sites estáticos e híbridos que carregam instantaneamente. Cada milissegundo a menos na carga de página aumenta as conversões do seu negócio."
    },
    {
      id: 2,
      title: "DESIGN 100% EXCLUSIVO",
      description: "Não usamos templates prontos ou Wordpress genérico. Cada layout é criado do zero, alinhado à identidade visual da sua marca e projetado para impactar seu cliente."
    },
    {
      id: 3,
      title: "SEO DE ALTA PERFORMANCE",
      description: "Estruturação semântica avançada, metadados otimizados e performance técnica impecável para colocar seu negócio no topo das buscas do Google de forma orgânica."
    },
    {
      id: 4,
      title: "INTERATIVIDADE COGNITIVA",
      description: "Integração opcional de gráficos 3D (WebGL / Three.js) e micro-animações interativas que prendem a atenção do visitante e criam uma experiência memorável."
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#060608] text-[#B3CDD7] overflow-x-hidden font-sans selection:bg-[#FF007F]/30 selection:text-[#FF007F]">
      
      {/* 3D-Like Metallic Glass Sphere in Background (inspired by the image) */}
      <div className="absolute top-[10%] right-[-15%] md:right-[-5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full pointer-events-none opacity-40 md:opacity-50 blur-[80px] md:blur-[120px] transition-all duration-1000 animate-pulse"
           style={{
             background: "radial-gradient(circle, rgba(255,0,127,0.4) 0%, rgba(121,9,113,0.3) 50%, rgba(0,212,255,0) 100%)"
           }} />

      <div className="absolute bottom-[20%] left-[-15%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full pointer-events-none opacity-30 blur-[100px]"
           style={{
             background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(255,0,127,0.1) 60%, rgba(0,0,0,0) 100%)"
           }} />

      {/* Decorative cyber grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'radial-gradient(#FF007F 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

      {/* Thin tech line overlays */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none hidden lg:block" />

      {/* Navigation Top Bar */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/[0.05]">
        <div className="flex items-center gap-3">
          <img 
            src="/images/node-logo.png" 
            alt="Node" 
            className="w-8 h-8 invert opacity-80" 
          />
          <span className="text-white font-bold text-lg tracking-[0.2em] uppercase font-mono">NODE.</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[10px] font-mono uppercase bg-[#FF007F]/10 text-[#FF007F] border border-[#FF007F]/20 px-3 py-1 rounded-full font-bold">
            10 DIAS DE DESENVOLVIMENTO
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-16 md:pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#FF007F] font-mono text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF007F] animate-ping" />
              [desenvolvimento premium]
            </div>
            
            <h1 className="text-5xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-white font-mono uppercase">
              SITES QUE <br />
              <span className="bg-gradient-to-r from-[#FF007F] to-[#790971] bg-clip-text text-transparent">CONVERTEM.</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/50 max-w-xl font-light leading-relaxed">
              Criamos landing pages, sites corporativos e e-commerces ultra-velozes, combinando design de vanguarda e engenharia moderna para levar seu negócio ao próximo nível.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById("explorar");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#FF007F] hover:bg-[#E0006F] text-white px-8 py-3.5 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center gap-3 group shadow-[0_0_20px_rgba(255,0,127,0.4)]"
              >
                Como Trabalhamos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Visual Showcase Box (Inspired by the laptop placement of the reference design) */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-[300px] h-[350px] rounded-[32px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden group hover:border-[#FF007F]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF007F]/10 blur-xl rounded-full" />
              
              <div className="flex justify-between items-start">
                <Code className="w-8 h-8 text-[#FF007F]" />
                <span className="text-[9px] font-mono text-[#FF007F] border border-[#FF007F]/20 px-2 py-0.5 rounded-full">v2.0</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-white text-xl font-mono uppercase font-black">STACK MODERNA</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">
                  Desenvolvemos utilizando as mesmas tecnologias de gigantes como Vercel, Airbnb e Netflix para velocidade e escalabilidade impecáveis.
                </p>
              </div>

              <div className="border-t border-white/[0.05] pt-4 flex justify-between items-center">
                <span className="text-[10px] font-mono opacity-40">REACT / NEXT.JS</span>
                <Sparkles className="w-4 h-4 text-[#FF007F]/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content explainers */}
      <section id="explorar" className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 border-t border-white/[0.05]">
        <div className="text-center md:text-left mb-16 space-y-4">
          <div className="text-[10px] font-mono text-[#FF007F] tracking-[0.3em] uppercase">[ workflow & tecnologias ]</div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-mono tracking-tight">
            Nossas Criações & Métodos
          </h2>
          <p className="text-white/40 max-w-xl text-sm font-light">
            Entenda como construímos soluções robustas e de alta fidelidade visual, desde o planejamento até o deploy final na VPS do cliente.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.01] p-8 space-y-6 hover:bg-white/[0.02] hover:border-[#FF007F]/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#FF007F]/10 flex items-center justify-center">
              <Layers className="w-6 h-6 text-[#FF007F]" />
            </div>
            <h3 className="text-white text-lg font-bold font-mono uppercase tracking-tight">Next.js & Server SSR</h3>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              Nossos sites são desenvolvidos utilizando Next.js com Renderização do Lado do Servidor (SSR). Isso garante que o site seja renderizado instantaneamente pelo servidor antes de chegar ao cliente, resultando em SEO perfeito e indexação impecável.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.01] p-8 space-y-6 hover:bg-white/[0.02] hover:border-[#FF007F]/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#FF007F]/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-[#FF007F]" />
            </div>
            <h3 className="text-white text-lg font-bold font-mono uppercase tracking-tight">Experiências 3D (WebGL)</h3>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              Elevamos a interatividade criando experiências imersivas usando WebGL, Three.js e React Three Fiber. Os fundos fluídos de partículas e efeitos dinâmicos criam uma jornada única para quem navega pelo seu site.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[32px] border border-white/[0.05] bg-white/[0.01] p-8 space-y-6 hover:bg-white/[0.02] hover:border-[#FF007F]/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#FF007F]/10 flex items-center justify-center">
              <Server className="w-6 h-6 text-[#FF007F]" />
            </div>
            <h3 className="text-white text-lg font-bold font-mono uppercase tracking-tight">Deploys via Coolify (VPS)</h3>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              Diferente de agências tradicionais que forçam o cliente a pagar mensalidades absurdas em plataformas engessadas, nós configuramos e hospedamos o seu site diretamente em uma VPS própria (Hostinger / DigitalOcean) usando Coolify. Custo mínimo e controle total.
            </p>
          </div>

        </div>
      </section>

      {/* Why Us Accordion section (Directly inspired by the reference layout) */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 border-t border-white/[0.05]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-[#FF007F] tracking-[0.3em] uppercase">[ diferenciais competitivos ]</div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-mono leading-none">
              POR QUE <br />
              ESCOLHER A NODE?
            </h2>
            <p className="text-white/45 max-w-md text-sm font-light leading-relaxed">
              Unimos design estético futurista com código otimizado de nível internacional. Veja nossos pilares de desenvolvimento.
            </p>
            
            {/* Visual element representing a graphic structure from the design */}
            <div className="relative w-full h-[180px] rounded-[32px] overflow-hidden border border-white/[0.05] bg-white/[0.01] p-6 flex items-center justify-between">
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-[#FF007F]">INFRASTRUCTURE</span>
                <h4 className="text-white text-lg font-mono uppercase font-black">Performance Audit</h4>
                <div className="flex gap-2 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-500 font-mono">100% Score on PageSpeed</span>
                </div>
              </div>
              <div className="flex gap-1 items-end h-16">
                {[30, 45, 60, 40, 75, 90, 100].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-2 bg-[#FF007F] rounded-t-sm" 
                    style={{ height: `${h}%`, opacity: 0.3 + (i * 0.1) }} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {whyUsData.map((item) => {
              const isOpen = activeAccordion === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-[#FF007F]/40 bg-white/[0.03]" 
                      : "border-white/[0.08] bg-white/[0.01] hover:border-white/20"
                  }`}
                >
                  <button 
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left"
                  >
                    <div className="flex gap-4 items-center">
                      <span className="text-[10px] font-mono text-white/30">0{item.id}</span>
                      <span className="text-white font-mono font-bold text-xs md:text-sm tracking-wider">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#FF007F]" : ""
                    }`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/[0.05]">
                      <p className="text-xs text-white/50 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 border-t border-white/[0.05] text-center">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white font-mono uppercase">
            PRONTO PARA <br />
            <span className="bg-gradient-to-r from-[#FF007F] to-[#790971] bg-clip-text text-transparent">COMEÇAR?</span>
          </h2>
          <p className="text-white/45 text-sm font-light">
            Entre em contato conosco e vamos desenhar a melhor solução técnica e visual para o seu projeto decolar.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/#contato">
              <button className="bg-white hover:bg-white/90 text-black px-8 py-3.5 rounded-full text-xs font-black tracking-widest uppercase transition-colors shadow-2xl">
                Iniciar Projeto
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating back to home dock (Inspired by design system dock) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-2.5 rounded-[24px] z-[1000] shadow-2xl">
        <Link 
          href="/#serviços" 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white/30 hover:text-[#FF007F] hover:bg-white/15 transition-all cursor-pointer relative group"
        >
          <Home className="w-5 h-5" />
          <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-[#FF007F] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
            Home
          </span>
        </Link>
      </div>

    </main>
  );
}
