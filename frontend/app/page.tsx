"use client";

import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Multichannel } from "@/components/Multichannel";
import { PersonalBranding } from "@/components/PersonalBranding";
import { RitualTejido } from "@/components/RitualTejido";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <BentoGrid />
      <Multichannel />
      <PersonalBranding />
      <RitualTejido />
    </main>
  );
}
