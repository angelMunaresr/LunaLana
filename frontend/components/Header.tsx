"use client";

import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
        setHidden(true);
    } else {
        setHidden(false);
    }
  });

  return (
    <motion.header 
        variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 hidden md:block"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
          CrochetHub
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Tienda</Link>
            <Link href="/patterns" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Patrones</Link>
            <Link href="/about" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Nosotros</Link>
            <Link href="/journal" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Diario</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                <Search size={20} />
            </button>
            <Link href="/profile" className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                <User size={20} />
            </Link>
            <CartDrawer>
                 <button className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors">
                    <ShoppingBag size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border border-white" />
                 </button>
            </CartDrawer>
        </div>
      </div>
    </motion.header>
  );
}
