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

const allApartments = apartments.sort((a, b) => a.price - b.price)

export function ApartmentsList({ dict, locale }: ApartmentsListProps) {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">Mostrando {allApartments.length} apartamentos</p>
        <select className="border border-border rounded-md px-3 py-2 text-sm bg-background">
          <option>Precio: menor a mayor</option>
          <option>Precio: mayor a menor</option>
          <option>Mejor valorados</option>
          <option>Más recientes</option>
        </select>
      </div>

      {/* Apartments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {allApartments.map((apartment) => (
          <Card
            key={apartment.id}
            className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <Image
                src={apartment.image || "/placeholder.svg"}
                alt={apartment.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {apartment.featured && (
                <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">Destacado</Badge>
              )}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                <span className="text-sm font-semibold text-foreground">
                  €{apartment.price}/{dict.apartments.night}
                </span>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading font-semibold text-lg text-foreground line-clamp-1">{apartment.name}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{apartment.rating}</span>
                  <span className="text-muted-foreground">({apartment.reviews})</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <MapPin className="w-4 h-4" />
                <span>{apartment.location.short}</span>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>
                    {apartment.capacity} {dict.apartments.capacity}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>
                    {apartment.bedrooms} {dict.apartments.bedrooms}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>
                    {apartment.bathrooms} {dict.apartments.bathrooms}
                  </span>
                </div>
              </div>

              <Button className="w-full group" asChild>
                <Link href={createLocalizedPath(`/apartments/${apartment.slug}`, locale)}>
                  Ver detalles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          Cargar más apartamentos
        </Button>
      </div>
    </div>
  )
}
