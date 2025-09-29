// lib/data/apartments.ts
import baseData from "./apartments.json";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/utils";

export type Apartment = {
  id: string;
  name: string;
  slug: string;
  image: string;
  images: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  featured: boolean;
  rating: number;
  reviews: number;
  location: {
    short: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  amenities: {
    general: string[];
    cocina: string[];
    baño: string[];
    dormitorio: string[];
    entretenimiento: string[];
    exterior: string[];
    seguridad: string[];
    idiomas: string[];
  };
  avaibookId?: string;
};

/**
 * Devuelve todos los apartamentos fusionando datos fijos + traducciones
 */
export async function getApartments(locale: Locale): Promise<Apartment[]> {
  const dict = await getDictionary(locale);
  const translations = dict.apartmentsData;

  return baseData.map((apartment) => {
    const t = translations[apartment.id];

    return {
      ...apartment,
      name: t.name,
      description: t.description,
      location: {
        ...t.location,
        coordinates: apartment.location.coordinates, // ahora es objeto anidado
      },
      amenities: t.amenities,
    };
  });
}

/**
 * Devuelve un apartamento por slug
 */
export async function getApartmentBySlug(
  slug: string,
  locale: Locale
): Promise<Apartment | undefined> {
  const apartments = await getApartments(locale);
  return apartments.find((apt) => apt.slug === slug);
}
