"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft,
  Smartphone,
  Layers,
  Code,
  Rocket,
  Activity,
  ShieldCheck,
  Zap,
  CheckCircle,
  Play,
  User,
  Bell,
  Flame,
  Home,
  Search,
  Settings,
  ChevronRight,
  Dumbbell,
  Plus,
  TrendingUp,
  Target,
  Clock,
  Calendar
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Syncopate } from "next/font/google";
import Image from "next/image";

const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

export default function AplicativoPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "success", title: "Meta atingida!", time: "Agora", desc: "11k passos diários" },
    { id: 2, type: "warning", title: "Hora do treino", time: "Há 2 horas", desc: "Treino de Força agendado" },
    { id: 3, type: "info", title: "Novo Seguidor", time: "Há 5 horas", desc: "Ana começou a acompanhar você" }
  ]);
  const [workoutFilter, setWorkoutFilter] = useState("todos");

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "Mergulhamos no seu modelo de negócios para definir a arquitetura de informação e escopo tecnológico. Validamos ideias antes de escrever qualquer linha de código.",
      icon: <Layers className="w-6 h-6 text-pink-500" />,
      stats: ["Análise de Mercado", "Definição de KPIs", "Viabilidade Técnica"],
      color: "from-pink-500/10 to-transparent",
      borderColor: "hover:border-pink-500/50",
      iconBg: "bg-pink-500/10 border-pink-500/20",
      dotColor: "bg-pink-500",
      fontTitle: "font-mono font-black uppercase tracking-tight",
      numberColor: "group-hover:text-pink-500/10"
    },
    {
      id: "02",
      title: "UI/UX Prototyping",
      desc: "Desenhamos interfaces de alta fidelidade focadas na jornada do usuário. Criamos protótipos navegáveis para testes de usabilidade precisos.",
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      stats: ["Design System", "Wireframes", "Microinterações"],
      color: "from-cyan-400/10 to-transparent",
      borderColor: "hover:border-cyan-400/50",
      iconBg: "bg-cyan-400/10 border-cyan-400/20",
      dotColor: "bg-cyan-400",
      fontTitle: "font-sans font-black italic tracking-widest",
      numberColor: "group-hover:text-cyan-400/10"
    },
    {
      id: "03",
      title: "Engenharia Nativa",
      desc: "Desenvolvimento robusto em React Native, Flutter ou Swift/Kotlin. Integração com APIs complexas, bancos de dados em tempo real e arquitetura escalável.",
      icon: <Code className="w-6 h-6 text-amber-500" />,
      stats: ["Alta Performance", "Segurança Padrão Bancário", "Offline First"],
      color: "from-amber-500/10 to-transparent",
      borderColor: "hover:border-amber-500/50",
      iconBg: "bg-amber-500/10 border-amber-500/20",
      dotColor: "bg-amber-500",
      fontTitle: "font-serif font-black tracking-tight text-amber-50",
      numberColor: "group-hover:text-amber-500/10"
    },
    {
      id: "04",
      title: "Launch & Scale",
      desc: "Testes automatizados rigorosos, aprovação nas lojas (App Store e Google Play) e monitoramento contínuo de estabilidade pós-lançamento.",
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      stats: ["Deploy Contínuo", "Crashlytics", "Otimização de Store (ASO)"],
      color: "from-emerald-400/10 to-transparent",
      borderColor: "hover:border-emerald-400/50",
      iconBg: "bg-emerald-400/10 border-emerald-400/20",
      dotColor: "bg-emerald-400",
      fontTitle: "font-sans font-extrabold uppercase tracking-widest text-emerald-50",
      numberColor: "group-hover:text-emerald-400/10"
    }
  ];

  return (
    <main className={`relative min-h-screen bg-[#060608] text-white overflow-x-hidden ${syncopate.className} selection:bg-[#FF1E56]/30 selection:text-[#FF1E56]`}>
      {/* Animated Wavy Background & Translucent Logo */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 flex items-center justify-center">
        {/* Glass Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center z-0 animate-[pulse_10s_ease-in-out_infinite]">
          <Image 
            src="/images/node-logo.png" 
            alt="Node Logo" 
            width={800} 
            height={800} 
            className="w-[90vw] md:w-[60vw] max-w-[800px] object-contain invert opacity-[0.08] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
            priority 
          />
        </div>
        <svg viewBox="0 0 1440 800" className="w-full h-full object-cover relative z-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="primaryRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1E56" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF1E56" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF1E56" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="secondaryRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9D00FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#9D00FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9D00FF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Central Rotating Spiral Group */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "720px 400px" }}
          >
            {/* Secondary Ribbon Foreground (Purple) - No Blur */}
            <motion.path 
              animate={{
                d: [
                  "M400,-800 C1000,0 -200,800 600,1600",
                  "M300,-800 C1100,100 -300,700 700,1600",
                  "M400,-800 C1000,0 -200,800 600,1600"
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              fill="none"
              stroke="url(#secondaryRibbon)"
              strokeWidth="150"
              strokeLinecap="round"
            />

            {/* Primary Ribbon Foreground (Pink/Red) - No Blur */}
            <motion.path 
              animate={{
                d: [
                  "M1000,-800 C400,0 1600,800 800,1600",
                  "M1100,-800 C300,100 1700,700 700,1600",
                  "M1000,-800 C400,0 1600,800 800,1600"
                ]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              fill="none"
              stroke="url(#primaryRibbon)"
              strokeWidth="200"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      </div>

      {/* Background Gradients & Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
           
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px] opacity-20 z-0"
           style={{ background: "radial-gradient(circle, #FF1E56 0%, transparent 70%)" }} />
           
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none blur-[150px] opacity-10 z-0"
           style={{ background: "radial-gradient(circle, #9D00FF 0%, transparent 70%)" }} />

      {/* Navigation Top Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-50 max-w-[1200px] mx-auto px-6 py-8 flex justify-between items-center"
      >
        <button 
          onClick={() => router.push('/#serviços')}
          className="flex items-center gap-3 text-xs font-black tracking-widest uppercase hover:text-[#FF1E56] transition-colors group bg-white/5 border border-white/10 px-5 py-3 rounded-full backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar
        </button>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1E56] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1E56]"></span>
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50">SISTEMAS MOBILE</span>
        </div>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        {/* HERO SECTION */}
        <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 pb-20 items-center min-h-[70vh]">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF1E56]/20 to-transparent border border-[#FF1E56]/30 px-4 py-2 rounded-full backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-[#FF1E56]" />
              <span className="text-[10px] font-black tracking-widest uppercase text-[#FF1E56]">Next-Gen Mobile Apps</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter uppercase"
            >
              TRANSFORMANDO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FF1E56]/80">
                IDEIAS EM
              </span> <br />
              <span className="text-[#FF1E56]">SUCESSO.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/50 max-w-lg leading-relaxed font-light"
            >
              Construímos ecossistemas mobile nativos e híbridos projetados para reter usuários, maximizar conversões e dominar as lojas de aplicativos. Do protótipo ao topo dos rankings.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button 
                onClick={() => {
                   document.getElementById("processo")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#FF1E56] hover:bg-[#E60049] text-white px-8 py-4 rounded-full text-xs font-black tracking-widest uppercase transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,30,86,0.3)]"
              >
                Ver Processo <ArrowLeft className="w-4 h-4 rotate-[-90deg]" />
              </button>
            </motion.div>
          </div>

          {/* Right Visual / Mockup */}
          <div className="lg:col-span-5 relative h-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            {mounted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                className="relative w-full max-w-[320px] aspect-[1/2] perspective-[1000px]"
              >
                {/* Main Phone Mockup */}
                <div className="absolute inset-0 bg-[#0a0a0c] border-[8px] border-white/10 rounded-[48px] shadow-[0_30px_100px_rgba(255,30,86,0.2)] overflow-hidden flex flex-col z-20">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-3xl backdrop-blur-md z-30" />
                  
                  {/* App Screen Content */}
                  <div className="flex-1 bg-[#0a0a0c] relative overflow-hidden flex flex-col">
                    <AnimatePresence>
                      {activeTab === "home" && (
                        <motion.div 
                          key="home"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 pt-10 px-5 flex flex-col z-10 bg-[#0a0a0c]"
                        >
                          {/* Header */}
                          <div className="flex justify-between items-center mb-6 z-10 relative flex-shrink-0">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF1E56] to-orange-400 p-[2px]">
                                <div className="w-full h-full rounded-full bg-[#1a1a24] flex items-center justify-center overflow-hidden">
                                  <User className="w-5 h-5 text-white/70" />
                                </div>
                              </div>
                              <div>
                                <p className="text-[10px] text-white/50">Olá, Bom dia!</p>
                                <p className="text-sm font-bold text-white">MALTONY</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => setShowNotifications(!showNotifications)}
                              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 relative hover:bg-white/10 transition-colors cursor-pointer"
                            >
                              <Bell className="w-4 h-4 text-white/70" />
                              {notifications.length > 0 && (
                                <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF1E56] rounded-full animate-pulse shadow-[0_0_10px_#FF1E56]" />
                              )}
                            </button>
                          </div>

                          {/* Notifications Dropdown */}
                          <AnimatePresence>
                            {showNotifications && (
                              <>
                                <motion.div 
                                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                  className="absolute inset-0 z-40"
                                  onClick={() => setShowNotifications(false)}
                                />
                                <motion.div 
                                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                  className="absolute top-16 right-4 w-64 bg-[#1a1a24]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                                >
                                  <div className="p-3 border-b border-white/5 bg-white/5 flex justify-between items-center">
                                    <p className="text-xs font-bold text-white">Notificações</p>
                                    {notifications.length > 0 && (
                                      <button onClick={() => setNotifications([])} className="text-[9px] text-[#FF1E56] hover:text-white transition-colors font-bold uppercase tracking-wider">Limpar Tudo</button>
                                    )}
                                  </div>
                                  <div className="p-2 max-h-56 overflow-y-auto scrollbar-hide">
                                    <AnimatePresence mode="popLayout">
                                      {notifications.length === 0 ? (
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] text-white/30 text-center py-6">Nenhuma notificação nova.</motion.p>
                                      ) : (
                                        notifications.map((notif) => (
                                          <motion.div 
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95, x: 20 }}
                                            key={notif.id}
                                            onClick={() => setNotifications(prev => prev.filter(n => n.id !== notif.id))}
                                            className="flex gap-3 items-center p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group mb-1"
                                          >
                                            <div className={`w-2 h-2 rounded-full flex-shrink-0 shadow-lg ${notif.type === 'success' ? 'bg-[#FF1E56] shadow-[#FF1E56]/50' : notif.type === 'warning' ? 'bg-orange-500 shadow-orange-500/50' : 'bg-blue-500 shadow-blue-500/50'}`} />
                                            <div className="flex-1">
                                              <p className="text-[10px] text-white font-bold group-hover:text-[#FF1E56] transition-colors line-clamp-1">{notif.title}</p>
                                              <p className="text-[9px] text-white/50 line-clamp-1 mt-0.5">{notif.desc}</p>
                                              <p className="text-[8px] text-white/30 mt-1">{notif.time}</p>
                                            </div>
                                          </motion.div>
                                        ))
                                      )}
                                    </AnimatePresence>
                                  </div>
                                </motion.div>
                              </>
                            )}
                          </AnimatePresence>

                          {/* Daily Activity Ring */}
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#1a1a24] rounded-3xl p-5 mb-5 border border-white/5 flex justify-between items-center z-10 relative shadow-xl flex-shrink-0"
                          >
                            <div>
                              <p className="text-xs text-white/50 mb-1">Passos Diários</p>
                              <p className="text-2xl font-black text-white">11.000<span className="text-[10px] font-normal text-white/30 ml-1">/ 16k</span></p>
                              <p className="text-[10px] text-[#FF1E56] mt-2 flex items-center gap-1 font-bold">
                                <Flame className="w-3 h-3"/> 440 Cal
                              </p>
                            </div>
                            <div className="relative w-[60px] h-[60px] flex items-center justify-center">
                              <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_10px_rgba(255,30,86,0.3)]" viewBox="0 0 36 36">
                                <path
                                  className="text-white/5"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                  fill="none" stroke="currentColor" strokeWidth="4"
                                />
                                <motion.path
                                  initial={{ strokeDasharray: "0, 100" }}
                                  animate={{ strokeDasharray: "75, 100" }}
                                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                  className="text-[#FF1E56]"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                  fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                                />
                              </svg>
                            </div>
                          </motion.div>

                          {/* Workouts List Header */}
                          <div className="flex flex-col mb-4 z-10 relative px-1 flex-shrink-0">
                            <div className="flex justify-between items-end mb-3">
                              <p className="text-sm font-bold text-white">Seus Treinos</p>
                              <p className="text-[10px] text-[#FF1E56] font-bold cursor-pointer hover:underline">Ver todos</p>
                            </div>
                            <div className="flex gap-2">
                              <button onClick={() => setWorkoutFilter('todos')} className={`text-[9px] px-3 py-1 rounded-full border transition-colors ${workoutFilter === 'todos' ? 'border-[#FF1E56] bg-[#FF1E56]/10 text-[#FF1E56]' : 'border-white/10 text-white/50 hover:bg-white/5'}`}>Todos</button>
                              <button onClick={() => setWorkoutFilter('cardio')} className={`text-[9px] px-3 py-1 rounded-full border transition-colors ${workoutFilter === 'cardio' ? 'border-[#FF1E56] bg-[#FF1E56]/10 text-[#FF1E56]' : 'border-white/10 text-white/50 hover:bg-white/5'}`}>Cardio</button>
                              <button onClick={() => setWorkoutFilter('forca')} className={`text-[9px] px-3 py-1 rounded-full border transition-colors ${workoutFilter === 'forca' ? 'border-[#FF1E56] bg-[#FF1E56]/10 text-[#FF1E56]' : 'border-white/10 text-white/50 hover:bg-white/5'}`}>Força</button>
                            </div>
                          </div>

                          {/* Scrollable List */}
                          <div className="space-y-3 flex-1 overflow-y-auto z-10 pb-24 pr-1 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <AnimatePresence mode="popLayout">
                              {(workoutFilter === 'todos' || workoutFilter === 'cardio') && (
                                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white/5 rounded-2xl p-3 flex items-center justify-between border border-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#FF1E56]/10 flex items-center justify-center">
                                      <Activity className="w-5 h-5 text-[#FF1E56]"/>
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold text-white">Caminhada Indoor</p>
                                      <p className="text-[10px] text-white/50">2.44 km <span className="mx-1">•</span> Hoje</p>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-white/20" />
                                </motion.div>
                              )}
                              
                              {(workoutFilter === 'todos' || workoutFilter === 'cardio') && (
                                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white/5 rounded-2xl p-3 flex items-center justify-between border border-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                      <Flame className="w-5 h-5 text-orange-500"/>
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold text-white">Corrida Matinal</p>
                                      <p className="text-[10px] text-white/50">3.88 km <span className="mx-1">•</span> Ontem</p>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-white/20" />
                                </motion.div>
                              )}
                              
                              {(workoutFilter === 'todos' || workoutFilter === 'forca') && (
                                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white/5 rounded-2xl p-3 flex items-center justify-between border border-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                      <Dumbbell className="w-5 h-5 text-purple-400"/>
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold text-white">Treino de Força</p>
                                      <p className="text-[10px] text-white/50">45 min <span className="mx-1">•</span> Terça</p>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-white/20" />
                                </motion.div>
                              )}

                              {(workoutFilter === 'todos' || workoutFilter === 'cardio') && (
                                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white/5 rounded-2xl p-3 flex items-center justify-between border border-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                      <Activity className="w-5 h-5 text-blue-400"/>
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold text-white">Natação</p>
                                      <p className="text-[10px] text-white/50">1.2 km <span className="mx-1">•</span> Segunda</p>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-white/20" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "activity" && (
                        <motion.div 
                          key="activity"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 pt-10 px-5 flex flex-col items-center justify-center z-10 bg-[#0a0a0c]"
                        >
                           <div className="w-20 h-20 bg-gradient-to-tr from-[#FF1E56] to-orange-400 rounded-3xl flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(255,30,86,0.3)]">
                             <Activity className="w-10 h-10 text-white" />
                           </div>
                           <h3 className="text-xl font-bold text-white mb-2">Relatório Simplificado</h3>
                           <p className="text-center text-xs text-white/50 mb-8 leading-relaxed">
                             Visualize seus ganhos de saúde em um formato objetivo. Ideal para telas que exigem menos distração.
                           </p>
                           <div className="w-full bg-[#1a1a24] rounded-2xl p-4 border border-white/5">
                             <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-3">
                                <span className="text-xs text-white/50">Meta da Semana</span>
                                <span className="text-xs font-bold text-[#FF1E56]">80% Concluída</span>
                             </div>
                             <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }} 
                                  animate={{ width: "80%" }} 
                                  transition={{ duration: 1, delay: 0.2 }} 
                                  className="h-full bg-gradient-to-r from-[#FF1E56] to-orange-400" 
                                />
                             </div>
                           </div>
                        </motion.div>
                      )}

                      {activeTab === "search" && (
                        <motion.div 
                          key="search"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 pt-10 px-5 flex flex-col z-10 bg-[#0a0a0c]"
                        >
                          <div className="relative mb-6 mt-4">
                            <input type="text" placeholder="Buscar treinos, amigos..." className="w-full bg-[#1a1a24] text-white text-xs px-4 py-3 pl-10 rounded-xl border border-white/10 outline-none focus:border-[#FF1E56]/50 transition-colors placeholder:text-white/30" />
                            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                          </div>
                          <h3 className="text-sm font-bold text-white mb-3">Em Alta</h3>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {['Crossfit', 'HIIT', 'Yoga', 'Pilates'].map((tag) => (
                              <span key={tag} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/70 cursor-pointer hover:bg-white/10 transition-colors">{tag}</span>
                            ))}
                          </div>
                          <h3 className="text-sm font-bold text-white mb-3">Categorias</h3>
                          <div className="grid grid-cols-2 gap-3 pb-24 overflow-y-auto scrollbar-hide">
                             <div className="bg-gradient-to-br from-blue-500/10 to-blue-900/20 p-4 rounded-2xl border border-blue-500/20 cursor-pointer hover:border-blue-500/50 transition-colors">
                               <Target className="w-6 h-6 text-blue-400 mb-2" />
                               <p className="text-xs font-bold text-white">Resistência</p>
                             </div>
                             <div className="bg-gradient-to-br from-orange-500/10 to-orange-900/20 p-4 rounded-2xl border border-orange-500/20 cursor-pointer hover:border-orange-500/50 transition-colors">
                               <TrendingUp className="w-6 h-6 text-orange-400 mb-2" />
                               <p className="text-xs font-bold text-white">Hipertrofia</p>
                             </div>
                             <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-900/20 p-4 rounded-2xl border border-emerald-500/20 cursor-pointer hover:border-emerald-500/50 transition-colors">
                               <Clock className="w-6 h-6 text-emerald-400 mb-2" />
                               <p className="text-xs font-bold text-white">Cardio Rápido</p>
                             </div>
                             <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/20 p-4 rounded-2xl border border-purple-500/20 cursor-pointer hover:border-purple-500/50 transition-colors">
                               <Calendar className="w-6 h-6 text-purple-400 mb-2" />
                               <p className="text-xs font-bold text-white">Planos</p>
                             </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "add" && (
                        <motion.div 
                          key="add"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 pt-10 px-5 flex flex-col items-center justify-center z-20 bg-gradient-to-b from-[#0a0a0c] to-[#1a1a24]"
                        >
                           <div className="w-16 h-16 bg-[#FF1E56]/20 rounded-full flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(255,30,86,0.2)]">
                             <Plus className="w-8 h-8 text-[#FF1E56]" />
                           </div>
                           <h3 className="text-xl font-bold text-white mb-2">Novo Registro</h3>
                           <p className="text-center text-xs text-white/50 mb-8">O que você deseja registrar hoje?</p>
                           
                           <div className="w-full space-y-3">
                             <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl flex items-center gap-4 transition-colors group">
                               <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                                 <Flame className="w-5 h-5 text-orange-500" />
                               </div>
                               <div className="text-left flex-1">
                                 <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">Treino Manual</p>
                                 <p className="text-[10px] text-white/50">Adicionar calorias e tempo</p>
                               </div>
                               <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                             </button>
                             <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl flex items-center gap-4 transition-colors group">
                               <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                 <Activity className="w-5 h-5 text-blue-500" />
                               </div>
                               <div className="text-left flex-1">
                                 <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Nova Meta</p>
                                 <p className="text-[10px] text-white/50">Definir objetivos da semana</p>
                               </div>
                               <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                             </button>
                           </div>
                        </motion.div>
                      )}

                      {activeTab === "profile" && (
                        <motion.div 
                          key="profile"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 pt-10 px-5 flex flex-col z-10 bg-[#0a0a0c]"
                        >
                           <h3 className="text-xl font-bold text-white mb-8 text-center mt-4">Perfil de Usuário</h3>
                           <div className="flex flex-col items-center mb-8">
                             <div className="w-24 h-24 rounded-full bg-[#FF1E56]/10 border-2 border-[#FF1E56] flex items-center justify-center mb-4 relative shadow-[0_0_20px_rgba(255,30,86,0.2)]">
                                <User className="w-10 h-10 text-[#FF1E56]" />
                             </div>
                             <p className="text-lg font-bold text-white">MALTONY</p>
                             <p className="text-xs text-[#FF1E56] bg-[#FF1E56]/10 px-3 py-1 rounded-full mt-2 font-medium">Plano Premium</p>
                           </div>
                           <div className="space-y-2">
                             <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                               <span className="text-sm text-white/70 group-hover:text-white transition-colors">Configurações de Conta</span>
                               <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                             </div>
                             <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                               <span className="text-sm text-white/70 group-hover:text-white transition-colors">Privacidade Simplificada</span>
                               <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                             </div>
                             <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                               <span className="text-sm text-white/70 group-hover:text-white transition-colors">Histórico de Atividades</span>
                               <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                             </div>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Nav Fade out */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent pointer-events-none z-20" />

                    {/* Bottom Nav */}
                    <div className="absolute bottom-4 left-4 right-4 h-14 bg-[#1a1a24]/90 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-between px-6 shadow-2xl z-30">
                       <Home 
                         onClick={() => setActiveTab("home")} 
                         className={`w-5 h-5 cursor-pointer transition-colors ${activeTab === 'home' ? 'text-[#FF1E56]' : 'text-white/30 hover:text-white/70 hover:scale-110'}`} 
                       />
                       <Activity 
                         onClick={() => setActiveTab("activity")} 
                         className={`w-5 h-5 cursor-pointer transition-colors ${activeTab === 'activity' ? 'text-[#FF1E56]' : 'text-white/30 hover:text-white/70 hover:scale-110'}`} 
                       />
                       <div 
                         onClick={() => setActiveTab("add")} 
                         className={`w-12 h-12 rounded-full bg-[#FF1E56] flex items-center justify-center -translate-y-4 shadow-[0_10px_20px_rgba(255,30,86,0.3)] cursor-pointer hover:scale-110 transition-all duration-300 ${activeTab === 'add' ? 'scale-110 ring-4 ring-[#FF1E56]/30' : ''}`}
                       >
                          <Plus className={`w-6 h-6 text-white transition-transform duration-300 ${activeTab === 'add' ? 'rotate-45' : ''}`} />
                       </div>
                       <Search 
                         onClick={() => setActiveTab("search")} 
                         className={`w-5 h-5 cursor-pointer transition-colors ${activeTab === 'search' ? 'text-[#FF1E56]' : 'text-white/30 hover:text-white/70 hover:scale-110'}`} 
                       />
                       <User 
                         onClick={() => setActiveTab("profile")} 
                         className={`w-5 h-5 cursor-pointer transition-colors ${activeTab === 'profile' ? 'text-[#FF1E56]' : 'text-white/30 hover:text-white/70 hover:scale-110'}`} 
                       />
                    </div>
                  </div>
                </div>

                {/* Floating Glass Panels (Like Octo SMM reference) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 top-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl z-30 shadow-2xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/50 block">Retenção de Usuários</span>
                    <span className="text-xl font-black text-white">88%</span>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-16 bottom-32 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl z-30 shadow-2xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF1E56]/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#FF1E56]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/50 block">Segurança Nativa</span>
                    <span className="text-xl font-black text-white">100%</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>

        {/* METRICS & INTERACTIVE CHARTS */}
        <section className="relative z-10 py-20 mb-32" style={{ perspective: 2000 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 font-sans">
            
            {/* Projetos Lançados - Bar Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, zIndex: 50 }}
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-3xl p-6 hover:border-[#FF1E56]/40 hover:shadow-[0_20px_40px_rgba(255,30,86,0.15)] transition-all duration-300 group cursor-pointer relative overflow-hidden backdrop-blur-2xl flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF1E56]/0 to-[#FF1E56]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-end mb-6 h-24 border-b border-white/5 pb-2 gap-2 relative" style={{ transform: "translateZ(20px)" }}>
                {[40, 70, 45, 90, 60, 100].map((height, i) => (
                  <div key={i} className="w-full h-full bg-white/5 rounded-t-lg relative group-hover:bg-white/10 transition-colors flex items-end justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="w-full bg-gradient-to-t from-[#FF1E56]/50 to-[#FF1E56] rounded-t-lg shadow-[0_0_10px_rgba(255,30,86,0.5)] group-hover:opacity-100 opacity-80"
                    />
                  </div>
                ))}
              </div>
              <div className="relative" style={{ transform: "translateZ(30px)" }}>
                <h4 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-[#FF1E56] group-hover:drop-shadow-[0_0_10px_rgba(255,30,86,0.8)] transition-all">230+</h4>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">Projetos Lançados</span>
              </div>
            </motion.div>

            {/* Avaliações 5 Estrelas - Radial Progress */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, zIndex: 50 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-3xl p-6 hover:border-orange-500/40 hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6 h-24 items-center relative" style={{ transform: "translateZ(20px)" }}>
                <div className="relative w-24 h-24 flex items-center justify-center">
                  {/* Inner Spinning Ring */}
                  <motion.svg animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full opacity-30 text-orange-500" viewBox="0 0 36 36">
                     <path strokeDasharray="5, 5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="1" />
                  </motion.svg>
                  {/* Outer Main Ring */}
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" viewBox="0 0 36 36">
                    <path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <motion.path
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: "98, 100" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="text-orange-500"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    />
                  </svg>
                  <div className="relative z-10 flex items-center justify-center" style={{ transform: "translateZ(10px)" }}>
                    <span className="text-xl font-black text-white group-hover:text-orange-400 transition-colors">4.9</span>
                  </div>
                </div>
              </div>
              <div className="relative" style={{ transform: "translateZ(30px)" }}>
                <h4 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-orange-500 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all">4.9</h4>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">Avaliações 5 Estrelas</span>
              </div>
            </motion.div>

            {/* Tempo de Carregamento - Line Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, zIndex: 50 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-3xl p-6 hover:border-emerald-500/40 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Background Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              
              <div className="flex justify-center mb-6 h-24 items-center w-full relative" style={{ transform: "translateZ(20px)" }}>
                 <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible drop-shadow-[0_5px_10px_rgba(16,185,129,0.4)]">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M0,35 Q15,10 30,25 T60,15 T100,5"
                      fill="none"
                      stroke="url(#emeraldGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <motion.circle 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                      cx="100" cy="5" r="4.5" fill="#10b981" className="drop-shadow-[0_0_8px_#10b981]"
                    />
                 </svg>
              </div>
              <div className="relative" style={{ transform: "translateZ(30px)" }}>
                <h4 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-emerald-500 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all">&lt;1s</h4>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">Tempo de Carregamento</span>
              </div>
            </motion.div>

            {/* ROI Médio - Area Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, zIndex: 50 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-3xl p-6 hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-center mb-6 h-24 items-end w-full relative" style={{ transform: "translateZ(20px)" }}>
                 <svg viewBox="0 0 100 50" className="w-full h-full absolute bottom-0 left-0">
                    <defs>
                      <linearGradient id="blueArea" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="blueAreaDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Background Wave (3D effect) */}
                    <motion.path 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      d="M0,50 L0,40 Q25,25 50,30 T100,15 L100,50 Z"
                      fill="url(#blueAreaDark)"
                      className="group-hover:-translate-y-1 transition-transform duration-500"
                    />

                    {/* Foreground Wave */}
                    <motion.path 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      d="M0,50 L0,30 Q25,35 50,20 T100,5 L100,50 Z"
                      fill="url(#blueArea)"
                      className="group-hover:translate-y-1 group-hover:scale-105 origin-bottom transition-transform duration-500"
                    />
                    
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                      d="M0,30 Q25,35 50,20 T100,5"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2.5"
                      className="drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] group-hover:translate-y-1 group-hover:scale-105 origin-bottom transition-transform duration-500"
                    />
                 </svg>
              </div>
              <div className="relative" style={{ transform: "translateZ(30px)" }}>
                <h4 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all">95%</h4>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">ROI Médio de Clientes</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CONSTRUCTION & MODELING PROCESS */}
        <section id="processo" className="relative z-10 pt-10">
          <div className="mb-16 text-center md:text-left">
            <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-4 uppercase">
              METODOLOGIA DE DESENVOLVIMENTO
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-none uppercase max-w-2xl">
              COMO CONSTRUÍMOS O SEU <br />
              <span className="text-[#FF1E56]">APLICATIVO DO ZERO.</span>
            </h2>
            <p className="mt-6 text-white/40 max-w-xl text-sm leading-relaxed">
              Desenvolver um aplicativo não é apenas sobre código. É sobre entender o usuário, validar o mercado e criar uma arquitetura sólida. Veja as etapas da nossa modelagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/[0.02] border border-white/[0.05] ${step.borderColor} backdrop-blur-2xl p-8 rounded-3xl group transition-all duration-500 relative overflow-hidden flex flex-col`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className={`absolute top-0 right-0 p-4 text-7xl font-black text-white/5 ${step.numberColor} transition-colors pointer-events-none font-mono`}>
                  {step.id}
                </div>
                
                <div className={`w-14 h-14 ${step.iconBg} rounded-2xl flex items-center justify-center mb-8 border relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500`}>
                  {step.icon}
                </div>
                
                <h3 className={`text-sm lg:text-base mb-4 relative z-10 leading-snug ${step.fontTitle}`}>{step.title}</h3>
                <p className="text-[9px] lg:text-[10px] text-white/50 leading-[1.8] font-light mb-6 flex-1 relative z-10 group-hover:text-white/80 transition-colors">
                  {step.desc}
                </p>

                <div className="space-y-3 pt-6 border-t border-white/5 relative z-10 mt-auto">
                  {step.stats.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[8px] lg:text-[9px] font-mono text-white/60 uppercase tracking-wider group-hover:text-white/90 transition-colors">
                      <div className={`w-1.5 h-1.5 ${step.dotColor} rounded-full flex-shrink-0 shadow-[0_0_8px_currentColor]`} />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 mt-32">
          <div className="bg-gradient-to-br from-[#1a0510] to-[#0a0205] border border-[#FF1E56]/20 rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[#FF1E56] opacity-10 blur-[150px] pointer-events-none" />
            
            {/* 3D Floating Shards (Retalhos) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[48px]" style={{ perspective: 1000 }}>
               <motion.svg 
                 animate={{ y: [-20, 20, -20], rotateX: [10, 40, 10], rotateY: [20, 50, 20], rotateZ: [10, -10, 10] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 left-[10%] w-32 h-32 opacity-60 drop-shadow-2xl" 
                 viewBox="0 0 100 100"
               >
                 <polygon points="50,0 100,20 80,100 0,60" fill="url(#glass1)" stroke="#FF1E56" strokeWidth="1" strokeOpacity="0.5"/>
                 <defs>
                   <linearGradient id="glass1" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#FF1E56" stopOpacity="0.3" />
                     <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                   </linearGradient>
                 </defs>
               </motion.svg>
               
               <motion.svg 
                 animate={{ y: [20, -20, 20], rotateX: [-20, -50, -20], rotateY: [-10, 20, -10], rotateZ: [-20, 10, -20] }}
                 transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-10 right-[15%] w-48 h-48 opacity-40 drop-shadow-2xl" 
                 viewBox="0 0 100 100"
               >
                 <polygon points="20,0 100,50 60,100 0,30" fill="url(#glass2)" stroke="#9D00FF" strokeWidth="1" strokeOpacity="0.4"/>
                 <defs>
                   <linearGradient id="glass2" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#9D00FF" stopOpacity="0.2" />
                     <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                   </linearGradient>
                 </defs>
               </motion.svg>

               <motion.svg 
                 animate={{ y: [-15, 15, -15], rotateX: [30, 10, 30], rotateY: [30, 50, 30], rotateZ: [45, 60, 45] }}
                 transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                 className="absolute top-1/2 left-[70%] w-24 h-24 opacity-50 drop-shadow-2xl" 
                 viewBox="0 0 100 100"
               >
                 <polygon points="0,50 50,0 100,50 50,100" fill="url(#glass3)" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2"/>
                 <defs>
                   <linearGradient id="glass3" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                     <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
                   </linearGradient>
                 </defs>
               </motion.svg>

               <motion.svg 
                 animate={{ y: [10, -10, 10], rotateX: [-30, -10, -30], rotateY: [-30, -50, -30], rotateZ: [-45, -60, -45] }}
                 transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 className="absolute top-20 right-[40%] w-16 h-16 opacity-70 drop-shadow-2xl" 
                 viewBox="0 0 100 100"
               >
                 <polygon points="30,0 100,40 70,100 0,60" fill="url(#glass4)" stroke="#FF1E56" strokeWidth="1" strokeOpacity="0.6"/>
                 <defs>
                   <linearGradient id="glass4" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#FF1E56" stopOpacity="0.5" />
                     <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                   </linearGradient>
                 </defs>
               </motion.svg>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter relative z-10">
              PRONTO PARA LANÇAR O <br />
              <span className="text-[#FF1E56]">SEU APLICATIVO?</span>
            </h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto mb-10 relative z-10">
              Traga sua visão. Nós trazemos o time de engenharia e design de ponta. Juntos, vamos construir o próximo app de sucesso do mercado.
            </p>

            <motion.button 
              onClick={() => router.push('/#contato')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 group overflow-hidden rounded-full p-[2px] shadow-[0_0_40px_rgba(255,30,86,0.3)] hover:shadow-[0_0_60px_rgba(255,30,86,0.6)] transition-all duration-500"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1a0510_0%,#FF1E56_50%,#1a0510_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#060608] text-white px-10 py-5 rounded-full text-xs font-black tracking-widest uppercase flex items-center justify-center gap-4 backdrop-blur-xl transition-all">
                <span className="relative z-10 text-white/90 group-hover:text-white transition-colors duration-500">
                  Falar com Engenheiro Mobile
                </span>
                <div className="w-6 h-6 rounded-full bg-[#FF1E56]/20 flex items-center justify-center group-hover:bg-[#FF1E56] transition-colors duration-300">
                  <svg className="w-3 h-3 text-[#FF1E56] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.button>
          </div>
        </section>

      </div>
    </main>
  );
}
