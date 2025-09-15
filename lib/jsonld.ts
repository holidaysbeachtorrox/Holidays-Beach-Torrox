// lib/jsonld.ts
export function generateHomeJsonLD(lang: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Holidays Beach Torrox - Apartamentos Vacacionales Costa del Sol",
    description:
      "Apartamentos exclusivos en Torrox, Costa del Sol. Alquiler vacacional de lujo a metros de la playa.",
    url: `https://holidaysbeachtorrox.com/${lang}`,
    mainEntity: {
      "@type": "TouristAccommodation",
      name: "Holidays Beach Torrox",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Torrox",
        addressRegion: "Málaga",
        addressCountry: "ES",
      },
      priceRange: "€65-€120",
      starRating: {
        "@type": "Rating",
        ratingValue: "4.9",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `https://holidaysbeachtorrox.com/${lang}`,
        },
      ],
    },
  }
}
