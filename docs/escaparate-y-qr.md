# Páginas de escaparate y códigos QR

Páginas pensadas para el cartel de la calle: alguien pasa por delante, escanea
el QR y ve las fotos, las reseñas y cómo reservar, sin más pasos.

| Apartamento | Página | QR |
|---|---|---|
| Sol, Arena y Mar | `/es/sol-arena-y-mar` | `qr/sol-arena-y-mar.svg` |
| La Casita del Pescador | `/es/la-casita-del-pescador` | `qr/la-casita-del-pescador.svg` |

Las tres versiones de idioma (`/es/`, `/en/`, `/de/`) existen y el visitante
puede cambiar de idioma con el selector de la cabecera. El QR apunta a la
española porque el cartel está en Torrox.

## Añadir reseñas de Google y de Booking

Se editan a mano en `lib/data/showcase.json`. Cada apartamento tiene su lista
`reviews`; se copia la reseña tal y como está publicada, **sin traducirla**:

```json
"reviews": [
  {
    "source": "google",
    "author": "Marta G.",
    "rating": 5,
    "date": "2025-07",
    "text": "Todo perfecto. El apartamento está a dos minutos de la playa."
  },
  {
    "source": "booking",
    "author": "Klaus",
    "rating": 9.3,
    "date": "2025-08",
    "text": "Sehr sauber und ruhig. Gerne wieder."
  }
]
```

- `source`: `"google"` o `"booking"`. Determina la escala que se muestra:
  Google va sobre 5 y Booking sobre 10.
- `date`: opcional, formato `AAAA-MM`.
- Si la lista está vacía, la sección de reseñas no aparece.

Copia solo reseñas que estén realmente publicadas, con el nombre tal como
aparece en el perfil. Aparte del lado ético, Google penaliza las reseñas
inventadas y esta página las publica también como datos estructurados.

## Botones "ver todas las reseñas"

En el mismo archivo, dentro de `links`:

```json
"links": {
  "google": "https://g.page/r/CODIGO_DEL_NEGOCIO",
  "booking": "https://www.booking.com/hotel/es/nombre-del-alojamiento.es.html"
}
```

Cada botón solo se muestra si su enlace tiene contenido. Para el de Google,
sirve el enlace de "Compartir" de la ficha del negocio en Google Maps.

## Regenerar los códigos QR

```bash
npm run qr
```

Deja en `qr/` un SVG y un PNG por apartamento. **Para la imprenta usa siempre
el SVG**: es vectorial y se amplía al tamaño que haga falta sin pixelarse. El
PNG (2000 px) vale para verlo rápido o para redes sociales.

Solo hace falta volver a generarlos si cambia la dirección de una página o si
se añade otro apartamento.

### Al imprimir el cartel

- **Tamaño**: 3 cm de lado como mínimo; en un cartel exterior que se lee desde
  un par de metros, mejor entre 5 y 8 cm.
- **Borde blanco**: el QR necesita un margen limpio alrededor, ya incluido en
  el archivo. No lo recortes ni pegues nada encima.
- **Contraste**: negro sobre blanco. Nada de imprimirlo sobre una foto.
- **Texto de apoyo**: pon al lado algo como "Escanea para ver fotos y
  disponibilidad" y la dirección escrita
  (`holidaysbeachtorrox.com/es/sol-arena-y-mar`), por si alguien prefiere
  teclearla.
- Los QR llevan corrección de errores en nivel Q: se siguen leyendo aunque se
  ensucie o se raye hasta una cuarta parte del dibujo, cosa fácil a la
  intemperie.

**Pruébalo con un par de móviles antes de mandarlo a imprenta.**

## Añadir otro apartamento

1. Añade su entrada en `lib/data/showcase.json` (copiando la estructura de una
   existente y ajustando `apartmentId` y la lista de `photos`).
2. Crea `app/[lang]/<slug>/page.tsx` copiando cualquiera de las dos que ya hay
   y cambiando la constante `SLUG`.
3. `npm run qr` para generar su código.

El sitemap recoge las páginas nuevas automáticamente.
