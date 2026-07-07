"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { Product, Service } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/shared/star-rating";
import { formatCurrency } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  index?: number;
}

function isService(product: Product): product is Service {
  return "price" in product;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { toast } = useToast();
  const isFree = isService(product) ? product.price === 0 : false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:shadow-card"
    >
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden">
        {product.badge && (
          <Badge className="absolute left-3 top-3 z-10 bg-primary/90 backdrop-blur-sm">{product.badge}</Badge>
        )}
        <div className="aspect-square w-full bg-gradient-to-br from-primary/5 to-secondary/5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="line-clamp-1 font-semibold text-secondary transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-bold text-primary">
            {isService(product) ? (isFree ? "Gratis" : formatCurrency(product.price)) : "Lihat Profil"}
          </span>
          <Button
            size="icon"
            variant="secondary"
            aria-label={`Booking ${product.name}`}
            onClick={() =>
              toast({
                title: "Booking berhasil",
                description: `Layanan ${product.name} berhasil dibooking.`,
                variant: "success",
              })
            }
          >
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
