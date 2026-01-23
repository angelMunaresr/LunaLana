"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, ShoppingBag } from "lucide-react";
import { useState, useMemo } from "react";
import { CartDrawer } from "@/components/CartDrawer";
import { PRODUCTS } from "@/lib/data";

const CATEGORIES = ["Todos", "Ropa", "Accesorios", "Hogar"];

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
            className="relative w-full max-w-md mb-8"
        >
            <input 
                type="text" 
                placeholder="Buscar patrones..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all pl-12 shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat 
                  ? "bg-stone-900 text-white shadow-lg shadow-stone-900/20" 
                  : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400 hover:bg-stone-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      )}
    </main>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 bg-stone-100">
         <Link href={`/products/${product.id}`} className="block w-full h-full">
            <Image 
                src={product.images[0]} 
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
         </Link>
         
         {/* Quick Add Button */}
         <div className="absolute bottom-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <CartDrawer>
                <button 
                    className="bg-white text-stone-900 p-3 rounded-full shadow-lg hover:bg-stone-900 hover:text-white transition-colors"
                    title="Añadir al carrito"
                >
                    <ShoppingBag size={20} />
                </button>
            </CartDrawer>
         </div>
      </div>
      <div>
        <div className="flex justify-between items-start mb-1">
            <Link href={`/products/${product.id}`}>
                <h3 className="font-medium text-lg text-foreground hover:text-primary transition-colors cursor-pointer">{product.title}</h3>
            </Link>
            <span className="font-serif font-bold text-secondary">{product.price}</span>
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category} • {product.type}</p>
      </div>
    </motion.div>
  );
}
