"use client";

import { Home, Search, ShoppingBag, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "vaul";
import { CartDrawer } from "./CartDrawer";

const navItems = [
  { icon: Home, label: "Tienda", href: "/" },
  { icon: Search, label: "Explorar", href: "/explore" },
  // ShoppingBag is handled separately for Drawer
  { icon: User, label: "Perfil", href: "/profile" },
];

export function BottomNav() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pointer-events-none">
       {/* Pointer events none on container so clicks pass through to page content if not on nav */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent h-32 pointer-events-none" />
      
      {/* Glassmorphism Bar */}
      <div className="pointer-events-auto absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl shadow-stone-200/50 rounded-2xl h-16 flex justify-around items-center px-2">
        
        {/* Home */}
        <Link href="/" onClick={() => setActiveTab("/")} className="relative p-2">
           <Home strokeWidth={activeTab === "/" ? 2.5 : 2} className={activeTab === "/" ? "text-primary" : "text-muted-foreground"} size={24} />
           {activeTab === "/" && <motion.div layoutId="nav-dot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />}
        </Link>

        {/* Explore */}
        <Link href="/explore" onClick={() => setActiveTab("/explore")} className="relative p-2">
           <Search strokeWidth={activeTab === "/explore" ? 2.5 : 2} className={activeTab === "/explore" ? "text-primary" : "text-muted-foreground"} size={24} />
           {activeTab === "/explore" && <motion.div layoutId="nav-dot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />}
        </Link>

        {/* Cart Drawer Trigger - Center & Elevated */}
        <div className="-mt-8">
            <div className="bg-primary rounded-full shadow-lg shadow-primary/30 text-primary-foreground">
                <CartDrawer>
                    <button className="p-4 rounded-full flex items-center justify-center">
                        <ShoppingBag size={24} strokeWidth={2} />
                    </button>
                </CartDrawer> 
            </div>
        </div>

        {/* Profile */}
        <Link href="/profile" onClick={() => setActiveTab("/profile")} className="relative p-2">
           <User strokeWidth={activeTab === "/profile" ? 2.5 : 2} className={activeTab === "/profile" ? "text-primary" : "text-muted-foreground"} size={24} />
           {activeTab === "/profile" && <motion.div layoutId="nav-dot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />}
        </Link>

      </div>
    </div>
  );
}
