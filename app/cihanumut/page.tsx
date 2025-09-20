import type { Metadata } from "next"
import PortfolioClient from "./PortfolioClient"

export const metadata: Metadata = {
  title: "Cihan Umut Çolak",
  description: "Cihan Umut Çolak'ın kişisel portfolyo web sitesi",
}

export default function Portfolio() {
  return <PortfolioClient />
}
