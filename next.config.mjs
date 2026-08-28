/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Next redimensiona y convierte a AVIF/WebP según el `sizes` de cada
    // <Image>. Sin esto, las galerías sirven los JPG originales enteros
    // (13-14 MB por página), inasumible desde un móvil con datos.
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
