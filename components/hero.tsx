// components/hero.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Star, Calendar, Users, Shield } from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/lib/utils"

interface HeroProps {
  dict: any
  locale: Locale
}

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Badges superiores */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="font-medium">Torrox, Costa del Sol</span>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="font-semibold">4.9</span>
              <span className="text-sm text-white/80">(150+ {locale === "es" ? "reseñas" : locale === "en" ? "reviews" : "Bewertungen"})</span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 text-balance leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-secondary bg-clip-text text-transparent">
              {dict.hero.title}
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-white/95 max-w-4xl mx-auto text-pretty font-light leading-relaxed">
            {dict.hero.subtitle}
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-xl font-bold group shadow-2xl hover:shadow-secondary/25 transition-all duration-300 rounded-xl"
            >
              {dict.hero.cta}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300"
            >
              {dict.hero.viewApartments}
            </Button>
          </div>

          {/* Beneficios destacados */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">{dict.heroBenefits.flexibility.title}</p>
                <p className="text-sm text-white/80">{dict.heroBenefits.flexibility.description}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">{dict.heroBenefits.comfort.title}</p>
                <p className="text-sm text-white/80">{dict.heroBenefits.comfort.description}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">{dict.heroBenefits.experience.title}</p>
                <p className="text-sm text-white/80">{dict.heroBenefits.experience.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/60 text-sm font-medium">
            {locale === "es" ? "Descubre más" : locale === "en" ? "Discover more" : "Mehr entdecken"}
          </p>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
