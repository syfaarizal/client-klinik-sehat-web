"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Clock, Award, Phone, UserCheck } from "lucide-react";
import type { Product, Service, Doctor } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/shared/star-rating";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailProps {
  product: Product;
}

function isDoctor(product: Product): product is Doctor {
  return "schedule" in product;
}

function isService(product: Product): product is Service {
  return "duration" in product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = React.useState(product.image);
  const { toast } = useToast();

  const gallery = [product.image, ...product.gallery.filter((img) => img !== product.image)];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 shadow-soft"
        >
          {product.badge && (
            <Badge className="absolute left-4 top-4 z-10 bg-primary/90 backdrop-blur-sm">{product.badge}</Badge>
          )}
          <Image src={activeImage} alt={product.name} fill className="object-cover" priority />
        </motion.div>
        {gallery.length > 1 && (
          <div className="flex gap-3">
            {gallery.map((image) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className={cn(
                  "relative h-20 w-20 overflow-hidden rounded-xl border-2 transition-all duration-300",
                  activeImage === image ? "border-primary shadow-md" : "border-transparent hover:border-primary/30"
                )}
                aria-label="Lihat gambar"
              >
                <Image src={image} alt={product.name} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-extrabold text-secondary sm:text-3xl">{product.name}</h1>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        {/* Duration or Schedule */}
        {isService(product) && product.duration && (
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Durasi: {product.duration}</span>
          </div>
        )}

        {isDoctor(product) && (
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">{product.schedule}</span>
          </div>
        )}

        <p className="text-muted leading-relaxed">{product.description}</p>

        <ul className="flex flex-col gap-3">
          {product.highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-secondary">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              </span>
              {highlight}
            </li>
          ))}
        </ul>

        <Separator />

        <div className="flex flex-wrap gap-3">
          <Button
            size="lg"
            className="flex-1 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() =>
              toast({
                title: "Booking berhasil!",
                description: `Layanan ${product.name} berhasil dibooking. Tim kami akan menghubungi Anda.`,
                variant: "success",
              })
            }
          >
            <Calendar className="h-4 w-4" /> Reservasi Sekarang
          </Button>
          <Button asChild size="lg" variant="outline" className="hover:bg-primary/5">
            <Link href="https://wa.me/6281234567890" target="_blank">
              <Phone className="h-4 w-4" /> Hubungi Kami
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Award className="h-4 w-4 text-primary" /> Dokter Bersertifikat
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Clock className="h-4 w-4 text-primary" /> Hasil Cepat
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-primary" /> Fasilitas Steril
          </div>
        </div>
      </div>
    </div>
  );
}
