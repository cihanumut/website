import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/cihanumut")

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
              <Link href="/cihanumut">
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
              src="https://media.licdn.com/dms/image/v2/D4D03AQG4eSqmrPUBmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713199252523?e=1757548800&v=beta&t=rXrFggr6LC50piHgOjNxgZykmkXxaDLEQB0ycDfylvk"
              alt="Profil Fotoğrafı"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Merhaba, Ben <span className="text-red-600">Cihan Umut Çolak</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Hi, I'm Cihan Umut Çolak — a Computer Engineering student at Süleyman Demirel University. I'm interested
              in cross-platform app development with .NET MAUI and enjoy working on personal web projects. I'm
              constantly learning and building to improve my skills in modern software development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="mailto:cihanumut_colak@hotmail.com">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </Link>
            <Link href="/cv.pdf" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </Link>
          </div>

          <div className="flex justify-center gap-6">
            <div className="flex justify-center gap-6">
              <Link href="https://github.com/username" target="_blank"></Link>
              <Link href="https://www.linkedin.com/in/cihanumut9/" target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:cihanumut_colak@hotmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 px-4 bg-gray-800"></section>

    

      
      <section className="py-16 px-4 bg-black text-white"></section>

      
      <footer className="py-8 px-4 bg-black text-gray-400 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 Cihan Umut Çolak. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
