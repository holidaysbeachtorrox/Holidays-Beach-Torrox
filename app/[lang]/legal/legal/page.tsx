import { getDictionary, type Locale } from "@/lib/dictionaries"
import { LegalPage } from "@/components/legal-page"

interface LegalNoticePageProps {
  params: { lang: Locale }
}

export default async function LegalNoticePage({ params }: LegalNoticePageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="min-h-screen flex flex-col">
      <LegalPage dict={dict.legal.legalNotice} locale={params.lang} />
    </main>
  )
}
