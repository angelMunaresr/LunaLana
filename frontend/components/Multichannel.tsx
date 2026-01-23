"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function Multichannel() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background Decor - Soft Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-4xl text-foreground mb-4"
          >
            Encuéntrame también en...
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-md mx-auto"
          >
            Plataformas de confianza donde también puedes adquirir mis patrones y productos digitales.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
          {/* Etsy Card */}
          <PlatformCard 
            name="Etsy" 
            description="Tienda Estrella • +500 Ventas"
            url="https://etsy.com"
            color="bg-[#F1641E]" // Etsy Orange brand color as accent
            delay={0.2}
          />

          {/* Ravelry Card */}
          <PlatformCard 
            name="Ravelry" 
            description="Comunidad de Tejedoras"
            url="https://ravelry.com"
            color="bg-[#EE6E73]" // Ravelry Red/Pinkish brand color
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function PlatformCard({ name, description, url, color, delay }: { name: string, description: string, url: string, color: string, delay: number }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.4 }}
      className="w-full md:w-1/2 group relative"
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg group-hover:shadow-xl transition-all duration-300" />
      
      <div className="relative p-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
            <ShoppingBag size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-serif text-xl font-bold text-foreground">{name}</h3>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{description}</p>
          </div>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-foreground/50 group-hover:text-foreground group-hover:bg-white transition-all">
          <ExternalLink size={16} />
        </div>
      </div>
    </motion.a>
  );
}
