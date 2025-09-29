// components/apartment-detail.tsx
"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  Maximize,
  X,
  Home,
  Utensils,
  Bath as BathIcon,
  BedDouble,
  Tv,
  Trees,
  ShieldCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createLocalizedPath, type Locale } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AvaibookIframe } from "./AvaibookWidget"

const categoryIcons: Record<string, JSX.Element> = {
  general: <Home className="w-4 h-4" />,
  cocina: <Utensils className="w-4 h-4" />,
  baño: <BathIcon className="w-4 h-4" />,
  dormitorio: <BedDouble className="w-4 h-4" />,
  entretenimiento: <Tv className="w-4 h-4" />,
  exterior: <Trees className="w-4 h-4" />,
  seguridad: <ShieldCheck className="w-4 h-4" />,
}  

interface Apartment {
  name: string
  images: string[]
  rating: number
  reviews: number
  location: {
    address: string
  }
  capacity: number
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  amenities: Record<string, string[]>
  avaibookId?: string
}

interface Dict {
  nav: {
    home: string
    apartments: string
  }
  hero: {
    cta: string
    bookingSystem: string
  }
  apartmentDetail: {
    verified: string
    reviews: string
    mainFeatures?: string // Optional, add if used elsewhere
    about: string
    includedServices: string
    noCalendar: string
    labels: {
      guests: string
      bedrooms: string
      bathrooms: string
      sqm: string
    }
    contact: {
      title: string
      phoneAvailable: string
      emailResponse: string
      sendInquiry: string
    }
    guarantees: {
      secureBooking: string
      flexibleCancellation: string
      bestPrice: string
    }
  }
  amenityCategories?: Record<string, string>
}

interface ApartmentDetailProps {
  apartment: Apartment
  dict: Dict
  locale: Locale
}

