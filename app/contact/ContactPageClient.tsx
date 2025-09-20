"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/cihanumut">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home&nbsp;Page
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-cyan-700">Contact&nbsp;Me</h1>
            <div />
          </nav>
        </div>
      </header>

      {/* CONTACT SECTION */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Get&nbsp;in&nbsp;<span className="text-red-600">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <Card className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <Github className="h-10 w-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white">GitHub</h3>
                  <Link
                    href="https://github.com/cihanumut"
                    target="_blank"
                    className="text-gray-300 hover:text-white underline"
                  >
                    https://github.com/cihanumut
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <Linkedin className="h-10 w-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
                  <Link
                    href="https://www.linkedin.com/in/cihanumut9/"
                    target="_blank"
                    className="text-gray-300 hover:text-white underline"
                  >
                    https://www.linkedin.com/in/cihanumut9/
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors md:col-span-2">
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="h-10 w-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <a href="mailto:cihanumut_colak@hotmail.com" className="text-gray-300 hover:text-white underline">
                    cihanumut_colak@hotmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 bg-black text-gray-400 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 Cihan Umut Çolak. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
