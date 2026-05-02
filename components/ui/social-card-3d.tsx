"use client"

import React from "react"
import { motion } from "framer-motion"

// Custom SVG Icons to replace missing Lucide icons in this version
const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

export const SocialCard3D = () => {
  return (
    <div className="parent w-[290px] h-[300px] [perspective:1000px] group/card">
      <div className="card relative h-full rounded-[50px] bg-gradient-to-br from-[#19D1E6] to-[#0a1120] transition-all duration-500 [transform-style:preserve-3d] group-hover/card:[transform:rotate3d(1,1,0,30deg)] shadow-2xl">
        
        {/* Glass Layer */}
        <div className="glass absolute inset-2 rounded-[55px] rounded-tr-[100%] bg-white/10 border-l border-b border-white/20 [transform:translate3d(0,0,25px)] [transform-style:preserve-3d] backdrop-blur-sm transition-all duration-500" />

        {/* Logo Circles */}
        <div className="logo-circles absolute right-0 top-0 [transform-style:preserve-3d]">
          <div className="absolute top-2 right-2 w-[170px] aspect-square rounded-full bg-[#19D1E6]/10 [transform:translate3d(0,0,20px)] backdrop-blur-md" />
          <div className="absolute top-3 right-3 w-[140px] aspect-square rounded-full bg-[#19D1E6]/5 [transform:translate3d(0,0,40px)] group-hover/card:[transform:translate3d(0,0,60px)] transition-all duration-500 delay-100" />
          <div className="absolute top-4 right-4 w-[110px] aspect-square rounded-full bg-[#19D1E6]/5 [transform:translate3d(0,0,60px)] group-hover/card:[transform:translate3d(0,0,80px)] transition-all duration-500 delay-200" />
          <div className="absolute top-5 right-5 w-[80px] aspect-square rounded-full bg-[#19D1E6]/5 [transform:translate3d(0,0,80px)] group-hover/card:[transform:translate3d(0,0,100px)] transition-all duration-500 delay-300" />
          <div className="absolute top-8 right-8 w-[50px] aspect-square rounded-full bg-[#020617] [transform:translate3d(0,0,100px)] group-hover/card:[transform:translate3d(0,0,120px)] transition-all duration-500 delay-500 flex items-center justify-center p-3 shadow-xl">
             <img 
               src="/images/node-logo.png" 
               alt="Node" 
               className="w-full h-auto" 
               style={{ filter: 'invert(76%) sepia(88%) saturate(1487%) hue-rotate(143deg) brightness(101%) contrast(101%)' }}
             />
          </div>
        </div>

        {/* Content */}
        <div className="content relative z-10 p-10 pt-24 [transform:translate3d(0,0,26px)]">
          <span className="title block text-[#020617] font-black text-xl leading-tight">
            Node <br /> Agency
          </span>
          <span className="text block text-[#020617]/70 text-sm mt-4 font-medium leading-relaxed">
            Siga-nos em nossas outras redes sociais
          </span>
        </div>

        {/* Bottom / Social Buttons */}
        <div className="bottom absolute bottom-6 left-6 right-6 flex items-center justify-between [transform:translate3d(0,0,26px)] [transform-style:preserve-3d]">
          <div className="social-buttons flex gap-3 [transform-style:preserve-3d]">
            <SocialButton icon={<Instagram className="w-4 h-4" />} delay="0.4s" href="#" />
            <SocialButton icon={<Github className="w-4 h-4" />} delay="0.6s" href="#" />
            <SocialButton icon={<Linkedin className="w-4 h-4" />} delay="0.8s" href="#" />
          </div>
          
          <button className="view-more flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#020617] hover:[transform:translate3d(0,0,10px)] transition-all">
            Ver mais
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

const SocialButton = ({ icon, delay, href }: { icon: React.ReactNode, delay: string, href: string }) => (
  <a 
    href={href}
    className="social-button w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#020617] shadow-lg hover:bg-black hover:text-white transition-all duration-300 group-hover/card:[transform:translate3d(0,0,50px)]"
    style={{ transitionDelay: delay }}
  >
    {icon}
  </a>
)
