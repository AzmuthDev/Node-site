"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { SocialCard3D } from "@/components/ui/social-card-3d";

export const Contact = () => {
  return (
    <section id="contato" className="py-32 w-full bg-[#020617] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#19D1E6]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Editorial Typography (Col span 5) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-2 h-2 rounded-full bg-[#19D1E6]" />
               <span className="text-xs font-mono text-[#B3CDD7]/40 uppercase tracking-[0.5em]">Haik.Node</span>
            </div>

            <div className="mb-12">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] text-white uppercase">
                Inicie seu <br />
                <span className="text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                  Projeto
                </span>
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 font-light leading-tight max-w-sm tracking-tight">
              Pronto para levar sua empresa para o <span className="text-[#19D1E6] font-bold">próximo nível</span>?
            </p>

            <div className="mt-16 flex items-center gap-4 text-[#B3CDD7]/40">
               <div className="w-12 h-[1px] bg-[#B3CDD7]/10" />
               <p className="text-sm font-mono uppercase tracking-widest">Contate-nos</p>
            </div>
          </motion.div>

          {/* Center: High-End Contact Form (Col span 4) */}
          <motion.div 
            className="lg:col-span-4 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute -inset-[1px] bg-gradient-to-tr from-[#19D1E6]/20 to-transparent rounded-[40px] opacity-50" />
            <div className="absolute inset-0 bg-[#0a1120]/80 backdrop-blur-3xl rounded-[40px]" />
            
            <form className="relative flex flex-col gap-6 p-10 lg:p-12" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <div className="relative group">
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder:text-white/10 focus:outline-none focus:border-[#19D1E6] transition-all"
                    placeholder="Seu Nome"
                  />
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder:text-white/10 focus:outline-none focus:border-[#19D1E6] transition-all"
                    placeholder="E-mail Profissional"
                  />
                </div>

                <div className="relative group">
                  <textarea 
                    rows={2}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder:text-white/10 focus:outline-none focus:border-[#19D1E6] transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
              </div>

              <button className="relative group mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <ArrowUpRightIcon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">Enviar Mensagem</span>
                </div>
              </button>
            </form>
          </motion.div>

          {/* Right: 3D Social Card (Col span 3) */}
          <motion.div
            className="lg:col-span-3 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <SocialCard3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
