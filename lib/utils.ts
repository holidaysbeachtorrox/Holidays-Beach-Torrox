// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export type Locale = "es" | "en" | "de"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/")
  const locale = segments[1] as Locale
  return ["es", "en", "de"].includes(locale) ? locale : "es"
}

export function createLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`
}
