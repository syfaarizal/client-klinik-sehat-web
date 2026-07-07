import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-app flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <span className="text-6xl font-extrabold text-primary">404</span>
      <h1 className="text-2xl font-bold text-secondary">Halaman Tidak Ditemukan</h1>
      <p className="max-w-md text-muted">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Button asChild size="lg">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  );
}
