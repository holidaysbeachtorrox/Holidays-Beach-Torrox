// components/apartment-showcase.tsx
"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Bath,
  Bed,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { AvaibookIframe } from "./AvaibookWidget"
import { contact } from "@/lib/data/contact"
import type { Review, Showcase } from "@/lib/data/showcase"
import { createLocalizedPath, type Locale } from "@/lib/utils"

interface ApartmentShowcaseProps {
  showcase: Showcase
  dict: any
  locale: Locale
}

/** Sustituye {clave} por su valor en los textos del diccionario. */
function fill(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.split(`{${key}}`).join(String(value)),
    template
  )
}

/** "1 dormitorio" / "2 dormitorios": los tres idiomas distinguen igual. */
function plural(count: number, singular: string, pluralForm: string) {
  return count === 1 ? singular : pluralForm
}

const SOURCE_LABEL: Record<Review["source"], string> = {
  google: "Google",
  booking: "Booking.com",
}

/** Google puntúa sobre 5 y Booking sobre 10. */
const SOURCE_SCALE: Record<Review["source"], number> = {
  google: 5,
  booking: 10,
}

/**
 * A partir de esta longitud la reseña no cabe en la tarjeta del carrusel y se
 * ofrece leerla entera. Se mide por caracteres para que servidor y cliente
 * pinten lo mismo, sin depender de cómo caiga el texto en pantalla.
 */
const LONG_REVIEW = 320

function isLong(review: Review) {
  return review.text.length > LONG_REVIEW
}

/** "2024-09" -> "septiembre de 2024" / "September 2024" / "September 2024". */
function formatMonth(date: string, locale: Locale) {
  const [year, month] = date.split("-").map(Number)
  if (!year || !month) return date
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(
    new Date(year, month - 1, 1)
  )
}

