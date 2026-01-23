"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Star, Clock, Ruler, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CartDrawer } from "@/components/CartDrawer";
import { getProductById, getRelatedProducts } from "@/lib/data";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [isAdding, setIsAdding] = useState(false);
  
  const product = getProductById(params.id);
  const relatedProducts = product ? getRelatedProducts(product.id, product.category) : [];

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  if (!product) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-serif mb-4">Producto no encontrado</h1>
                <Link href="/explore" className="text-primary hover:underline">Volver a explorar</Link>
            </div>
        </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-30 p-4 flex justify-between items-center md:hidden pointer-events-none">
        <Link href="/explore" className="bg-white/80 backdrop-blur shadow-sm p-2 rounded-full text-foreground pointer-events-auto">
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
                {product.images.map((img, i) => (
                    <SwiperSlide key={i} className="relative bg-stone-100">
                        <Image 
                            src={img}
                            alt={`${product.title} - view ${i + 1}`}
                            fill
                            className="object-cover"
                            priority={i === 0}
                        />
                    </SwiperSlide>
                ))}
             </Swiper>
          </div>

          {/* Desktop Sticky Scroll Gallery */}
          <div className="hidden md:block h-full overflow-y-auto no-scrollbar snap-y snap-mandatory">
            {product.images.map((img, i) => (
               <div key={i} className="h-screen w-full relative bg-stone-100 border-b border-white/20 snap-start">
                   <Image 
                        src={img}
                        alt={`${product.title} - view ${i + 1}`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                    />
               </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="relative z-10 -mt-10 md:mt-0 bg-background rounded-t-[2.5rem] md:rounded-none px-6 py-10 md:p-20 md:h-screen md:overflow-y-auto">
          {/* Breadcrumbs (Desktop) */}
          <div className="hidden md:flex gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Inicio</Link> / 
            <Link href="/explore" className="hover:text-foreground">Patrones</Link> / 
            <span className="text-foreground">{product.title}</span>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {product.type}
            </span>
            <div className="flex items-center gap-1 text-accent text-sm">
                <Star fill="currentColor" size={14} />
                <span className="text-muted-foreground font-medium ml-1">5.0 (Review)</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-4 leading-tight">
            {product.title}
          </h1>

          <p className="text-2xl font-medium text-secondary mb-8">
            {product.price} <span className="text-sm font-normal text-muted-foreground ml-2">PDF Digital</span>
          </p>

          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-4 mb-10 border-y border-border py-6">
            <div className="text-center border-r border-border last:border-0">
                <div className="flex justify-center mb-2 text-muted-foreground"><Clock size={20} /></div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Tiempo</p>
                <p className="font-medium text-foreground">{product.time}</p>
            </div>
            <div className="text-center border-r border-border last:border-0">
                <div className="flex justify-center mb-2 text-muted-foreground"><Ruler size={20} /></div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Gancho</p>
                <p className="font-medium text-foreground">{product.hook}</p>
            </div>
            <div className="text-center">
                <div className="flex justify-center mb-2 text-muted-foreground"><Info size={20} /></div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Nivel</p>
                <p className="font-medium text-foreground">{product.difficulty}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
            <p>{product.description}</p>
            <p>
                Incluye instrucciones detalladas, fotos de alta calidad para cada paso y consejos 
                para lograr un acabado profesional. Al comprarlo, recibirás acceso inmediato al archivo PDF.
            </p>
            
            <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Materiales Necesarios</h3>
            <ul className="list-disc list-inside space-y-2 marker:text-primary">
                <li>Hilo recomendado para gancho de {product.hook}</li>
                <li>Gancho de crochet de {product.hook}</li>
                <li>Aguja lanera y tijeras</li>
                <li>Marcadores de puntos</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-12">
             <CartDrawer>
                 <button 
                    onClick={handleAddToCart}
                    className="w-full bg-primary text-primary-foreground py-4 px-8 rounded-full font-bold hover:bg-primary/90 transition-colors disabled:opacity-80 disabled:cursor-not-allowed flex-1 shadow-lg shadow-primary/20"
                    disabled={isAdding}
                 >
                    {isAdding ? "Agregando..." : `Agregar al Carrito - ${product.price}`}
                 </button>
             </CartDrawer>
             <button className="p-4 border border-border rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
                <Star size={24} />
             </button>
          </div>
          
          {/* Accordion / Additional Info */}
          <div className="border-t border-border pt-6 mb-16">
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

          {/* Related Products */}
          {relatedProducts.length > 0 && (
              <div>
                  <h3 className="font-serif text-2xl text-foreground mb-6">También te podría gustar</h3>
                  <div className="grid grid-cols-2 gap-4">
                      {relatedProducts.map((rp) => (
                          <Link key={rp.id} href={`/products/${rp.id}`} className="group">
                              <div className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden mb-3">
                                  <Image 
                                    src={rp.images[0]} 
                                    alt={rp.title} 
                                    fill 
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                              </div>
                              <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{rp.title}</h4>
                              <p className="text-sm text-secondary font-bold">{rp.price}</p>
                          </Link>
                      ))}
                  </div>
              </div>
          )}

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
            <p className="font-serif text-xl text-foreground font-bold">{product.price}</p>
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
