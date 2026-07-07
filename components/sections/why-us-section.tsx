"use client";

import { motion } from "framer-motion";
import {
  Award,
  Timer,
  Building2,
  LayoutGrid,
  MessagesSquare,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { whyUsFeatures } from "@/data/features";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  timer: Timer,
  "building-2": Building2,
  "layout-grid": LayoutGrid,
  "messages-square": MessagesSquare,
  "map-pin": MapPin,
};

export function WhyUsSection() {
  return (
    <section className="container-app py-14 sm:py-20" aria-label="Kenapa memilih kami">
      <SectionHeading
        title="Mengapa Memilih Klinik Sehat?"
        description="Keunggulan yang membuat kami menjadi pilihan tepat untuk kesehatan Anda"
        className="mb-10"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyUsFeatures.map((feature, index) => {
          const Icon = iconMap[feature.icon] ?? Award;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-secondary">{feature.title}</p>
                <p className="mt-1 text-sm text-muted">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
