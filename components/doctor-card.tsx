"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";
import type { Doctor } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  doctor: Doctor;
  index?: number;
}

export function DoctorCard({ doctor, index = 0 }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:shadow-card"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {doctor.badge && (
          <Badge className="absolute left-3 top-3 z-10 bg-white/90 text-primary shadow-md backdrop-blur-sm">
            {doctor.badge}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="line-clamp-1 font-semibold text-secondary transition-colors group-hover:text-primary">
            {doctor.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{doctor.shortDescription}</p>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="font-medium text-secondary">{doctor.rating}</span>
            <span>({doctor.reviewCount})</span>
          </div>
        </div>

        {doctor.schedule && (
          <div className="flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
            <Clock className="h-3 w-3" />
            {doctor.schedule}
          </div>
        )}

        <Button asChild variant="outline" size="sm" className="mt-auto w-full hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300">
          <Link href={`/products/${doctor.slug}`}>Lihat Profil</Link>
        </Button>
      </div>
    </motion.div>
  );
}
