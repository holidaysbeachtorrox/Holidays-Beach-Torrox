import { getDictionary, type Locale } from "@/lib/dictionaries"
import { LegalPage } from "@/components/legal-page"

interface CookiesPageProps {
  params: { lang: Locale }
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="min-h-screen flex flex-col">
      <LegalPage dict={dict.legal.cookies} locale={params.lang} />
    </main>
  )
}
