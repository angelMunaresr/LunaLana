"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Star, Clock, Ruler, Info } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-30 p-4 flex justify-between items-center md:hidden bg-gradient-to-b from-black/20 to-transparent pointer-events-none">
        <Link href="/" className="bg-white/90 backdrop-blur shadow-sm p-2 rounded-full text-stone-800 pointer-events-auto">
          <ArrowLeft size={20} />
        </Link>
      </div>

      <div className="md:grid md:grid-cols-2">
        {/* Left Column: Gallery */}
        <div className="relative h-[60vh] md:h-screen bg-stone-100">
          {/* Mobile Swiper */}
          <div className="md:hidden h-full">
             <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="h-full w-full"
             >
                {[1, 2, 3].map((i) => (
                    <SwiperSlide key={i} className="bg-stone-200 flex items-center justify-center">
                        <span className="text-stone-400 font-serif text-6xl opacity-30">{i}</span>
                    </SwiperSlide>
                ))}
             </Swiper>
          </div>

          {/* Desktop Sticky Scroll Gallery */}
          <div className="hidden md:block h-full overflow-y-auto no-scrollbar snap-y snap-mandatory">
            {[1, 2, 3].map((i) => (
               <div key={i} className="h-screen w-full bg-stone-100 border-b border-white flex items-center justify-center snap-start">
                   <span className="text-stone-300 font-serif text-8xl opacity-30">{i}</span>
               </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="relative z-10 -mt-10 md:mt-0 bg-white rounded-t-[2.5rem] md:rounded-none px-6 py-10 md:p-20 md:h-screen md:overflow-y-auto">
          {/* Breadcrumbs (Desktop) */}
          <div className="hidden md:flex gap-2 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-900">Inicio</Link> / 
            <span>Patrones</span> / 
            <span className="text-stone-900">Amigurumi Osito {params.id}</span>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Nuevo
            </span>
            <div className="flex items-center gap-1 text-amber-400 text-sm">
                <Star fill="currentColor" size={14} />
                <span className="text-stone-500 font-medium ml-1">4.9 (120 reviews)</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4 leading-tight">
            Amigurumi Osito {params.id}
          </h1>

          <p className="text-2xl font-medium text-stone-900 mb-8">
            $5.00 <span className="text-sm font-normal text-stone-500 ml-2">PDF Digital</span>
          </p>

          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-4 mb-10 border-y border-stone-100 py-6">
            <div className="text-center border-r border-stone-100 last:border-0">
                <div className="flex justify-center mb-2 text-stone-400"><Clock size={20} /></div>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Tiempo</p>
                <p className="font-medium text-stone-800">4-6 Horas</p>
            </div>
            <div className="text-center border-r border-stone-100 last:border-0">
                <div className="flex justify-center mb-2 text-stone-400"><Ruler size={20} /></div>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Gancho</p>
                <p className="font-medium text-stone-800">3.5 mm</p>
            </div>
            <div className="text-center">
                <div className="flex justify-center mb-2 text-stone-400"><Info size={20} /></div>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Nivel</p>
                <p className="font-medium text-stone-800">Intermedio</p>
            </div>
          </div>

          <div className="prose prose-stone prose-lg mb-12 text-stone-600 font-light leading-relaxed">
            <p>
              Crea este adorable osito con nuestro patrón detallado paso a paso. 
              Perfecto para regalar o coleccionar. Incluye instrucciones fotográficas 
              de alta calidad y soporte para zurdos.
            </p>
            <p>
              El archivo PDF estará disponible para descarga inmediata después de la compra.
            </p>
          </div>

          {/* Sticky Action Bar (Mobile) / Static Button (Desktop) */}
          <div className="fixed bottom-24 md:bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur border-t border-stone-100 md:relative md:p-0 md:bg-transparent md:border-0 z-20">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full bg-stone-900 text-white py-4 rounded-full font-medium text-lg shadow-xl shadow-stone-900/10 hover:bg-stone-800 transition-colors flex justify-center items-center gap-2"
            >
               {isAdding ? "¡Añadido!" : "Añadir a la Cesta - $5.00"}
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
