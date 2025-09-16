// components/apartments-list.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Bed, Bath, ArrowRight, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createLocalizedPath, type Locale } from "@/lib/utils"
import { apartments } from "@/lib/data/apartments"

interface ApartmentsListProps {
  dict: any
  locale: Locale
}

// Ordenamos por rating (descendente)
const allApartments = apartments.sort((a, b) => b.rating - a.rating)

export function ApartmentsList({ dict, locale }: ApartmentsListProps) {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Mostrando {allApartments.length} apartamentos
        </p>
      </div>

      {/* Apartments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {allApartments.map((apartment) => (
          <Card
            key={apartment.id}
            className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card hover:scale-[1.02] rounded-2xl"
          >
            {/* Imagen con overlay */}
            <div className="relative overflow-hidden">
              <Image
                src={apartment.image || "/placeholder.svg"}
                alt={apartment.name}
                width={600}
                height={400}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {apartment.featured && (
                <Badge className="absolute top-4 left-4 bg-secondary hover:bg-secondary text-secondary-foreground font-semibold px-3 py-1 shadow-lg">
                  {dict.featured?.tag || "Destacado"}
                </Badge>
              )}

              {/* Rating overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                <Star className="w-4 h-4 fill-secondary text-secondary" />
                <span className="font-semibold text-sm">{apartment.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({apartment.reviews})
                </span>
              </div>
            </div>

            {/* Contenido */}
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {apartment.name}
              </h3>

              {/* Ubicación */}
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>{apartment.location.short}</span>
              </div>

              {/* Info: huéspedes, dormitorios, baños */}
              <div className="grid grid-cols-3 text-center text-sm text-muted-foreground mb-6">
                <div className="flex flex-col items-center">
                  <Users className="w-5 h-5 text-primary mb-1" />
                  <span className="font-medium">{apartment.capacity}</span>
                  <span>{dict.apartments.capacity}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bed className="w-5 h-5 text-primary mb-1" />
                  <span className="font-medium">{apartment.bedrooms}</span>
                  <span>{dict.apartments.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bath className="w-5 h-5 text-primary mb-1" />
                  <span className="font-medium">{apartment.bathrooms}</span>
                  <span>{dict.apartments.bathrooms}</span>
                </div>
              </div>

              {/* Botón */}
              <Button
                className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link
                  href={createLocalizedPath(`/apartments/${apartment.slug}`, locale)}
                >
                  {dict.apartments.book || "Ver detalles"}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
