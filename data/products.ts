import type { Doctor, Service } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "doc-1",
    slug: "dr-ahmad-fauzi",
    name: "dr. Ahmad Fauzi, Sp.PD",
    categorySlug: "poli-umum",
    rating: 4.9,
    reviewCount: 156,
    image: "/images/doctor-1.jpg",
    gallery: ["/images/doctor-1.jpg"],
    badge: "Spesialis Penyakit Dalam",
    shortDescription: "Dokter spesialis penyakit dalam dengan pengalaman 12 tahun.",
    description:
      "dr. Ahmad Fauzi adalah dokter spesialis penyakit dalam yang telah berpengalaman selama 12 tahun. Beliau aktif dalam penanganan diabetes, hipertensi, dan berbagai penyakit dalam lainnya.",
    highlights: ["Spesialis Penyakit Dalam", "12 Tahun Pengalaman", "Senin - Kamis"],
    specialization: "Penyakit Dalam",
    schedule: "Senin - Kamis, 09.00 - 17.00",
  },
  {
    id: "doc-2",
    slug: "drg-sarah-wijaya",
    name: "drg. Sarah Wijaya",
    categorySlug: "poli-gigi",
    rating: 4.8,
    reviewCount: 98,
    image: "/images/doctor-2.jpg",
    gallery: ["/images/doctor-2.jpg"],
    badge: "Dokter Gigi",
    shortDescription: "Dokter gigi umum dengan keahlian estetika gigi.",
    description:
      "drg. Sarah Wijaya adalah dokter gigi umum yang ahli dalam perawatan gigi estetika, penambalan, pencabutan, dan pembersihan karang gigi.",
    highlights: ["Dokter Gigi Umum", "Estetika Gigi", "Senin - Sabtu"],
    specialization: "Dokter Gigi Umum",
    schedule: "Senin - Sabtu, 08.00 - 16.00",
  },
  {
    id: "doc-3",
    slug: "dr-maya-sari-sp-a",
    name: "dr. Maya Sari, Sp.A",
    categorySlug: "poli-anak",
    rating: 4.9,
    reviewCount: 124,
    image: "/images/doctor-3.jpg",
    gallery: ["/images/doctor-3.jpg"],
    badge: "Spesialis Anak",
    shortDescription: "Dokter spesialis anak dengan pendekatan ramah anak.",
    description:
      "dr. Maya Sari adalah dokter spesialis anak yang terkenal dengan pendekatannya yang ramah anak. Beliau fokus pada tumbuh kembang anak dan penanganan penyakit anak.",
    highlights: ["Spesialis Anak", "Ramah Anak", "Selasa & Jumat"],
    specialization: "Spesialis Anak",
    schedule: "Selasa & Jumat, 09.00 - 15.00",
  },
  {
    id: "doc-4",
    slug: "dr-budi-pratama-sp-og",
    name: "dr. Budi Pratama, Sp.OG",
    categorySlug: "poli-kandungan",
    rating: 4.8,
    reviewCount: 89,
    image: "/images/doctor-4.jpg",
    gallery: ["/images/doctor-4.jpg"],
    badge: "Spesialis Kandungan",
    shortDescription: "Dokter spesialis obstetri dan ginekologi.",
    description:
      "dr. Budi Pratama adalah dokter spesialis obstetri dan ginekologi dengan pengalaman lebih dari 15 tahun. Beliau menangani konsultasi kehamilan, persalinan, dan masalah kandungan.",
    highlights: ["Spesialis Kandungan", "15 Tahun Pengalaman", "Rabu & Sabtu"],
    specialization: "Obstetri & Ginekologi",
    schedule: "Rabu & Sabtu, 10.00 - 18.00",
  },
  {
    id: "doc-5",
    slug: "dr-eka-wardani",
    name: "dr. Eka Wardani",
    categorySlug: "poli-umum",
    rating: 4.7,
    reviewCount: 67,
    image: "/images/doctor-5.jpg",
    gallery: ["/images/doctor-5.jpg"],
    badge: "Dokter Umum",
    shortDescription: "Dokter umum dengan keahlian umum.",
    description:
      "dr. Eka Wardani adalah dokter umum yang siap membantu menangani keluhan kesehatan umum. Beliau melakukan pemeriksaan, diagnosis, dan pengobatan awal.",
    highlights: ["Dokter Umum", "Pemeriksaan Umum", "Senin - Jumat"],
    specialization: "Dokter Umum",
    schedule: "Senin - Jumat, 08.00 - 17.00",
  },
  {
    id: "doc-6",
    slug: "drg-indah-cahya",
    name: "drg. Indah Cahya",
    categorySlug: "poli-gigi",
    rating: 4.9,
    reviewCount: 112,
    image: "/images/doctor-6.jpg",
    gallery: ["/images/doctor-6.jpg"],
    badge: "Dokter Gigi",
    shortDescription: "Dokter gigi spesialis ortodonti.",
    description:
      "drg. Indah Cahya adalah dokter gigi dengan subspesialisasi ortodonti (kawat gigi). Beliau menangani perbaikan susunan gigi dan rahang.",
    highlights: ["Ortodonti", "Kawat Gigi", "Senin, Rabu, Jumat"],
    specialization: "Ortodonti",
    schedule: "Senin, Rabu, Jumat, 09.00 - 14.00",
  },
];

