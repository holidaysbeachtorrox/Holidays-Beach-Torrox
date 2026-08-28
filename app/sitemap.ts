// app/sitemap.ts
import type { MetadataRoute } from "next"
import { getApartments } from "@/lib/data/apartments"
import { SHOWCASE_SLUGS } from "@/lib/data/showcase"
import type { Locale } from "@/lib/utils"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://holidaysbeachtorrox.com"
  const languages: Locale[] = ["es", "en", "de"]

  // Rutas estáticas comunes
  const routes = [
    "",
    "/apartments",
    "/about",
    "/contact",
    "/visit",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
    "/legal/legal",
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Rutas estáticas multilenguaje
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : route === "/apartments" ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            languages.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      })
    })
  })

  // Rutas dinámicas (apartamentos)
  for (const lang of languages) {
    const apartments = await getApartments(lang)
    apartments.forEach((apt) => {
      const route = `/apartments/${apt.slug}`
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(
            languages.map((l) => [l, `${baseUrl}/${l}/apartments/${apt.slug}`])
          ),
        },
      })
    })
  }

  // Páginas de escaparate (las que abre el QR del cartel)
  languages.forEach((lang) => {
    SHOWCASE_SLUGS.forEach((slug) => {
      sitemap.push({
        url: `${baseUrl}/${lang}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(
            languages.map((l) => [l, `${baseUrl}/${l}/${slug}`])
          ),
        },
      })
    })
  })

  return sitemap
}
