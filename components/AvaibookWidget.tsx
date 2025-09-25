// components/AvaibookIframe.tsx
"use client"

export function AvaibookIframe({
  id,
  lang = "ES",
  height = 355,
}: {
  id: string
  lang?: "ES" | "EN" | "DE"
  height?: number
}) {
  return (
    <div className="w-full flex justify-center min-h-[355px]">
      <iframe
        src={`https://www.avaibook.com/widgets_propietarios/loader.php?id=${id}&lang=${lang}`}
        title={`AvaiBook ${lang}`}
        style={{ width: "100%", maxWidth: 500, height, border: 0 }}
        frameBorder={0}
        loading="lazy"
      >
        Tu navegador no soporta iframes
      </iframe>
    </div>
  )
}