export const services: Service[] = [
  {
    id: "prod-1",
    slug: "pemeriksaan-umum",
    name: "Pemeriksaan Umum",
    categorySlug: "poli-umum",
    rating: 4.8,
    reviewCount: 245,
    image: "/images/service-umum-detail.jpg",
    gallery: ["/images/service-umum-detail.jpg"],
    badge: "Terpopuler",
    shortDescription: "Pemeriksaan kesehatan umum oleh dokter berpengalaman.",
    description:
      "Layanan pemeriksaan umum meliputi anamnesis, pemeriksaan fisik, diagnosis, dan rekomendasi pengobatan. Dilakukan oleh dokter umum bersertifikat.",
    highlights: ["Dokter Bersertifikat", "Hasil Cepat", "Konsultasi Lengkap"],
    duration: "30 - 45 menit",
  },
  {
    id: "prod-2",
    slug: "tambal-gigi",
    name: "Tambal Gigi",
    categorySlug: "poli-gigi",
    rating: 4.7,
    reviewCount: 189,
    image: "/images/service-tambal.jpg",
    gallery: ["/images/service-tambal.jpg"],
    badge: "Terpopuler",
    shortDescription: "Perawatan penambalan gigi berlubang.",
    description:
      "Layanan penambalan gigi menggunakan bahan komposit berkualitas tinggi. Prosedur cepat, nyaman, dan hasilnya alami.",
    highlights: ["Bahan Premium", "Hasil Alami", "Painless"],
    duration: "45 - 60 menit",
  },
  {
    id: "prod-3",
    slug: "vaksinasi-dt",
    name: "Vaksinasi DT",
    categorySlug: "vaksinasi",
    rating: 4.9,
    reviewCount: 156,
    image: "/images/service-vaksin.jpg",
    gallery: ["/images/service-vaksin.jpg"],
    badge: "Penting",
    shortDescription: "Vaksinasi Difteri dan Tetanus.",
    description:
      "Vaksinasi DT untuk perlindungan terhadap penyakit Difteri dan Tetanus. Disuntikkan sesuai jadwal dan standar Kemenkes RI.",
    highlights: ["Standar Kemenkes", "Bersertifikat", "Imunisasi Lengkap"],
    duration: "15 - 30 menit",
  },
  {
    id: "prod-4",
    slug: "medical-check-up-basic",
    name: "Medical Check Up Basic",
    categorySlug: "medical-check-up",
    rating: 4.8,
    reviewCount: 98,
    image: "/images/service-mcu.jpg",
    gallery: ["/images/service-mcu.jpg"],
    badge: "Terpopuler",
    shortDescription: "Paket pemeriksaan kesehatan dasar.",
    description:
      "Paket MCU basic meliputi pemeriksaan darah lengkap, urin, dan konsultasi dokter. Cocok untuk screening kesehatan awal.",
    highlights: ["Pemeriksaan Darah Lengkap", "Konsultasi Dokter", "Hasil 1 Hari"],
    duration: "2 - 3 jam",
  },
  {
    id: "prod-5",
    slug: "konsultasi-kehamilan",
    name: "Konsultasi Kehamilan",
    categorySlug: "poli-kandungan",
    rating: 4.9,
    reviewCount: 178,
    image: "/images/service-kehamilan.jpg",
    gallery: ["/images/service-kehamilan.jpg"],
    badge: "Rekomendasi",
    shortDescription: "Konsultasi kehamilan dengan dokter spesialis.",
    description:
      "Layanan konsultasi kehamilan meliputi pemeriksaan USG, pemantauan kondisi ibu dan janin, serta konsultasi nutrisi kehamilan.",
    highlights: ["USG Tersedia", "Dokter Spesialis", "Pemantauan Lengkap"],
    duration: "45 - 60 menit",
  },
  {
    id: "prod-6",
    slug: "pemeriksaan-anak",
    name: "Pemeriksaan Anak",
    categorySlug: "poli-anak",
    rating: 4.8,
    reviewCount: 134,
    image: "/images/service-anak.jpg",
    gallery: ["/images/service-anak.jpg"],
    badge: "Terpopuler",
    shortDescription: "Pemeriksaan kesehatan dan tumbuh kembang anak.",
    description:
      "Layanan pemeriksaan anak meliputi evaluasi tumbuh kembang, imunisasi, dan penanganan penyakit anak. Dilakukan dengan pendekatan ramah anak.",
    highlights: ["Ramah Anak", "Imunisasi", "Tumbuh Kembang"],
    duration: "30 - 45 menit",
  },
  {
    id: "prod-7",
    slug: "pembersihan-karang-gigi",
    name: "Scalling Gigi",
    categorySlug: "poli-gigi",
    rating: 4.7,
    reviewCount: 167,
    image: "/images/service-scalling.jpg",
    gallery: ["/images/service-scalling.jpg"],
    shortDescription: "Pembersihan karang gigi profesional.",
    description:
      "Layanan scalling atau pembersihan karang gigi menggunakan alat ultrasonic. Membersihkan plak dan karang gigi untuk kesehatan mulut optimal.",
    highlights: ["Ultrasonic", "Painless", "Whitening Effect"],
    duration: "30 - 45 menit",
  },
  {
    id: "prod-8",
    slug: "vaksinasi-covid-19",
    name: "Vaksinasi COVID-19",
    categorySlug: "vaksinasi",
    rating: 4.9,
    reviewCount: 456,
    image: "/images/service-vaksin-covid.jpg",
    gallery: ["/images/service-vaksin-covid.jpg"],
    badge: "Gratis",
    shortDescription: "Vaksinasi COVID-19 dosis lengkap.",
    description:
      "Vaksinasi COVID-19 gratis untuk masyarakat. Tersedia berbagai merek vaksin sesuai kebijakan pemerintah.",
    highlights: ["Gratis", "Sesuai Kebijakan Govt", "Beragam Merek"],
    duration: "15 - 30 menit",
  },
];

// Alias for backward compatibility
export type Product = Doctor | Service;

// Re-export for backward compatibility
export const products: Product[] = [...doctors, ...services];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getBestSellers(): Product[] {
  return doctors.slice(0, 6);
}

export function getDoctors(): Doctor[] {
  return doctors;
}

export function getServices(): Service[] {
  return services;
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id)
    .slice(0, limit);
}
