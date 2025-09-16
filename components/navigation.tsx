// components/navigation.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createLocalizedPath, type Locale } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation"

interface NavigationProps {
  dict: any
  locale: Locale
}

export function Navigation({ dict, locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ]

  const pathname = usePathname()
  const router = useRouter()

  function switchLanguage(lang: Locale) {
    const segments = pathname.split("/").filter(Boolean) // Elimina strings vacíos
    if (!segments[0]) return // Seguridad extra

    segments[0] = lang // Reemplaza el primer segmento

    const newPath = "/" + segments.join("/")
    router.replace(newPath)
    router.refresh()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo (clickable) */}
          <Link href={createLocalizedPath("/", locale)} className="flex items-center group">
            <Image
              src="/Logo-negro.png"
              alt="Logo Holidays Beach Torrox"
              width={140}
              height={50}
              priority
              className="object-contain hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href={createLocalizedPath("/", locale)} className="nav-link">
              {dict.nav.home}
            </Link>
            <Link href={createLocalizedPath("/apartments", locale)} className="nav-link">
              {dict.nav.apartments}
            </Link>
            <Link href={createLocalizedPath("/visit", locale)} className="nav-link">
              {dict.nav.visit}
            </Link>
            <Link href={createLocalizedPath("/about", locale)} className="nav-link">
              {dict.nav.about}
            </Link>
            <Link href={createLocalizedPath("/contact", locale)} className="nav-link">
              {dict.nav.contact}
            </Link>
          </div>

          {/* Desktop Right Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+34952123456"
              aria-label="Llamar al número de contacto"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+34 683 11 77 11</span>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-card hover:bg-muted border-border">
                  <Globe className="w-4 h-4" />
                  {languages.find((lang) => lang.code === locale)?.flag}
                  <span className="hidden md:inline">
                    {languages.find((lang) => lang.code === locale)?.name}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} asChild>
                    <Link href={createLocalizedPath(pathname.replace(/^\/[a-z]{2}/, ""), lang.code as Locale)}>
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a
                href="https://www.holidaysbeachtorrox.com/reservar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.hero.cta}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="w-4 h-4" />
                  {languages.find((lang) => lang.code === locale)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} asChild>
                    <Link href={createLocalizedPath(pathname.replace(/^\/[a-z]{2}/, ""), lang.code as Locale)}>
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border bg-card/50 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {[
                { href: "/", label: dict.nav.home },
                { href: "/apartments", label: dict.nav.apartments },
                { href: "/to-visit", label: dict.nav.visit },
                { href: "/about", label: dict.nav.about },
                { href: "/contact", label: dict.nav.contact },
                { href: "/faq", label: dict.nav.faq },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={createLocalizedPath(link.href, locale)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-4">
                  <a
                    href="tel:+34952123456"
                    aria-label="Llamar al número de contacto"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">+34 952 123 456</span>
                  </a>

                  <Button
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold mx-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {dict.hero.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
