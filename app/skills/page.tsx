import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Code, Smartphone, LayoutDashboard, Terminal } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next" // Metadata tipini import et

export const metadata: Metadata = {
  title: "Cihan Umut Çolak", // Sayfa başlığını burada ayarlıyoruz
  description: "Cihan Umut Çolak'ın kişisel portfolyo web sitesi - Yetenekler", // İsteğe bağlı açıklama
}

export default function SkillsPage() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "C#", icon: Code },
        { name: "C", icon: Code },
        { name: "Java", icon: Code },
        { name: "JavaScript", icon: Code },
        { name: "Dart", icon: Code },
        { name: "Python", icon: Code },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML", icon: LayoutDashboard },
        { name: "CSS", icon: LayoutDashboard },
        { name: "React", icon: LayoutDashboard },
        { name: "Web Development", icon: LayoutDashboard },
      ],
    },
    {
      category: "Frameworks & Tools",
      items: [
        { name: ".NET MAUI", icon: Smartphone },
        { name: "Flutter", icon: Smartphone },
        { name: "VS Code", icon: Terminal },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/cihanumut">
              {" "}
              {/* Updated link */}
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home&nbsp;Page
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-cyan-700">My&nbsp;Skills</h1>
            <div />
          </nav>
        </div>
      </header>

      {/* SKILLS SECTION */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            My&nbsp;<span className="text-red-600">Skills</span>
          </h2>

          <div className="space-y-10">
            {skills.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-red-400 mb-6 border-b border-gray-700 pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {category.items.map((skill, skillIndex) => (
                    <Card key={skillIndex} className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors">
                      <CardContent className="flex items-center gap-4 p-4">
                        <skill.icon className="h-8 w-8 text-red-600 flex-shrink-0" />
                        <span className="text-lg font-medium text-white">{skill.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
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
