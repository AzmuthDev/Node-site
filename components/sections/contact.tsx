"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

export const Contact = () => {
  return (
    <section id="contato" className="py-32 w-full bg-[#020617] relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#19D1E6]/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border border-[#614943]/30 bg-[#614943]/5 text-[#B3CDD7] text-xs font-bold uppercase tracking-widest mb-8"
            >
              Conecte-se Conosco
            </motion.div>
            
            <TextBlurReveal delay={0}>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-[#FFFDD0] leading-tight">
                Vamos construir o <span className="text-[#19D1E6]">próximo nível</span> juntos.
              </h2>
            </TextBlurReveal>
            
            <TextBlurReveal delay={0.2}>
              <p className="text-[#B3CDD7]/60 text-xl mb-12 max-w-md font-light leading-relaxed">
                Tem um desafio complexo? Nossa equipe está pronta para projetar a solução ideal.
              </p>
            </TextBlurReveal>

            <div className="space-y-8">
              <div className="group flex items-center gap-6 text-[#B3CDD7]/90">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#19D1E6]/50 group-hover:bg-[#19D1E6]/5 transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#19D1E6]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#B3CDD7]/40 mb-1">Email Direto</p>
                  <p className="text-lg font-medium group-hover:text-[#19D1E6] transition-colors">contato@node.agency</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-6 text-[#B3CDD7]/90">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#614943]/50 group-hover:bg-[#614943]/5 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-[#19D1E6]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#B3CDD7]/40 mb-1">Presença</p>
                  <p className="text-lg font-medium group-hover:text-[#19D1E6] transition-colors">Global / Remoto</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Holographic Panel Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#19D1E6]/30 via-transparent to-[#19D1E6]/10 rounded-3xl opacity-50" />
            <div className="absolute inset-0 bg-[#052A3D]/20 backdrop-blur-3xl rounded-3xl" />
            
            <form className="relative flex flex-col gap-8 p-10 lg:p-12" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#B3CDD7]/40 ml-1 group-focus-within:text-[#19D1E6] transition-colors">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-[#FFFDD0] placeholder:text-[#B3CDD7]/20 focus:outline-none focus:border-[#19D1E6]/50 focus:bg-black/60 transition-all"
                  placeholder="Como devemos te chamar?"
                />
              </div>
              
              <div className="space-y-2 group">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#B3CDD7]/40 ml-1 group-focus-within:text-[#19D1E6] transition-colors">E-mail Profissional</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-[#FFFDD0] placeholder:text-[#B3CDD7]/20 focus:outline-none focus:border-[#19D1E6]/50 focus:bg-black/60 transition-all"
                  placeholder="exemplo@empresa.com"
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#B3CDD7]/40 ml-1 group-focus-within:text-[#19D1E6] transition-colors">Detalhes do Projeto</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-[#FFFDD0] placeholder:text-[#B3CDD7]/20 focus:outline-none focus:border-[#19D1E6]/50 focus:bg-black/60 transition-all resize-none"
                  placeholder="Conte-nos sobre seus objetivos..."
                />
              </div>

              <button className="w-full relative group overflow-hidden bg-[#19D1E6] text-black font-black uppercase tracking-widest py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  Enviar Solicitação
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
