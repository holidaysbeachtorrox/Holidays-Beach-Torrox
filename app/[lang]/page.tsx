// app/[lang]/page.tsx
import { getDictionary, type Locale } from "@/lib/dictionaries"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { FeaturedApartments } from "@/components/featured-apartments"
import type { Metadata } from "next"
import { generateHomeJsonLD } from "@/lib/jsonld"

// Metadata dinámico basado en el idioma
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const titles = {
    es: "Holidays Beach Torrox - Apartamentos Vacacionales en Costa del Sol | Reserva Directa",
    en: "Holidays Beach Torrox - Vacation Apartments on Costa del Sol | Direct Booking",
    de: "Holidays Beach Torrox - Ferienwohnungen an der Costa del Sol | Direktbuchung",
  }

  const descriptions = {
    es: "Descubre nuestros apartamentos exclusivos en Torrox, Costa del Sol. Alojamiento de lujo a metros de la playa con todas las comodidades. Reserva directa sin comisiones desde €65/noche.",
    en: "Discover our exclusive apartments in Torrox, Costa del Sol. Luxury accommodation meters from the beach with all amenities. Direct booking without commissions from €65/night.",
    de: "Entdecken Sie unsere exklusiven Apartments in Torrox, Costa del Sol. Luxusunterkunft nur wenige Meter vom Strand mit allen Annehmlichkeiten. Direktbuchung ohne Provisionen ab €65/Nacht.",
  }

  return {
    title: titles[params.lang],
    description: descriptions[params.lang],
    alternates: {
      canonical: `https://holidaysbeachtorrox.com/${params.lang}`,
    },
    openGraph: {
      title: titles[params.lang],
      description: descriptions[params.lang],
      url: `https://holidaysbeachtorrox.com/${params.lang}`,
      images: [
        {
          url: "https://holidaysbeachtorrox.com/modern-apartment-with-sea-view-balcony-costa-del-s.jpg",
          width: 1200,
          height: 630,
          alt: "Apartamento con vista al mar en Torrox Costa del Sol",
        },
      ],
    },
  }
}

export default async function HomePage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHomeJsonLD(params.lang)) }}
      />

      <Hero dict={dict} locale={params.lang} />
      <Benefits dict={dict} />
      <FeaturedApartments dict={dict} locale={params.lang} />
    </>
  )
}
