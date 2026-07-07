"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

export function CtaSection() {
  return (
    <section className="container-app py-14 sm:py-10" aria-label="Ajakan reservasi">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-clinic px-6 py-12 text-center text-white sm:px-12"
      >
        <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">
          Kesehatan Anda Mulai dari Langkah Pertama
        </h2>
        <p className="max-w-lg text-sm text-white/80 sm:text-base">
          Reservasi sekarang untuk konsultasi dengan dokter profesional. Tim kami siap membantu Anda 24 jam.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/contact">
              <Calendar className="h-4 w-4" />
              Reservasi Sekarang
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
            <Link href={`https://wa.me/${company.whatsapp}`} target="_blank">
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </Link>
          </Button>
        </div>
        <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
          <Phone className="h-4 w-4" />
          Atau hubungi {company.phone}
        </p>
      </motion.div>
    </section>
  );
}
