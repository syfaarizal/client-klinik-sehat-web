import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/articles";
import { Button } from "@/components/ui/button";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="container-app py-8 sm:py-12">
      {/* Back Button */}
      <Link href="/artikel">
        <Button variant="ghost" size="sm" className="mb-6 -ml-2">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Artikel
        </Button>
      </Link>

      <article className="mx-auto max-w-3xl">
        {/* Article Header */}
        <header className="mb-8">
          <span className="mb-3 inline-block rounded-full bg-primary-light px-3 py-1 text-sm font-semibold text-primary">
            {article.category}
          </span>
          <h1 className="mb-4 text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
            {article.title}
          </h1>
          <p className="mb-6 text-lg text-muted">{article.excerpt}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 border-y border-border py-4 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary">
                <User className="h-4 w-4" />
              </span>
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime} menit baca
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content - Placeholder for full content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-muted">
            {article.excerpt}
          </p>
          <p className="text-muted">
            Artikel ini ditulis oleh {article.author} dari Klinik Sehat. Untuk konsultasi lebih
            lanjut mengenai topik ini, jangan ragu untuk menghubungi tim medis kami atau
            berkujungan langsung ke Klinik Sehat.
          </p>
          <p className="text-muted">
            {/* Note: Full article content placeholder. Integrate with a CMS or update data/articles.ts for complete content. */}
          </p>
        </div>

        {/* Share Section */}
        <div className="mt-10 flex items-center justify-between rounded-xl border border-border bg-white p-4">
          <span className="flex items-center gap-2 text-sm font-medium text-secondary">
            <Share2 className="h-4 w-4" />
            Bagikan Artikel
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              WhatsApp
            </Button>
            <Button variant="outline" size="sm">
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              Copy Link
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-primary p-6 text-center">
          <h3 className="mb-2 text-xl font-bold text-white">
            Butuh Konsultasi Kesehatan?
          </h3>
          <p className="mb-4 text-white/90">
            Tim dokter profesional kami siap membantu Anda
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Reservasi Sekarang</Link>
          </Button>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mx-auto mt-16 max-w-5xl">
          <h2 className="mb-6 text-xl font-bold text-secondary">Artikel Terkait</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                href={`/artikel/${related.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-soft transition-all duration-300 hover:shadow-card"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-sm font-semibold text-secondary transition-colors group-hover:text-primary line-clamp-2">
                    {related.title}
                  </h3>
                  <span className="mt-auto text-xs text-muted">
                    {related.readTime} menit baca
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
