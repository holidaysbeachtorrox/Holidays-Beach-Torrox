// components/structured-data.tsx
"use client"

import { apartments } from "@/lib/data/apartments"

export function StructuredDataApartments() {
  const data = apartments.map((apartment) => ({
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: apartment.name,
    image: [`https://holidaysbeachtorrox.com${apartment.image}`],
    description: `Alojamiento vacacional en ${apartment.location}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: apartment.location,
      addressCountry: "ES",
    },
    priceRange: `€${apartment.price} por noche`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: apartment.rating,
      reviewCount: apartment.reviews,
    },
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
