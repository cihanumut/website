/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/cihanumut", destination: "/", permanent: true },
      { source: "/about", destination: "/#path", permanent: true },
      { source: "/skills", destination: "/#stack", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ]
  },
}

export default nextConfig
