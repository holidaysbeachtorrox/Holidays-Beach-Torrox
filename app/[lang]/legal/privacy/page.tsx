import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface PrivacyPageProps {
  params: { lang: Locale }
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Política de Privacidad</h1>
          <p className="text-muted-foreground">Última actualización: Enero 2024</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 prose prose-gray max-w-none">
            <h2>1. Información que recopilamos</h2>
            <p>
              En Holidays Beach Torrox recopilamos información personal cuando realizas una reserva, te comunicas con
              nosotros o utilizas nuestros servicios. Esta información puede incluir tu nombre, dirección de correo
              electrónico, número de teléfono, dirección postal y detalles de pago.
            </p>

            <h2>2. Cómo utilizamos tu información</h2>
            <p>Utilizamos tu información personal para:</p>
            <ul>
              <li>Procesar y gestionar tus reservas</li>
              <li>Comunicarnos contigo sobre tu estancia</li>
              <li>Proporcionar atención al cliente</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h2>3. Compartir información</h2>
            <p>
              No vendemos, alquilamos ni compartimos tu información personal con terceros para fines de marketing sin tu
              consentimiento explícito. Podemos compartir información con proveedores de servicios que nos ayudan a
              operar nuestro negocio.
            </p>

            <h2>4. Seguridad de los datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
              personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2>5. Tus derechos</h2>
            <p>Tienes derecho a:</p>
            <ul>
              <li>Acceder a tu información personal</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>

            <h2>6. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
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
