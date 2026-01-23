"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dummy data structure - in a real app this would come from props
const NEW_ARRIVALS = [
  {
    id: 1,
    title: "Cardigan 'Luna' Oversized",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop", // Placeholder
    category: "Patrón PDF",
    isNew: true,
  },
  {
    id: 2,
    title: "Top 'Summer Breeze'",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    category: "Patrón PDF",
    isNew: true,
  },
  {
    id: 3,
    title: "Bolso 'Market' Eco",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    category: "Patrón PDF",
    isNew: true,
  },
];

export function BentoGrid() {
  return (
    <section className="w-full py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <span className="text-accent uppercase tracking-widest text-xs font-bold mb-2">New Arrivals</span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Recién <span className="italic text-secondary">Tejido</span>
          </h2>
        </div>
        <Link href="/products" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
          Ver todo <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
        {NEW_ARRIVALS.map((item, index) => (
          <BentoCard key={item.id} item={item} index={index} />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center md:hidden">
         <Link href="/products" className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-primary transition-colors">
          Explorar colección completa
        </Link>
      </div>
    </section>
  );
}

function BentoCard({ item, index }: { item: any; index: number }) {
  // First item is big (2x2)
  const isLarge = index === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group rounded-3xl overflow-hidden cursor-pointer bg-stone-100 ${
        isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      }`}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Image with Parallax/Zoom effect on hover */}
      <div className="absolute inset-0 w-full h-full">
         <Image 
            src={item.image} 
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
      </div>

      {/* Floating Badge for New items */}
      {item.isNew && (
        <div className="absolute top-4 left-4 z-10">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-white/90 backdrop-blur-md text-foreground text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm"
          >
            <Sparkles size={12} className="text-yellow-500" />
            NUEVO
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col justify-end h-full z-20">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-wider mb-1 font-medium">
                {item.category}
            </p>
            <h3 className={`font-serif text-white leading-tight mb-2 ${isLarge ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>
                {item.title}
            </h3>
            <div className="flex items-center justify-between">
                <p className="text-white font-medium text-lg">{item.price}</p>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={16} className="text-white" />
                </div>
            </div>
        </div>
      </div>
      
      {/* Glassmorphism Tilt Effect Simulation (Visual only overlay) */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 mix-blend-overlay" />
    </motion.div>
  );
}
