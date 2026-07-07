"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Baby, Heart, Syringe, ClipboardCheck, type LucideIcon } from "lucide-react";
import type { Category } from "@/types";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  "heart-pulse": HeartPulse,
  baby: Baby,
  heart: Heart,
  syringe: Syringe,
  "clipboard-check": ClipboardCheck,
};

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-semibold text-secondary">{category.name}</h3>
          <p className="text-sm text-muted">{category.description}</p>
        </div>
        <Button asChild variant="outline" size="sm" className="mt-auto w-fit hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300">
          <Link href={`/products?category=${category.slug}`}>Lihat Detail</Link>
        </Button>
      </div>
    </motion.div>
  );
}
