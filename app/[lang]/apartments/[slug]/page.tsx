// app/[lang]/apartments/[slug]/page.tsx
import { getDictionary, type Locale } from "@/lib/dictionaries"
import { Navigation } from "@/components/navigation"
import { ApartmentDetail } from "@/components/apartment-detail"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getApartments } from "@/lib/data/apartments"

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string }
}): Promise<Metadata> {
  const apartments = getApartments(params.lang)
  const apartment = apartments.find((apt) => apt.slug === params.slug)

  if (!apartment) {
    return {
      title: "Apartamento no encontrado",
    }
  }

  const titles = {
    es: `${apartment.name} - Alquiler Vacacional en Torrox | Holidays Beach Torrox`,
    en: `${apartment.name} - Vacation Rental in Torrox | Holidays Beach Torrox`,
    de: `${apartment.name} - Ferienvermietung in Torrox | Holidays Beach Torrox`,
  }

  const descriptions = {
    es: `${apartment.description} Capacidad para ${apartment.capacity} personas, ${apartment.bedrooms} dormitorios. Reserva directa sin comisiones.`,
    en: `${apartment.description} Capacity for ${apartment.capacity} people, ${apartment.bedrooms} bedrooms. Direct booking without fees.`,
    de: `${apartment.description} Kapazität für ${apartment.capacity} Personen, ${apartment.bedrooms} Schlafzimmer. Direktbuchung ohne Provisionen.`,
  }

  return {
    title: titles[params.lang],
    description: descriptions[params.lang],
    keywords: `${apartment.name}, apartamento Torrox, alquiler vacacional, Costa del Sol, ${apartment.capacity} personas, ${apartment.bedrooms} dormitorios`,
    openGraph: {
      title: titles[params.lang],
      description: descriptions[params.lang],
      images: [
        {
          url: apartment.images[0],
          width: 1200,
          height: 630,
          alt: apartment.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[params.lang],
      description: descriptions[params.lang],
      images: [apartment.images[0]],
    },
  }
}

export default async function ApartmentDetailPage({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  const dict = await getDictionary(params.lang)

  const apartments = getApartments(params.lang)
  const apartment = apartments.find((apt) => apt.slug === params.slug)

  if (!apartment) {
    notFound()
  }

  // Flatten amenities into one array for JSON-LD
  const flatAmenities = Object.values(apartment.amenities || {})
    .flat()
    .map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Accommodation",
            name: apartment.name,
            description: apartment.description,
            url: `https://holidaysbeachtorrox.com/${params.lang}/apartments/${apartment.slug}`,
            image: apartment.images,
            address: {
              "@type": "PostalAddress",
              streetAddress: apartment.location.address,
              addressLocality: "Torrox",
              addressRegion: "Málaga",
              postalCode: "29770",
              addressCountry: "ES",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: apartment.location.coordinates.lat,
              longitude: apartment.location.coordinates.lng,
            },
            amenityFeature: flatAmenities,
            occupancy: {
              "@type": "QuantitativeValue",
              maxValue: apartment.capacity,
            },
            numberOfRooms: apartment.bedrooms,
            floorSize: {
              "@type": "QuantitativeValue",
              value: apartment.area,
              unitCode: "MTK",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: apartment.rating,
              reviewCount: apartment.reviews,
            },
          }),
        }}
      />

      <main className="min-h-screen">
        <Navigation dict={dict} locale={params.lang} />
        <ApartmentDetail
          apartment={apartment}
          dict={dict}
          locale={params.lang}
        />
      </main>
    </>
  )
}

export async function generateStaticParams() {
  const locales: Locale[] = ["es", "en", "de"]

  return locales.flatMap((lang) =>
    getApartments(lang).map((apartment) => ({
      slug: apartment.slug,
      lang,
    }))
  )
}
