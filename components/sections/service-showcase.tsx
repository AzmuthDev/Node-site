"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Service {
  title: string
  description: string
  tag: string
  link: string
  image: string
}

const services: Service[] = [
  {
    title: "Automação",
    description: "Integração de sistemas e fluxos de trabalho inteligentes para reduzir custos operacionais.",
    tag: "Workflow",
    link: "/automacao",
    image: "/images/automacao.jpg",
  },
  {
    title: "Design",
    description: "Interfaces (UI) e experiências (UX) focadas na jornada do usuário com estética premium.",
    tag: "UI/UX",
    link: "/design-system",
    image: "/images/design.jpg",
  },
  {
    title: "Site",
    description: "Desenvolvimento web de alta performance, utilizando as stacks mais modernas do mercado.",
    tag: "Web",
    link: "/#contato",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
  },
  {
    title: "Aplicativo",
    description: "Soluções mobile escaláveis e responsivas para conectar sua marca aos clientes em qualquer lugar.",
    tag: "Mobile",
    link: "/#contato",
    image: "/images/aplicativo.jpg",
  },
]

export function ServiceShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section 
      id="serviços"
      ref={containerRef} 
      onMouseMove={handleMouseMove} 
      className="relative w-full max-w-7xl mx-auto px-6 py-32 bg-[#020617]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-[#19D1E6]/20 bg-[#19D1E6]/5 text-[#19D1E6] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Nossas Especialidades
          </motion.div>
          <h2 className="text-[#B3CDD7] text-sm font-medium tracking-[0.2em] uppercase">
            Serviços que prestamos
          </h2>
        </div>
        <p className="text-[#B3CDD7]/50 max-w-sm text-sm font-light">
          Elevando o padrão digital com tecnologias de última geração e design disruptivo.
        </p>
      </div>

      {/* Container da imagem flutuante */}
      <div
        className="pointer-events-none absolute z-50 overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-sm"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${smoothPosition.x + 40}px, ${smoothPosition.y - 120}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), scale 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="relative w-[320px] h-[200px] bg-[#0a1120] rounded-xl overflow-hidden">
          {services.map((service, index) => (
            <img
              key={service.title}
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.2,
                filter: hoveredIndex === index ? "none" : "blur(20px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />
          
          {/* Subtle cyan glow on the image container */}
          <div className="absolute inset-0 border border-[#19D1E6]/20 rounded-xl pointer-events-none" />
        </div>
      </div>

      {/* Lista de Serviços */}
      <div className="border-t border-white/5">
        {services.map((service, index) => (
          <a
            key={service.title}
            href={service.link}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-10 border-b border-white/5 transition-all duration-500 ease-out">
              {/* Highlight background */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-gradient-to-r from-[#19D1E6]/5 to-transparent
                  transition-all duration-500 ease-out
                  ${hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                `}
              />

              <div className="relative flex items-center justify-between gap-8">
                <div className="flex items-center gap-12 flex-1 min-w-0">
                  <span className="hidden md:block text-xs font-mono text-[#B3CDD7]/20 tabular-nums">
                    0{index + 1}
                  </span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4">
                      <h3 className="text-[#FFFDD0] font-black text-3xl md:text-5xl tracking-tight group-hover:text-[#19D1E6] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <ArrowUpRight
                        className={`
                          w-6 h-6 text-[#19D1E6]
                          transition-all duration-500 ease-out
                          ${
                            hoveredIndex === index
                              ? "opacity-100 translate-x-0 translate-y-0 rotate-0"
                              : "opacity-0 -translate-x-4 translate-y-4 -rotate-45"
                          }
                        `}
                      />
                    </div>

                    <p
                      className={`
                        text-[#B3CDD7]/40 text-base md:text-lg mt-2 leading-relaxed max-w-xl
                        transition-all duration-500 ease-out
                        ${hoveredIndex === index ? "text-[#B3CDD7]/80" : ""}
                      `}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`
                      text-xs font-mono text-[#B3CDD7]/30 uppercase tracking-[0.2em]
                      transition-all duration-500 ease-out
                      ${hoveredIndex === index ? "text-[#19D1E6]" : ""}
                    `}
                  >
                    {service.tag}
                  </span>
                  <div className={`h-px bg-[#19D1E6]/40 transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
