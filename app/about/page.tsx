"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, GraduationCap, Code, Coffee, Music, Gamepad2, Heart, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function AboutPage() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
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
            <h1 className="text-2xl font-bold text-cyan-700">About&nbsp;Me</h1>
            <div />
          </nav>
        </div>
      </header>

      {/* HERO  */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cihanfoto.jpg-akhJnqFyBags0bnc60grTY3Z5fU3Xb.jpeg"
              alt="Cihan Umut Çolak"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl border-4 border-gray-700 object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setIsImageModalOpen(true)}
            />

            {/* Intro */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hello! I'm <span className="text-red-600">Cihan</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I am a Computer Engineering student at Süleyman Demirel University. My passion for technology and my
                desire for continuous learning constantly motivate me to improve in software development.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I particularly enjoy developing cross-platform applications with .NET&nbsp;MAUI. At the same time, I am
                gaining experience by developing personal projects with web technologies.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge className="bg-red-600 text-white px-4 py-2">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Student
                </Badge>
                <Badge className="bg-gray-700 text-white px-4 py-2">
                  <Code className="mr-2 h-4 w-4" />
                  Developer
                </Badge>
                <Badge className="bg-gray-700 text-white px-4 py-2">
                  <Heart className="mr-2 h-4 w-4" />
                  Tech&nbsp;Enthusiast
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL INFO */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Personal&nbsp;Information</h3>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {/* Education */}
            <Card className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white font-semibold">Süleyman Demirel University</p>
                <p className="text-gray-300">Computer Engineering</p>
                <p className="text-gray-400 text-sm mt-2">2023&nbsp;-&nbsp;Present</p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white font-semibold">Isparta, Turkey</p>
                <p className="text-gray-300">Süleyman&nbsp;Demirel University Campus</p>
                <p className="text-white font-semibold">Mersin, Turkey</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Interests&nbsp;&amp;&nbsp;Hobbies</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Coding */}
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors text-center">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Coding</h4>
                <p className="text-gray-300 text-sm">Learning new technologies and developing projects</p>
              </CardContent>
            </Card>

            {/* Coffee */}
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors text-center">
              <CardContent className="pt-6">
                <Coffee className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Coffee</h4>
                <p className="text-gray-300 text-sm">Exploring different coffee flavors</p>
              </CardContent>
            </Card>

            {/* Music */}
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors text-center">
              <CardContent className="pt-6">
                <Music className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Music</h4>
                <p className="text-gray-300 text-sm">Listening to various genres of music</p>
              </CardContent>
            </Card>

            {/* Gaming */}
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors text-center">
              <CardContent className="pt-6">
                <Gamepad2 className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Gaming</h4>
                <p className="text-gray-300 text-sm">Playing strategy and story-based games</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MORE INFORMATION */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">More&nbsp;Information</h3>

          <div className="flex justify-center">
            <video
              className="w-full max-w-2xl rounded-lg shadow-2xl border-2 border-gray-700"
              controls
              preload="metadata"
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ekran%20Kayd%C4%B1%202025-09-20%20133457-7dr7JirH6rQB4Cr3yYDOtnzi4CKWWo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
