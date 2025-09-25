"use client"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PortfolioClient() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-cyan-700">Cihan Umut Çolak</h1>
            <div className="flex gap-4">
              <Link href="/about">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  About Me
                </Button>
              </Link>
              <Link href="/skills">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  Skills
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  Contact
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cihanfoto.jpg-akhJnqFyBags0bnc60grTY3Z5fU3Xb.jpeg"
              alt="Cihan Umut Çolak"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setIsImageModalOpen(true)}
            />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-red-600">Cihan Umut Çolak</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Hi, I'm Cihan Umut Çolak — a Computer Engineering student at Süleyman Demirel University. I'm interested
              in cross-platform app development with .NET MAUI and enjoy working on personal web projects. I'm
              constantly learning and building to improve my skills in modern software development.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <a href="mailto:cihanumut_colak@hotmail.com">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <Link href="https://github.com/cihanumut" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800"
              >
                {/* GitHub Icon */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.44 5.44 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/cihanumut9/" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <a href="mailto:cihanumut_colak@hotmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-800"></section>

      {/* Projects Section */}

      {/* Contact Section */}
      <section className="py-16 px-4 bg-black text-white"></section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-gray-400 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 Cihan Umut Çolak. Tüm hakları saklıdır.</p>
        </div>
      </footer>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cihanfoto.jpg-akhJnqFyBags0bnc60grTY3Z5fU3Xb.jpeg"
              alt="Cihan Umut Çolak - Full Size"
              width={800}
              height={800}
              className="rounded-lg shadow-2xl object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
