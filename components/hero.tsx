// components/hero.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Star, Calendar, Users, Shield } from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/lib/utils"
import Link from "next/link"

interface HeroProps {
  dict: any
  locale: Locale
}

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between overflow-hidden pt-20 sm:pt-0 pb-24 sm:pb-32 lg:pb-40">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/beautiful-beach-view-in-torrox-costa-del-sol-with-.jpg"
          alt="Playa de Torrox, Costa del Sol"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black/50 to-secondary/20" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6 sm:px-6 sm:py-3 sm:mb-8 border border-white/20 text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="font-medium">Torrox, Costa del Sol</span>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="font-semibold">9.6</span>
              <span className="text-xs sm:text-sm text-white/80">(120+ {locale === "es" ? "reseñas" : locale === "en" ? "reviews" : "Bewertungen"})</span>
            </div>
          </div>

          {/* Título */}
          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-secondary bg-clip-text text-transparent">
              {dict.hero.title}
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-2xl lg:text-3xl mb-8 sm:mb-12 text-white/95 max-w-4xl mx-auto font-light leading-relaxed">
            {dict.hero.subtitle}
          </p>

          {/* Botón: Ver apartamentos */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-8 sm:px-10 py-5 sm:py-6 text-lg sm:text-xl font-semibold rounded-xl transition-all duration-300"
            >
              <Link href="/apartments">
                {dict.hero.viewApartments}
              </Link>
            </Button>
          </div>

          {/* Beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {/* Flexibilidad */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
              </div>
              <p className="font-semibold text-base sm:text-lg">{dict.heroBenefits.flexibility.title}</p>
              <p className="text-xs sm:text-sm text-white/80 text-center">{dict.heroBenefits.flexibility.description}</p>
            </div>

            {/* Confort */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
              </div>
              <p className="font-semibold text-base sm:text-lg">{dict.heroBenefits.comfort.title}</p>
              <p className="text-xs sm:text-sm text-white/80 text-center">{dict.heroBenefits.comfort.description}</p>
            </div>

            {/* Experiencia */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
              </div>
              <p className="font-semibold text-base sm:text-lg">{dict.heroBenefits.experience.title}</p>
              <p className="text-xs sm:text-sm text-white/80 text-center">{dict.heroBenefits.experience.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator → solo en sm hacia arriba */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <p className="text-white/60 text-sm font-medium">
          {locale === "es" ? "Descubre más" : locale === "en" ? "Discover more" : "Mehr entdecken"}
        </p>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
