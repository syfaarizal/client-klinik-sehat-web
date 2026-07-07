import type { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "art-1",
    slug: "tips-menjaga-kesehatan-saat-musim-pancaroba",
    title: "Tips Menjaga Kesehatan Saat Musim Pancaroba",
    excerpt: "Perubahan cuaca saat pergantian musim dapat mempengaruhi daya tahan tubuh. Berikut tips untuk tetap sehat.",
    content: "",
    image: "/images/article-1.jpg",
    category: "Kesehatan Umum",
    author: "dr. Ahmad Fauzi, Sp.PD",
    publishedAt: "2024-03-15",
    readTime: 5,
    featured: true,
  },
  {
    id: "art-2",
    slug: "pentingnya-medical-check-up-rutin",
    title: "Pentingnya Medical Check Up Rutin",
    excerpt: "MCU rutin membantu mendeteksi penyakit sejak dini dan memantau kondisi kesehatan Anda.",
    content: "",
    image: "/images/article-2.jpg",
    category: "Medical Check Up",
    author: "dr. Eka Wardani",
    publishedAt: "2024-03-10",
    readTime: 4,
    featured: true,
  },
  {
    id: "art-3",
    slug: "cara-merawat-gigi-sehat-sejak-dini",
    title: "Cara Merawat Gigi Sehat Sejak Dini",
    excerpt: "Kesehatan gigi sangat penting untuk kesejahteraan keseluruhan. Pelajari cara merawat gigi dengan benar.",
    content: "",
    image: "/images/article-3.jpg",
    category: "Kesehatan Gigi",
    author: "drg. Sarah Wijaya",
    publishedAt: "2024-03-05",
    readTime: 6,
    featured: false,
  },
  {
    id: "art-4",
    slug: "tanda-tanda-anak-membutuhkan-dokter-spesialis",
    title: "Tanda-Tanda Anak Membutuhkan Dokter Spesialis",
    excerpt: "Sebagai orang tua, penting untuk mengenali kapan waktunya membawa anak ke dokter spesialis.",
    content: "",
    image: "/images/article-4.jpg",
    category: "Kesehatan Anak",
    author: "dr. Maya Sari, Sp.A",
    publishedAt: "2024-02-28",
    readTime: 5,
    featured: false,
  },
  {
    id: "art-5",
    slug: "manfaat-vaksinasi-untuk-keluarga",
    title: "Manfaat Vaccinasi untuk Keluarga",
    excerpt: "Vaksinasi bukan hanya melindungi individu, tetapi juga komunitas sekitar dari penyakit berbahaya.",
    content: "",
    image: "/images/article-5.jpg",
    category: "Vaksinasi",
    author: "dr. Ahmad Fauzi, Sp.PD",
    publishedAt: "2024-02-20",
    readTime: 4,
    featured: false,
  },
  {
    id: "art-6",
    slug: "persiapan-konsultasi-kehamilan-pertama",
    title: "Persiapan Konsultasi Kehamilan Pertama",
    excerpt: "Konsultasi kehamilan pertama sangat penting. Berikut yang perlu Anda persiapkan.",
    content: "",
    image: "/images/article-6.jpg",
    category: "Kesehatan Ibu & Anak",
    author: "dr. Budi Pratama, Sp.OG",
    publishedAt: "2024-02-15",
    readTime: 7,
    featured: false,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category);
}
