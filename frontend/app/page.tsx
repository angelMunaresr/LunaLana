"use client";

import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Multichannel } from "@/components/Multichannel";
import { PersonalBranding } from "@/components/PersonalBranding";
import { RitualTejido } from "@/components/RitualTejido";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#F5F5F7", "#E8F0FE"]
  );

  return (
    <motion.main 
      style={{ backgroundColor }}
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <Hero />
      <BentoGrid />
      <Multichannel />
      <PersonalBranding />
      <RitualTejido />
    </motion.main>
  );
}
