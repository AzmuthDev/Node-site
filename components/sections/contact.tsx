"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-24 w-full bg-[#052A3D] relative border-t border-[#B3CDD7]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Vamos construir algo <span className="text-[#19D1E6]">incrível.</span>
            </h2>
            <p className="text-[#B3CDD7]/80 text-lg mb-10 max-w-md">
              Tem um projeto em mente? Preencha o formulário e nossa equipe entrará em contato em breve para transformá-lo em realidade.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-[#B3CDD7]/90">
                <div className="w-12 h-12 rounded-full bg-[#B3CDD7]/5 flex items-center justify-center border border-[#B3CDD7]/10">
                  <Mail className="w-5 h-5 text-[#19D1E6]" />
                </div>
                <div>
                  <p className="text-sm text-[#B3CDD7]/60">Email</p>
                  <p className="font-medium">hello@node.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#B3CDD7]/90">
                <div className="w-12 h-12 rounded-full bg-[#B3CDD7]/5 flex items-center justify-center border border-[#B3CDD7]/10">
                  <MapPin className="w-5 h-5 text-[#19D1E6]" />
                </div>
                <div>
                  <p className="text-sm text-[#B3CDD7]/60">Localização</p>
                  <p className="font-medium">São Paulo, SP - Digital</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#B3CDD7]/[0.02] border border-[#B3CDD7]/10 rounded-3xl p-8 md:p-10"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-[#B3CDD7]/90">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#052A3D]/50 border border-[#B3CDD7]/10 rounded-xl px-4 py-3 text-[#B3CDD7] placeholder:text-[#B3CDD7]/40 focus:outline-none focus:border-[#19D1E6]/50 focus:ring-1 focus:ring-[#19D1E6]/50 transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-[#B3CDD7]/90">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#052A3D]/50 border border-[#B3CDD7]/10 rounded-xl px-4 py-3 text-[#B3CDD7] placeholder:text-[#B3CDD7]/40 focus:outline-none focus:border-[#19D1E6]/50 focus:ring-1 focus:ring-[#19D1E6]/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-[#B3CDD7]/90">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#052A3D]/50 border border-[#B3CDD7]/10 rounded-xl px-4 py-3 text-[#B3CDD7] placeholder:text-[#B3CDD7]/40 focus:outline-none focus:border-[#19D1E6]/50 focus:ring-1 focus:ring-[#19D1E6]/50 transition-all resize-none"
                  placeholder="Como podemos te ajudar?"
                />
              </div>

              <button className="w-full mt-2 bg-[#19D1E6] hover:bg-[#117192] text-[#052A3D] hover:text-[#B3CDD7] font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                Enviar Mensagem
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
