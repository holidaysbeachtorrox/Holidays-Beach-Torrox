// app/[lang]/layout.tsx
import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./../globals.css"
import type { Metadata } from "next"
import { getApartments } from "@/lib/data/apartments"

// Fuentes
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { lang: Locale }
}

// Metadata dinámico basado en el idioma
export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const apartments = getApartments(params.lang)

  // Metadata específico por idioma
  const titles = {
    es: "Holidays Beach Torrox - Apartamentos Vacacionales en Costa del Sol | Reserva Directa",
    en: "Holidays Beach Torrox - Vacation Apartments on Costa del Sol | Direct Booking",
    de: "Holidays Beach Torrox - Ferienwohnungen an der Costa del Sol | Direktbuchung",
  }

  const descriptions = {
    es: "Alquiler vacacional en Torrox, Málaga. Apartamentos exclusivos junto a la playa con vistas al mar. Reserva directa sin comisiones. ✓ WiFi ✓ Parking ✓ Piscina",
    en: "Vacation rental in Torrox, Málaga. Exclusive apartments by the beach with sea views. Direct booking without fees. ✓ WiFi ✓ Parking ✓ Pool",
    de: "Ferienvermietung in Torrox, Málaga. Exklusive Apartments nur wenige Meter vom Strand mit Meerblick. Direktbuchung ohne Provisionen. ✓ WiFi ✓ Parkplatz ✓ Pool",
  }

  const keywords = {
    es: "apartamentos Torrox, alquiler vacacional Costa del Sol, apartamentos playa Málaga, vacaciones Torrox Costa, alojamiento Torrox, apartamentos con piscina Málaga, reserva directa apartamentos",
    en: "Torrox apartments, Costa del Sol vacation rental, Málaga beach apartments, Torrox Costa holidays, Torrox accommodation, Málaga apartments with pool, direct booking apartments",
    de: "Torrox Apartments, Costa del Sol Ferienvermietung, Málaga Strand Apartments, Torrox Costa Urlaub, Torrox Unterkunft, Málaga Apartments mit Pool, Direktbuchung Apartments",
  }

  return {
    title: titles[params.lang],
    description: descriptions[params.lang],
    keywords: keywords[params.lang],
    authors: [{ name: "Holidays Beach Torrox" }],
    creator: "Holidays Beach Torrox",
    publisher: "Holidays Beach Torrox",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://holidaysbeachtorrox.com/${params.lang}`,
      languages: {
        "es-ES": "https://holidaysbeachtorrox.com/es",
        "en-US": "https://holidaysbeachtorrox.com/en",
        "de-DE": "https://holidaysbeachtorrox.com/de",
        "x-default": "https://holidaysbeachtorrox.com/es",
      },
    },
    openGraph: {
      type: "website",
      locale: params.lang === "es" ? "es_ES" : params.lang === "en" ? "en_US" : "de_DE",
      url: `https://holidaysbeachtorrox.com/${params.lang}`,
      siteName: "Holidays Beach Torrox",
      title: titles[params.lang],
      description: descriptions[params.lang],
      images: [
        {
          url: apartments[0]?.images[0] || "https://holidaysbeachtorrox.com/placeholder.jpg",
          width: 1200,
          height: 630,
          alt: apartments[0]?.name || "Apartamento en Torrox Costa del Sol",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@HolidaysBeachTorrox",
      creator: "@HolidaysBeachTorrox",
      title: titles[params.lang],
      description: descriptions[params.lang],
      images: [apartments[0]?.images[0] || "https://holidaysbeachtorrox.com/placeholder.jpg"],
    },
    verification: {
      google: "google-site-verification-code-here",
    },
    category: "travel",
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const dict = await getDictionary(params.lang)
  const apartments = getApartments(params.lang)

  // Calcular rating/reviews agregados
  const totalReviews = apartments.reduce((acc, a) => acc + a.reviews, 0)
  const avgRating = (apartments.reduce((acc, a) => acc + a.rating, 0) / apartments.length).toFixed(1)

  // Sacar amenities únicos de todos los apartamentos
  const allAmenities = Array.from(
    new Set(apartments.flatMap((a) => Object.values(a.amenities).flat()))
  )

  return (
    <html lang={params.lang}>
      <body
        className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAccommodation",
              name: "Holidays Beach Torrox",
              description:
                "Apartamentos vacacionales exclusivos en Torrox, Costa del Sol. Alquiler directo sin comisiones.",
              url: `https://holidaysbeachtorrox.com/${params.lang}`,
              logo: "https://holidaysbeachtorrox.com/logo.png",
              image: apartments.flatMap((a) => a.images).slice(0, 5),
              address: {
                "@type": "PostalAddress",
                streetAddress: "Paseo Marítimo",
                addressLocality: "Torrox",
                addressRegion: "Málaga",
                postalCode: "29770",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.7213,
                longitude: -3.9576,
              },
              telephone: "+34 952 123 456",
              email: "info@holidaysbeachtorrox.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: avgRating,
                reviewCount: totalReviews,
              },
              amenityFeature: allAmenities.map((amenity) => ({
                "@type": "LocationFeatureSpecification",
                name: amenity,
              })),
              checkinTime: "15:00",
              checkoutTime: "11:00",
              petsAllowed: false,
              smokingAllowed: false,
              sameAs: [
                "https://www.facebook.com/HolidaysBeachTorrox",
                "https://www.instagram.com/holidaysbeachtorrox",
              ],
            }),
          }}
        />
        <div className="min-h-screen flex flex-col">
          <Navigation dict={dict} locale={params.lang} />
          <main className="flex-1">{children}</main>
          <Footer dict={dict} locale={params.lang} />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
