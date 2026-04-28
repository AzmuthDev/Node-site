"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] text-[#19D1E6]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- NodeHero ---------------- */
const navItems = ["Home", "Serviços", "Sobre", "Contato"];

export const NodeHero = () => {
  return (
    <section className="h-screen w-full relative bg-[#020617]">
      <div className="relative h-full w-full overflow-hidden">
        
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay bg-black" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#020617]" />

        {/* Navbar */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2 w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-[#19D1E6] font-bold text-2xl tracking-tighter">NODE.</div>
          <div className="hidden md:flex items-center gap-6 rounded-full bg-black/40 backdrop-blur-md border border-[#B3CDD7]/10 px-6 py-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs md:text-sm font-medium transition-colors hover:text-[#19D1E6] text-[#B3CDD7]/80"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="text-[#B3CDD7] border border-[#B3CDD7]/20 rounded-full px-4 py-2 text-sm hover:bg-[#B3CDD7]/10 transition-colors">
            Falar com Especialista
          </button>
        </nav>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 sm:px-10 md:px-16 max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-12 items-end gap-4">
            
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.04em] text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw]"
                style={{ color: "#B3CDD7" }}
              >
                <WordsPullUp text="Node" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-6 pb-6 lg:col-span-4 lg:pb-10">
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-[#B3CDD7]/80 sm:text-base"
                style={{ lineHeight: 1.4 }}
              >
                A Node é uma agência especializada em Programação de Elite, UI/UX Design Imersivo e Automações Inteligentes. Transformamos ideias complexas em interfaces elegantes e sistemas eficientes.
              </motion.p>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-3 self-start rounded-full bg-[#19D1E6] py-1 pl-6 pr-1 text-sm font-semibold text-[#052A3D] transition-all hover:bg-[#117192] hover:text-[#B3CDD7] sm:text-base"
              >
                Iniciar Projeto
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 text-[#19D1E6]" />
                </span>
              </motion.button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
