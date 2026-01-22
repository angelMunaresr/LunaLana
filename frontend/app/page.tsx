"use client";

import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      {/* Featured Patterns Section */}
      <section className="w-full py-12 md:py-24 bg-background relative z-20 rounded-t-[2.5rem] -mt-10 shadow-xl border-t border-white/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-8 md:mb-16 px-2"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              Colección <br/>
              <span className="text-secondary italic">Reciente</span>
            </h2>
            <button className="text-sm font-medium text-muted-foreground underline decoration-1 underline-offset-4 hover:text-primary transition-colors">Ver todo</button>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ProductCard key={item} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ item }: { item: number }) {
  return (
    <Link href={`/products/${item}`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: item * 0.05 }}
          className="group cursor-pointer flex flex-col"
        >
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-100 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10" /> {/* Placeholder */}
            
            {/* Colorful Badge */}
            <div className="absolute top-3 left-3 z-20">
               <span className="bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Nuevo</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center text-stone-300 font-serif text-4xl z-10 opacity-30">
              {item}
            </div>
            
            {/* Mobile: Floating Action Button Style for Quick Add */}
            <div className="absolute bottom-3 right-3 z-20 md:hidden">
                <div className="bg-white/90 backdrop-blur shadow-sm p-2 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
            </div>

            {/* Desktop: Glassmorphism Overlay on Hover */}
            <div className="hidden md:flex absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col items-center justify-center p-6 z-20">
              <span className="text-primary font-bold px-5 py-3 bg-white/90 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                Ver Detalles
              </span>
            </div>
          </div>
          
          <div className="text-left px-1">
            <h3 className="font-serif text-lg leading-snug text-foreground mb-1 truncate group-hover:text-primary transition-colors">Amigurumi Osito {item}</h3>
            <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-medium mb-1">Intermedio • 3.5mm</p>
            <p className="font-bold text-lg text-secondary">$5.00</p>
          </div>
        </motion.div>
    </Link>
  );
}
