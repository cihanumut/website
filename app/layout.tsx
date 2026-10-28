import type { Metadata, Viewport } from "next"
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const sans = Hanken_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-sans" })
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://cihanumut.vercel.app"),
  title: "Cihan Umut Çolak · Computer Engineer",
  description:
    "Computer Engineer building mobile apps, web platforms and security tools. Three apps live on Google Play.",
  openGraph: {
    title: "Cihan Umut Çolak · Computer Engineer",
    description: "Mobile apps, web platforms and security tools. Three apps live on Google Play.",
    url: "/",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d0f" },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
