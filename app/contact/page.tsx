import type { Metadata } from "next" // Metadata tipini import et
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Cihan Umut Çolak", // Sayfa başlığını burada ayarlıyoruz
  description: "Cihan Umut Çolak'ın kişisel portfolyo web sitesi - İletişim", // İsteğe bağlı açıklama
}

export default function ContactPage() {
  return <ContactPageClient />
}
