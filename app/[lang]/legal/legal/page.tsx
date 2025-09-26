// Legal Notice Page
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface LegalNoticePageProps {
  params: { lang: Locale }
}

export default async function LegalNoticePage({ params }: LegalNoticePageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Aviso Legal</h1>
          <p className="text-muted-foreground">Última actualización: Enero 2024</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 prose prose-gray max-w-none">
            <h2>1. Titularidad del sitio web</h2>
            <p>
              En cumplimiento con la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio
              Electrónico (LSSI-CE), se informa de los siguientes datos:
            </p>
            <ul>
              <li><strong>Titular:</strong> [Tu nombre completo o el de la empresa]</li>
              <li><strong>NIF:</strong> [Tu NIF de autónomo]</li>
              <li><strong>Domicilio fiscal:</strong> [Dirección fiscal]</li>
              <li><strong>Email:</strong> info@holidaysbeachtorrox.com</li>
              <li><strong>Teléfono:</strong> +34 952 123 456</li>
            </ul>

            <h2>2. Objeto</h2>
            <p>
              Este sitio web tiene como finalidad ofrecer información sobre los apartamentos turísticos gestionados por
              Holidays Beach Torrox y facilitar el acceso a la plataforma de reservas gestionada por AvaiBook.
            </p>

            <h2>3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio web (textos, imágenes, logotipos, etc.) son propiedad de Holidays Beach
              Torrox o cuentan con autorización de terceros. Queda prohibida su reproducción sin autorización expresa.
            </p>

            <h2>4. Responsabilidad</h2>
            <p>
              El titular no se hace responsable de los daños derivados del mal uso de la web ni de la información
              contenida en páginas de terceros enlazadas desde este sitio.
            </p>

            <h2>5. Legislación aplicable</h2>
            <p>
              Este aviso legal se rige por la legislación española. Cualquier controversia será sometida a los juzgados
              y tribunales competentes de Málaga, salvo que la normativa aplicable disponga otra cosa.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
