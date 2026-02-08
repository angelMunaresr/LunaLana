"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function PersonalBranding() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Organic Shape Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-2xl transform rotate-12 scale-110" />
          
          {/* Organic Mask using SVG Clip Path (Simulated with Border Radius for now, or SVG mask) */}
          {/* Using a "blob" border radius for organic feel */}
          <div className="relative w-full h-full overflow-hidden shadow-xl border-4 border-white" style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}>
             <Image 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
                alt="Retrato de la diseñadora"
                fill
                className="object-cover"
             />
             <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl -z-10" />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-foreground mb-6"
          >
            Detrás de cada <span className="text-secondary italic">punto</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8"
          >
            <p>
              ¡Hola! Soy Ana, la mente creativa detrás de Luna Lana Handmade.
            </p>
            <p>
              Tejer no es solo unir hilos; es una forma de meditación, arte y expresión. Mi pasión es crear diseños modernos con un toque kawaii y artesanal, pensados para quienes buscan poner un pedacito de su alma en cada creación.
            </p>
            <p>
              Desde amigurumis adorables hasta prendas únicas, cada patrón está diseñado para guiarte paso a paso en este viaje creativo.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => setIsVideoOpen(!isVideoOpen)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-stone-200 rounded-full shadow-sm hover:shadow-md hover:border-primary/50 transition-all group"
          >
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Play size={12} fill="currentColor" />
            </span>
            <span className="font-medium text-foreground">Conocer mi historia</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
