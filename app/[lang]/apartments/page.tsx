// app/[lang]/apartments/page.tsx
import { getDictionary, type Locale } from "@/lib/dictionaries"
import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"
import { ApartmentsList } from "@/components/apartments-list"
import { ApartmentsFilters } from "@/components/apartments-filters"
import type { Metadata } from "next"
import { StructuredDataApartments } from "@/components/structured-data"

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
    es: "Explora todos nuestros apartamentos vacacionales en Torrox, Costa del Sol. Desde estudios hasta áticos con terraza. Reserva directa desde €65/noche. ✓ Vista al mar ✓ WiFi ✓ Parking",
    en: "Explore all our vacation apartments in Torrox, Costa del Sol. From studios to penthouses with terrace. Direct booking from €65/night. ✓ Sea view ✓ WiFi ✓ Parking",
    de: "Entdecken Sie alle unsere Ferienwohnungen in Torrox, Costa del Sol. Von Studios bis zu Penthäusern mit Terrasse. Direktbuchung ab €65/Nacht. ✓ Meerblick ✓ WiFi ✓ Parkplatz",
  }

  return {
    title: titles[params.lang],
    description: descriptions[params.lang],
    alternates: {
      canonical: `https://holidaysbeachtorrox.com/${params.lang}/apartments`,
    },
    openGraph: {
      title: titles[params.lang],
      description: descriptions[params.lang],
      url: `https://holidaysbeachtorrox.com/${params.lang}/apartments`,
    },
  }
}

export default async function ApartmentsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Apartamentos en Torrox - Costa del Sol",
            description: "Colección completa de apartamentos vacacionales en Torrox, Costa del Sol.",
            url: `https://holidaysbeachtorrox.com/${params.lang}/apartments`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: 15,
              itemListElement: [
                {
                  "@type": "Accommodation",
                  name: "Apartamento Vista Mar",
                  priceRange: "€85",
                },
                {
                  "@type": "Accommodation",
                  name: "Estudio Playa Central",
                  priceRange: "€65",
                },
                {
                  "@type": "Accommodation",
                  name: "Ático Terraza Premium",
                  priceRange: "€120",
                },
              ],
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: `https://holidaysbeachtorrox.com/${params.lang}`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Apartamentos",
                  item: `https://holidaysbeachtorrox.com/${params.lang}/apartments`,
                },
              ],
            },
          }),
        }}
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{dict.apartments.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Filters and Apartments */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1 mb-8 lg:mb-0">
                <ApartmentsFilters dict={dict} />
              </div>

              {/* Apartments Grid */}
              <div className="lg:col-span-3">
                <ApartmentsList dict={dict} locale={params.lang} />
              </div>
            </div>
          </div>
        </section>

        <FloatingCTA dict={dict} />
      </main>
      <StructuredDataApartments />
    </>
  )
}
