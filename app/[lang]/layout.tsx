// app/[lang]/layout.tsx
import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./../globals.css"
import type { Metadata } from "next"

// Carga de fuentes
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
  const dict = await getDictionary(params.lang)

  const titles = {
    es: "Holidays Beach Torrox - Apartamentos Vacacionales en Costa del Sol | Reserva Directa",
    en: "Holidays Beach Torrox - Vacation Apartments on Costa del Sol | Direct Booking",
    de: "Holidays Beach Torrox - Ferienwohnungen an der Costa del Sol | Direktbuchung",
  }

  const descriptions = {
    es: "Alquiler vacacional en Torrox, Málaga. Apartamentos exclusivos a metros de la playa con vistas al mar. Reserva directa sin comisiones. Desde €65/noche. ✓ WiFi ✓ Parking ✓ Piscina",
    en: "Vacation rental in Torrox, Málaga. Exclusive apartments meters from the beach with sea views. Direct booking without commissions. From €65/night. ✓ WiFi ✓ Parking ✓ Pool",
    de: "Ferienvermietung in Torrox, Málaga. Exklusive Apartments nur wenige Meter vom Strand mit Meerblick. Direktbuchung ohne Provisionen. Ab €65/Nacht. ✓ WiFi ✓ Parkplatz ✓ Pool",
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
          url: "https://holidaysbeachtorrox.com/modern-apartment-with-sea-view-balcony-costa-del-s.jpg",
          width: 1200,
          height: 630,
          alt: "Apartamento con vista al mar en Torrox Costa del Sol",
        },
        {
          url: "https://holidaysbeachtorrox.com/beautiful-beach-view-in-torrox-costa-del-sol-with-.jpg",
          width: 1200,
          height: 630,
          alt: "Playa de Torrox Costa del Sol",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@HolidaysBeachTorrox",
      creator: "@HolidaysBeachTorrox",
      title: titles[params.lang],
      description: descriptions[params.lang],
      images: ["https://holidaysbeachtorrox.com/modern-apartment-with-sea-view-balcony-costa-del-s.jpg"],
    },
    verification: {
      google: "google-site-verification-code-here",
    },
    category: "travel",
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const dict = await getDictionary(params.lang)

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
              image: [
                "https://holidaysbeachtorrox.com/modern-apartment-with-sea-view-balcony-costa-del-s.jpg",
                "https://holidaysbeachtorrox.com/beautiful-beach-view-in-torrox-costa-del-sol-with-.jpg",
              ],
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
              priceRange: "€65-€120",
              starRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
                worstRating: "1",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "WiFi gratuito" },
                { "@type": "LocationFeatureSpecification", name: "Parking privado" },
                { "@type": "LocationFeatureSpecification", name: "Piscina comunitaria" },
                { "@type": "LocationFeatureSpecification", name: "Aire acondicionado" },
                { "@type": "LocationFeatureSpecification", name: "Vista al mar" },
              ],
              checkinTime: "15:00",
              checkoutTime: "11:00",
              petsAllowed: false,
              smokingAllowed: false,
              sameAs: [
                "https://www.facebook.com/HolidaysBeachTorrox",
                "https://www.instagram.com/holidaysbeachtorrox",
                "https://www.tripadvisor.com/holidaysbeachtorrox",
              ],
            }),
          }}
        />
        <div className="min-h-screen flex flex-col">
          <Navigation dict={dict} locale={params.lang} />
          <main className="flex-1">{children}</main>
          <Footer dict={dict} locale={params.lang} />
          <FloatingCTA dict={dict} />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
