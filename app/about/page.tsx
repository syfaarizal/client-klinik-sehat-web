import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Leaf, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih dekat RasaKita, UMKM kuliner lokal yang menghadirkan camilan berkualitas.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    description: "Setiap produk melalui quality control ketat sebelum sampai ke tanganmu.",
  },
  {
    icon: HeartHandshake,
    title: "Dibuat dengan Cinta",
    description: "Resep turun-temurun yang diracik dengan hati oleh tim dapur RasaKita.",
  },
  {
    icon: Leaf,
    title: "Bahan Alami",
    description: "Tanpa pengawet, menggunakan bahan segar pilihan setiap harinya.",
  },
  {
    icon: Users,
    title: "Untuk Semua Keluarga",
    description: "Cocok dinikmati bersama keluarga, dari camilan hingga menu sehat harian.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-app py-12 sm:py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary">
            Tentang {company.name}
          </span>
          <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Menghadirkan Cita Rasa Nusantara yang Praktis dan Berkualitas
          </h1>
          <p className="text-muted">
            {company.name} lahir dari kecintaan pada kuliner lokal. Berawal dari dapur rumahan di
            {" "}
            {company.address.split(",").slice(-2).join(",")}, kini kami hadir untuk menemani momen
            spesialmu dengan camilan, frozen food, katering sehat, dan minuman kekinian yang lezat
            dan terjamin kualitasnya.
          </p>
          <p className="text-muted">
            Kami percaya bahwa makanan enak tidak harus rumit. Karena itu, setiap produk kami
            dirancang agar praktis disantap kapan saja, tanpa mengorbankan rasa autentik dan
            kualitas bahan.
          </p>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-card">
          <Image src="/images/about-hero.jpg" alt="Dapur RasaKita" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading title="Nilai yang Kami Pegang" className="mb-10" />
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

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Pelanggan Puas", value: "10.000+" },
          { label: "Produk Tersedia", value: "60+" },
          { label: "Kota Terjangkau", value: "50+" },
          { label: "Tahun Pengalaman", value: "5+" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 rounded-xl bg-primary-light py-6 text-center"
          >
            <span className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</span>
            <span className="text-xs font-medium text-secondary sm:text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
