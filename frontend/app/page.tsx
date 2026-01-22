"use client";

import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      {/* Featured Patterns Section */}
      <section className="w-full py-12 md:py-24 bg-white relative z-20 rounded-t-[2.5rem] -mt-10 shadow-xl border-t border-white/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-8 md:mb-16 px-2"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 leading-tight">
              Colección <br/>
              <span className="text-stone-400 italic">Reciente</span>
            </h2>
            <button className="text-sm font-medium text-stone-500 underline decoration-1 underline-offset-4">Ver todo</button>
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
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-100 mb-4 shadow-sm">
            <div className="absolute inset-0 bg-stone-200/50 animate-pulse" /> {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-stone-300 font-serif text-4xl z-10 opacity-30">
              {item}
            </div>
            
            {/* Mobile: Floating Action Button Style for Quick Add */}
            <div className="absolute bottom-3 right-3 z-20 md:hidden">
                <div className="bg-white/90 backdrop-blur shadow-sm p-2 rounded-full text-stone-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
            </div>

            {/* Desktop: Glassmorphism Overlay on Hover */}
            <div className="hidden md:flex absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col items-center justify-center p-6 z-20">
              <span className="text-stone-800 font-medium px-4 py-2 bg-white/80 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Ver Detalles
              </span>
            </div>
          </div>
          
          <div className="text-left px-1">
            <h3 className="font-serif text-lg leading-snug text-stone-800 mb-1 truncate">Amigurumi Osito {item}</h3>
            <p className="text-stone-400 text-[10px] uppercase tracking-wider font-medium mb-1">Intermedio • 3.5mm</p>
            <p className="font-semibold text-primary">$5.00</p>
          </div>
        </motion.div>
    </Link>
  );
}
