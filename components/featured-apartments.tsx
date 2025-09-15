// components/featured-apartments.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Bed, Bath, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createLocalizedPath, type Locale } from "@/lib/utils"
import { apartments } from "@/lib/data/apartments"  

interface FeaturedApartmentsProps {
  dict: any
  locale: Locale
}

const featuredApartments = apartments.filter(a => a.featured)

const localeMap: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  de: "de-DE",
}

const formatPrice = (price: number, locale: Locale) =>
  new Intl.NumberFormat(localeMap[locale], { style: "currency", currency: "EUR" }).format(price)

export function FeaturedApartments({ dict, locale }: FeaturedApartmentsProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            {dict.featured.badge}
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            {dict.apartments.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{dict.apartments.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {featuredApartments.map((apartment, index) => (
            <Card
              key={apartment.id}
              className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card hover:scale-[1.02]"
            >
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
                    {dict.featured.tag}
                  </Badge>
                )}

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-lg font-bold text-foreground">
                    {formatPrice(apartment.price, locale)}
                  </span>
                  <span className="text-sm text-muted-foreground">/{dict.apartments.night}</span>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-semibold text-sm">{apartment.rating}</span>
                  <span className="text-xs text-muted-foreground">({apartment.reviews})</span>
                </div>
              </div>

              <CardContent className="p-6 lg:p-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {apartment.name}
                </h3>

                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">{apartment.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-primary" />
                    <span className="font-medium">{apartment.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-primary" />
                    <span className="font-medium">{apartment.bathrooms}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {apartment.amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-medium"
                    >
                      {dict.amenities[amenity] || amenity}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href={createLocalizedPath(`/apartments/${apartment.slug}`, locale)}>
                    {dict.apartments.book}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-4 text-lg font-semibold bg-card hover:bg-muted border-2 border-border hover:border-primary/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={createLocalizedPath("/apartments", locale)}>
              {dict.apartments.viewAll}
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
