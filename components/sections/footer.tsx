"use client";

import * as React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Cross,
} from "lucide-react";
import { company } from "@/data/company";
import { NAV_LINKS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const socialIconMap: Record<string, React.ElementType> = {
  instagram: Instagram,
  "music-2": MessageCircle,
  facebook: Facebook,
  "message-circle": MessageCircle,
};

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  function handleSubscribe(event: React.FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) {
      toast({ title: "Email tidak valid", variant: "destructive" });
      return;
    }
    toast({ title: "Berhasil berlangganan!", description: "Terima kasih atas kepercayaan Anda." });
    setEmail("");
  }

  return (
    <footer className="bg-secondary text-white">
      <div className="container-app grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white">
              <Cross className="h-6 w-6" />
            </span>
            <span className="text-xl font-extrabold text-white">Klinik Sehat</span>
          </Link>
          <p className="text-sm text-white/70">{company.description}</p>
          <div className="flex items-center gap-3">
            {company.socials.map((social) => {
              const Icon = socialIconMap[social.icon] ?? Instagram;
              return (
                <Link
                  key={social.platform}
                  href={social.href}
                  aria-label={social.platform}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Navigasi</h3>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-white/80 hover:text-primary transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Layanan */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Layanan</h3>
          <Link href="/products?category=poli-umum" className="text-sm text-white/80 hover:text-primary transition-colors duration-200">
            Poli Umum
          </Link>
          <Link href="/products?category=poli-gigi" className="text-sm text-white/80 hover:text-primary transition-colors duration-200">
            Poli Gigi
          </Link>
          <Link href="/products?category=poli-anak" className="text-sm text-white/80 hover:text-primary transition-colors duration-200">
            Poli Anak
          </Link>
          <Link href="/products?category=poli-kandungan" className="text-sm text-white/80 hover:text-primary transition-colors duration-200">
            Poli Kandungan
          </Link>
          <Link href="/products?category=vaksinasi" className="text-sm text-white/80 hover:text-primary transition-colors duration-200">
            Vaksinasi
          </Link>
          <Link href="/products?category=medical-check-up" className="text-sm text-white/80 hover:text-primary transition-colors duration-200">
            Medical Check Up
          </Link>
        </div>

        {/* Kontak */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Kontak Kami</h3>
          <p className="flex items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {company.address}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Phone className="h-4 w-4 shrink-0 text-primary" /> {company.phone}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Mail className="h-4 w-4 shrink-0 text-primary" /> {company.email}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Clock className="h-4 w-4 shrink-0 text-primary" /> {company.operationalHours}
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container-app pb-8">
        <div className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6 sm:flex-row sm:items-center">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white">Newsletter</h3>
            <p className="text-xs text-white/60">
              Dapatkan info layanan dan artikel kesehatan terbaru dari kami.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2 sm:w-auto">
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Masukkan email Anda"
              aria-label="Email untuk newsletter"
              className="border-white/15 border-r-0 bg-white/10 text-white placeholder:text-white/50"
            />
            <Button type="submit" size="icon" aria-label="Kirim" className="bg-primary hover:bg-primary-dark">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="container-app py-6 text-center sm:flex sm:flex-col sm:items-center sm:justify-between sm:gap-4">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Klinik Sehat. Semua Hak Dilindungi.
        </p>
      </div>
    </footer>
  );
}
