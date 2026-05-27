"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  Home, 
  Shapes, 
  Palette, 
  Code, 
  Send, 
  Plus, 
  ArrowRight,
  Monitor,
  Type,
  LayoutGrid,
  Zap
} from "lucide-react";
import { MorphicBackground } from "@/components/ui/morphic-background";

export default function DesignSystemPage() {
  return (
    <main className="relative min-h-screen bg-[#050508] text-white overflow-x-hidden font-sans selection:bg-[#EA6113]/30 selection:text-[#EA6113]">
      {/* Dynamic Background */}
      <MorphicBackground ballColor="#EA6113" className="fixed inset-0 -z-10 bg-transparent opacity-50" />
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="max-w-[1100px] mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          
          {/* Header / Search */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-4 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-[40px] px-8 py-4 flex items-center gap-4 group"
          >
            <Search className="w-5 h-5 text-[#FBB931] group-focus-within:scale-110 transition-transform" />
            <input 
              type="text" 
              placeholder="Como Node Digital desenha?" 
              className="bg-transparent border-none outline-none w-full text-sm font-medium placeholder:text-white/20"
            />
            <div className="bg-white/10 px-4 py-2 rounded-2xl text-[10px] font-black tracking-widest text-[#EA6113] uppercase">
              NODE
            </div>
          </motion.div>

          {/* Hero Section */}
          <motion.div 
            id="brand"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 md:row-span-2 relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] rounded-[48px] p-8 lg:p-16 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 bg-white/10 px-6 py-2 rounded-br-3xl text-[10px] font-black tracking-[0.2em] text-white/40">
              01 / BRAND IDENTITY
            </div>
            
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 bg-[#FBB931]/10 text-[#FBB931] px-3 py-1 rounded-full text-[10px] font-black tracking-widest mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FBB931] shadow-[0_0_10px_#FBB931] animate-pulse" />
                LIVE SYSTEM
              </div>
              
              <h1 className="text-7xl lg:text-[110px] font-black leading-[0.85] tracking-[-0.06em] mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                NODE<br />DIGITAL
              </h1>
              
              <p className="max-w-[450px] text-lg text-white/40 leading-relaxed font-medium">
                Uma linguagem visual construída na interseção entre tecnologia futurista e design funcional. Nosso sistema é modular, adaptativo e focado em impacto.
              </p>
              
              <div className="mt-12 flex gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase hover:bg-[#FBB931] transition-colors flex items-center gap-2 group/btn">
                  EXPLORAR <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 3D Asset Mockup */}
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[url('/images/mascot.png')] bg-contain bg-no-repeat opacity-80 group-hover:scale-105 transition-transform duration-700 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" style={{ mixBlendMode: 'screen' }} />
          </motion.div>

          {/* Typography Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-white/[0.03] border border-white/[0.08] rounded-[40px] p-10 flex flex-col group"
          >
            <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-8 uppercase">
              02 / TYPE SPEC
            </div>
            <h3 className="text-xs font-black tracking-[0.3em] text-[#FBB931] uppercase mb-10">HIERARQUIA VISUAL</h3>
            
            <div className="space-y-10">
              <div className="border-b border-white/5 pb-6 group-hover:border-white/10 transition-colors">
                <span className="text-[10px] font-black text-white/20 block mb-4 uppercase">Primary Header</span>
                <span className="text-4xl font-black tracking-tighter">PLATFORM BOLD</span>
              </div>
              <div className="border-b border-white/5 pb-6 group-hover:border-white/10 transition-colors">
                <span className="text-[10px] font-black text-white/20 block mb-4 uppercase">Body Text</span>
                <span className="text-3xl font-medium tracking-tight opacity-60">Inter Medium</span>
              </div>
              <div className="pb-6">
                <span className="text-[10px] font-black text-white/20 block mb-4 uppercase">Technical Data</span>
                <span className="text-2xl font-mono opacity-40">JetBrains Mono</span>
              </div>
            </div>
          </motion.div>

          {/* Interaction States */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] rounded-[40px] p-10 group"
          >
            <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-8 uppercase">
              03 / STATES
            </div>
            <h3 className="text-xs font-black tracking-[0.3em] text-[#EA6113] uppercase mb-10">MODELO DE INTERAÇÃO</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center text-xs font-black tracking-widest text-white/30">DEFAULT</div>
              <div className="bg-[#EA6113] border border-[#EA6113] rounded-2xl p-6 text-center text-xs font-black tracking-widest text-white hover:scale-105 hover:shadow-[0_0_30px_#EA6113/40] transition-all cursor-pointer">HOVER ME</div>
              <div className="bg-white/10 border border-white/40 rounded-2xl p-6 text-center text-xs font-black tracking-widest">ACTIVE</div>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center text-xs font-black tracking-widest opacity-20 cursor-not-allowed">DISABLED</div>
            </div>
            
            <p className="mt-12 text-sm text-white/30 leading-relaxed font-medium">
              Nossas interações seguem o princípio de "feedback imediato", utilizando transições suaves e mudanças sutis de cor.
            </p>
          </motion.div>

          {/* Color Palette */}
          <motion.div 
            id="palette"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white/[0.03] border border-white/[0.08] rounded-[40px] p-10 flex flex-col md:flex-row justify-between items-center gap-10 group"
          >
            <div className="flex-shrink-0">
              <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-6 uppercase">
                04 / COLOR TOKENS
              </div>
              <h3 className="text-3xl font-black mb-2">A PALETA</h3>
              <p className="text-white/40 text-sm font-medium italic">--brand-primary-gradient</p>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto h-32 md:h-40">
              {[
                { name: 'Orange', hex: '#EA6113', bg: 'bg-[#EA6113]' },
                { name: 'Gold', hex: '#F88F22', bg: 'bg-[#F88F22]' },
                { name: 'Yellow', hex: '#FBB931', bg: 'bg-[#FBB931]' },
                { name: 'Cream', hex: '#FFE3B3', bg: 'bg-[#FFE3B3]' },
                { name: 'Space', hex: '#020617', bg: 'bg-[#020617]', border: true }
              ].map((color) => (
                <div 
                  key={color.name}
                  className={`flex-1 min-w-[80px] ${color.bg} rounded-3xl p-4 flex flex-col justify-end group/color hover:flex-[1.5] transition-all cursor-pointer ${color.border ? 'border border-white/10' : ''}`}
                >
                  <span className={`text-[10px] font-black ${color.name === 'Space' ? 'text-white' : 'text-black/60'} opacity-0 group-hover/color:opacity-100 transition-opacity`}>
                    {color.hex}
                  </span>
                  <span className={`text-[8px] font-black uppercase tracking-widest ${color.name === 'Space' ? 'text-white' : 'text-black/40'}`}>
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grid Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-white/[0.03] border border-white/[0.08] rounded-[40px] p-8 group"
          >
            <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-8 uppercase">05 / GRID</div>
            <div className="grid grid-cols-12 gap-1 h-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-white/10 rounded-sm group-hover:bg-[#FBB931]/20 transition-colors" />
              ))}
            </div>
            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] block mt-4 text-center">SYSTEM 12-COL</span>
          </motion.div>

          {/* Connectivity / Nodes */}
          <motion.div 
            id="nodes"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-gradient-to-r from-[#EA6113]/5 to-transparent border border-white/[0.08] rounded-[40px] p-8 flex items-center justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-6 uppercase">06 / CONNECTIVITY</div>
              <h3 className="text-4xl font-black text-[#FBB931] mb-2 tracking-tighter">NODES</h3>
              <p className="text-sm text-white/30 font-medium">Conectando ideias,<br />transformando marcas.</p>
            </div>
            <div className="w-[180px] h-[180px] bg-[url('/images/network.png')] bg-contain bg-no-repeat group-hover:rotate-12 transition-transform duration-1000" style={{ mixBlendMode: 'screen' }} />
            <div className="absolute bottom-0 right-0 p-8">
              <div className="bg-[#EA6113] w-12 h-12 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(234,97,19,0.4)] cursor-pointer active:scale-90 transition-transform">
                <Plus className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* NEW SECTION: DESIGN QUE IMPACTA E CONVERTE */}
        <section id="docs" className="mt-40 relative">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter"
            >
              DESIGN QUE IMPACTA <br /> E <span className="text-[#EA6113]">CONVERTE</span>
            </motion.h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Na Node, unimos criatividade e estratégia para elevar sua presença digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: UI/UX */}
            <motion.div 
              whileHover={{ y: -20, scale: 1.02 }}
              className="bg-white/[0.02] border border-[#EA6113]/20 backdrop-blur-3xl rounded-[40px] p-10 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EA6113]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-[#EA6113]/10 rounded-3xl flex items-center justify-center mb-8">
                <Monitor className="w-8 h-8 text-[#EA6113]" />
              </div>
              <h3 className="text-2xl font-black mb-6">UI/UX EXPERIENCE</h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Desenhamos interfaces intuitivas e focadas na experiência do usuário (UX), garantindo jornadas fluidas e conversão.
              </p>
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#EA6113] group-hover:border-[#EA6113] transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: DIGITAL PRODUCTS */}
            <motion.div 
              whileHover={{ y: -20, scale: 1.02 }}
              className="bg-white/[0.02] border border-[#F88F22]/20 backdrop-blur-3xl rounded-[40px] p-10 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F88F22]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-[#F88F22]/10 rounded-3xl flex items-center justify-center mb-8">
                <LayoutGrid className="w-8 h-8 text-[#F88F22]" />
              </div>
              <h3 className="text-2xl font-black mb-6">DIGITAL PRODUCTS</h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Criamos layouts modernos e responsivos para sites e aplicativos, alinhando estética premium com alta performance.
              </p>
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#F88F22] group-hover:border-[#F88F22] transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: BRANDING */}
            <motion.div 
              whileHover={{ y: -20, scale: 1.02 }}
              className="bg-white/[0.02] border border-[#FBB931]/20 backdrop-blur-3xl rounded-[40px] p-10 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FBB931]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-[#FBB931]/10 rounded-3xl flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-[#FBB931]" />
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Branding | Sua Marca</h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Construímos identidades visuais memoráveis e consistentes, do logotipo ao manual da marca, refletindo a essência do seu negócio.
              </p>
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#FBB931] group-hover:border-[#FBB931] transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Skills display */}
          <div className="mt-32 p-12 bg-white/[0.01] border border-white/[0.05] rounded-[48px] flex flex-col lg:flex-row items-center justify-between gap-12">
            <div>
              <h4 className="text-xs font-black tracking-[0.5em] text-white/20 uppercase mb-8">Skills & Ferramentas</h4>
              <div className="flex flex-wrap gap-3">
                {["Design Systems", "Prototipagem de Alta Fidelidade", "Microinterações", "Design Responsivo"].map(tag => (
                  <span key={tag} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" className="h-8" />
            </div>
          </div>
        </section>

        <footer className="mt-24 text-center flex flex-col items-center gap-6 opacity-20 hover:opacity-100 transition-opacity">
          <div className="w-12 h-[1px] bg-white/40" />
          <span className="text-[10px] font-black tracking-[0.5em] uppercase">NODE DIGITAL AGENCY // EST. 2026</span>
        </footer>
      </div>

      {/* Floating Dock */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 p-3 rounded-[32px] z-[1000] shadow-2xl"
      >
        {[
          { icon: Home, label: 'Home', href: '/#serviços' },
          { icon: Shapes, label: 'Shapes', href: '#brand' },
          { icon: Palette, label: 'Palette', href: '#palette' },
          { icon: Code, label: 'Connect', href: '#nodes' },
          { icon: Send, label: 'Docs', href: '#docs' }
        ].map((item, i) => (
          <Link 
            key={i} 
            href={item.href}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all cursor-pointer group/nav relative"
          >
            <item.icon className="w-5 h-5 group-hover/nav:scale-110 transition-transform" />
            <span className="absolute -top-10 scale-0 group-hover/nav:scale-100 transition-transform bg-white text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">
              {item.label}
            </span>
          </Link>
        ))}
      </motion.div>

    </main>
  );
}
