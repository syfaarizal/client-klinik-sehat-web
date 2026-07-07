"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonials } from "@/data/testimonials";
import { StarRating } from "@/components/shared/star-rating";
import { SectionHeading } from "@/components/shared/section-heading";

export function TestimonialsSection() {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <section className="container-app bg-cream py-14 sm:py-20" aria-label="Testimoni pasien">
      <SectionHeading
        title="Apa Kata Pasien Kami?"
        description="Kepuasan pasien adalah prioritas utama kami"
        className="mb-10"
      />

      <div className="relative mx-auto max-w-5xl">
        <button
          ref={prevRef}
          aria-label="Testimoni sebelumnya"
          className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-secondary shadow-soft transition-all duration-300 hover:text-primary hover:shadow-card sm:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          ref={nextRef}
          aria-label="Testimoni berikutnya"
          className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white text-secondary shadow-soft transition-all duration-300 hover:text-primary hover:shadow-card sm:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error swiper navigation params typing
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error swiper navigation params typing
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          className="px-1! py-2!"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto!">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="flex-1 text-sm text-secondary sm:leading-relaxed">&ldquo;{testimonial.message}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary">{testimonial.name}</p>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
