// components/navigation.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  Phone,
  Home,
  Building2,
  MapPin,
  Info,
  Calendar,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { createLocalizedPath, type Locale } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { LanguageSwitcherWrapper } from "./lenguage-switcher-wrapper"

interface NavigationProps {
  dict: any
  locale: Locale
}

export function Navigation({ dict, locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* HEADER (Desktop) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href={createLocalizedPath("/", locale)}
              className="flex items-center group"
            >
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
              <Link
                href={createLocalizedPath("/apartments", locale)}
                className="nav-link"
              >
                {dict.nav.apartments}
              </Link>
              <Link
                href={createLocalizedPath("/visit", locale)}
                className="nav-link"
              >
                {dict.nav.visit}
              </Link>
              <Link
                href={createLocalizedPath("/about", locale)}
                className="nav-link"
              >
                {dict.nav.about}
              </Link>
              <Link
                href={createLocalizedPath("/contact", locale)}
                className="nav-link"
              >
                {dict.nav.contact}
              </Link>
            </div>

            {/* Desktop Right Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+34683117711"
                aria-label="Llamar al número de contacto"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+34 683 11 77 11</span>
              </a>

              {/* Language Switcher */}
              <LanguageSwitcherWrapper locale={locale} placement="top" />

              {/* CTA Reserva */}
              <Button
                asChild
                className="bg-[#d97706] hover:bg-[#b45309] text-white font-semibold px-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href={createLocalizedPath("/apartments", locale)}>
                  {dict.hero.cta}
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border bg-card/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {[
                { href: "/", label: dict.nav.home },
                { href: "/apartments", label: dict.nav.apartments },
                { href: "/visit", label: dict.nav.visit },
                { href: "/about", label: dict.nav.about },
                { href: "/contact", label: dict.nav.contact },
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

              {/* Language Switcher en menú móvil */}
              <div className="pt-4 border-t border-border px-4">
                <LanguageSwitcherWrapper locale={locale} />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* BOTTOM NAV (solo móvil) */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around py-2 lg:hidden z-50">
        <Link
          href={createLocalizedPath("/", locale)}
          className="flex flex-col items-center text-xs"
        >
          <Home className="w-5 h-5 mb-1" />
          {dict.nav.home}
        </Link>
        <Link
          href={createLocalizedPath("/apartments", locale)}
          className="flex flex-col items-center text-xs"
        >
          <Building2 className="w-5 h-5 mb-1" />
          {dict.nav.apartments}
        </Link>
        <Link
          href={createLocalizedPath("/visit", locale)}
          className="flex flex-col items-center text-xs"
        >
          <MapPin className="w-5 h-5 mb-1" />
          {dict.nav.visit}
        </Link>
        <Link
          href={createLocalizedPath("/contact", locale)}
          className="flex flex-col items-center text-xs"
        >
          <Info className="w-5 h-5 mb-1" />
          {dict.nav.contact}
        </Link>
        <Link
          href={createLocalizedPath("/apartments", locale)}
          className="flex flex-col items-center text-xs text-primary font-semibold"
        >
          <Calendar className="w-5 h-5 mb-1" />
          {dict.hero.cta}
        </Link>
        {/* Switcher móvil minimalista */}
        <div className="flex flex-col items-center text-xs">
          <LanguageSwitcherWrapper locale={locale} placement="bottom" />
          <span className="sr-only">Change language</span>
        </div>
      </div>
    </>
  )
}
