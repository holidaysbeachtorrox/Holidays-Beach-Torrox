// scripts/generate-qr.mjs
//
// Genera los QR de las páginas de escaparate para imprimirlos en el cartel.
//
//   npm run qr
//
// Deja en qr/ un SVG y un PNG por apartamento. Para imprenta usa siempre el
// SVG: es vectorial y se puede ampliar al tamaño que haga falta sin pixelarse.
// El PNG (2000 px) sirve para verlo rápido o para redes sociales.
//
// Corrección de errores en nivel Q: el QR sigue leyéndose aunque se ensucie o
// se raye un 25 % del dibujo, cosa fácil en un cartel a la intemperie.

import { mkdir, writeFile } from "node:fs/promises"
import { readFile } from "node:fs/promises"
import QRCode from "qrcode"

const SITE = process.env.QR_SITE ?? "https://holidaysbeachtorrox.com"
const LANG = process.env.QR_LANG ?? "es"
const OUT_DIR = "qr"

const options = {
  errorCorrectionLevel: "Q",
  margin: 4, // "zona tranquila": sin este borde blanco muchos móviles no leen
  color: { dark: "#000000", light: "#FFFFFF" },
}

const showcase = JSON.parse(await readFile("lib/data/showcase.json", "utf8"))
const slugs = Object.keys(showcase)

await mkdir(OUT_DIR, { recursive: true })

for (const slug of slugs) {
  const url = `${SITE}/${LANG}/${slug}`

  const svg = await QRCode.toString(url, { ...options, type: "svg" })
  await writeFile(`${OUT_DIR}/${slug}.svg`, svg)

  await QRCode.toFile(`${OUT_DIR}/${slug}.png`, url, { ...options, width: 2000 })

  console.log(`${slug}`)
  console.log(`  URL : ${url}`)
  console.log(`  SVG : ${OUT_DIR}/${slug}.svg  (para imprenta)`)
  console.log(`  PNG : ${OUT_DIR}/${slug}.png  (2000 px)`)
}

console.log(`\n${slugs.length} QR generados en ${OUT_DIR}/`)
console.log("Recuerda: imprime el QR a 3 cm de lado como mínimo (mejor 5-8 cm")
console.log("en un cartel exterior) y deja el borde blanco alrededor.")
