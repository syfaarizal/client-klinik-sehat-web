"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { heroPromo } from "@/data/promo";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="container-app py-4 sm:py-6" aria-label="Reservasi mudah">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-clinic sm:rounded-3xl"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-white blur-2xl" />
          <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-12">
          <div className="flex flex-col gap-2 text-white">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Calendar className="h-4 w-4" />
              {heroPromo.title}
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Reservasi Mudah{" "}
              <span className="text-white/80">Tanpa Antre!</span>
            </h2>
            <p className="max-w-lg text-sm text-white/90 sm:text-base sm:leading-relaxed">
              Booking kunjungan melalui WhatsApp atau formulir online. Hindari antrean dan dapatkan pelayanan lebih cepat.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm font-medium">WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-medium">Form Online</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href={heroPromo.ctaHref}>
                  <Calendar className="h-4 w-4" />
                  {heroPromo.ctaLabel}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link href="/contact">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="relative">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Calendar className="h-20 w-20 text-white" />
              </div>
              <div className="absolute -right-4 -top-2 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -left-4 -bottom-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
