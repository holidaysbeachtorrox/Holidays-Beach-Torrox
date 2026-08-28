// lib/data/showcase.ts
//
// Páginas "escaparate": una por apartamento, pensadas para abrirse desde el QR
// del cartel de la calle. Solo fotos, reseñas y botones de reserva.
//
// Los datos editables están en showcase.json. Formato de cada reseña:
//
//   {
//     "source": "google",              // "google" o "booking"
//     "author": "Marta G.",            // nombre tal y como aparece publicado
//     "rating": 5,                     // Google va sobre 5; Booking, sobre 10
//     "date": "2025-07",               // AAAA-MM (opcional)
//     "text": "Todo perfecto, ..."     // en su idioma original, sin traducir
//   }
//
// Y los enlaces a los perfiles públicos, para el botón "ver todas las reseñas":
//
//   "links": { "google": "https://...", "booking": "https://..." }
//
// Si un enlace está vacío, su botón no se muestra. Si "reviews" está vacío,
// no se muestra la sección de reseñas. La página funciona igual sin ellos.

import showcaseData from "./showcase.json"
import { getApartments, type Apartment } from "./apartments"
import type { Locale } from "@/lib/utils"

export type ReviewSource = "google" | "booking"

export type Review = {
  source: ReviewSource
  author: string
  /** Google va sobre 5 y Booking sobre 10. Se omite si no consta la nota. */
  rating?: number
  /** País del autor, tal y como lo publica Booking. */
  country?: string
  /** Titular del comentario, cuando dice algo más que "Excepcional". */
  title?: string
  /** AAAA-MM. Google solo muestra fechas relativas, así que ahí se omite. */
  date?: string
  text: string
}

export type Showcase = {
  slug: string
  apartment: Apartment
  photos: string[]
  links: { google: string; booking: string }
  reviews: Review[]
}

/** Slugs con página de escaparate. Son también las rutas del QR: /es/<slug> */
export const SHOWCASE_SLUGS = Object.keys(showcaseData) as string[]

export async function getShowcase(
  slug: string,
  locale: Locale
): Promise<Showcase | undefined> {
  const entry = (showcaseData as Record<string, any>)[slug]
  if (!entry) return undefined

  const apartments = await getApartments(locale)
  const apartment = apartments.find((a) => a.id === entry.apartmentId)
  if (!apartment) return undefined

  return {
    slug,
    apartment,
    photos: entry.photos,
    links: entry.links,
    reviews: entry.reviews as Review[],
  }
}
