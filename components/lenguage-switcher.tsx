// components/lenguage-switcher.tsx
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Globe } from "lucide-react"
import type { Locale } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Props = {
  locale: Locale
  minimal?: boolean
}

const LANGS: Array<{ code: Locale; name: string; flag: string }> = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]

export function LanguageSwitcher({ locale, minimal = false }: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const ref = useRef<HTMLDivElement>(null)

  const current = useMemo(
    () => LANGS.find(l => l.code === locale) ?? LANGS[0],
    [locale]
  )

  // Cerrar al hacer click fuera o con ESC
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDocClick)
    document.addEventListener("keydown", onEsc)
    return () => {
      document.removeEventListener("mousedown", onDocClick)
      document.removeEventListener("keydown", onEsc)
    }
  }, [])

  function buildPath(next: Locale) {
    // preserva querystring
    const q = searchParams?.toString()
    const parts = pathname.split("/").filter(Boolean)
    // si ya hay prefijo de idioma, reemplázalo; si no, añádelo
    if (["es", "en", "de"].includes(parts[0])) {
      parts[0] = next
    } else {
      parts.unshift(next)
    }
    const href = "/" + parts.join("/")
    return q ? `${href}?${q}` : href
  }

  function switchTo(next: Locale) {
    setOpen(false)
    router.replace(buildPath(next))
    router.refresh()
  }

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      {minimal ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Change language"
          onClick={() => setOpen(v => !v)}
          className="rounded-full"
        >
          <Globe className="w-5 h-5" />
        </Button>
      ) : (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setOpen(v => !v)}
          className="gap-2 bg-card hover:bg-muted border-border"
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <Globe className="w-4 h-4" />
          <span className="hidden md:inline">{current.flag} {current.name}</span>
        </Button>
      )}

      {/* Menu */}
      {open && (
        <div
          role="menu"
          aria-label="Select language"
          className="absolute right-0 mt-2 w-40 rounded-md border bg-card shadow-md z-[60] overflow-hidden"
        >
          {LANGS.map(lang => {
            const active = lang.code === locale
            return (
              <button
                key={lang.code}
                onClick={() => switchTo(lang.code)}
                role="menuitem"
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-muted ${
                  active ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
