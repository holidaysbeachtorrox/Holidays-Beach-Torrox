// app/[lang]/apartments/page.tsx
import { getDictionary, type Locale } from "@/lib/dictionaries"
import { Navigation } from "@/components/navigation"
import { ApartmentsList } from "@/components/apartments-list"
import type { Metadata } from "next"
import { getApartments } from "@/lib/data/apartments"

const SITE_URL = "https://holidaysbeachtorrox.com"

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const titles = {
    es: "Apartamentos en Torrox - Costa del Sol | Holidays Beach Torrox",
    en: "Apartments in Torrox - Costa del Sol | Holidays Beach Torrox",
    de: "Apartments in Torrox - Costa del Sol | Holidays Beach Torrox",
  }

  const descriptions = {
    es: "Explora todos nuestros apartamentos vacacionales en Torrox, Costa del Sol. Desde estudios hasta áticos con terraza. Reserva directa sin comisiones. ✓ Vista al mar ✓ WiFi ✓ Parking",
    en: "Explore all our vacation apartments in Torrox, Costa del Sol. From studios to penthouses with terrace. Direct booking without fees. ✓ Sea view ✓ WiFi ✓ Parking",
    de: "Entdecken Sie alle unsere Ferienwohnungen in Torrox, Costa del Sol. Von Studios bis zu Penthäusern mit Terrasse. Direktbuchung ohne Provisionen. ✓ Meerblick ✓ WiFi ✓ Parkplatz",
  }

  return {
    title: titles[params.lang],
    description: descriptions[params.lang],
    alternates: {
      canonical: `${SITE_URL}/${params.lang}/apartments`,
    },
    openGraph: {
      title: titles[params.lang],
      description: descriptions[params.lang],
      url: `${SITE_URL}/${params.lang}/apartments`,
    },
  }
}

export default async function ApartmentsPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  // Obtener apartamentos según el idioma
  const apartments = getApartments(params.lang)

  // JSON-LD dinámico
  const itemListElement = apartments.map((apt, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/${params.lang}/apartments/${apt.slug}`,
    item: {
      "@type": "Accommodation",
      name: apt.name,
      image: apt.image,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(apt.rating ?? ""),
        reviewCount: String(apt.reviews ?? ""),
      },
    },
  }))

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Apartamentos en Torrox - Costa del Sol",
    description:
      "Colección completa de apartamentos vacacionales en Torrox, Costa del Sol.",
    url: `${SITE_URL}/${params.lang}/apartments`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: apartments.length,
      itemListElement,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${SITE_URL}/${params.lang}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Apartamentos",
          item: `${SITE_URL}/${params.lang}/apartments`,
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <main className="min-h-screen">
        <Navigation dict={dict} locale={params.lang} />

        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
                {dict.apartments.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                {dict.apartments.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Apartments List */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ApartmentsList dict={dict} locale={params.lang} />
          </div>
        </section>
      </main>
    </>
  )
}
