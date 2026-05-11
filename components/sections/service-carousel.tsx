"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Send, Mail, MapPin } from "lucide-react"

interface Service {
  title: string
  description: string
  tag: string
  image: string
  color: string
}

const services: Service[] = [
  {
    title: "Automação",
    description: "Integração de sistemas e fluxos de trabalho inteligentes para reduzir custos operacionais.",
    tag: "Workflow",
    image: "/images/automacao.jpg",
    color: "#19D1E6"
  },
  {
    title: "Design",
    description: "Interfaces (UI) e experiências (UX) focadas na jornada do usuário com estética premium.",
    tag: "UI/UX",
    image: "/images/design.jpg",
    color: "#B3CDD7"
  },
  {
    title: "Site",
    description: "Desenvolvimento web de alta performance, utilizando as stacks mais modernas do mercado.",
    tag: "Web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    color: "#19D1E6"
  },
  {
    title: "Aplicativo",
    description: "Soluções mobile escaláveis e responsivas para conectar sua marca aos clientes em qualquer lugar.",
    tag: "Mobile",
    image: "/images/aplicativo.jpg",
    color: "#B3CDD7"
  },
]

export function ServiceCarousel() {
  const [dragProgress, setDragProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [constraints, setConstraints] = useState({ left: 0, right: 0 })

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth
      const offsetWidth = containerRef.current.offsetWidth
      setConstraints({ left: -(scrollWidth - offsetWidth + 100), right: 0 })
    }
  }, [])

  return (
    <section id="serviços" className="relative w-full bg-[#020617] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-[#19D1E6]/20 bg-[#19D1E6]/5 text-[#19D1E6] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Nossas Especialidades
          </motion.div>
          <h2 className="text-[#FFFDD0] text-5xl md:text-7xl font-black tracking-tighter leading-none">
            Soluções <br /> <span className="text-[#19D1E6]">Interativas.</span>
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[#B3CDD7]/40 text-sm font-mono uppercase tracking-[0.3em] mb-2">Arraste para explorar</p>
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#19D1E6]"
              style={{ width: `${dragProgress * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="relative cursor-grab active:cursor-grabbing">
        <motion.div
          ref={containerRef}
          drag="x"
          dragConstraints={constraints}
          onDrag={(e, info) => {
            if (constraints.left !== 0) {
              const progress = Math.abs(info.point.x / constraints.left)
              setDragProgress(Math.min(Math.max(progress, 0), 1))
            }
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="flex gap-6 px-6 select-none"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: Service, index: number }) {
  const handleClick = () => {
    if (service.title === "Design") {
      window.open('/design-system', '_blank')
    }
  }

  return (
    <motion.div
      className="relative flex-shrink-0 w-[85vw] md:w-[400px] h-[550px] rounded-[40px] overflow-hidden group border border-white/5 bg-[#0a1120] cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
      </div>

      <div className="relative z-10 h-full p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-xs font-mono text-[#19D1E6] tracking-[0.3em] uppercase">
            {service.tag}
          </span>
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#19D1E6] group-hover:border-[#19D1E6] transition-all duration-500">
            <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="text-[#FFFDD0] text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
            {service.title}
          </h3>
          <p className="text-[#B3CDD7]/60 text-lg font-light leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}


