"use client";

import { Drawer } from "vaul";
import { ShoppingBag, Minus, Plus, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PayPalCheckout } from "./PayPalCheckout";

export function CartDrawer({ children }: { children?: React.ReactNode }) {
  const [view, setView] = useState<"cart" | "checkout">("cart");

  return (
    <Drawer.Root shouldScaleBackground onClose={() => setView("cart")}>
      <Drawer.Trigger asChild>
        {children || (
            <button className="relative p-2 text-foreground hover:bg-muted rounded-full transition-colors">
            <ShoppingBag size={24} strokeWidth={2} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
            </button>
        )}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />
        <Drawer.Content className="bg-background flex flex-col rounded-t-[10px] h-[90vh] mt-24 fixed bottom-0 left-0 right-0 z-50 outline-none">
          {/* Handle */}
          <div className="p-4 bg-background rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-8" />
            
            <div className="max-w-md mx-auto h-full flex flex-col">
              
              <AnimatePresence mode="wait">
                {view === "cart" ? (
                    <motion.div 
                        key="cart"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col h-full"
                    >
                        <Drawer.Title className="font-serif text-2xl font-medium mb-4 text-foreground flex justify-between items-center">
                            Tu Cesta
                            <span className="text-sm font-sans text-muted-foreground font-normal">2 artículos</span>
                        </Drawer.Title>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                            {[1, 2].map((item) => (
                            <div key={item} className="flex gap-4">
                                <div className="w-20 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg flex-shrink-0" />
                                <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <h3 className="font-serif text-lg leading-none mb-1 text-foreground">Amigurumi Osito {item}</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Digital PDF</p>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-3 border border-border rounded-full px-2 py-1">
                                    <button className="text-muted-foreground hover:text-foreground"><Minus size={14} /></button>
                                    <span className="text-sm font-medium w-4 text-center text-foreground">1</span>
                                    <button className="text-foreground hover:text-primary"><Plus size={14} /></button>
                                    </div>
                                    <span className="font-bold text-lg text-secondary">$5.00</span>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-border py-6 mt-4 space-y-4">
                            <div className="flex justify-between text-muted-foreground">
                            <span>Subtotal</span>
                            <span>$10.00</span>
                            </div>
                            <div className="flex justify-between font-medium text-lg text-foreground">
                            <span>Total</span>
                            <span>$10.00</span>
                            </div>
                            <button 
                                onClick={() => setView("checkout")}
                                className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/25"
                            >
                            Checkout Seguro <ArrowRight size={18} />
                            </button>
                            <p className="text-center text-xs text-muted-foreground">
                            Impuestos calculados en el siguiente paso.
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="checkout"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex flex-col h-full"
                    >
                         <div className="flex items-center gap-4 mb-6">
                            <button onClick={() => setView("cart")} className="p-2 -ml-2 hover:bg-muted rounded-full text-foreground">
                                <ArrowLeft size={20} />
                            </button>
                            <h2 className="font-serif text-2xl font-medium text-stone-900">Checkout</h2>
                         </div>

                         <div className="flex-1">
                            <div className="bg-stone-50 p-4 rounded-xl mb-6">
                                <div className="flex justify-between mb-2 text-sm">
                                    <span className="text-stone-500">Total a pagar</span>
                                    <span className="font-medium">$10.00</span>
                                </div>
                                <div className="text-xs text-stone-400">Incluye 2 patrones digitales</div>
                            </div>

                            <label className="block text-sm font-medium text-stone-700 mb-2">Método de Pago</label>
                            <PayPalCheckout amount="10.00" />
                         </div>
                    </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
