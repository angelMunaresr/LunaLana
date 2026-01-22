"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Star, Clock, Ruler, Info } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CartDrawer } from "@/components/CartDrawer";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-30 p-4 flex justify-between items-center md:hidden bg-gradient-to-b from-black/20 to-transparent pointer-events-none">
        <Link href="/" className="bg-background/90 backdrop-blur shadow-sm p-2 rounded-full text-foreground pointer-events-auto">
          <ArrowLeft size={20} />
        </Link>
      </div>

      <div className="md:grid md:grid-cols-2">
        {/* Left Column: Gallery */}
        <div className="relative h-[60vh] md:h-screen bg-muted">
          {/* Mobile Swiper */}
          <div className="md:hidden h-full">
             <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="h-full w-full"
             >
                {[1, 2, 3].map((i) => (
                    <SwiperSlide key={i} className="bg-muted flex items-center justify-center">
                        <span className="text-secondary/20 font-serif text-6xl opacity-30">{i}</span>
                    </SwiperSlide>
                ))}
             </Swiper>
          </div>

          {/* Desktop Sticky Scroll Gallery */}
          <div className="hidden md:block h-full overflow-y-auto no-scrollbar snap-y snap-mandatory">
            {[1, 2, 3].map((i) => (
               <div key={i} className="h-screen w-full bg-muted border-b border-background flex items-center justify-center snap-start">
                   <span className="text-secondary/20 font-serif text-8xl opacity-30">{i}</span>
               </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="relative z-10 -mt-10 md:mt-0 bg-background rounded-t-[2.5rem] md:rounded-none px-6 py-10 md:p-20 md:h-screen md:overflow-y-auto">
          {/* Breadcrumbs (Desktop) */}
          <div className="hidden md:flex gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Inicio</Link> / 
            <span>Patrones</span> / 
            <span className="text-foreground">Amigurumi Osito {params.id}</span>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Nuevo
            </span>
            <div className="flex items-center gap-1 text-accent text-sm">
                <Star fill="currentColor" size={14} />
                <span className="text-muted-foreground font-medium ml-1">4.9 (120 reviews)</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Amigurumi Osito {params.id}
          </h1>

          <p className="text-2xl font-medium text-secondary mb-8">
            $5.00 <span className="text-sm font-normal text-muted-foreground ml-2">PDF Digital</span>
          </p>

          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-4 mb-10 border-y border-border py-6">
            <div className="text-center border-r border-border last:border-0">
                <div className="flex justify-center mb-2 text-muted-foreground"><Clock size={20} /></div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Tiempo</p>
                <p className="font-medium text-foreground">4-6 Horas</p>
            </div>
            <div className="text-center border-r border-border last:border-0">
                <div className="flex justify-center mb-2 text-muted-foreground"><Ruler size={20} /></div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Gancho</p>
                <p className="font-medium text-foreground">3.5 mm</p>
            </div>
            <div className="text-center">
                <div className="flex justify-center mb-2 text-muted-foreground"><Info size={20} /></div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Nivel</p>
                <p className="font-medium text-foreground">Intermedio</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
            <p>
                Este patrón digital te guiará paso a paso para crear tu propio Osito Amigurumi. 
                Diseñado con amor y atención al detalle, este proyecto es perfecto para tardes acogedoras.
            </p>
            <p>
                Incluye instrucciones detalladas, fotos de alta calidad para cada paso y consejos 
                para lograr un acabado profesional. Al comprarlo, recibirás acceso inmediato al archivo PDF.
            </p>
            
            <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Materiales Necesarios</h3>
            <ul className="list-disc list-inside space-y-2 marker:text-primary">
                <li>Hilo de algodón 100% (Grosor medio)</li>
                <li>Gancho de crochet de 3.5mm</li>
                <li>Ojos de seguridad de 10mm</li>
                <li>Relleno sintético</li>
                <li>Aguja lanera y tijeras</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
             <CartDrawer>
                 <button 
                    onClick={handleAddToCart}
                    className="w-full bg-primary text-primary-foreground py-4 px-8 rounded-full font-bold hover:bg-primary/90 transition-colors disabled:opacity-80 disabled:cursor-not-allowed flex-1 shadow-lg shadow-primary/20"
                    disabled={isAdding}
                 >
                    {isAdding ? "Agregando..." : "Agregar al Carrito - $5.00"}
                 </button>
             </CartDrawer>
             <button className="p-4 border border-border rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
                <Star size={24} />
             </button>
          </div>
          
          {/* Accordion / Additional Info */}
          <div className="border-t border-border pt-6">
             <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-foreground list-none">
                    <span>Entrega Digital Instantánea</span>
                    <span className="transition group-open:rotate-180">
                        <ArrowLeft size={16} className="-rotate-90" />
                    </span>
                </summary>
                <div className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    Una vez completado el pago, recibirás un correo electrónico con el enlace de descarga del patrón en formato PDF. También podrás acceder a él desde tu cuenta en cualquier momento.
                </div>
             </details>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky Buy Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border md:hidden z-20 flex gap-4 items-center"
      >
         <div className="flex-1">
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="font-serif text-xl text-foreground font-bold">$5.00</p>
         </div>
         <CartDrawer>
            <button 
                onClick={handleAddToCart}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-full font-bold text-sm shadow-lg shadow-primary/20"
            >
                Agregar
            </button>
         </CartDrawer>
      </motion.div>
    </main>
  );
}


