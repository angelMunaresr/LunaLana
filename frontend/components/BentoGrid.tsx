"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";

const FILTERS = ["Todo", "K-Pop", "Animalitos", "Temporada"];

export function BentoGrid() {
  const [activeFilter, setActiveFilter] = useState("Todo");

  const filteredProducts = activeFilter === "Todo" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section className="w-full py-16 px-4 md:px-6 max-w-7xl mx-auto" id="shop">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="flex flex-col">
          <span className="text-primary uppercase tracking-widest text-xs font-bold mb-2">Colección Digital</span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Patrones <span className="italic text-secondary">Populares</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeFilter === filter
                  ? "bg-foreground text-background border-foreground shadow-md"
                  : "bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      <div className="mt-12 flex justify-center">
         <Link href="/products" className="group flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
            Ver catálogo completo
          </span>
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">
         <Image 
            src={product.images[0]} 
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
         />
         
         {/* Overlay gradient */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

         {/* Badge */}
         <div className="absolute top-3 left-3 z-10">
            <div className="bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-bold px-3 py-1 rounded-full shadow-sm border border-white/50">
               DIGITAL PDF
            </div>
         </div>

         {/* New Badge */}
         {product.isNew && (
            <div className="absolute top-3 right-3 z-10">
               <div className="bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Sparkles size={10} /> NEW
               </div>
            </div>
         )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
            <div>
               <p className="text-xs text-muted-foreground font-medium mb-1">{product.category}</p>
               <h3 className="font-serif text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                  {product.title}
               </h3>
            </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
            <span className="font-serif text-xl font-medium text-foreground">
               {product.price}
            </span>
            
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all">
               <Plus size={20} />
            </button>
        </div>
      </div>
    </motion.div>
  );
}
