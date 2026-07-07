"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getDoctors } from "@/data/products";
import { DoctorCard } from "@/components/doctor-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function BestSellerSection() {
  const doctors = getDoctors();
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-cream py-14 sm:py-20" aria-label="Dokter kami">
      <div className="container-app">
        <SectionHeading
          title="Dokter Kami"
          description="Tim dokter profesional dan berpengalaman siap memberikan pelayanan terbaik"
          className="mb-10"
        />

        <div className="relative">
          <button
            ref={prevRef}
            aria-label="Sebelumnya"
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full bg-white text-secondary shadow-soft transition-all duration-300 hover:text-primary hover:shadow-card sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            ref={nextRef}
            aria-label="Berikutnya"
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-3 items-center justify-center rounded-full bg-white text-secondary shadow-soft transition-all duration-300 hover:text-primary hover:shadow-card sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error swiper navigation params typing
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error swiper navigation params typing
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="px-1! py-2!"
          >
            {doctors.map((doctor, index) => (
              <SwiperSlide key={doctor.id} className="h-auto!">
                <DoctorCard doctor={doctor} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">Lihat Semua Dokter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
