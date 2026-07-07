"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Category, Service } from "@/types";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

interface ProductsGridProps {
  products: Service[];
  categories: Category[];
  initialCategory?: string;
}

type SortOption = "relevance" | "price-asc" | "price-desc" | "rating";

export function ProductsGrid({ products, categories, initialCategory }: ProductsGridProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>(initialCategory ?? "all");
  const [sort, setSort] = React.useState<SortOption>("relevance");

  React.useEffect(() => {
    setActiveCategory(initialCategory ?? "all");
  }, [initialCategory]);

  const filtered = React.useMemo(() => {
    let result =
      activeCategory === "all"
        ? products
        : products.filter((product) => product.categorySlug === activeCategory);

    result = [...result];
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [products, activeCategory, sort]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              activeCategory === "all"
                ? "border-primary bg-primary text-white"
                : "border-border bg-white text-secondary hover:border-primary hover:text-primary"
            )}
          >
            Semua
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === category.slug
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-secondary hover:border-primary hover:text-primary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-muted">
          Urutkan:
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="rounded-lg border border-border bg-white px-3 py-2 text-sm text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            <option value="relevance">Paling Relevan</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
            <option value="rating">Rating Tertinggi</option>
          </select>
        </label>
      </div>

      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={activeCategory + sort}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        ) : (
          <p className="py-16 text-center text-muted">Belum ada layanan pada kategori ini.</p>
        )}
      </AnimatePresence>
    </div>
  );
}
