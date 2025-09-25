import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"
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
            <div className="flex items-center mb-6">
              <Link href={createLocalizedPath("/", locale)} className="inline-block">
                <Image
                  src="/Logo-negro.png"
                  alt={dict.footer.company}
                  width={150}
                  height={150}
                  className="rounded-lg hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              {dict.footer.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Avenida Andalucia N 24 Bajo</p>
                  <p className="text-sm">29793 Torrox Costa, Málaga, España</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="tel:+34683117711"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    +34 683 11 77 11
                  </a>
                  <p className="text-sm">Atención 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="mailto:holidaysbeachtorrox@gmail.com"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    holidaysbeachtorrox@gmail.com
                  </a>
                  <p className="text-sm">Respuesta en 2 horas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Horario de oficina</p>
                  <p className="text-sm">Lun - Sab: 9:00 - 15:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-foreground">
              {dict.footer.links}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={createLocalizedPath("/", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.nav.home}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("/apartments", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.nav.apartments}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("/visit", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.nav.visit}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("/about", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.nav.about}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("/contact", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.nav.contact}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("/faq", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.nav.faq}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-foreground">
              {dict.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={createLocalizedPath("/legal/privacy", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.footer.privacy}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("/legal/terms", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.footer.terms}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={createLocalizedPath("/legal/cookies", locale)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {dict.footer.cookies}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Licencias + Powered by */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © 2025 Holidays Beach Torrox.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3" /> VFT/MA/336795
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3" /> VFT/MA/508271
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3" /> VFT/MA/266960
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3" /> VFT/MA/267006
                </span>
              </div>
            </div>

            {/* Powered by */}
            <div className="text-center lg:text-right">
              <p className="text-xs text-muted-foreground">
                {dict.footer.powered}{" "}
                <Link
                  href="https://robertsoftware.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors"
                  style={{ color: '#7c3aed' }}
                >
                  RobertSoftware
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
