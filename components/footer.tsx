import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Clock, Globe, Youtube, Linkedin } from "lucide-react"
import { createLocalizedPath, type Locale } from "@/lib/utils"

interface FooterProps {
  dict: any
  locale: Locale
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo + info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x- mb-6">
              <Image
                src="/logo-negro.png"
                alt={dict.footer.company}
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>

            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">{dict.footer.description}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Calle Ejemplo 123</p>
                  <p className="text-sm">29770 Torrox, Málaga, España</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="tel:+34952123456"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    +34 952 123 456
                  </a>
                  <p className="text-sm">Atención 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@holidaysbeachtorrox.com"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    info@holidaysbeachtorrox.com
                  </a>
                  <p className="text-sm">Respuesta en 2 horas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Horario de oficina</p>
                  <p className="text-sm">Lun - Dom: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-foreground">{dict.footer.links}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={createLocalizedPath("/", locale)} className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform">{dict.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link href={createLocalizedPath("/apartments", locale)} className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform">{dict.nav.apartments}</span>
                </Link>
              </li>
              <li>
                <Link href={createLocalizedPath("/about", locale)} className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform">{dict.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href={createLocalizedPath("/contact", locale)} className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform">{dict.nav.contact}</span>
                </Link>
              </li>
              <li>
                <Link href={createLocalizedPath("/faq", locale)} className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform">{dict.nav.faq}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-foreground">{dict.footer.legal}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={createLocalizedPath("/legal/privacy", locale)} className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform">{dict.footer.privacy}</span>
                </Link>
              </li>
              <li>
                <Link href={createLocalizedPath("/legal/terms", locale)} className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform">{dict.footer.terms}</span>
                </Link>
              </li>
              <li>
                <Link href={createLocalizedPath("/legal/cookies", locale)} className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform">{dict.footer.cookies}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Licencias + social */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-muted-foreground text-sm">© 2025 Holidays Beach Torrox.</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> VFT/MA/33679</span>
                <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> VFT/MA/67890</span>
                <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> VFT/MA/54321</span>
                <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> VFT/MA/98765</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-muted-foreground text-sm font-medium">{dict.footer.followUs}:</span>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/holidaysbeachtorrox" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/holidaysbeachtorrox" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@holidaysbeachtorrox" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/holidaysbeachtorrox" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
