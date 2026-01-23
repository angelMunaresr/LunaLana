"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

// Mock data extended
const PRODUCTS = [
  {
    id: 1,
    title: "Cardigan 'Luna' Oversized",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
    category: "Patrón PDF",
  },
  {
    id: 2,
    title: "Top 'Summer Breeze'",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    category: "Patrón PDF",
  },
  {
    id: 3,
    title: "Bolso 'Market' Eco",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    category: "Patrón PDF",
  },
  {
    id: 4,
    title: "Bufanda 'Cozy' Chunky",
    price: "$15.00",
    image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=800&auto=format&fit=crop",
    category: "Patrón PDF",
  },
  {
    id: 5,
    title: "Gorro 'Winter' PomPom",
    price: "$10.00",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop",
    category: "Patrón PDF",
  },
  {
    id: 6,
    title: "Manta 'Heirloom'",
    price: "$30.00",
    image: "https://images.unsplash.com/photo-1513373319109-eb154073eb0b?q=80&w=800&auto=format&fit=crop",
    category: "Patrón PDF",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen pt-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-6xl text-foreground mb-6"
        >
          Explorar <span className="italic text-secondary">Colección</span>
        </motion.h1>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full max-w-md"
        >
            <input 
                type="text" 
                placeholder="Buscar patrones..." 
                className="w-full px-6 py-4 rounded-full border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all pl-12"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
        {PRODUCTS.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </main>
  );
}

function ProductCard({ product, index }: { product: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/products/${product.id}`} className="block relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 bg-stone-100">
         <Image 
            src={product.image} 
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>
      <div>
        <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">{product.title}</h3>
            <span className="font-serif font-bold text-secondary">{product.price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </div>
    </motion.div>
  );
}
