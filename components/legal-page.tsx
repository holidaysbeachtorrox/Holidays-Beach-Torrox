// components/legal-page.tsx
import { Card, CardContent } from "@/components/ui/card"
import { type Locale } from "@/lib/utils"

interface Section {
  title: string
  content: string
}

interface LegalPageProps {
  dict: {
    title: string
    updated?: string
    intro?: string
    sections: Section[]
  }
  locale: Locale
}

export function LegalPage({ dict }: LegalPageProps) {
  return (
    <section className="flex-1 bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Cabecera */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            {dict.title}
          </h1>
          {dict.updated && (
            <p className="text-sm text-muted-foreground">{dict.updated}</p>
          )}
          {dict.intro && (
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto leading-relaxed">
              {dict.intro}
            </p>
          )}
        </header>

        {/* Contenido */}
        <Card className="border-0 shadow-md">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-8">
              {dict.sections.map((section, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-lg md:text-xl font-semibold text-foreground border-l-4 border-primary pl-3">
                    {section.title}
                  </h2>
                  {section.content.split("\n").map((line, i) => (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed text-sm md:text-base"
                    >
                      {line}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
