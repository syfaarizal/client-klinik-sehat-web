# RasaKita — Website UMKM Kuliner

Website UMKM modern untuk brand kuliner (camilan lokal, frozen food, katering sehat, minuman kekinian) dibangun dengan Next.js 15 App Router, TypeScript, dan Tailwind CSS v4.

## Stack

- Next.js 15 (App Router, Server Components)
- React 19 + TypeScript (strict mode)
- Tailwind CSS v4
- shadcn/ui pattern (Radix UI primitives + CVA)
- Framer Motion
- Lucide React
- Swiper

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur Folder

```
app/                  Routing (App Router)
  page.tsx            Homepage
  products/           Listing & detail produk
  about/              Tentang kami
  contact/            Kontak
components/
  ui/                 Primitive UI (button, card, sheet, dll)
  sections/           Section-section halaman (Navbar, Hero, Footer, dll)
  shared/             Komponen kecil reusable (StarRating, SectionHeading)
data/                 Sumber data terpusat (products, categories, dll)
types/                Definisi TypeScript
hooks/                Custom hooks (use-toast)
lib/                  Utility & constants
public/
  images/             Placeholder gambar (ganti dengan aset asli)
  icons/              Custom SVG icon
```

## Mengganti Gambar

Semua gambar berada di `public/images/` dan direferensikan lewat data di folder `data/`. Cukup ganti file dengan nama yang sama tanpa perlu mengubah kode komponen.

## Mengganti Data

Seluruh konten (produk, kategori, testimoni, kontak) terpusat di folder `data/` dalam bentuk file TypeScript, siap dihubungkan ke API/backend di kemudian hari dengan mengganti isi fungsi fetch data.

## Warna & Tipografi

- Primary: `#F7931A`
- Secondary: `#2B2B2B`
- Background: `#FFF8F1`
- Font: Plus Jakarta Sans (via `next/font/google`)

Token warna & radius diatur di `app/globals.css` melalui `@theme` (Tailwind v4).
