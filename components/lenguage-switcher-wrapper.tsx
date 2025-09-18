// components/language-switcher-wrapper.tsx
"use client"

import { Suspense } from "react"
import { LanguageSwitcher } from "./lenguage-switcher"
import type { Locale } from "@/lib/utils"

type Props = {
  locale: Locale
  minimal?: boolean
}

export function LanguageSwitcherWrapper({ locale, minimal = false }: Props) {
  return (
    <Suspense fallback={null}>
      <LanguageSwitcher locale={locale} minimal={minimal} />
    </Suspense>
  )
}
