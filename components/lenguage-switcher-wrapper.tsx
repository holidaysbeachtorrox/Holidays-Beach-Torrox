// components/language-switcher-wrapper.tsx
"use client"

import { Suspense } from "react"
import { LanguageSwitcher } from "./lenguage-switcher"
import type { Locale } from "@/lib/utils"

type Props = {
  locale: Locale
  minimal?: boolean
  placement?: "top" | "bottom"
}

export function LanguageSwitcherWrapper({ locale, minimal = false, placement }: Props) {
  // fallback automático: si es minimal => bottom, si no => top
  const finalPlacement = placement ?? (minimal ? "bottom" : "top")

  return (
    <Suspense fallback={null}>
      <LanguageSwitcher locale={locale} minimal={minimal} placement={finalPlacement} />
    </Suspense>
  )
}
