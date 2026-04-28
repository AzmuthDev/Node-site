"use client";

import { Code2, PenTool, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-[#19D1E6] mb-4" />,
    title: "Programação Avançada",
    description: "Desenvolvimento web e mobile de alta performance, utilizando as stacks mais modernas do mercado para entregar produtos escaláveis."
  },
  {
    icon: <PenTool className="w-10 h-10 text-[#19D1E6] mb-4" />,
    title: "Design Intuitivo",
    description: "Interfaces (UI) e experiências (UX) focadas na jornada do usuário, combinando estética premium com máxima usabilidade."
  },
  {
    icon: <Cpu className="w-10 h-10 text-[#19D1E6] mb-4" />,
    title: "Automações Inteligentes",
    description: "Integração de sistemas e fluxos de trabalho automatizados para reduzir custos operacionais e acelerar processos empresariais."
  }
];

export const Services = () => {
  return (
    <section id="serviços" className="py-24 w-full bg-[#052A3D] relative">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-[#19D1E6]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <TextBlurReveal delay={0}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Nossos <span className="text-[#19D1E6]">Serviços</span>
            </h2>
          </TextBlurReveal>
          <TextBlurReveal delay={0.2}>
            <p className="text-[#B3CDD7]/80 max-w-2xl mx-auto">
              Construímos o futuro do seu negócio com tecnologia de ponta e design focado em resultados.
            </p>
          </TextBlurReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative p-8 rounded-2xl bg-[#B3CDD7]/[0.03] border border-[#B3CDD7]/10 hover:border-[#19D1E6]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(25,209,230,0.15)] overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#19D1E6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3 text-[#B3CDD7] group-hover:text-[#19D1E6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#B3CDD7]/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
