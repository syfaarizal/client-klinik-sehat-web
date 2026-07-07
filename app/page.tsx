import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CategorySection } from "@/components/sections/category-section";
import { BestSellerSection } from "@/components/sections/best-seller-section";
import { PromoBanner } from "@/components/sections/promo-banner";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustBadges } from "@/components/sections/trust-badges";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Klinik Sehat - Memberikan pelayanan kesehatan profesional untuk Anda dan keluarga dengan dokter berpengalaman dan fasilitas modern.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <BestSellerSection />
      <PromoBanner />
      <WhyUsSection />
      <TestimonialsSection />
      <TrustBadges />
      <CtaSection />
    </>
  );
}
