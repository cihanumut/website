export type Lang = "tr" | "en"
type T = { tr: string; en: string }
type TList = { tr: string[]; en: string[] }

export type Visual =
  | { type: "phones"; shots: string[] }
  | { type: "browser"; shot: string; url: string }
  | { type: "landscape"; shot: string }
  | { type: "model" }

export type Project = {
  id: string
  name: string
  type: T
  year: string
  role: T
  summary: T
  points: TList
  stack: string[]
  links: { label: T; href: string }[]
  icon?: string
  status?: T
  visual: Visual
}

export const tr = <V,>(v: V | { tr: V; en: V }, lang: Lang): V =>
  v && typeof v === "object" && "tr" in (v as object) && "en" in (v as object) ? (v as { tr: V; en: V })[lang] : (v as V)

export const profile = {
  name: "Cihan Umut Çolak",
  email: "cihanumut_colak@hotmail.com",
  photo: "/portrait.jpg",
  links: [
    { label: "GitHub", href: "https://github.com/cihanumut" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/cihanumut9/" },
    { label: "TryHackMe", href: "https://tryhackme.com/p/realcuc" },
    { label: "Google Play", href: "https://play.google.com/store/apps/dev?id=8396361986869411011" },
  ],
}

const onPlay: T = { tr: "Google Play'de yayında", en: "Live on Google Play" }

export const ui = {
  nav: {
    work: { tr: "Projeler", en: "Work" },
    expertise: { tr: "Uzmanlık", en: "Expertise" },
    experience: { tr: "Deneyim", en: "Experience" },
    contact: { tr: "İletişim", en: "Contact" },
  },
  title: { tr: "Bilgisayar Mühendisi", en: "Computer Engineer" },
  location: { tr: "Isparta, Türkiye", en: "Isparta, Türkiye" },
  headline: {
    tr: "Mobil uygulamalar, web platformları ve güvenlik araçları geliştiriyorum.",
    en: "I build mobile apps, web platforms and security tools.",
  },
  intro: {
    tr: "Fikirden yayına kadar uçtan uca çalışıyorum: mimari, backend, arayüz, test ve mağaza süreci. Google Play'de yayında üç uygulamam ve kendi alan adında çalışan bir platformum var.",
    en: "I work end to end, from idea to release: architecture, backend, UI, testing and store publishing. I have three apps live on Google Play and a platform running on its own domain.",
  },
  cta: { tr: "Projeleri gör", en: "See the work" },
  write: { tr: "E-posta gönder", en: "Send an email" },
  workTitle: { tr: "Seçili projeler", en: "Selected work" },
  roleLabel: { tr: "Rol", en: "Role" },
  other: { tr: "Diğer çalışmalar", en: "Other work" },
  expertiseTitle: { tr: "Uzmanlık alanları", en: "Expertise" },
  experienceTitle: { tr: "Deneyim", en: "Experience" },
  education: { tr: "Eğitim", en: "Education" },
  certificates: { tr: "Sertifikalar", en: "Certificates" },
  languages: { tr: "Diller", en: "Languages" },
  contactTitle: { tr: "Bir projen mi var?", en: "Have a project in mind?" },
  contactSub: {
    tr: "İş, proje ya da iş birliği için yazabilirsin.",
    en: "Reach out about a role, a project or a collaboration.",
  },
  copy: { tr: "Kopyala", en: "Copy" },
  copied: { tr: "Kopyalandı", en: "Copied" },
  modelCaption: { tr: "Test doğruluğu", en: "Test accuracy" },
  footer: { tr: "Next.js ile geliştirildi · Vercel", en: "Built with Next.js · Vercel" },
}

export const projects: Project[] = [
  {
    id: "career90",
    name: "Career 90",
    type: { tr: "Mobil oyun · Unity", en: "Mobile game · Unity" },
    year: "2026",
    icon: "/apps/career90.png",
    status: onPlay,
    role: { tr: "Tek geliştirici ve yayıncı", en: "Sole developer & publisher" },
    summary: {
      tr: "Şutu parmağınla çizdiğin, deneme maçından yıldızlığa uzanan futbol kariyeri oyunu. Kulüp hayatı, antrenman, haftalık plan ve maç motoru tek bir oyunda.",
      en: "A football career game where you draw your shots and go from a trial match to stardom. Club life, training, weekly planning and a match engine in one game.",
    },
    points: {
      tr: [
        "Unity 6 ve C# ile geliştirildi; arayüzün tamamı kod tarafında kuruluyor.",
        "Maç motoru, kariyer ilerlemesi, kayıt sistemi ve otomatik test koşuları.",
        "İmzalı AAB, sürüm yönetimi ve mağaza sayfası dahil Google Play yayın sürecinin tamamı.",
      ],
      en: [
        "Built with Unity 6 and C#; the entire UI is constructed in code.",
        "Match engine, career progression, save system and automated test runs.",
        "Owned the full Google Play release: signed AABs, versioning and the store listing.",
      ],
    },
    stack: ["Unity", "C#", "Android", "Python"],
    links: [{ label: { tr: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.career90.game" }],
    visual: { type: "phones", shots: ["/shots/career90-1.webp", "/shots/career90-2.webp", "/shots/career90-3.webp"] },
  },
  {
    id: "harfsayi",
    name: "Harf & Sayı Düellosu",
    type: { tr: "Mobil · Gerçek zamanlı multiplayer", en: "Mobile · Real-time multiplayer" },
    year: "2026",
    icon: "/apps/harfsayi.png",
    status: onPlay,
    role: { tr: "Tek geliştirici ve yayıncı", en: "Sole developer & publisher" },
    summary: {
      tr: "Klasik \"Bir Kelime Bir İşlem\" formatı. Bilgisayara karşı, aynı ekranda ya da oda koduyla internet üzerinden iki oyuncu.",
      en: "The classic words-and-numbers TV game. Play the computer, a friend on the same screen, or anyone online with a room code.",
    },
    points: {
      tr: [
        "Express + Socket.io sunucusu: oda yönetimi, tur senkronizasyonu ve sunucu taraflı puanlama.",
        "İstemci ve sunucunun paylaştığı test edilmiş çekirdek: harf üretimi, sayı çözücü, kelime doğrulama.",
        "React arayüzü Capacitor ile yerel Android uygulamasına paketlendi.",
      ],
      en: [
        "Express + Socket.io server handling rooms, round synchronisation and server-side scoring.",
        "A tested core shared by client and server: letter generation, number solver, word validation.",
        "React UI packaged as a native Android app with Capacitor.",
      ],
    },
    stack: ["React", "Node.js", "Socket.io", "Express", "Capacitor"],
    links: [
      { label: { tr: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.harfsayiduellosu.app" },
      { label: { tr: "Kaynak kod", en: "Source" }, href: "https://github.com/cihanumut/harf-sayi-duellosu" },
    ],
    visual: { type: "phones", shots: ["/shots/harfsayi-1.webp", "/shots/harfsayi-2.webp", "/shots/harfsayi-3.webp"] },
  },
  {
    id: "phishguard",
    name: "PhishGuard",
    type: { tr: "Makine öğrenmesi · Güvenlik", en: "Machine learning · Security" },
    year: "2026",
    role: { tr: "Backend geliştirici, güvenlik araştırmacısı", en: "Backend developer, security researcher" },
    summary: {
      tr: "Bir URL'nin oltalama (phishing) olup olmadığını tahmin eden hibrit sistem: klasik makine öğrenmesi ile graf tabanlı analizi birleştiriyor.",
      en: "A hybrid system that predicts whether a URL is phishing by combining classic machine learning with graph-based analysis.",
    },
    points: {
      tr: [
        "URL'den dinamik özellik çıkarımı: leksikal yapı, WHOIS ve DNS kayıtları.",
        "XGBoost sınıflandırıcı ile PyTorch Geometric ve PageRank tabanlı graf analizi.",
        "Sonuçları gerçek zamanlı döndüren Flask API ve web arayüzü.",
      ],
      en: [
        "Dynamic feature extraction from the URL: lexical structure, WHOIS and DNS records.",
        "XGBoost classifier alongside graph analysis with PyTorch Geometric and PageRank.",
        "Flask API and web UI returning verdicts in real time.",
      ],
    },
    stack: ["Python", "Flask", "XGBoost", "PyTorch Geometric", "scikit-learn"],
    links: [
      { label: { tr: "Demo videosu", en: "Demo video" }, href: "https://youtu.be/M1mMVJX8iDo" },
      { label: { tr: "Canlı demo", en: "Live demo" }, href: "https://phishingtest-fceb.onrender.com/" },
      { label: { tr: "Kaynak kod", en: "Source" }, href: "https://github.com/cihanumut/PhishingTest" },
    ],
    visual: { type: "model" },
  },
  {
    id: "cyberinf",
    name: "CyberInf",
    type: { tr: "Full-stack web platformu", en: "Full-stack web platform" },
    year: "2026",
    icon: "/apps/cyberinf.png",
    status: { tr: "cyberinf.com.tr'de canlı", en: "Live at cyberinf.com.tr" },
    role: { tr: "Full-stack geliştirici", en: "Full-stack developer" },
    summary: {
      tr: "Kullanıcıların siber güvenlik yazıları okuyup beğenebildiği ve yorum yapabildiği topluluk platformu. Kendi alan adında, üretim ortamında çalışıyor.",
      en: "A community platform where people read, like and discuss cybersecurity articles. Running in production on its own domain.",
    },
    points: {
      tr: [
        "Node.js + Express REST API: JWT kimlik doğrulama, rate limiting, Helmet ve girdi doğrulama.",
        "MongoDB, Redis ve RabbitMQ; medya için Cloudinary, e-posta için Resend.",
        "Docker ile Render'a deploy ve özel alan adı yönlendirmesi.",
      ],
      en: [
        "Node.js + Express REST API with JWT auth, rate limiting, Helmet and input validation.",
        "MongoDB, Redis and RabbitMQ; Cloudinary for media, Resend for email.",
        "Dockerised deployment on Render with custom domain routing.",
      ],
    },
    stack: ["Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "React", "Docker"],
    links: [
      { label: { tr: "Siteyi aç", en: "Visit site" }, href: "https://www.cyberinf.com.tr" },
      { label: { tr: "Kaynak kod", en: "Source" }, href: "https://github.com/cihanumut/CyberInf" },
    ],
    visual: { type: "browser", shot: "/shots/cyberinf-1.webp", url: "cyberinf.com.tr" },
  },
  {
    id: "careerkick",
    name: "Career Kick",
    type: { tr: "Mobil oyun · Capacitor", en: "Mobile game · Capacitor" },
    year: "2026",
    icon: "/apps/careerkick.png",
    status: onPlay,
    role: { tr: "Tek geliştirici ve yayıncı", en: "Sole developer & publisher" },
    summary: {
      tr: "Pulları fırlatıp gol attığın sıra tabanlı pul futbolu: 12 lig, 300 seviye, her seviyede üç görev. Tamamen çevrimdışı.",
      en: "Turn-based flick football: 12 leagues, 300 levels, three objectives per level. Fully offline.",
    },
    points: {
      tr: [
        "Oyun mantığı web teknolojileriyle yazıldı, Capacitor ile yerel Android uygulamasına dönüştürüldü.",
        "İnternet izni yok, veri toplamıyor; dokunsal geri bildirim için sadece titreşim izni.",
      ],
      en: [
        "Game logic written with web technologies, shipped as a native Android app via Capacitor.",
        "No internet permission and no data collection; vibration is the only permission, for haptics.",
      ],
    },
    stack: ["JavaScript", "Capacitor", "Android"],
    links: [{ label: { tr: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.careerkick.game" }],
    visual: { type: "landscape", shot: "/shots/careerkick-1.webp" },
  },
]

export const otherWork = [
  {
    name: { tr: "Otonom robot araç", en: "Autonomous robot vehicle" },
    note: {
      tr: "LDR ve HC-SR04 sensörleri, L298N motor sürücüsü; engel algılama ve motor kontrolü için Arduino C++.",
      en: "LDR and HC-SR04 sensors with an L298N driver; Arduino C++ for obstacle detection and motor control.",
    },
    year: "2025",
  },
]

export const expertise = [
  {
    title: { tr: "Mobil", en: "Mobile" },
    text: {
      tr: "Unity, Capacitor ve Flutter ile Android uygulamaları; imzalama, sürümleme ve Google Play yayın süreci.",
      en: "Android apps with Unity, Capacitor and Flutter; signing, versioning and Google Play publishing.",
    },
    tools: ["Unity", "C#", "Capacitor", "Flutter", "Dart", "Android"],
  },
  {
    title: { tr: "Web & Backend", en: "Web & Backend" },
    text: {
      tr: "REST API'ler, gerçek zamanlı sunucular, kimlik doğrulama, önbellek, kuyruk ve container tabanlı deploy.",
      en: "REST APIs, real-time servers, authentication, caching, queues and container-based deployment.",
    },
    tools: ["TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Redis", "Docker"],
  },
  {
    title: { tr: "Güvenlik & ML", en: "Security & ML" },
    text: {
      tr: "Güvenli API tasarımı, tehdit tespiti için makine öğrenmesi ve graf analizi.",
      en: "Secure API design, plus machine learning and graph analysis for threat detection.",
    },
    tools: ["Python", "Flask", "XGBoost", "PyTorch", "scikit-learn"],
  },
]

export const experience = [
  {
    when: "2026",
    title: { tr: "Dijital Stajyer", en: "Digital Intern" },
    org: "FLO",
    note: {
      tr: "BT, yapay zekâ, tedarik zinciri ve kategori yönetimi dahil 20'den fazla departmanla çalışarak büyük ölçekli perakendede BT ve yapay zekâ sistemlerinin karar süreçlerindeki rolünü inceledim.",
      en: "Worked across 20+ departments including IT, AI, supply chain and category management, studying the role of IT and AI systems in large-scale retail decisions.",
    },
  },
  {
    when: "2025",
    title: { tr: "Stajyer · Donanım ve Yapay Zekâ Entegrasyonu", en: "Intern · Hardware & AI Integration" },
    org: "Europap Tezol",
    note: {
      tr: "BT departmanı için C# / .NET ile şirket içi duyuru uygulaması geliştirdim; iş akışlarında yapay zekâ entegrasyon alanları üzerine sunum yaptım.",
      en: "Built an internal announcement app in C# / .NET for the IT department and presented where AI could fit into company workflows.",
    },
  },
]

export const education = {
  degree: { tr: "Bilgisayar Mühendisliği", en: "Computer Engineering" },
  school: { tr: "Süleyman Demirel Üniversitesi", en: "Süleyman Demirel University" },
}

export const certificates = [
  { name: "Pre Security", by: "TryHackMe" },
  { name: { tr: "Araştırmada Üretken Yapay Zekâ", en: "Generative AI in Research" }, by: "BTK Akademi" },
  { name: { tr: "Yapay Zekâ Etiği", en: "AI Ethics" }, by: "BTK Akademi" },
]

export const languages = [
  { name: { tr: "Türkçe", en: "Turkish" }, level: { tr: "Ana dil", en: "Native" } },
  { name: { tr: "İngilizce", en: "English" }, level: { tr: "B2", en: "B2" } },
  { name: { tr: "Almanca", en: "German" }, level: { tr: "A2", en: "A2" } },
]
