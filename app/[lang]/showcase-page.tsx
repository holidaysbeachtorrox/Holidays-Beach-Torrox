// app/[lang]/showcase-page.tsx
//
// Cuerpo compartido por las páginas de escaparate (las del QR del cartel).
// Cada slug tiene su propia carpeta de ruta para que la URL sea corta
// (/es/sol-arena-y-mar) sin capturar el resto de rutas de este nivel.

import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getDictionary } from "@/lib/dictionaries"
import { getShowcase } from "@/lib/data/showcase"
import { ApartmentShowcase } from "@/components/apartment-showcase"
import type { Locale } from "@/lib/utils"

const LOCALES: Locale[] = ["es", "en", "de"]
const SITE = "https://holidaysbeachtorrox.com"

function fill(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.split(`{${key}}`).join(value),
    template
  )
}

export async function buildShowcaseMetadata(
  slug: string,
  lang: Locale
): Promise<Metadata> {
  const [dict, showcase] = await Promise.all([
    getDictionary(lang),
    getShowcase(slug, lang),
  ])
  if (!showcase) return {}

  const values = { name: showcase.apartment.name }
  const title = fill(dict.showcase.metaTitle, values)
  const description = fill(dict.showcase.metaDescription, values)
  const url = `${SITE}/${lang}/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, `${SITE}/${l}/${slug}`])),
        "x-default": `${SITE}/es/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: showcase.photos[0], width: 1200, height: 630, alt: showcase.apartment.name }],
    },
  }
}

export async function ShowcasePage({ slug, lang }: { slug: string; lang: Locale }) {
  const [dict, showcase] = await Promise.all([
    getDictionary(lang),
    getShowcase(slug, lang),
  ])
  if (!showcase) notFound()

  const { apartment, photos, reviews } = showcase

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: apartment.name,
    description: apartment.description,
    url: `${SITE}/${lang}/${slug}`,
    image: photos.slice(0, 8).map((photo) => `${SITE}${photo}`),
    numberOfBedrooms: apartment.bedrooms,
    numberOfBathroomsTotal: apartment.bathrooms,
    occupancy: { "@type": "QuantitativeValue", maxValue: apartment.capacity },
    floorSize: { "@type": "QuantitativeValue", value: apartment.area, unitCode: "MTK" },
    address: {
      "@type": "PostalAddress",
      streetAddress: apartment.location.address,
      addressLocality: "Torrox",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: apartment.location.coordinates.lat,
      longitude: apartment.location.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: apartment.rating,
      reviewCount: apartment.reviews,
      bestRating: 10,
    },
    ...(reviews.length > 0 && {
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        // Las de Google no traen la nota publicada, así que se omite en vez
        // de darle un valor que nadie ha puesto.
        ...(r.rating !== undefined && {
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating,
            bestRating: r.source === "google" ? 5 : 10,
          },
        }),
        reviewBody: r.text,
        ...(r.date && { datePublished: r.date }),
      })),
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApartmentShowcase showcase={showcase} dict={dict} locale={lang} />
    </>
  )
}

export function showcaseStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}
