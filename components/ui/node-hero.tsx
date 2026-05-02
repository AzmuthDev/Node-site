"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  dotIndex?: number;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, dotIndex, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        const letters = word.split("");
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {letters.map((letter, li) => (
              <span key={li} className="relative inline-block">
                {letter}
                {showAsterisk && dotIndex === li && (
                  <span className="absolute -top-[0.2em] left-1/2 -translate-x-1/2 inline-block w-[0.2em] h-[0.2em] bg-[#19D1E6] rounded-full" />
                )}
              </span>
            ))}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- NodeHero ---------------- */
const navItems = ["Home", "Serviços", "Sobre", "Contato"];

import { NetworkParticles } from "@/components/ui/network-particles";

import { GlassButton } from "@/components/ui/glass-button";

import Link from "next/link";

export const NodeHero = () => {
  return (
    <section className="h-screen w-full relative bg-[#052A3D] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50 scale-105"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Network Particles Overlay */}
        <NetworkParticles />

        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-overlay bg-black" />

        {/* Gradient overlay - more dramatic for better legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617] via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,209,230,0.1),transparent_70%)]" />
        
        {/* Subtle geometric grid overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#19D1E6 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Navbar */}
      <nav className="absolute left-1/2 top-0 z-30 -translate-x-1/2 w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img 
            src="/images/node-logo.png" 
            alt="Node" 
            className="w-12 h-12 grayscale" 
            style={{ filter: 'invert(76%) sepia(88%) saturate(1487%) hue-rotate(143deg) brightness(101%) contrast(101%)' }}
          />
          <span className="text-[#19D1E6] font-bold text-2xl tracking-[0.1em]">NODE.</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8 rounded-full bg-black/30 backdrop-blur-xl border border-[#B3CDD7]/10 px-8 py-3"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold uppercase tracking-widest transition-colors hover:text-[#19D1E6] text-[#B3CDD7]/80"
            >
              {item}
            </a>
          ))}
        </motion.div>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[#B3CDD7] font-semibold border border-[#B3CDD7]/20 rounded-full px-6 py-2.5 text-sm hover:bg-[#19D1E6] hover:text-black hover:border-[#19D1E6] transition-all duration-300"
        >
          Falar com Especialista
        </motion.button>
      </nav>

      {/* Hero content - Centered and more organized */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-sans font-black leading-[0.8] tracking-[0.2em] text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[11vw] mb-4 relative"
              style={{ color: "#FFFDD0" }}
            >
              <WordsPullUp text="Node" />
            </h1>
          </motion.div>

          <div className="max-w-2xl mt-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[#B3CDD7] sm:text-lg lg:text-xl font-light mb-10"
              style={{ lineHeight: 1.6 }}
            >
              Agência especializada em <span className="text-[#19D1E6] font-medium">Programação de Elite</span>, 
              <br className="hidden md:block" /> 
              UI/UX Design Imersivo e Automações Inteligentes.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <GlassButton
                size="default"
                className="bg-white/[0.03] border-white/10"
                contentClassName="flex items-center gap-2"
              >
                <span>Iniciar Projeto</span>
                <ArrowRight className="h-4 w-4 text-white/70" />
              </GlassButton>

              <Link href="/portfolio" className="w-full sm:w-auto">
                <GlassButton
                  size="default"
                  className="bg-white/[0.03] border-white/10 w-full sm:w-auto"
                >
                  Ver Portfólio
                </GlassButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Watermark N - refined */}
      <div className="absolute bottom-10 left-10 z-20">
        <motion.div 
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          className="w-16 h-16 rounded-xl bg-black/40 backdrop-blur-xl border border-[#B3CDD7]/10 flex items-center justify-center shadow-2xl"
        >
          <img 
            src="/images/node-logo.png" 
            alt="" 
            className="w-10 h-10 grayscale opacity-80" 
            style={{ filter: 'invert(76%) sepia(88%) saturate(1487%) hue-rotate(143deg) brightness(101%) contrast(101%)' }}
          />
        </motion.div>
      </div>

      {/* Decorative circuit lines - inspired by the network concept */}
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 1000 1000" className="w-full h-full text-[#19D1E6]">
          <path d="M1000,1000 L800,800 L850,600 L1000,500" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="5,5" />
          <path d="M0,1000 L200,800 L150,600 L0,500" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="5,5" />
          <circle cx="800" cy="800" r="3" fill="currentColor" />
          <circle cx="200" cy="800" r="3" fill="currentColor" />
          <circle cx="850" cy="600" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};


