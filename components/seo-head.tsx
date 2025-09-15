import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  locale?: string
  alternateLanguages?: { [key: string]: string }
  structuredData?: object
}

export function SEOHead({
  title,
  description,
  canonical,
  locale = "es",
  alternateLanguages,
  structuredData,
}: SEOHeadProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:locale" content={locale} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}

      {alternateLanguages &&
        Object.entries(alternateLanguages).map(([lang, url]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}

      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </Head>
  )
}
