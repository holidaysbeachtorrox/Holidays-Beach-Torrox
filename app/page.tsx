"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Locale } from "@/lib/utils"

const SUPPORTED_LOCALES: Locale[] = ["es", "en", "de"]

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const userLang = navigator.language.slice(0, 2) as Locale
    const lang = SUPPORTED_LOCALES.includes(userLang) ? userLang : "es"
    router.replace(`/${lang}`)
  }, [router])

  return null
}
