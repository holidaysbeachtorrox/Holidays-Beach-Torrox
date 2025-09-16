// app/[lang]/about/page.tsx
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Star } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

interface AboutPageProps {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
    alternates: {
      canonical: `https://holidaysbeachtorrox.com/${params.lang}/about`,
    },
    openGraph: {
      title: dict.about.metaTitle,
      description: dict.about.metaDescription,
      url: `https://holidaysbeachtorrox.com/${params.lang}/about`,
    },
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="min-h-screen">
      <Navigation dict={dict} locale={params.lang} />

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 text-balance">
            {dict.about.title}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {dict.about.subtitle}
          </p>
        </div>
      </section>

      {/* Presentación */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{dict.about.paragraph1}</p>
            <p>{dict.about.paragraph2}</p>
            <p>{dict.about.paragraph3}</p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/500181216.jpg"
                alt={dict.about.imageAlt}
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:-left-6 lg:translate-x-0 bg-white rounded-2xl p-6 shadow-xl border border-border flex items-center gap-3">
              <Star className="w-5 h-5 fill-secondary text-secondary" />
              <div>
                <div className="font-semibold">{dict.about.reviewScore}</div>
                <div className="text-sm text-muted-foreground">{dict.about.reviewSubtitle}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
