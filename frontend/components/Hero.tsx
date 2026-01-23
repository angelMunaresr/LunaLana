"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
      </motion.div>

      {/* Floating Element - Yarn Ball Representation */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]), rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
        className="absolute top-1/4 right-[10%] w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-secondary/40 to-primary/40 blur-3xl opacity-60 pointer-events-none z-0"
      />
      
      {/* Actual Floating Element Image Placeholder */}
      <motion.div 
         animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
         className="absolute top-[15%] right-[5%] md:right-[15%] w-24 h-24 md:w-48 md:h-48 z-1 pointer-events-none opacity-80"
      >
          {/* This would be the PNG/3D element. Using a styled div for now. */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-300 to-rose-300 shadow-2xl flex items-center justify-center text-white/50 font-serif italic relative overflow-hidden border-4 border-white/20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
             <span className="sr-only">Yarn Ball</span>
             {/* Simple visual pattern to resemble yarn */}
             <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M10 50 Q 50 10 90 50 Q 50 90 10 50" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M50 10 Q 90 50 50 90 Q 10 50 50 10" fill="none" stroke="currentColor" strokeWidth="1" />
             </svg>
          </div>
      </motion.div>


      <div className="container relative z-10 px-4 text-center">
        <StaggeredText text="CrochetHub" className="font-serif text-6xl md:text-9xl text-foreground mb-6 tracking-tight" />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
        >
          Patrones de tejido con alma. Diseño moderno, técnica ancestral.
        </motion.p>

        <Link href="/explore">
          <MagneticButton>
            <span className="relative flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden group">
              <span className="relative z-10 font-bold tracking-wide">Explorar Colección</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              
              {/* Shimmer Effect */}
              <motion.div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 3, ease: "linear" }}
              />
            </span>
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
}

function StaggeredText({ text, className }: { text: string; className?: string }) {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={`overflow-hidden flex justify-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="relative inline-block"
    >
      {children}
    </motion.div>
  );
}
