// lib/data/apartments.ts
export type Apartment = {
  id: string
  name: string
  slug: string
  image: string // Imagen destacada
  images: string[] // Galería completa
  price: number
  capacity: number
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  featured: boolean
  rating: number
  reviews: number
  location: {
    short: string // "Torrox Costa"
    address: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  amenities: string[]
}

export const apartments: Apartment[] = [
  {
    id: "apartment-1",
    name: "Apartamento Vista Mar",
    slug: "apartamento-vista-mar",
    image: "/modern-apartment-with-sea-view-balcony-costa-del-s.jpg",
    images: [
      "/modern-apartment-with-sea-view-balcony-costa-del-s.jpg",
      "/apartment-living-room-with-sea-view-modern-furnitu.jpg",
      "/apartment-bedroom-with-sea-view-and-modern-decor.jpg",
      "/apartment-kitchen-modern-design-with-sea-view.jpg",
    ],
    price: 85,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    description:
      "Hermoso apartamento con vistas al mar ubicado en primera línea de playa. Completamente renovado con todas las comodidades modernas.",
    featured: true,
    rating: 4.9,
    reviews: 45,
    location: {
      short: "Torrox Costa",
      address: "Paseo Marítimo 15, Torrox Costa",
      coordinates: { lat: 36.7213, lng: -3.9576 },
    },
    amenities: [
      "WiFi gratuito",
      "Aire acondicionado",
      "Cocina completa",
      "Balcón con vista al mar",
      "TV por cable",
      "Lavadora",
      "Parking privado",
      "Piscina comunitaria",
    ],
  },

  {
    id: "apartment-2",
    name: "Estudio Playa Central",
    slug: "estudio-playa-central",
    image: "/cozy-studio-apartment-near-beach-with-modern-inter.jpg",
    images: [
      "/cozy-studio-apartment-near-beach-with-modern-inter.jpg",
      "/studio-apartment-living-area-with-modern-design.jpg",
      "/studio-apartment-kitchen-compact-and-modern.jpg",
    ],
    price: 65,
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    description: "Acogedor estudio en el centro de Torrox Costa, a solo 50 metros de la playa. Perfecto para parejas.",
    amenities: [
      "WiFi gratuito",
      "Aire acondicionado",
      "Cocina equipada",
      "Balcón",
      "TV por cable",
      "Cerca de restaurantes",
      "Transporte público",
    ],
    featured: true,
    rating: 4.6,
    reviews: 30,
    location: {
      short: "Torrox Costa", 
      address: "Calle Central 8, Torrox Costa",
      coordinates: { lat: 36.7203, lng: -3.9566 },
    },
  },
  {
    id: "apartment-3",
    name: "Ático Terraza Premium",
    slug: "atico-terraza-premium",
    image: "/luxury-penthouse-with-large-terrace-and-sea-views.jpg",
    images: [
      "/luxury-penthouse-with-large-terrace-and-sea-views.jpg",
      "/penthouse-living-room-luxury-design-with-sea-view.jpg",
      "/penthouse-terrace-with-outdoor-furniture-and-sea-.jpg",
      "/penthouse-master-bedroom-luxury-design.jpg",
    ],
    price: 120,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    description:
      "Espectacular ático con gran terraza y vistas panorámicas al mar. Lujo y comodidad en el corazón de la Costa del Sol.",
    amenities: [
      "WiFi gratuito",
      "Aire acondicionado",
      "Cocina completa",
      "Terraza privada",
      "TV por cable",
      "Lavadora/Secadora",
      "Parking privado",
      "Piscina comunitaria",
      "Jacuzzi en terraza",
      "BBQ en terraza",
    ],
    featured: true,
    rating: 4.9,
    reviews: 55,
    location: {
        short: "Torrox Costa",
      address: "Avenida del Mar 25, Torrox Costa",
      coordinates: { lat: 36.7223, lng: -3.9586 },
    },
  },
  {
    id: "apartment-4",
    name: "Apartamento Familiar",
    slug: "apartamento-familiar",
    image: "/family-apartment-with-multiple-bedrooms-and-sea-.jpg",
    images: [
      "/modern-apartment-with-sea-view-balcony-costa-del-s.jpg",
      "/apartment-living-room-with-sea-view-modern-furnitu.jpg",
      "/apartment-bedroom-with-sea-view-and-modern-decor.jpg",
      "/apartment-kitchen-modern-design-with-sea-view.jpg",
    ],
    price: 95,
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    description:
      "Amplio apartamento ideal para familias, con tres dormitorios y dos baños. A pocos pasos de la playa y todas las comodidades.",
    amenities: [
      "WiFi gratuito",
      "Aire acondicionado",
        "Cocina completa",
        "Balcón con vista al mar",
        "TV por cable",
        "Lavadora",
        "Parking privado",
        "Piscina comunitaria",
    ],
    featured: false,
    rating: 4.8,
    reviews: 22,
    location: {
        short: "Torrox Costa",
      address: "Calle Familia 12, Torrox Costa",
      coordinates: { lat: 36.7233, lng: -3.9596 },
    },
  },
  {
    id: "apartment-5",
    name: "Apartamento Romántico",
    slug: "apartamento-romantico",
    image: "/romantic-apartment-with-balcony-and-sea-view.jpg",
    images: [
      "/modern-apartment-with-sea-view-balcony-costa-del-s.jpg",
      "/apartment-living-room-with-sea-view-modern-furnitu.jpg",
      "/apartment-bedroom-with-sea-view-and-modern-decor.jpg",
      "/apartment-kitchen-modern-design-with-sea-view.jpg",
    ],
    price: 75,
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    area: 50,
    description:
      "Encantador apartamento para parejas, con balcón privado y vistas al mar. Perfecto para una escapada romántica en la Costa del Sol.",
    rating: 4.7,
    reviews: 18,
    location: {
      short: "Torrox Costa",
      address: "Dirección no especificada",
      coordinates: { lat: 36.7200, lng: -3.9550 },
    },
    amenities: ["Wifi", "Balcony", "Aire acondicionado"],
    featured: false,
  }
]