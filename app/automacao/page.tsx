"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft,
  Zap,
  Cpu,
  Layers,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Play,
  RotateCcw,
  ArrowRight,
  Database,
  Workflow,
  Settings,
  Flame,
  FileText
} from "lucide-react";
import { GradientBars } from "@/components/ui/gradient-bars-background";

export default function AutomacaoPage() {
  // Simulator State
  const [simStatus, setSimStatus] = useState<"idle" | "running" | "completed">("idle");
  const [activeStep, setActiveStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const steps = [
    { title: "Mapeamento", desc: "Triagem de dados operacionais e APIs" },
    { title: "Processamento", desc: "Higienização e estruturação inteligente" },
    { title: "Integração", desc: "Roteamento de fluxos via RPA" },
    { title: "Finalização", desc: "Distribuição e relatórios unificados" }
  ];

  const handleStartSimulation = () => {
    if (simStatus === "running") return;
    
    setSimStatus("running");
    setActiveStep(0);
    setLogs(["[0.0s] ⚡ Inicializando NODE RPA Hub...", "[0.2s] 🔍 Mapeando fluxos operacionais de entrada..."]);
    
    setTimeout(() => {
      setActiveStep(1);
      setLogs(prev => [...prev, "[1.2s] ⚙️ Processando e estruturando dados brutos...", "[1.5s] 🛡️ Validando regras de conformidade (LGPD/Audit)..."]);
    }, 1200);

    setTimeout(() => {
      setActiveStep(2);
      setLogs(prev => [...prev, "[2.4s] ⛓️ Orquestrando conexões via APIs Personalizadas...", "[2.8s] 🚀 RPA executando tarefas legadas em milissegundos..."]);
    }, 2400);

    setTimeout(() => {
      setActiveStep(3);
      setLogs(prev => [...prev, "[3.6s] 📊 Alimentando Dashboards e KPIs...", "[3.9s] ✅ Go-Live! Operação concluída com sucesso!"]);
      setSimStatus("completed");
    }, 3600);
  };

  const handleResetSimulation = () => {
    setSimStatus("idle");
    setActiveStep(0);
    setLogs([]);
  };

  // Stat Count-up
  useEffect(() => {
    if (simStatus === "completed") {
      let current = 0;
      const interval = setInterval(() => {
        current += 5;
        if (current >= 85) {
          setCount(85);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, 50);
      return () => clearInterval(interval);
    } else {
      setCount(0);
    }
  }, [simStatus]);

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden font-sans selection:bg-[#EA6113]/30 selection:text-[#EA6113]">
      {/* Gradient Bars Background */}
      <div className="fixed inset-0 -z-10 bg-[#050508] pointer-events-none">
        <GradientBars
          numBars={19}
          gradientFrom="rgba(234, 97, 19, 0.6)"
          gradientTo="rgba(234, 97, 19, 0)"
          animationDuration={2.5}
        />
      </div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Main Container */}
      <div className="max-w-[1100px] mx-auto px-6 py-12 lg:py-24">
        
        {/* Header Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-[32px] px-8 py-4 mb-16"
        >
          <Link href="/" className="flex items-center gap-3 text-xs font-black tracking-widest uppercase hover:text-[#EA6113] transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Link>
          <div className="bg-white/10 px-4 py-2 rounded-2xl text-[10px] font-black tracking-widest text-[#EA6113] uppercase">
            NODE AUTOMATION
          </div>
        </motion.div>

        {/* SECTION 1: HERO & FILOSOFIA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#EA6113]/10 text-[#EA6113] px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest mb-8">
              <Flame className="w-3.5 h-3.5" />
              CONECTIVIDADE INTELIGENTE
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-[-0.05em] mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent uppercase">
              Automação<br />Inteligente
            </h1>
            <p className="text-xl lg:text-2xl text-[#EA6113] font-bold tracking-tight mb-6 leading-tight">
              “A automação não substitui o talento humano; ela o liberta das amarras das tarefas repetitivas para que ele possa focar na inovação.”
            </p>
            <p className="text-white/40 text-base leading-relaxed font-medium max-w-[480px]">
              Transformamos processos complexos em fluxos de trabalho eficientes, ágeis e escaláveis, orquestrando tecnologia de ponta para a evolução da sua empresa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-[48px] overflow-hidden border border-white/[0.08] bg-white/[0.02] aspect-square flex items-center justify-center p-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#EA6113]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src="/images/automacao-cybernetic-head.png" 
              alt="Cybernetic Head" 
              className="w-full h-full object-cover rounded-[36px] group-hover:scale-105 transition-transform duration-700 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            />
          </motion.div>
        </section>

        {/* SECTION 2: PILARES DA EFICIÊNCIA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[48px] overflow-hidden border border-white/[0.08] bg-white/[0.02] aspect-[4/5] flex items-center justify-center p-8 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#EA6113]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="/images/automacao-neon-statue.png" 
                alt="Neoclassical Statue Neon" 
                className="w-full h-full object-cover rounded-[36px] group-hover:scale-105 transition-transform duration-700 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-4 uppercase">
                01 / PILARES OPERACIONAIS
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-10 tracking-tight leading-none">
                MÁXIMO IMPACTO, <br />
                <span className="text-[#EA6113]">MÍNIMO ESFORÇO.</span>
              </h2>

              <div className="space-y-8">
                {/* Pilar 1 */}
                <div className="flex gap-6 border-b border-white/5 pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EA6113]/10 border border-[#EA6113]/20 flex items-center justify-center flex-shrink-0 text-[#EA6113]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Eficiência Máxima</h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Redução drástica no tempo operacional de ponta a ponta. Identificamos gargalos e substituímos fluxos morosos por rotinas automatizadas instantâneas.
                    </p>
                  </div>
                </div>

                {/* Pilar 2 */}
                <div className="flex gap-6 border-b border-white/5 pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EA6113]/10 border border-[#EA6113]/20 flex items-center justify-center flex-shrink-0 text-[#EA6113]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Precisão Sistêmica</h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Minimização total de falhas humanas em tarefas repetitivas. Consistência absoluta em relatórios, cadastros, faturamentos e transferências.
                    </p>
                  </div>
                </div>

                {/* Pilar 3 */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EA6113]/10 border border-[#EA6113]/20 flex items-center justify-center flex-shrink-0 text-[#EA6113]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Escalabilidade Infinita</h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Capacidade de processar volumes exponenciais de tarefas sem a necessidade de aumentar custos estruturais ou novas contratações operacionais.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: LIVE RPA INTERACTIVE SIMULATOR */}
        <section className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl rounded-[48px] p-8 lg:p-12 mb-32 overflow-hidden relative group">
          <div className="absolute top-0 right-0 bg-[#EA6113]/10 text-[#EA6113] border-l border-b border-white/5 px-6 py-2.5 rounded-bl-3xl text-[9px] font-black tracking-widest uppercase">
            Interactive Node RPA Simulator
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
            {/* Control & Stat column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black tracking-[0.3em] text-[#EA6113] uppercase mb-4">SIMULADOR EM TEMPO REAL</h3>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-6 leading-none">
                  VISTA A EXECUÇÃO<br />RPA EM AÇÃO.
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  Clique para iniciar nosso motor robótico inteligente. Assista ao roteamento de tarefas simulado em tempo real e compare os tempos em segundos.
                </p>
              </div>

              <div className="space-y-4 mb-8 lg:mb-0">
                {simStatus === "idle" && (
                  <button 
                    onClick={handleStartSimulation}
                    className="w-full bg-[#EA6113] hover:bg-[#ff7830] text-white py-4 px-6 rounded-2xl font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(234,97,19,0.3)] transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white" /> Iniciar Automação
                  </button>
                )}

                {simStatus === "running" && (
                  <div className="w-full bg-white/5 border border-white/5 py-4 px-6 rounded-2xl font-black text-xs tracking-widest uppercase text-white/40 text-center animate-pulse">
                    ⚡ Automação em Andamento...
                  </div>
                )}

                {simStatus === "completed" && (
                  <button 
                    onClick={handleResetSimulation}
                    className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white py-4 px-6 rounded-2xl font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" /> Resetar Simulador
                  </button>
                )}

                {/* Stat Display */}
                <AnimatePresence>
                  {simStatus === "completed" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-gradient-to-r from-[#EA6113]/20 to-transparent border border-[#EA6113]/30 p-6 rounded-3xl text-center lg:text-left"
                    >
                      <span className="text-5xl lg:text-6xl font-black text-[#EA6113] block mb-1">
                        +{count}%
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                        Ganho Real de Tempo Produtivo
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Simulation Dashboard */}
            <div className="lg:col-span-7 bg-[#050508]/80 border border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[420px]">
              {/* Top simulation window bar */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EA6113]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                  STATUS: {simStatus.toUpperCase()}
                </span>
              </div>

              {/* Steps Progress */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {steps.map((step, index) => {
                  const isActive = index === activeStep && simStatus === "running";
                  const isCompleted = index < activeStep || simStatus === "completed";
                  return (
                    <div 
                      key={index}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isActive 
                          ? "bg-[#EA6113]/10 border-[#EA6113] scale-[1.03]" 
                          : isCompleted 
                          ? "bg-[#EA6113]/5 border-[#EA6113]/30 text-white/80" 
                          : "bg-white/[0.02] border-white/5 text-white/20"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full mx-auto flex items-center justify-center text-[10px] font-black mb-1.5 bg-black/40">
                        {isCompleted && simStatus !== "idle" ? "✓" : index + 1}
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-wider block">
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Console log output */}
              <div className="flex-1 bg-black/40 rounded-2xl p-4 font-mono text-[10px] text-emerald-400 overflow-y-auto space-y-1.5 border border-white/5">
                {logs.length === 0 ? (
                  <div className="text-white/20 h-full flex flex-col items-center justify-center font-sans">
                    <Database className="w-8 h-8 opacity-20 mb-2 animate-bounce" />
                    <p>Aguardando inicialização do motor...</p>
                  </div>
                ) : (
                  logs.map((log, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      key={i}
                    >
                      {log}
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer comparison */}
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-[9px] font-mono text-white/40">
                <span>⚡ VELOCIDADE MANUAL: 35 MINUTOS</span>
                <span className="text-[#EA6113] font-bold">🚀 NODE AUTOMATION: 4.2 SEGUNDOS</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: ECOSSISTEMA INTEGRADO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-4 uppercase">
              02 / ECOSSISTEMA & TECNOLOGIA
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tight leading-none">
              CONECTIVIDADE<br />
              <span className="text-[#EA6113]">AVANÇADA.</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-8 max-w-[480px]">
              Orquestramos fluxos conectando múltiplos softwares, CRMs e bancos de dados através de APIs construídas sob medida para a sua infraestrutura.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-3xl">
                <CheckCircle className="w-6 h-6 text-[#EA6113] mb-4" />
                <h4 className="text-base font-bold mb-1">RPA Robusto</h4>
                <span className="text-xs text-white/30 leading-relaxed block">Robots inteligentes alimentando sistemas antigos</span>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-3xl">
                <CheckCircle className="w-6 h-6 text-[#EA6113] mb-4" />
                <h4 className="text-base font-bold mb-1">APIs Custom</h4>
                <span className="text-xs text-white/30 leading-relaxed block">Integração perfeita sem quebras de fluxos</span>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-3xl">
                <CheckCircle className="w-6 h-6 text-[#EA6113] mb-4" />
                <h4 className="text-base font-bold mb-1">Orquestração</h4>
                <span className="text-xs text-white/30 leading-relaxed block">Tratamento e roteamento de arquivos em lote</span>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-3xl">
                <CheckCircle className="w-6 h-6 text-[#EA6113] mb-4" />
                <h4 className="text-base font-bold mb-1">LGPD & Seg</h4>
                <span className="text-xs text-white/30 leading-relaxed block">Segurança inviolável em todas as pontas</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[48px] overflow-hidden border border-white/[0.08] bg-white/[0.02] aspect-square flex items-center justify-center p-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#EA6113]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src="/images/automacao-cybernetic-eye.png" 
              alt="Cybernetic Eye Tech" 
              className="w-full h-full object-cover rounded-[36px] group-hover:scale-105 transition-transform duration-700 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            />
          </motion.div>
        </section>

        {/* SECTION 5: METODOLOGIA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[48px] overflow-hidden border border-white/[0.08] bg-white/[0.02] aspect-[4/5] flex items-center justify-center p-8 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#EA6113]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="/images/automacao-robotic-hand.png" 
                alt="Chrome Robotic Hand Lotus" 
                className="w-full h-full object-cover rounded-[36px] group-hover:scale-105 transition-transform duration-700 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[10px] font-black tracking-[0.2em] text-white/20 mb-4 uppercase">
                03 / METODOLOGIA NODE
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-10 tracking-tight leading-none">
                COMO A GENTE <br />
                <span className="text-[#EA6113]">TRABALHA.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Etapa 1 */}
                <div className="border-l-2 border-[#EA6113] pl-6 py-2">
                  <div className="text-xs font-mono text-[#EA6113]/60 mb-2 uppercase">Etapa 01</div>
                  <h4 className="text-lg font-bold mb-2">Mapeamento</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    Análise e diagnóstico profundo nas operações atuais da sua empresa para localizar tarefas repetitivas propícias para a automação.
                  </p>
                </div>

                {/* Etapa 2 */}
                <div className="border-l-2 border-white/10 hover:border-[#EA6113] pl-6 py-2 transition-colors">
                  <div className="text-xs font-mono text-white/20 mb-2 uppercase">Etapa 02</div>
                  <h4 className="text-lg font-bold mb-2">Arquitetura</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    Desenho técnico da infraestrutura ideal conectando APIs, scripts e gatilhos de dados da forma mais fluida e segura possível.
                  </p>
                </div>

                {/* Etapa 3 */}
                <div className="border-l-2 border-white/10 hover:border-[#EA6113] pl-6 py-2 transition-colors">
                  <div className="text-xs font-mono text-white/20 mb-2 uppercase">Etapa 03</div>
                  <h4 className="text-lg font-bold mb-2">Implementação</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    Construção ágil baseada nas stacks mais eficientes. Integração e testes severos para garantir resiliência e estabilidade extrema de fluxo.
                  </p>
                </div>

                {/* Etapa 4 */}
                <div className="border-l-2 border-white/10 hover:border-[#EA6113] pl-6 py-2 transition-colors">
                  <div className="text-xs font-mono text-white/20 mb-2 uppercase">Etapa 04</div>
                  <h4 className="text-lg font-bold mb-2">Otimização</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    Monitoramento contínuo da operação pós-Go-Live para calibrar fluxos e garantir que o motor de automação continue rodando no pico de performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BOTTOM CTA: START PROJECTS */}
        <section className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] backdrop-blur-3xl rounded-[48px] p-8 lg:p-16 text-center group overflow-hidden relative">
          <div className="absolute inset-0 bg-[#EA6113]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
            PRONTO PARA <br />
            <span className="text-[#EA6113] uppercase">Escalar sua operação?</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto mb-10">
            Fale conosco hoje e inicie o mapeamento de processos da sua empresa. Economize tempo precioso e elimine erros operacionais.
          </p>

          <Link 
            href="/#contato" 
            className="inline-flex bg-white hover:bg-[#EA6113] hover:text-white text-black py-4 px-10 rounded-full text-xs font-black tracking-widest uppercase transition-all shadow-[0_15px_30px_rgba(0,0,0,0.4)] group/cta"
          >
            Fale com um Especialista 
            <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-center flex flex-col items-center gap-6 opacity-20 hover:opacity-100 transition-opacity">
          <div className="w-12 h-[1px] bg-white/40" />
          <span className="text-[10px] font-black tracking-[0.5em] uppercase">NODE DIGITAL AGENCY // EST. 2026</span>
        </footer>

      </div>
    </main>
  );
}
