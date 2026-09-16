# Recursos originales aprobados

Se conservan sin modificar los nueve archivos proporcionados por Diego. Los nombres locales se normalizan para usarlos en el repositorio.

| Archivo | Uso |
| --- | --- |
| `brand/ramdren-wordmark-board.png` | Lámina del wordmark geométrico; se muestra el bloque inferior Primary |
| `brand/ramdren-symbol-board.png` | Lámina de identidad con símbolo R; se utiliza para el favicon |
| `projects/carenest-overview.png` | Perfil médico ficticio de María López; imagen principal |
| `projects/carenest-access.png` | Accesos familiares e invitaciones; ficha de CareNest |
| `projects/carenest-audit.png` | Accesos y auditoría; material para v0.2 |
| `projects/carenest-owner.png` | Perfil con rol propietario; material para v0.2 |
| `projects/carenest-editor.png` | Perfil con rol editor; material para v0.2 |
| `projects/carenest-print.png` | Impresión de ficha de emergencia; material para v0.2 |
| `projects/carenest-icon.jpg` | Icono de CareNest proporcionado; material para v0.2 |

## Integración de marca

`Brand.astro` presenta la región `74 727 357 76` del wordmark original mediante un viewport SVG. Así se reutiliza exactamente la variante Primary sin incluir otros elementos de la lámina ni la marca de registro que aparece en otra zona.

`favicon.svg.ts` genera un archivo estático con el viewport `124 48 240 240` del símbolo original. El raster subyacente se comprime a WebP; no se redibuja ni se altera el diseño del símbolo.

Las láminas pueden sustituirse posteriormente por versiones aisladas del mismo logo, actualizando las importaciones de `src/data/media.ts`, `Brand.astro` y el endpoint del favicon. El build importa explícitamente solo los recursos utilizados: añadir una imagen a la carpeta no la publica automáticamente. Las capturas reservadas para v0.2 se conservan en el repositorio público, pero no se incluyen en `dist`.

## Capturas de CareNest

Diego las proporcionó como capturas sanitizadas con datos ficticios. Todas se inspeccionaron antes de su incorporación. No se infieren datos de contacto profesionales a partir de los nombres, emails o teléfonos de demostración.

Las imágenes visibles usan Astro Image, tamaños responsivos, dimensiones declaradas y carga diferida. La nota de demostración se muestra junto a ellas. Ajustar el texto alternativo si se cambia la vista representada.
