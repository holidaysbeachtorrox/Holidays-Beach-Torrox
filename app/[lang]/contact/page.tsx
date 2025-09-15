// app/[lang]/contact/page.tsx
"use client"

import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"

interface ContactPageProps {
  params: { lang: Locale }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="min-h-screen">
      <Navigation dict={dict} locale={params.lang} />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <MessageCircle className="w-4 h-4" />
            {dict.contact.badge}
          </div>
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 text-balance">
            {dict.contact.title}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-4xl mx-auto">
            {dict.contact.subtitle}
          </p>
        </div>
      </motion.section>

      {/* Contact Info */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Grid 2x2 para dirección/teléfono/email/horario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16"
          >
            {/* Dirección */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3">{dict.contact.info.address.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {dict.contact.info.address.line1}
                    <br />
                    {dict.contact.info.address.line2}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Teléfono */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3">{dict.contact.info.phone.title}</h3>
                  <a
                    href="tel:+34952123456"
                    className="text-muted-foreground text-lg hover:text-primary transition-colors font-medium"
                  >
                    {dict.contact.info.phone.number}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3">{dict.contact.info.email.title}</h3>
                  <a
                    href="mailto:info@holidaysbeachtorrox.com"
                    className="text-muted-foreground text-lg hover:text-primary transition-colors font-medium"
                  >
                    {dict.contact.info.email.address}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Horario */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3">{dict.contact.info.hours.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {dict.contact.info.hours.weekdays}
                    <br />
                    {dict.contact.info.hours.weekends}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* WhatsApp debajo, centrado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-secondary/5 to-primary/5 overflow-hidden">
              <CardContent className="p-12 lg:p-16 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <MessageCircle className="w-12 h-12 text-secondary" />
                </div>

                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                  {dict.contact.whatsapp.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  {dict.contact.whatsapp.subtitle}
                </p>

                <Button
                  size="lg"
                  className="gap-3 px-10 py-4 text-lg font-semibold rounded-xl shadow-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <MessageCircle className="w-6 h-6" />
                  {dict.contact.whatsapp.button}
                </Button>

                <div className="mt-8 text-sm text-muted-foreground">
                  Respuesta inmediata • Disponible 24/7 • Atención personalizada
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 mx-auto">
            <HelpCircle className="w-4 h-4" />
            {dict.faq.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
            {dict.faq.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto mb-12">
            {dict.faq.subtitle}
          </p>

          <Accordion type="single" collapsible className="space-y-6 text-left">
            {Object.entries(dict.faq.questions).map(([key, q]: any) => (
              <AccordionItem key={key} value={key} className="border-0 bg-card shadow-lg rounded-2xl overflow-hidden">
                <AccordionTrigger className="font-heading font-semibold text-lg px-8 py-6 hover:bg-muted/30 transition-colors">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-8 pb-6 text-lg leading-relaxed">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>

      <FloatingCTA dict={dict} />
    </main>
  )
}
