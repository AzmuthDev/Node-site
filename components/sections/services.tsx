"use client";

import { Code2, PenTool, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-[#117192] mb-4" />,
    title: "Programação Avançada",
    description: "Desenvolvimento web e mobile de alta performance, utilizando as stacks mais modernas do mercado para entregar produtos escaláveis."
  },
  {
    icon: <PenTool className="w-10 h-10 text-[#117192] mb-4" />,
    title: "Design Intuitivo",
    description: "Interfaces (UI) e experiências (UX) focadas na jornada do usuário, combinando estética premium com máxima usabilidade."
  },
  {
    icon: <Cpu className="w-10 h-10 text-[#117192] mb-4" />,
    title: "Automações Inteligentes",
    description: "Integração de sistemas e fluxos de trabalho automatizados para reduzir custos operacionais e acelerar processos empresariais."
  }
];

export const Services = () => {
  return (
    <section id="serviços" className="py-32 w-full bg-[#020617] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#117192]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#614943]/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-[#19D1E6]/20 bg-[#19D1E6]/5 text-[#19D1E6] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Nossas Especialidades
          </motion.div>
          <TextBlurReveal delay={0}>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-[#FFFDD0]">
              Soluções <span className="text-[#19D1E6]">Digitais</span>
            </h2>
          </TextBlurReveal>
          <TextBlurReveal delay={0.2}>
            <p className="text-[#B3CDD7]/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Combinamos engenharia de ponta com design de alta fidelidade para criar experiências que definem o mercado.
            </p>
          </TextBlurReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Copper-brown circuit border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#614943]/50 via-transparent to-[#19D1E6]/30 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-10 rounded-3xl bg-[#0a1120]/80 backdrop-blur-2xl border border-white/5 flex flex-col gap-6 overflow-hidden">
                {/* Numerical label - from prompt */}
                <div className="absolute top-6 right-8 text-4xl font-black text-white/5 group-hover:text-[#19D1E6]/10 transition-colors">
                  0{index + 1}
                </div>

                {/* Internal glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#19D1E6]/5 rounded-full blur-3xl group-hover:bg-[#19D1E6]/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#19D1E6]/20 to-[#117192]/5 flex items-center justify-center mb-8 border border-[#19D1E6]/10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(25,209,230,0.2)] transition-all duration-500">
                    {/* Cloning icon to change color */}
                    {Object.assign({}, service.icon, { props: { ...service.icon.props, className: "w-8 h-8 text-[#19D1E6]" } })}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#FFFDD0] group-hover:text-[#19D1E6] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#B3CDD7]/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex items-center gap-2 text-[#19D1E6] text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Ver Detalhes <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

