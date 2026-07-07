"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone, MapPin, Clock, MessageCircle, UserCheck, HeartPulse, Building2, Smile, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroFeatures } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  "user-check": UserCheck,
  "heart-pulse": HeartPulse,
  "building-2": Building2,
  smile: Smile,
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container-app relative grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <HeartPulse className="h-4 w-4" />
            <span>Sehat Anda, Prioritas Kami</span>
          </div>

          <h1 className="text-balance text-3xl font-extrabold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Kesehatan Anda,{" "}
            <span className="bg-gradient-clinic text-white px-2 bg-clip-text text-transparent">Prioritas Kami</span>
          </h1>

          <p className="max-w-lg text-base text-muted sm:text-lg">
            Kami memberikan pelayanan kesehatan profesional untuk Anda dan keluarga dengan dokter berpengalaman dan fasilitas modern.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] ?? UserCheck;
              return (
                <div key={feature.id} className="flex flex-col gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-secondary">{feature.title}</p>
                    <p className="text-xs text-muted">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">
                <Calendar className="h-4 w-4" />
                Reservasi Sekarang
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/5">
              <Link href="https://wa.me/6281234567890" target="_blank">
                <MessageCircle className="h-4 w-4" />
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Main image */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/hero-clinic.jpg"
              alt="Interior Klinik Sehat yang modern dan bersih"
              width={640}
              height={400}
              priority
              className="h-64 w-full object-cover sm:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
          </div>

          {/* Floating info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-4 left-4 flex flex-col items-center gap-1 rounded-2xl bg-white p-4 shadow-xl sm:-bottom-6 sm:left-6 sm:p-5"
          >
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-xs font-semibold text-secondary">Jam Operasional</span>
            <span className="text-[10px] text-muted">Senin - Sabtu: 08.00 - 21.00</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -top-4 right-4 flex flex-col items-center gap-1 rounded-2xl bg-white p-4 shadow-xl sm:-top-6 sm:right-6 sm:p-5"
          >
            <MessageCircle className="h-5 w-5 text-success" />
            <span className="text-xs font-semibold text-secondary">Konsultasi Online</span>
            <span className="text-[10px] text-muted">24/7 Available</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -right-4 top-1/2 flex flex-col items-center gap-1 rounded-2xl bg-white p-4 shadow-xl sm:-right-6 sm:p-5"
          >
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-xs font-semibold text-secondary">Lokasi Klinik</span>
            <span className="text-[10px] text-muted">Jakarta Selatan</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -left-4 top-1/3 flex flex-col items-center gap-1 rounded-2xl bg-gradient-clinic p-4 text-white shadow-xl sm:-left-6 sm:p-5"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-bold">Emergency</span>
            <span className="text-[10px] font-medium text-white/80">021-7654-3210</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
