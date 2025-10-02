import { getDictionary, type Locale } from "@/lib/dictionaries"
import { LegalPage } from "@/components/legal-page"

interface TermsPageProps {
  params: { lang: Locale }
}

export default async function TermsPage({ params }: TermsPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="min-h-screen flex flex-col">
      <LegalPage dict={dict.legal.terms} locale={params.lang} />
    </main>
  )
}
