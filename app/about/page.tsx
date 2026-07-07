import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Heart, Stethoscope, Users, Clock, Award } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali lebih dekat Klinik Sehat - fasilitas kesehatan terpercaya dengan dokter berpengalaman dan pelayanan profesional.",
};

const values = [
  {
    icon: Shield,
    title: "Izin Resmi",
    description:
      "Klinik Sehat memiliki izin resmi dari Dinas Kesehatan dan memenuhi standar pelayanan medis yang ditetapkan.",
  },
  {
    icon: Heart,
    title: "Pelayanan dengan Hati",
    description:
      "Kami berkomitmen memberikan pelayanan yang ramah, empathic, dan berfokus pada kebutuhan pasien.",
  },
  {
    icon: Stethoscope,
    title: "Dokter Profesional",
    description:
      "Tim dokter umum dan spesialis kami berpengalaman dan terus meningkatkan kompetensi melalui pendidikan berkelanjutan.",
  },
  {
    icon: Users,
    title: "Ramah Keluarga",
    description:
      "Nyaman untuk seluruh anggota keluarga, dari anak-anak hingga lansia, dengan pendekatan yang sesuai.",
  },
];

const stats = [
  { label: "Pasien Terlayani", value: "25.000+" },
  { label: "Dokter & Spesialis", value: "15+" },
  { label: "Tahun Pengalaman", value: "8+" },
  { label: "Rating Kepuasan", value: "4.9/5" },
];

const facilities = [
  {
    name: "Ruang Tunggu Nyaman",
    description: "Dilengkapi AC, WiFi gratis, dan suasana yang menenangkan",
  },
  {
    name: "Ruang Periksa Modern",
    description: "Peralatan medis terkini untuk diagnosis yang akurat",
  },
  {
    name: "Ruang Tindakan",
    description: "Steril dan memenuhi standar kesehatan",
  },
  {
    name: "Apotek Dalam Klinik",
    description: "Obat-obatan lengkap dengan harga terjangkau",
  },
];

export default function AboutPage() {
  return (
    <div className="container-app py-12 sm:py-16">
      {/* Hero Section */}
      <div className="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary">
            Tentang {company.name}
          </span>
          <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Bersama Kami untuk Kesehatan Anda
          </h1>
          <p className="text-muted">
            {company.name} didirikan dengan misi memberikan akses pelayanan kesehatan berkualitas bagi
            masyarakat. Berlokasi di {company.address}, kami hadir untuk melayani Anda dan keluarga
            dengan dedikasi tinggi.
          </p>
          <p className="text-muted">
            Dengan dukungan dokter berpengalaman, peralatan modern, dan pelayanan yang ramah, kami
            berusaha menjadi pilihan utama untuk kebutuhan kesehatan Anda.
          </p>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-card">
          <Image src="/images/about-hero.jpg" alt={`Tentang ${company.name}`} fill className="object-cover" />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <SectionHeading title="Nilai-Nilai Kami" subtitle="Prinsip yang kami pegang dalam memberikan pelayanan" className="mb-10" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-start gap-3 rounded-xl border border-border bg-white p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
                <value.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-secondary">{value.title}</h3>
              <p className="text-sm text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16 grid grid-cols-2 gap-4 rounded-2xl bg-secondary p-6 sm:grid-cols-4 sm:p-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <span className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</span>
            <span className="text-xs font-medium text-white/80 sm:text-sm">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Facilities Section */}
      <div className="mb-16">
        <SectionHeading title="Fasilitas Klinik" subtitle="Dilengkapi dengan infrastruktur yang mendukung pelayanan optimal" className="mb-10" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-secondary">{facility.name}</h3>
                <p className="mt-1 text-sm text-muted">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Info */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
            <Clock className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-semibold text-secondary">Jam Operasional</h3>
            <p className="text-muted">{company.operationalHours}</p>
            <p className="mt-1 text-sm text-muted">
              Untuk layanan darurat di luar jam operasional, silakan hubungi {company.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
