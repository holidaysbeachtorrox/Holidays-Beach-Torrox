// app/[lang]/la-casita-del-pescador/page.tsx
// Página de escaparate enlazada desde el QR del cartel: /es/la-casita-del-pescador
import {
  ShowcasePage,
  buildShowcaseMetadata,
  showcaseStaticParams,
} from "../showcase-page"
import type { Locale } from "@/lib/utils"

const SLUG = "la-casita-del-pescador"

export const generateStaticParams = showcaseStaticParams

export function generateMetadata({ params }: { params: { lang: Locale } }) {
  return buildShowcaseMetadata(SLUG, params.lang)
}

export default function Page({ params }: { params: { lang: Locale } }) {
  return <ShowcasePage slug={SLUG} lang={params.lang} />
}