export function ApartmentShowcase({ showcase, dict, locale }: ApartmentShowcaseProps) {
  const { apartment, photos, reviews, links } = showcase
  const t = dict.showcase

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const isOpen = lightboxIndex !== null

  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [currentReview, setCurrentReview] = useState(0)
  const [openReview, setOpenReview] = useState<Review | null>(null)

  useEffect(() => {
    if (!carouselApi) return
    const sync = () => setCurrentReview(carouselApi.selectedScrollSnap())
    sync()
    carouselApi.on("select", sync)
    return () => {
      carouselApi.off("select", sync)
    }
  }, [carouselApi])

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
  }, [photos.length])

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % photos.length))
  }, [photos.length])

  useEffect(() => {
    if (!isOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, showPrev, showNext])

  // Mensaje ya escrito en el chat: quien escanea el cartel solo tiene que darle a enviar.
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    fill(t.whatsappMessage, { name: apartment.name })
  )}`

  return (
    <div className="pb-24 lg:pb-12">
      {/* Cabecera */}
      <section className="pt-24 pb-10 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {apartment.name}
          </h1>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span>{apartment.location.short}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-secondary text-secondary" />
              <span className="font-semibold text-foreground">
                {apartment.rating.toLocaleString(locale)}
              </span>
              <span className="text-sm">
                ({fill(dict.apartmentDetail.reviews, { count: apartment.reviews })})
              </span>
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{apartment.capacity}</span>
              <span className="text-sm">
                {plural(apartment.capacity, t.guest, t.guests)}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <Bed className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{apartment.bedrooms}</span>
              <span className="text-sm">
                {plural(apartment.bedrooms, t.bedroom, t.bedrooms)}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <Bath className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{apartment.bathrooms}</span>
              <span className="text-sm">
                {plural(apartment.bathrooms, t.bathroom, t.bathrooms)}
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">
              {t.photosTitle}
            </h2>
            <span className="text-sm text-muted-foreground">
              {fill(t.photosCount, { count: photos.length })}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {photos.map((photo, index) => (
              <button
                key={photo}
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`${t.openPhoto}: ${fill(t.photoOf, {
                  current: index + 1,
                  total: photos.length,
                })}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={photo}
                  alt={`${apartment.name} - ${fill(t.photoOf, {
                    current: index + 1,
                    total: photos.length,
                  })}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 380px"
                  loading={index < 6 ? "eager" : "lazy"}
                  priority={index < 2}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reseñas */}
      {(reviews.length > 0 || links.google || links.booking) && (
        <section className="py-14 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-3">
                {t.reviewsTitle}
              </h2>
              {/* Sin reseñas copiadas todavía, el subtítulo prometería algo que
                  no está en la página; los botones se explican solos. */}
              {reviews.length > 0 && (
                <p className="text-muted-foreground max-w-2xl mx-auto">{t.reviewsSubtitle}</p>
              )}
            </div>

            {reviews.length > 0 && (
              <>
                <Carousel
                  setApi={setCarouselApi}
                  opts={{ align: "start", loop: true }}
                  className="mb-6"
                >
                  <CarouselContent className="items-stretch">
                    {reviews.map((review, index) => (
                      <CarouselItem key={index} className="md:basis-1/2">
                        <Card className="border-0 shadow-lg bg-card h-full">
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <span>
                                <span className="block font-semibold text-foreground">
                                  {review.author}
                                </span>
                                {review.country && (
                                  <span className="block text-xs text-muted-foreground">
                                    {review.country}
                                  </span>
                                )}
                              </span>
                              {review.rating !== undefined && (
                                <span className="flex items-center gap-1 text-sm font-medium text-foreground whitespace-nowrap">
                                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                                  {review.rating.toLocaleString(locale)}
                                  <span className="text-muted-foreground font-normal">
                                    /{SOURCE_SCALE[review.source]}
                                  </span>
                                </span>
                              )}
                            </div>

                            {review.title && (
                              <p className="font-heading font-semibold text-foreground mb-2">
                                {review.title}
                              </p>
                            )}

                            {/* Se respetan los saltos de línea con que se
                                publicaron. Las largas se recortan para que
                                todas las tarjetas midan lo mismo. */}
                            <blockquote className="text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-6">
                              {review.text}
                            </blockquote>

                            {isLong(review) && (
                              <button
                                type="button"
                                onClick={() => setOpenReview(review)}
                                className="self-start mt-3 text-sm font-medium text-primary hover:underline"
                              >
                                {t.readFull}
                              </button>
                            )}

                            {/* mt-auto pega el pie abajo y las tarjetas cortas
                                no dejan el hueco en mitad del texto. */}
                            <p className="mt-auto pt-4 border-t border-border text-xs text-muted-foreground">
                              {fill(t.verifiedOn, { source: SOURCE_LABEL[review.source] })}
                              {review.date && ` · ${formatMonth(review.date, locale)}`}
                            </p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                </Carousel>

                {/* Con 17 reseñas, 17 puntos son ilegibles: mejor flechas y
                    contador, que además funcionan igual en móvil. */}
                <div className="flex items-center justify-center gap-4 mb-10">
                  <button
                    type="button"
                    onClick={() => carouselApi?.scrollPrev()}
                    aria-label={t.prevReview}
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <p aria-live="polite" className="text-sm text-muted-foreground tabular-nums">
                    {fill(t.reviewOf, {
                      current: currentReview + 1,
                      total: reviews.length,
                    })}
                  </p>

                  <button
                    type="button"
                    onClick={() => carouselApi?.scrollNext()}
                    aria-label={t.nextReview}
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}

            {(links.google || links.booking) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {links.google && (
                  <Button asChild variant="outline" size="lg" className="gap-2 border-2 rounded-xl">
                    <a href={links.google} target="_blank" rel="noopener noreferrer">
                      {t.seeOnGoogle}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {links.booking && (
                  <Button asChild variant="outline" size="lg" className="gap-2 border-2 rounded-xl">
                    <a href={links.booking} target="_blank" rel="noopener noreferrer">
                      {t.seeOnBooking}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Reservar */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-3">
              {t.bookTitle}
            </h2>
            <p className="text-muted-foreground">{t.bookSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="gap-3 py-7 text-base font-semibold rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white shadow-lg"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t.whatsapp}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-3 py-7 text-base font-semibold rounded-xl border-2"
            >
              <a href={contact.phoneHref}>
                <Phone className="w-5 h-5" />
                {t.call}
              </a>
            </Button>
          </div>

          {apartment.avaibookId && (
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-heading font-semibold text-lg text-center mb-6 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  {t.checkAvailability}
                </h3>
                <AvaibookIframe
                  id={String(apartment.avaibookId)}
                  lang={locale.toUpperCase() as "ES" | "EN" | "DE"}
                />
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-10">
            <Link
              href={createLocalizedPath(`/apartments/${apartment.slug}`, locale)}
              className="text-primary hover:underline font-medium"
            >
              {t.fullDetails}
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-6xl w-[95vw] p-0 bg-black/95 border-0"
        >
          {isOpen && (
            <>
              <DialogTitle className="sr-only">
                {`${apartment.name} - ${fill(t.photoOf, {
                  current: lightboxIndex + 1,
                  total: photos.length,
                })}`}
              </DialogTitle>

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={photos[lightboxIndex]}
                  alt={`${apartment.name} - ${fill(t.photoOf, {
                    current: lightboxIndex + 1,
                    total: photos.length,
                  })}`}
                  fill
                  sizes="95vw"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={showPrev}
                aria-label={t.prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label={t.nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label={t.closePhoto}
                className="absolute right-3 top-3 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/60 rounded-full px-4 py-1">
                {fill(t.photoOf, { current: lightboxIndex + 1, total: photos.length })}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Reseña completa, para las que no caben en la tarjeta */}
      <Dialog open={openReview !== null} onOpenChange={(open) => !open && setOpenReview(null)}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-y-auto">
          {openReview && (
            <>
              <DialogTitle className="font-heading text-xl">
                {openReview.title || openReview.author}
              </DialogTitle>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{openReview.author}</span>
                {openReview.country && <span>{openReview.country}</span>}
                {openReview.rating !== undefined && (
                  <span className="flex items-center gap-1 text-foreground">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    {openReview.rating.toLocaleString(locale)}
                    <span className="text-muted-foreground">
                      /{SOURCE_SCALE[openReview.source]}
                    </span>
                  </span>
                )}
              </div>

              <blockquote className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {openReview.text}
              </blockquote>

              <p className="pt-4 border-t border-border text-xs text-muted-foreground">
                {fill(t.verifiedOn, { source: SOURCE_LABEL[openReview.source] })}
                {openReview.date && ` · ${formatMonth(openReview.date, locale)}`}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
