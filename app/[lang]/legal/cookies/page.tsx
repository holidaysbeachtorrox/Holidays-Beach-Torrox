// Cookies Policy Page
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface CookiesPageProps {
  params: { lang: Locale }
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Política de Cookies</h1>
          <p className="text-muted-foreground">Última actualización: Enero 2024</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 prose prose-gray max-w-none">
            <h2>1. Uso de cookies</h2>
            <p>
              Este sitio web utiliza cookies técnicas necesarias para su funcionamiento básico. No utilizamos cookies de
              analítica ni de marketing propias.
            </p>

            <h2>2. Cookies de terceros</h2>
            <p>
              El sistema de reservas integrado en este sitio web se gestiona a través de AvaiBook, que puede instalar sus
              propias cookies para garantizar el correcto funcionamiento del motor de reservas. Para más información
              consulta su política de cookies:
              <a href="https://www.avaibook.com/es/politica-cookies/" target="_blank" rel="noopener noreferrer">
                Política de Cookies de AvaiBook
              </a>.
            </p>

            <h2>3. Gestión de cookies</h2>
            <p>
              Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. Ten en cuenta que si
              deshabilitas ciertas cookies, algunas funcionalidades del sitio pueden verse limitadas.
            </p>

            <h2>4. Contacto</h2>
            <p>
              Para cualquier duda sobre el uso de cookies, puedes escribirnos a:
              <br />
              Email: info@holidaysbeachtorrox.com
              <br />
              Teléfono: +34 952 123 456
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
