// app/sitemap.ts
import type { MetadataRoute } from "next"
import { getApartments } from "@/lib/data/apartments"
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

  return sitemap
}
