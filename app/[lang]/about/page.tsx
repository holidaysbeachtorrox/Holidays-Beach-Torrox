import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Shield, Star, MapPin } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

interface AboutPageProps {
  params: { lang: Locale }
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const titles = {
    es: "Sobre Nosotros - Holidays Beach Torrox | 10+ Años en Costa del Sol",
    en: "About Us - Holidays Beach Torrox | 10+ Years on Costa del Sol",
    de: "Über Uns - Holidays Beach Torrox | 10+ Jahre an der Costa del Sol",
  }

  const descriptions = {
    es: "Conoce la historia de Holidays Beach Torrox. Más de 10 años ofreciendo apartamentos vacacionales exclusivos en Torrox, Costa del Sol. Pasión, confianza y excelencia en cada estancia.",
    en: "Learn about Holidays Beach Torrox story. Over 10 years offering exclusive vacation apartments in Torrox, Costa del Sol. Passion, trust and excellence in every stay.",
    de: "Erfahren Sie mehr über die Geschichte von Holidays Beach Torrox. Über 10 Jahre exklusive Ferienwohnungen in Torrox, Costa del Sol. Leidenschaft, Vertrauen und Exzellenz bei jedem Aufenthalt.",
  }

  return {
    title: titles[params.lang],
    description: descriptions[params.lang],
    alternates: {
      canonical: `https://holidaysbeachtorrox.com/${params.lang}/about`,
    },
    openGraph: {
      title: titles[params.lang],
      description: descriptions[params.lang],
      url: `https://holidaysbeachtorrox.com/${params.lang}/about`,
    },
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Sobre Holidays Beach Torrox",
            description:
              "Historia y valores de Holidays Beach Torrox, especialistas en alquiler vacacional en Costa del Sol.",
            url: `https://holidaysbeachtorrox.com/${params.lang}/about`,
            mainEntity: {
              "@type": "Organization",
              name: "Holidays Beach Torrox",
              foundingDate: "2014",
              description:
                "Empresa especializada en alquiler vacacional de apartamentos exclusivos en Torrox, Costa del Sol.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Torrox",
                addressRegion: "Málaga",
                addressCountry: "ES",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34 952 123 456",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English", "German"],
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: `https://holidaysbeachtorrox.com/${params.lang}`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Sobre Nosotros",
                  item: `https://holidaysbeachtorrox.com/${params.lang}/about`,
                },
              ],
            },
          }),
        }}
      />

      <main className="min-h-screen">
        <Navigation dict={dict} locale={params.lang} />

        <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              {dict.about.badge}
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 text-balance">
              {dict.about.title}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-4xl mx-auto">
              {dict.about.subtitle}
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <MapPin className="w-4 h-4" />
                    Nuestra historia
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 text-balance">
                    {dict.about.story.title}
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>{dict.about.story.paragraph1}</p>
                  <p>{dict.about.story.paragraph2}</p>
                  <p>{dict.about.story.paragraph3}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <p className="text-sm text-muted-foreground font-medium">Años de experiencia</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl">
                    <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                    <p className="text-sm text-muted-foreground font-medium">Huéspedes felices</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/beautiful-beach-view-in-torrox-costa-del-sol-with-.jpg"
                    alt="Torrox Costa del Sol"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-secondary text-secondary" />
                      <span className="font-bold text-lg">4.9</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="font-semibold">Excelente</div>
                      <div>150+ reseñas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Nuestros valores
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 text-balance">
                {dict.about.values.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {dict.about.values.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-muted/20 hover:scale-105">
                <CardContent className="p-8 lg:p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {dict.about.values.passion.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {dict.about.values.passion.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-muted/20 hover:scale-105">
                <CardContent className="p-8 lg:p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-secondary transition-colors duration-300">
                    {dict.about.values.trust.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{dict.about.values.trust.description}</p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-muted/20 hover:scale-105 md:col-span-2 lg:col-span-1">
                <CardContent className="p-8 lg:p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {dict.about.values.excellence.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {dict.about.values.excellence.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 text-balance">
                Números que nos respaldan
              </h2>
              <p className="text-xl text-muted-foreground">La confianza de nuestros huéspedes es nuestro mayor logro</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-3">15+</div>
                <p className="text-muted-foreground font-medium">{dict.about.stats.apartments}</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-3">500+</div>
                <p className="text-muted-foreground font-medium">{dict.about.stats.guests}</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-3">4.9</div>
                <p className="text-muted-foreground font-medium">{dict.about.stats.rating}</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-3">24/7</div>
                <p className="text-muted-foreground font-medium">{dict.about.stats.support}</p>
              </div>
            </div>
          </div>
        </section>

        <FloatingCTA dict={dict} />
      </main>
    </>
  )
}
