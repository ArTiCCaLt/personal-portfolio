# Validación de la implementación v0.1

Validación local realizada con Node.js 24.19.0 y npm 11.9.0.

| Comprobación | Resultado |
| --- | --- |
| `npm ci --no-fund` | Instalación correcta desde el lockfile |
| Astro / TypeScript | 0 errores, 0 advertencias y 0 hints |
| Build | 27 archivos, cuatro páginas HTML, salida exclusivamente estática |
| Enlaces y recursos internos | 90 referencias comprobadas, incluidas anclas e imágenes responsivas |
| JavaScript servido | Un archivo de 967 bytes para navegación |
| Recursos visuales originales | Nueve archivos inspeccionados, conservados byte por byte |
| Imágenes visibles | WebP con tamaños responsivos y dimensiones declaradas |
| `npm audit --omit=dev` | 0 vulnerabilidades reportadas |
| `git diff --check` | Sin errores |
| `npm run check:release` | Detecta los dos datos pendientes: URL de Pages y contacto directo |

Se comprobó el HTML generado en tres escenarios reproducidos por `Portfolio CI`:

1. Sin `SITE_URL`: sin canonical inventado, noindex, robots bloqueado y sitemap vacío.
2. Producción con un origen de prueba: canonical, Open Graph, imagen social absoluta, robots y sitemap de tres rutas correctos.
3. Preview de rama con el mismo origen: noindex y robots bloqueado, manteniendo los canonicals de producción.

La página 404 siempre permanece no indexable y sin canonical. `https://portfolio-ci.invalid` se utiliza exclusivamente en las comprobaciones de CI; no es un dominio de producción ni una configuración predeterminada del sitio.

Las importaciones explícitas evitan que las seis imágenes sin uso en v0.1 se incluyan en `dist`. Los originales permanecen en el repositorio público. No se añadieron Workers, Functions, adaptador de servidor, base de datos ni APIs operativas al portafolio.

## Límites de la validación

El navegador disponible rechazó `http://127.0.0.1:4321` con `net::ERR_BLOCKED_BY_CLIENT`. No se completaron la revisión visual, las interacciones por teclado ni las pruebas en móvil. No se afirman puntuaciones Lighthouse ni una auditoría completa de accesibilidad.

No se ha desplegado en Cloudflare ni comprobado una cuenta de facturación. Las comprobaciones locales de salida estática no certifican los ajustes de una cuenta externa. Los headers de `public/_headers` deben verificarse cuando exista el despliegue de Pages.
