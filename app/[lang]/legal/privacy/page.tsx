import { getDictionary, type Locale } from "@/lib/dictionaries"
import { LegalPage } from "@/components/legal-page"

interface PrivacyPageProps {
  params: { lang: Locale }
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="min-h-screen flex flex-col">
      <LegalPage dict={dict.legal.privacy} locale={params.lang} />
    </main>
  )
}
