// components/benefits.tsx
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, CreditCard, Award } from "lucide-react"

interface BenefitsProps {
  dict: any
}

export function Benefits({ dict }: BenefitsProps) {
  const benefits = [
    {
      icon: CreditCard,
      title: dict.benefits.direct.title,
      description: dict.benefits.direct.description,
      color: "bg-primary/10 text-primary",
      bgGradient: "from-primary/5 to-primary/10",
    },
    {
      icon: MapPin,
      title: dict.benefits.location.title,
      description: dict.benefits.location.description,
      color: "bg-secondary/10 text-secondary",
      bgGradient: "from-secondary/5 to-secondary/10",
    },
    {
      icon: Phone,
      title: dict.benefits.support.title,
      description: dict.benefits.support.description,
      color: "bg-primary/10 text-primary",
      bgGradient: "from-primary/5 to-primary/10",
    },
  ]

  const stats = [
    dict.benefits.stats.guests,
    dict.benefits.stats.rating,
    dict.benefits.stats.years,
    dict.benefits.stats.support,
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-6 h-4" />
            {dict.benefits.badge}
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            {dict.benefits.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {dict.benefits.summary}
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${benefit.bgGradient} hover:scale-105 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 lg:p-10 text-center relative z-10">
                  <div
                    className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Estadísticas */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className={`text-3xl lg:text-4xl font-bold ${index % 2 === 0 ? "text-primary" : "text-secondary"}`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
