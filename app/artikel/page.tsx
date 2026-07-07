import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { articles, getFeaturedArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artikel Kesehatan",
  description:
    "Baca artikel kesehatan terbaru dari tim dokter Klinik Sehat. Tips menjaga kesehatan, informasi medis, dan berita kesehatan.",
};

export default function ArticlesPage() {
  const featuredArticles = getFeaturedArticles();
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <div className="container-app py-12 sm:py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl">Artikel Kesehatan</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Tips dan informasi kesehatan dari tim dokter profesional kami
        </p>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="mb-12">
          <SectionHeading title="Artikel Pilihan" className="mb-6" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/artikel/${article.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-card"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-48 w-full sm:h-auto sm:w-1/2">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="mb-2 text-lg font-bold text-secondary transition-colors group-hover:text-primary sm:text-xl">
                      {article.title}
                    </h2>
                    <p className="mb-4 flex-1 text-sm text-muted">{article.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime} menit baca
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other Articles */}
      {otherArticles.length > 0 && (
        <section>
          <SectionHeading title="Artikel Lainnya" className="mb-6" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/artikel/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-soft transition-all duration-300 hover:shadow-card"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-secondary backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 font-semibold text-secondary transition-colors group-hover:text-primary line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mb-3 flex-1 text-sm text-muted line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">
                      {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-primary">
                      Baca
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
