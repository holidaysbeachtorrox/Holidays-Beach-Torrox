// Terms and Conditions Page
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface TermsPageProps {
  params: { lang: Locale }
}

export default async function TermsPage({ params }: TermsPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Términos y Condiciones</h1>
          <p className="text-muted-foreground">Última actualización: Enero 2024</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 prose prose-gray max-w-none">
            <h2>1. Aceptación de términos</h2>
            <p>
              Al utilizar nuestros servicios y realizar una reserva, aceptas estos términos y condiciones. Si no estás
              de acuerdo con algún término, no debes utilizar nuestros servicios.
            </p>

            <h2>2. Reservas y pagos</h2>
            <p>
              Las reservas se confirman una vez recibido el pago completo. Los precios están sujetos a disponibilidad y
              pueden cambiar sin previo aviso. Todos los pagos deben realizarse en euros (EUR).
            </p>

            <h2>3. Política de cancelación</h2>
            <p>
              Cancelación gratuita hasta 48 horas antes de la fecha de llegada. Las cancelaciones posteriores están
              sujetas al cargo de la primera noche. En casos de fuerza mayor, se evaluará cada situación
              individualmente.
            </p>

            <h2>4. Check-in y check-out</h2>
            <p>
              Check-in: a partir de las 16:00h
              <br />
              Check-out: hasta las 11:00h
              <br />
              Horarios especiales pueden acordarse con antelación.
            </p>

            <h2>5. Responsabilidades del huésped</h2>
            <ul>
              <li>Tratar la propiedad con respeto y cuidado</li>
              <li>Respetar las normas de convivencia</li>
              <li>No exceder el número máximo de ocupantes</li>
              <li>Informar inmediatamente de cualquier daño o problema</li>
            </ul>

            <h2>6. Limitación de responsabilidad</h2>
            <p>
              Holidays Beach Torrox no se hace responsable de pérdidas, daños o lesiones que puedan ocurrir durante la
              estancia, excepto en casos de negligencia grave por nuestra parte.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos:
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
