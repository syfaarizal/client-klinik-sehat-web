"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<Partial<FormState>>({});
  const { toast } = useToast();

  function validate(values: FormState) {
    const nextErrors: Partial<FormState> = {};
    if (!values.name.trim()) nextErrors.name = "Nama wajib diisi";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Email tidak valid";
    if (!values.phone.trim()) nextErrors.phone = "Nomor telepon wajib diisi";
    if (values.message.trim().length < 10) nextErrors.message = "Pesan minimal 10 karakter";
    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    toast({
      title: "Pesan terkirim!",
      description: "Tim kami akan segera menghubungi Anda.",
      variant: "success",
    });
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-secondary">
            Nama Lengkap
          </label>
          <Input
            id="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Nama Anda"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-secondary">
            Nomor Telepon
          </label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            placeholder="08xx-xxxx-xxxx"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-secondary">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          placeholder="nama@email.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-secondary">
          Pesan
        </label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Tulis pesan Anda di sini..."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-fit">
        <Send className="h-4 w-4" /> Kirim Pesan
      </Button>
    </form>
  );
}
