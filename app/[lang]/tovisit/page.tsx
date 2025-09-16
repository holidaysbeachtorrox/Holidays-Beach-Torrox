// app/[lang]/visit/page.tsx
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Utensils, Waves, Landmark, Phone, ExternalLink } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

interface PageProps { params: { lang: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return {
    title: dict.visit.metaTitle,
    description: dict.visit.metaDescription,
    alternates: { canonical: `https://holidaysbeachtorrox.com/${params.lang}/visit` },
    openGraph: {
      title: dict.visit.metaTitle,
      description: dict.visit.metaDescription,
      url: `https://holidaysbeachtorrox.com/${params.lang}/visit`,
    },
  }
}

export default async function VisitPage({ params }: PageProps) {
  const dict = await getDictionary(params.lang)

  const categories = [
    { key: "restaurants", icon: Utensils },
    { key: "beaches", icon: Waves },
    { key: "culture", icon: Landmark },
    { key: "useful", icon: Phone },
  ] as const

  return (
    <main className="min-h-screen">
      <Navigation dict={dict} locale={params.lang} />

      {/* HERO */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {dict.visit.badge}
          </div>
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 text-balance">
            {dict.visit.title}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {dict.visit.subtitle}
          </p>
        </div>
      </section>

      {/* SUGERENCIAS LOCALES */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map(({ key, icon: Icon }) => {
              const block = (dict.visit.categories as any)[key]
              return (
                <Card key={key} className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </span>
                      <h3 className="font-heading font-semibold text-lg">{block.title}</h3>
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {block.items.slice(0, 6).map((item: any, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>
                            {item.name}
                            {"url" in item && item.url && (
                              <>
                                {" "}
                                <Link
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-primary hover:underline"
                                >
                                  ({dict.visit.view})
                                  <ExternalLink className="w-3 h-3" />
                                </Link>
                              </>
                            )}
                            {"phone" in item && item.phone && (
                              <span className="block text-xs opacity-70"> {item.phone}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ACTIVIDADES (Carrusel horizontal responsivo) */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">{dict.visit.activities.title}</h2>
            <p className="text-sm text-muted-foreground">{dict.visit.activities.subtitle}</p>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {dict.visit.activities.items.map((act: any, i: number) => (
                <Link
                  key={i}
                  href={act.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-start min-w-[260px] sm:min-w-[300px] lg:min-w-[360px] group"
                >
                  <Card className="border-0 shadow-xl overflow-hidden bg-card">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={act.image}
                        alt={act.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width:1024px) 80vw, 360px"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-semibold">{act.title}</h3>
                      {act.location && (
                        <p className="text-sm text-muted-foreground mt-1">{act.location}</p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CIVITATIS / AFILIADO */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">{dict.visit.civitatis.title}</h3>
          <p className="text-muted-foreground mb-8">{dict.visit.civitatis.subtitle}</p>

          {/* Opción A: enlace afiliado simple */}
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-xl">
              <Link href={dict.visit.civitatis.affiliateUrl} target="_blank" rel="noopener noreferrer">
                {dict.visit.civitatis.cta}
              </Link>
            </Button>
          </div>

          {/* Opción B (opcional): widget/iframe de Civitatis
              Descomenta si tienes el HTML del widget o script.
          <div className="mt-10">
            <iframe
              className="w-full rounded-2xl border border-border"
              height={560}
              src={dict.visit.civitatis.iframeSrc}
              loading="lazy"
            />
          </div>
          */}
        </div>
      </section>
    </main>
  )
}
