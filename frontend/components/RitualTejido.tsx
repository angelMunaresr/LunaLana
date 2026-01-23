"use client";

import { motion } from "framer-motion";
import { Download, Heart, PackageOpen } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Elige tu patrón",
    description: "Explora nuestra colección y enamórate de tu próximo proyecto.",
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-50",
  },
  {
    id: 2,
    title: "Descarga instantánea",
    description: "Recibe el PDF con instrucciones detalladas en segundos.",
    icon: Download,
    color: "text-sky-400",
    bg: "bg-sky-50",
  },
  {
    id: 3,
    title: "¡Manos a la obra!",
    description: "Prepara tus agujas y disfruta del proceso creativo.",
    icon: PackageOpen, // Using PackageOpen as "Hands/Yarn" alternative or we could use custom SVG
    color: "text-amber-400",
    bg: "bg-amber-50",
  },
];

export function RitualTejido() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
            El Proceso
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            El Ritual del <span className="text-primary italic">Tejido</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-stone-100 -z-10" />

          {STEPS.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: any; index: number }) {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="flex flex-col items-center text-center group"
    >
      <div className={`w-24 h-24 rounded-full ${step.bg} flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110`}>
        <Icon size={32} className={`${step.color} stroke-[1.5]`} />
        
        {/* Pulse effect */}
        <div className={`absolute inset-0 rounded-full ${step.bg} -z-10 animate-ping opacity-20`} />
      </div>
      
      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
        {step.id}. {step.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
        {step.description}
      </p>
    </motion.div>
  );
}
