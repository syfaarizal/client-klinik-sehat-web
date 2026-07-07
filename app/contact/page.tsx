import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { company } from "@/data/company";
import { ContactForm } from "@/components/sections/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Klinik Sehat untuk reservasi, konsultasi, atau pertanyaan seputar layanan kesehatan kami.",
};

const faqs = [
  {
    question: "Bagaimana cara reservasi appointment?",
    answer: "Anda dapat reservasi melalui WhatsApp di nomor kami, mengisi formulir online di website, atau langsung datang ke klinik. Reservasi via WhatsApp akan mendapatkan konfirmasi lebih cepat.",
  },
  {
    question: "Apakah perlu membuat appointment untuk medical check up?",
    answer: "Ya, untuk medical check up disarankan membuat appointment terlebih dahulu agar persiapan pemeriksaan dapat dilakukan dengan optimal dan waktu tunggu lebih singkat.",
  },
  {
    question: "Apakah menerima pasien asuransi?",
    answer: "Saat ini kami menerima beberapa asuransi dan perusahaan partner. Silakan hubungi kami untuk informasi terbaru mengenai kerja sama asuransi.",
  },
  {
    question: "Jam operasional klinik apa saja?",
    answer: "Klinik beroperasi dari Senin hingga Sabtu, pukul 08.00 - 21.00 WIB. Untuk layanan darurat di luar jam operasional, silakan hubungi nomor darurat kami.",
  },
];

export default function ContactPage() {
  return (
    <div className="container-app py-12 sm:py-16">
      <div className="mb-10 flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl">Hubungi Kami</h1>
        <p className="mx-auto max-w-xl text-muted">
          Punya pertanyaan seputar layanan atau ingin reservasi? Tim kami siap membantu Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-secondary">Alamat</p>
                <p className="text-sm text-muted">{company.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-secondary">Telepon</p>
                <p className="text-sm text-muted">{company.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-secondary">Email</p>
                <p className="text-sm text-muted">{company.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-secondary">Jam Operasional</p>
                <p className="text-sm text-muted">{company.operationalHours}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Lokasi Klinik Sehat"
              src="https://www.google.com/maps?q=Jakarta+Selatan&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-secondary">Reservasi & Kirim Pesan</h2>
                <p className="text-sm text-muted">Isi formulir di bawah untuk reservasi atau pertanyaan</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-secondary">Pertanyaan Umum</h2>
        <Accordion type="single" collapsible className="mx-auto max-w-2xl">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
