// lib/data/apartments.ts
export type Apartment = {
  id: string
  name: string
  slug: string
  image: string 
  images: string[] 
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
  amenities: {
    general: string[]
    cocina: string[]
    baño: string[]
    dormitorio: string[]
    entretenimiento: string[]
    exterior: string[]
    seguridad: string[]
  }
  avaibookId?: string
}


export const apartments: Apartment[] = [
  // Apartamento 1
  {
    id: "apartment-1",
    name: "Casa Del Pescador",
    slug: "la-casita-del-pescador",
    image: "/apartments/Apartamento 6/Dormitorio-A-2.jpg",
    images: [
      "/apartments/Apartamento 6/Dormitorio-A-2.jpg",
      "/apartments/Apartamento 6/Salon 1.jpg",
      "/apartments/Apartamento 6/Cocina 1.jpg",
      "/apartments/Apartamento 6/Exterior 1.jpg",
      "/apartments/Apartamento 6/Baño 1.jpg",
      "/apartments/Apartamento 6/Baño 2.jpg",
      "/apartments/Apartamento 6/Dormitorio B  1.jpg",
      //"/apartments/Apartamento 6/Dormitorio B  2.jpg",
      "/apartments/Apartamento 6/Exterior 2.jpg",
      "/apartments/Apartamento 6/Salon 2.jpg",
      "/apartments/Apartamento 6/Cocina 2.jpg",
    ],
    price: 85,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    area: 64,
    description:
      "Disfruta de unas vacaciones inolvidables en El Morche alquilando este hermoso apartamento de playa. Con vistas espectaculares al mar Mediterráneo y acceso directo a la arena dorada. Equipado con todas las comodidades para una estancia relajante. Ideal para familias o parejas que buscan sol, mar y tranquilidad en la Costa del Sol.",
    featured: true,
    rating: 8.8,
    reviews: 30,
    location: {
      short: "El Morche, Torrox Costa",
      address: "Calle Santiago 6, El Morche, Torrox Costa",
      coordinates: { lat:36.738119, lng: -3.990626 },
    }, 
    amenities: {
      general: [
        "WiFi gratis",
        "Aire acondicionado",
        "Habitaciones sin humo",
        "Calefacción",
        "Sofá cama",
        "Lavadora",
      ],
      cocina: [
        "Cocina completa",
        "Mesa de comedor",
        "Cafetera",
        "Tostadora",
        "Fogones",
        "Microondas",
        "Nevera",
        "Utensilios de cocina",
        "Batería de cocina",
        "Cocina americana",
      ],
      baño: [
        "Baño privado",
        "Toallas",
        "Secador de pelo",
        "Bañera o ducha",
        "Bidet",
        "Papel higiénico",
      ],
      dormitorio: [
        "Ropa de cama",
        "Armario o ropero",
        "Perchero",
      ],
      entretenimiento: [
        "TV de pantalla plana",
        "Canales por cable",
        "Tabla de Paddle surf",
      ],
      exterior: [
        "Situado frente a la playa",
        "Balcón",
        "Mobiliario exterior",
        "Zona de comedor exterior"
      ],
      seguridad: [
        "Extintores",
        "Detector de humo",
        "Caja fuerte",
        "Cámaras de seguridad"
      ],
    },
    avaibookId: "171123",
  },

  // Apartamento 2
  {
    id: "apartment-2",
    name: "Casa Del Caballito De Mar",
    slug: "la-casita-del-caballito-de-mar",
    image: "/apartments/Apartamento centro internacional/Salon 8.jpg",
    images: [
      "/apartments/Apartamento centro internacional/Salon 8.jpg",
      "/apartments/Apartamento centro internacional/Salon 7.jpg",
      "/apartments/Apartamento centro internacional/Salon 6.jpg",
      "/apartments/Apartamento centro internacional/Dormitorio 3.jpg",
      "/apartments/Apartamento centro internacional/Dormitorio 2.jpg",
      "/apartments/Apartamento centro internacional/Dormitorio 1.jpg",
      "/apartments/Apartamento centro internacional/Salon 1.jpg",
      "/apartments/Apartamento centro internacional/Salon 4.jpg",
      "/apartments/Apartamento centro internacional/Salon 2.jpg",
      "/apartments/Apartamento centro internacional/Cocina 2.jpg",
      "/apartments/Apartamento centro internacional/Cocina 3.jpg",
      "/apartments/Apartamento centro internacional/Baño 3.jpg",
      "/apartments/Apartamento centro internacional/Baño 1.jpg",
      "/apartments/Apartamento centro internacional/Portal.jpg",
      "/apartments/Apartamento centro internacional/Exterior 6.jpg",
      "/apartments/Apartamento centro internacional/Exterior 7.jpg",
      "/apartments/Apartamento centro internacional/Exterior 5.jpg",
      "/apartments/Apartamento centro internacional/Exterior 4.jpg",
      "/apartments/Apartamento centro internacional/Exterior 3.jpg",
      "/apartments/Apartamento centro internacional/Exterior 2.jpg",
      //"/apartments/Apartamento centro internacional/Exterior 1.jpg",
    ],
    price: 66,
    capacity: 3,
    bedrooms: 1,
    bathrooms: 1,
    area: 44,
    description: "Acogedor estudio en el centro de Torrox Costa, a solo 50 metros de la playa. Perfecto para parejas.",
    amenities: {
      general: [
        "WiFi gratis",
        "Aire acondicionado",
        "Habitaciones sin humo",
        "Calefacción",
        "Sofá cama",
        "Lavadora",
      ],
      cocina: [
        "Cocina completa",
        "Mesa de comedor",
        "Cafetera",
        "Tostadora",
        "Fogones",
        "Microondas",
        "Nevera",
        "Utensilios de cocina"
      ],
      baño: [
        "Baño privado",
        "Toallas",
        "Secador de pelo",
        "Bañera o ducha",
        "Bidet",
        "Papel higiénico",
      ],
      dormitorio: [
        "Ropa de cama",
        "Armario o ropero",
        "Perchero",
      ],
      entretenimiento: [
        "TV de pantalla plana",
        "Servicio de streaming (Netflix)",
        "Canales por cable",
        "Canales vía satélite",
        "Radio"
      ],
      exterior: [
        "Situado frente a la playa",
        "Terraza / Solárium",
        "Balcón",
        "Mobiliario exterior",
        "Zona de comedor exterior"
      ],
      seguridad: [
        "Extintores",
        "Detector de humo",
        "Caja fuerte",
        "Cámaras de seguridad"
      ],
    },
    featured: true,
    rating: 9.2,
    reviews: 49,
    location: {
      short: "Torrox Costa", 
      address: "Av. Europa, 82 Torrox Costa",
      coordinates: { lat: 36.7203, lng: -3.9566 }, // poner reales 
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
    amenities: {
      general: [
        "WiFi gratis",
        "Aire acondicionado",
        "Habitaciones sin humo",
        "Calefacción",
        "Sofá cama",
        "Lavadora",
      ],
      cocina: [
        "Cocina completa",
        "Mesa de comedor",
        "Cafetera",
        "Tostadora",
        "Fogones",
        "Microondas",
        "Nevera",
        "Utensilios de cocina"
      ],
      baño: [
        "Baño privado",
        "Toallas",
        "Secador de pelo",
        "Bañera o ducha",
        "Bidet",
        "Papel higiénico",
      ],
      dormitorio: [
        "Ropa de cama",
        "Armario o ropero",
        "Perchero",
      ],
      entretenimiento: [
        "TV de pantalla plana",
        "Servicio de streaming (Netflix)",
        "Canales por cable",
        "Canales vía satélite",
        "Radio"
      ],
      exterior: [
        "Situado frente a la playa",
        "Terraza / Solárium",
        "Balcón",
        "Mobiliario exterior",
        "Zona de comedor exterior"
      ],
      seguridad: [
        "Extintores",
        "Detector de humo",
        "Caja fuerte",
        "Cámaras de seguridad"
      ],
    },
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
    amenities: {
      general: [
        "WiFi gratis",
        "Aire acondicionado",
        "Habitaciones sin humo",
        "Calefacción",
        "Sofá cama",
        "Lavadora",
      ],
      cocina: [
        "Cocina completa",
        "Mesa de comedor",
        "Cafetera",
        "Tostadora",
        "Fogones",
        "Microondas",
        "Nevera",
        "Utensilios de cocina"
      ],
      baño: [
        "Baño privado",
        "Toallas",
        "Secador de pelo",
        "Bañera o ducha",
        "Bidet",
        "Papel higiénico",
      ],
      dormitorio: [
        "Ropa de cama",
        "Armario o ropero",
        "Perchero",
      ],
      entretenimiento: [
        "TV de pantalla plana",
        "Servicio de streaming (Netflix)",
        "Canales por cable",
        "Canales vía satélite",
        "Radio"
      ],
      exterior: [
        "Situado frente a la playa",
        "Terraza / Solárium",
        "Balcón",
        "Mobiliario exterior",
        "Zona de comedor exterior"
      ],
      seguridad: [
        "Extintores",
        "Detector de humo",
        "Caja fuerte",
        "Cámaras de seguridad"
      ],
    },
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
    amenities: {
      general: [
        "WiFi gratis",
        "Aire acondicionado",
        "Habitaciones sin humo",
        "Calefacción",
        "Sofá cama",
        "Escritorio",
        "Lavadora",
      ],
      cocina: [
        "Cocina completa",
        "Mesa de comedor",
        "Cafetera",
        "Tostadora",
        "Fogones",
        "Microondas",
        "Nevera",
        "Utensilios de cocina"
      ],
      baño: [
        "Baño privado",
        "Toallas",
        "Secador de pelo",
        "Bañera o ducha",
        "Bidet",
        "Papel higiénico",
      ],
      dormitorio: [
        "Ropa de cama",
        "Armario o ropero",
        "Perchero",
        "Cuna",
        "Despertador",
      ],
      entretenimiento: [
        "TV de pantalla plana",
        "Servicio de streaming (Netflix)",
        "Canales por cable",
        "Canales vía satélite",
        "Radio"
      ],
      exterior: [
        "Situado frente a la playa",
        "Terraza / Solárium",
        "Balcón",
        "Mobiliario exterior",
        "Zona de comedor exterior"
      ],
      seguridad: [
        "Extintores",
        "Detector de humo",
        "Caja fuerte",
        "Cámaras de seguridad"
      ],
    },
    featured: false,
  }
]