export function ApartmentDetail({ apartment, dict, locale }: ApartmentDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(Object.keys(apartment.amenities)[0])

  // Funciones para navegar imágenes

  const nextImage = useCallback(
    () => setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length),
    [apartment.images.length]
  )
  const prevImage = useCallback(
    () => setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length),
    [apartment.images.length]
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextImage, prevImage])

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    if (touchStartX.current - touchEndX.current > 75) nextImage()
    if (touchEndX.current - touchStartX.current > 75) prevImage()
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
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
          {/* Columna izquierda */}
          <div className="lg:col-span-2 space-y-12">
            {/* Galería */}
            <div className="relative">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src={apartment.images[currentImageIndex] || "/placeholder.svg"}
                  alt={apartment.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {currentImageIndex + 1} / {apartment.images.length}
                  </span>
                  <Maximize className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Miniaturas debajo de la foto principal */}
              {apartment.images.length > 1 && (
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                  {apartment.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                        index === currentImageIndex
                          ? "ring-2 ring-primary shadow-lg scale-105"
                          : "hover:scale-105 hover:shadow-md"
                      }`}
                      aria-label={`Seleccionar imagen ${index + 1}`}
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

            {/* Lightbox con animaciones */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogContent className="p-0 bg-black border-0 !max-w-none w-screen h-screen sm:rounded-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Botón cerrar */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-50 bg-black/60 text-white rounded-full p-2"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navegación */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 text-white rounded-full p-3"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 text-white rounded-full p-3"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Imagen con transición */}
                <div
                  className="relative w-full h-full overflow-hidden"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src={apartment.images[currentImageIndex]}
                        alt={`${apartment.name} - ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Miniaturas */}
                {apartment.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-3 px-4 overflow-x-auto max-w-[90vw]">
                    {apartment.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                          index === currentImageIndex
                            ? "ring-2 ring-primary scale-105"
                            : "hover:scale-105"
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
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
              </DialogContent>
            </Dialog>

            {/* Info general */}
            <div className="space-y-10">
              {/* Header con rating, verificado y título */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    {dict.apartmentDetail.verified}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="font-semibold">{apartment.rating}</span>
                    <span className="text-muted-foreground">
                      {dict.apartmentDetail.reviews.replace("{count}", String(apartment.reviews))}
                    </span>
                  </div>
                </div>

                <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-4 text-foreground">
                  {apartment.name}
                </h1>

                <Link
                  href={`https://www.google.com/maps?q=${encodeURIComponent(
                    apartment.location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">{apartment.location.address}</span>
                </Link>
              </div>

              {/* Características rápidas */}
              <div>
                <h3 className="font-heading font-semibold text-xl mb-4">
                  {dict.apartmentDetail.mainFeatures}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 bg-muted/30 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{apartment.capacity}</div>
                      <div className="text-xs text-muted-foreground">
                        {dict.apartmentDetail.labels.guests}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/30 p-4 rounded-lg">
                    <Bed className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{apartment.bedrooms}</div>
                      <div className="text-xs text-muted-foreground">
                        {dict.apartmentDetail.labels.bedrooms}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/30 p-4 rounded-lg">
                    <Bath className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">{apartment.bathrooms}</div>
                      <div className="text-xs text-muted-foreground">
                        {dict.apartmentDetail.labels.bathrooms}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/30 p-4 rounded-lg">
                    <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">m²</span>
                    </div>
                    <div>
                      <div className="font-semibold">{apartment.area}</div>
                      <div className="text-xs text-muted-foreground">
                        {dict.apartmentDetail.labels.sqm}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div>
                <h3 className="font-heading font-semibold text-xl mb-4">
                  {dict.apartmentDetail.about}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {apartment.description}
                </p>
              </div>

              {/* Servicios incluidos */}
              <div>
                <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  {dict.apartmentDetail.includedServices}
                </h3>

                {/* Mobile: acordeón */}
                <div className="block md:hidden space-y-4">
                  {Object.entries(apartment.amenities).map(([category, list]) => (
                    <details
                      key={category}
                      className="bg-muted/20 rounded-xl p-4"
                    >
                      <summary className="cursor-pointer font-semibold capitalize text-lg">
                        {category}
                      </summary>
                      <div className="mt-3 grid grid-cols-1 gap-2">
                        {(list as string[]).map((amenity, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-2 bg-muted/40 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Desktop: tabs reales */}
                <div className="hidden md:block">
                  {/* Encabezado de tabs */}
                  <div className="flex flex-wrap gap-4 border-b border-border mb-6">
                    {Object.keys(apartment.amenities).map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`relative pb-2 flex items-center gap-2 font-semibold transition-colors ${
                          activeTab === category
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {categoryIcons[category] ?? <Home className="w-4 h-4" />}
                        <span className="capitalize">
                          {dict.amenityCategories?.[category] || category}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Contenido de la tab activa */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 capitalize">
                      {dict.amenityCategories?.[activeTab] || activeTab}
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {(apartment.amenities[activeTab] as string[]).map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-medium">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-2xl border-0 bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-8">
                {/* Placeholder AvaiBook */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center mb-8 border border-border">
                  <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="font-heading font-semibold text-lg mb-2">
                    {dict.hero.bookingSystem}
                  </h4>

                  {/* Render explícito de los 3 widgets */}
                  {locale === "es" && apartment.avaibookId && (
                    <AvaibookIframe id={String(apartment.avaibookId)} lang="ES" />
                  )}
                  {locale === "en" && apartment.avaibookId && (
                    <AvaibookIframe id={String(apartment.avaibookId)} lang="EN" />
                  )}
                  {locale === "de" && apartment.avaibookId && (
                    <AvaibookIframe id={String(apartment.avaibookId)} lang="DE" />
                  )}

                  {!apartment.avaibookId && (
                    <p className="text-sm text-muted-foreground">
                      {dict.apartmentDetail.noCalendar}
                    </p>
                  )}
                </div>

                {/* Contacto directo */}
                <div className="space-y-6">
                  <h4 className="font-heading font-semibold text-lg flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    {dict.apartmentDetail.contact.title}
                  </h4>

                  <div className="space-y-4">
                    <a
                      href="tel:+34683117711"
                      className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">+34 683 11 77 11</div>
                        <div className="text-sm text-muted-foreground">
                          {dict.apartmentDetail.contact.phoneAvailable}
                        </div>
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
                        <div className="font-semibold text-sm">
                          holidaysbeachtorrox@gmail.com
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {dict.apartmentDetail.contact.emailResponse}
                        </div>

                      </div>
                    </a>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 hover:bg-muted font-semibold py-3 rounded-xl"
                  >
                    {dict.apartmentDetail.contact.sendInquiry}
                  </Button>
                </div>

                {/* Garantías */}
                <div className="mt-8 pt-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-semibold">
                      {dict.apartmentDetail.guarantees.secureBooking}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-xs text-muted-foreground">
                        {dict.apartmentDetail.guarantees.flexibleCancellation}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {dict.apartmentDetail.guarantees.bestPrice}
                      </span>
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
