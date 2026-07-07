import type { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "Klinik Sehat",
  tagline: "Sehat Anda, Prioritas Kami",
  description:
    "Memberikan pelayanan kesehatan profesional untuk Anda dan keluarga dengan dokter berpengalaman dan fasilitas modern.",
  url: "https://kliniksehat.id",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  {
    label: "Layanan",
    href: "/products",
    children: [
      { label: "Poli Umum", href: "/products?category=poli-umum" },
      { label: "Poli Gigi", href: "/products?category=poli-gigi" },
      { label: "Poli Anak", href: "/products?category=poli-anak" },
      { label: "Poli Kandungan", href: "/products?category=poli-kandungan" },
      { label: "Vaksinasi", href: "/products?category=vaksinasi" },
      { label: "Medical Check Up", href: "/products?category=medical-check-up" },
    ],
  },
  { label: "Dokter", href: "/products" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/contact" },
];
