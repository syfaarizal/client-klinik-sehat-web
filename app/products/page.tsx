import type { Metadata } from "next";
import { products, doctors, services } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductsGrid } from "@/components/sections/products-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { DoctorCard } from "@/components/doctor-card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layanan & Dokter",
  description: "Jelajahi berbagai layanan kesehatan dan dokter profesional di Klinik Sehat.",
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;

  return (
    <div className="container-app py-12 sm:py-16">
      {/* Header */}
      <div className="mb-8">
        <nav className="mb-4 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-secondary">Layanan & Dokter</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-secondary">Layanan & Dokter Kami</h1>
        <p className="mt-2 text-muted">
          Berbagai layanan kesehatan profesional dan tim dokter berpengalaman siap melayani Anda.
        </p>
      </div>

      {/* Doctors Section */}
      <section className="mb-12">
        <SectionHeading
          title="Tim Dokter"
          description="Dokter profesional dan berpengalaman"
          align="left"
          className="mb-6"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {doctors.slice(0, 6).map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <SectionHeading
          title="Layanan Kesehatan"
          description="Pilihan layanan untuk kebutuhan kesehatan Anda"
          align="left"
          className="mb-6"
        />
        <ProductsGrid products={services} categories={categories} initialCategory={category} />
      </section>
    </div>
  );
}
