// app/sitemap.ts
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://holidaysbeachtorrox.com"
  const languages = ["es", "en", "de"]

  const routes = ["", "/apartments", "/about", "/contact", "/faq", "/legal/privacy", "/legal/terms"]

  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for each language
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : route === "/apartments" ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(languages.map((l) => [l, `${baseUrl}/${l}${route}`])),
        },
      })
    })
  })

  return sitemap
}
