// components/apartment-detail.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Bed,
  Bath,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Phone,
  Mail,
  Shield,
  Clock,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createLocalizedPath, type Locale } from "@/lib/utils"

interface ApartmentDetailProps {
  apartment: any
  dict: any
  locale: Locale
}

export function ApartmentDetail({ apartment, dict, locale }: ApartmentDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length)
  }

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-muted/30 to-muted/10 py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-3 text-sm">
            <Link
              href={createLocalizedPath("/", locale)}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {dict.nav.home}
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href={createLocalizedPath("/apartments", locale)}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {dict.nav.apartments}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-semibold">{apartment.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={apartment.images[currentImageIndex] || "/placeholder.svg"}
                  alt={apartment.name}
                  fill
                  className="object-cover"
                />

                {apartment.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-foreground">
                    {currentImageIndex + 1} / {apartment.images.length}
                  </span>
                </div>
              </div>

              {apartment.images.length > 1 && (
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                  {apartment.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                        index === currentImageIndex
                          ? "ring-3 ring-primary shadow-lg scale-105"
                          : "hover:scale-105 hover:shadow-md"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${apartment.name} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">Verificado</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="font-semibold">4.9</span>
                      <span className="text-muted-foreground">(45 reseñas)</span>
                    </div>
                  </div>

                  <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
                    {apartment.name}
                  </h1>

                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">{apartment.location.address}</span>
                  </div>
                </div>

                <div className="text-right bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-border">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">€{apartment.price}</div>
                  <div className="text-muted-foreground font-medium">por noche</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">{apartment.capacity}</div>
                    <div className="text-sm text-muted-foreground">Huéspedes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-xl">
                  <Bed className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">{apartment.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Dormitorios</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-xl">
                  <Bath className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">{apartment.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Baños</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-xl">
                  <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">m²</span>
                  </div>
                  <div>
                    <div className="font-semibold">{apartment.area}</div>
                    <div className="text-sm text-muted-foreground">Metros²</div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">{apartment.description}</p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Servicios incluidos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {apartment.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-2xl border-0 bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-primary mb-2">€{apartment.price}</div>
                  <div className="text-muted-foreground font-medium">por noche</div>
                  <div className="text-sm text-muted-foreground mt-1">Impuestos incluidos</div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center mb-8 border border-border">
                  <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="font-heading font-semibold text-lg mb-2">Sistema de Reservas</h4>
                  <p className="text-muted-foreground mb-6 text-sm">
                    El widget de AvaiBook se integrará aquí para gestionar disponibilidad y reservas en tiempo real
                  </p>
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 rounded-xl shadow-lg"
                    size="lg"
                  >
                    {dict.hero.cta}
                  </Button>
                </div>

                <div className="space-y-6">
                  <h4 className="font-heading font-semibold text-lg flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Contacto directo
                  </h4>

                  <div className="space-y-4">
                    <a
                      href="tel:+34952123456"
                      className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">+34 952 123 456</div>
                        <div className="text-sm text-muted-foreground">Disponible 24/7</div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@holidaysbeachtorrox.com"
                      className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">info@holidaysbeachtorrox.com</div>
                        <div className="text-sm text-muted-foreground">Respuesta en 2h</div>
                      </div>
                    </a>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 hover:bg-muted font-semibold py-3 rounded-xl"
                  >
                    Enviar consulta
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Reserva 100% segura</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-xs text-muted-foreground">Cancelación flexible</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Mejor precio garantizado</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
