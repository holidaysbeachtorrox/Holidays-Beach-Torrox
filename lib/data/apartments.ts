// lib/data/apartments.ts
import { tr } from "date-fns/locale"

export type Apartment = {
  id: string
  name: string
  slug: string
  image: string 
  images: string[] 
  capacity: number
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  featured: boolean
  rating: number
  reviews: number
  location: {
    short: string 
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
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    area: 64,
    description:
      "Disfruta de unas vacaciones inolvidables en El Morche alquilando este hermoso apartamento de playa. Con vistas espectaculares al mar Mediterráneo y acceso directo a la arena dorada. Equipado con todas las comodidades para una estancia relajante. Ideal para familias o parejas que buscan sol, mar y tranquilidad en la Costa del Sol.",
    featured: false,
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
  // Apartamento 3
  {
    id: "apartment-3",
    name: "Brisa Mediterránea",
    slug: "la-brisa-mediterranea",
    image: "/apartments/Piso El Morche/Dormitorio A 8.jpg",
    images: [
      "/apartments/Piso El Morche/Dormitorio A 8.jpg",
      "/apartments/Piso El Morche/Entrada 3.jpg",
      "/apartments/Piso El Morche/Entrada 2.jpg",
      "/apartments/Piso El Morche/Entrada 5.jpg",
      "/apartments/Piso El Morche/Entrada 1.jpg",
      "/apartments/Piso El Morche/Salon 4.jpg",
      "/apartments/Piso El Morche/Salon 5.jpg",
      "/apartments/Piso El Morche/Salon 6.jpg",
      "/apartments/Piso El Morche/Salon 1.jpg",
      "/apartments/Piso El Morche/Terraza 2.jpg",
      "/apartments/Piso El Morche/Terraza 5.jpg",
      "/apartments/Piso El Morche/Cocina 1.jpg",
      "/apartments/Piso El Morche/Cocina 2.jpg",
      "/apartments/Piso El Morche/Cocina 5.jpg",
      "/apartments/Piso El Morche/Cocina 7.jpg",
      "/apartments/Piso El Morche/Baño A 1.jpg",
      "/apartments/Piso El Morche/Baño A 3.jpg",
      "/apartments/Piso El Morche/Dormitorio A 1.jpg",
      "/apartments/Piso El Morche/Dormitorio A 2.jpg",
      "/apartments/Piso El Morche/Dormitorio A 6.jpg",
      "/apartments/Piso El Morche/Dormitorio A 7.jpg",
      "/apartments/Piso El Morche/Dormitorio B 1.jpg",
      "/apartments/Piso El Morche/Dormitorio B 4.jpg",
      "/apartments/Piso El Morche/Dormitorio B 2.jpg",
      "/apartments/Piso El Morche/Baño B 3.jpg",
      "/apartments/Piso El Morche/Baño B 1.jpg",
      "/apartments/Piso El Morche/Dormitorio C3.jpg",
      "/apartments/Piso El Morche/Dormitorio C4.jpg",
      "/apartments/Piso El Morche/Exterior.jpg",
      "/apartments/Piso El Morche/Fotos nuevas cochera y exterior/Cochera1.jpg",
      "/apartments/Piso El Morche/Fotos nuevas cochera y exterior/Cochera3.jpg",
      "/apartments/Piso El Morche/Fotos nuevas cochera y exterior/Cochera2.jpg",

    ],
    capacity: 8,
    bedrooms: 3,
    bathrooms: 2,
    area: 187,
    description:
      "Descubre la serenidad en este exquisito apartamento vacacional cerca de las azules costas de El Morche. Disfruta de la impresionantes cercanías del mar y de la playa, donde los atardeceres dorados pintan el cielo. Interiores elegantemente amueblados ofrecen confort y relajación. Con fácil acceso a la playa y encantadoras comodidades locales, disfruta de la escapada perfecta junto al mar.",
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
    reviews: 23,
    location: {
        short: "El Morche, Torrox Costa",
      address: "Calle Nuestra Señora del Carmen .n°9 2, 29793 El Morche, Torrox Costa",
      coordinates: { lat: 36.7223, lng: -3.9586 },
    },
  },
  // Apartamento 4
  {
    id: "apartment-4",
    name: "Sol, Arena y Mar",
    slug: "sol-arena-y-mar",
    image: "/apartments/Apartamento 4/Dormitorio A 5.jpg",
    images: [
      "/apartments/Apartamento 4/Dormitorio A 5.jpg",
      "/apartments/Apartamento 4/Exterior 1.jpg",
      "/apartments/Apartamento 4/Salón 3.jpg",
      "/apartments/Apartamento 4/Salón 2.jpg",
      "/apartments/Apartamento 4/Salón 4.jpg",
      "/apartments/Apartamento 4/Dormitorio A 4.jpg",
      "/apartments/Apartamento 4/Dormitorio A 1.jpg",
      "/apartments/Apartamento 4/Dormitorio A 2.jpg",
      "/apartments/Apartamento 4/Exterior 2.jpg",
      "/apartments/Apartamento 4/Exterior 3.jpg",
      "/apartments/Apartamento 4/Exterior 4.jpg",
      "/apartments/Apartamento 4/Dormitorio B  1.jpg",
      "/apartments/Apartamento 4/Dormitorio B  2.jpg",
      "/apartments/Apartamento 4/Dormitorio B  3.jpg",
      "/apartments/Apartamento 4/Baño 1.jpg",
      "/apartments/Apartamento 4/Baño 2.jpg",
      "/apartments/Apartamento 4/Cocina 1.jpg",
      "/apartments/Apartamento 4/Cocina 2.jpg",
    ],
    capacity: 5,
    bedrooms: 2,
    bathrooms: 1,
    area: 71,
    description:
      "Encantador apartamento en Torrox Costa, perfecto para parejas o viajeros solos. Compacto y funcional, con todas las comodidades esenciales. Ubicado muy cerca de la playa y con vistas al mar. Ideal para relajarse y disfrutar del ambiente apacible y pintoresco de la hermosa Costa del Sol.",
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
    rating: 9.1,
    reviews: 25,
    location: {
        short: "El Morche, Torrox Costa",
      address: "C. Santiago, 4, 29793 El Morche, Torrox Costa",
      coordinates: { lat: 36.7233, lng: -3.9596 },
    },
  },
]