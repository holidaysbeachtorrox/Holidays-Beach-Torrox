// app/[lang]/visit/page.tsx
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Utensils, Waves, Landmark, Phone, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

interface PageProps {
  params: { lang: Locale }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return {
    title: dict.visit.metaTitle,
    description: dict.visit.metaDescription,
    alternates: { canonical: `https://holidaysbeachtorrox.com/${params.lang}/visit` },
    openGraph: {
      title: dict.visit.metaTitle,
      description: dict.visit.metaDescription,
      url: `https://holidaysbeachtorrox.com/${params.lang}/visit`,
    },
  }
}

export default async function VisitPage({ params }: PageProps) {
  const dict = await getDictionary(params.lang)

  const categories = [
    { key: "restaurants", icon: Utensils, title: "Restaurantes" },
    { key: "beaches", icon: Waves, title: "Playas" },
    { key: "culture", icon: Landmark, title: dict.visit.categories.culture.title },
    { key: "useful", icon: Phone, title: dict.visit.categories.useful.title },
  ] as const

  return (
    <main className="min-h-screen">
      <Navigation dict={dict} locale={params.lang} />

      {/* HERO */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {dict.visit.badge}
          </div>
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 text-balance">
            {dict.visit.title}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {dict.visit.subtitle}
          </p>
        </div>
      </section>

      {/* SUGERENCIAS LOCALES */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map(({ key, icon: Icon, title }) => {
              const block = (dict.visit.categories as any)[key]
              const items =
                Array.isArray(block) ? block.map((name: string) => ({ name })) : block.items || []

              return (
                <Card
                  key={key}
                  className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/20"
                >
                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </span>
                      <h3 className="font-heading font-semibold text-lg">{title}</h3>
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground flex-1 max-h-64 overflow-y-auto pr-2 thin-scrollbar">
                      {items.map((item: any, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>
                            {item.name}
                            {"url" in item && item.url && (
                              <Link
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-primary hover:underline ml-1"
                              >
                                ({dict.visit.view})
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            )}
                            {"phone" in item && item.phone && (
                              <a
                                href={`tel:${item.phone.replace(/\s+/g, "")}`}
                                className="block text-xs opacity-70 hover:text-primary"
                              >
                                {item.phone}
                              </a>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ACTIVIDADES RECOMENDADAS – Widget Civitatis */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            {dict.visit.activities.title}
          </h2>
          <p className="text-muted-foreground mb-8">{dict.visit.activities.subtitle}</p>

          <div className="relative">
            <iframe
              className="civitatis-iframe w-full rounded-2xl border border-border shadow-lg"
              src="https://www.civitatis.com/widget-activities/?agencyId=48137&display=cosy&cant=2&lang=es&currency=EUR&destination=4033&transfer=0&cmp=Widget_Torrox_ES&width=100%&hideButton=1&centerContent=1&typeSelection=all&color=f97316&typography=Montserrat&removeBackground=1&showShadow=1&roundedButtons=1"
              frameBorder="0"
              style={{ maxWidth: "100%", minHeight: "550px" }}
              height={500}
              loading="lazy"
            ></iframe>
          </div>

          <Script id="civitatis-resizer-activities" strategy="afterInteractive">
            {`
              function loadScript(url, callback){
                var script=document.createElement('script'); 
                script.type='text/javascript'; 
                if (script.readyState){
                  script.onreadystatechange=function(){
                    if (script.readyState=='loaded' || script.readyState=='complete'){
                      script.onreadystatechange=null; callback();
                    }
                  };
                } else {
                  script.onload=function(){ callback(); };
                }
                script.src=url; 
                document.getElementsByTagName('head')[0].appendChild(script);
              }
              loadScript('https://www.civitatis.com/f/js/vendor/iframeResizer.min.js', function(){
                iFrameResize({
                  checkOrigin:false,
                  initCallback:function(iframe){
                    setTimeout(function(){
                      var resizeEvent = window.document.createEvent('UIEvents'); 
                      resizeEvent.initUIEvent('resize', true, false, window, 0); 
                      iframe.dispatchEvent(resizeEvent);
                    });
                  }
                })
              })
            `}
          </Script>
        </div>
      </section>

      {/* CIVITATIS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
            {dict.visit.civitatis.title}
          </h3>
          <p className="text-muted-foreground mb-8">{dict.visit.civitatis.subtitle}</p>

          <div className="relative">
            <iframe
              className="civitatis-iframe w-full rounded-2xl border border-border shadow-lg"
              src="https://www.civitatis.com/widget-activities/?agencyId=48137&display=cosy&cant=6&lang=es&currency=EUR&zone=49&transfer=0&cmp=Widget_ES_Torrox&width=100%&hideButton=0&centerContent=1&typeSelection=all&color=f97316&typography=Montserrat&removeBackground=1&showShadow=1&roundedButtons=1"
              frameBorder="0"
              style={{ maxWidth: "100%", minHeight: "1100px" }}
              height={600}
              loading="lazy"
            ></iframe>
          </div>

          <Script id="civitatis-resizer" strategy="afterInteractive">
            {`
              function loadScript(url, callback){
                var script=document.createElement('script'); 
                script.type='text/javascript'; 
                if (script.readyState){
                  script.onreadystatechange=function(){
                    if (script.readyState=='loaded' || script.readyState=='complete'){
                      script.onreadystatechange=null; callback();
                    }
                  };
                } else {
                  script.onload=function(){ callback(); };
                }
                script.src=url; 
                document.getElementsByTagName('head')[0].appendChild(script);
              }
              loadScript('https://www.civitatis.com/f/js/vendor/iframeResizer.min.js', function(){
                iFrameResize({
                  checkOrigin:false,
                  initCallback:function(iframe){
                    setTimeout(function(){
                      var resizeEvent = window.document.createEvent('UIEvents'); 
                      resizeEvent.initUIEvent('resize', true, false, window, 0); 
                      iframe.dispatchEvent(resizeEvent);
                    });
                  }
                })
              })
            `}
          </Script>
        </div>
      </section>
    </main>
  )
}
