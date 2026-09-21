# Diego Rangel · Ramdren

Portafolio profesional en español de Diego Rangel, **Software Developer & Technology Consultant**. Ramdren es mi marca de ingeniería de software.

## Desarrollo

Requiere Node.js 22.12 o superior. Versión validada: **24.19.0**, indicada en `.node-version`.

```bash
npm ci
npm run dev
```

| Comando | Función |
| --- | --- |
| `npm run check` | Diagnóstico de Astro y TypeScript |
| `npm run build` | Compilación estática y comprobación de rutas, anclas y recursos |
| `npm run preview` | Vista previa del build |
| `npm run check:release` | Detectar contacto o URL pendientes antes de publicar |
| `node scripts/check-seo.mjs preview` | Revisar el SEO de una compilación no indexable |

Las dependencias están fijadas en `package.json` y `package-lock.json`. No se requieren claves para desarrollar o compilar.

## Alcance de la v0.1

- Homepage completa: hero, propuesta de valor, CareNest, Vértice11, casos profesionales anónimos, servicios, proceso, tecnologías, sobre mí y contacto.
- Fichas iniciales `/projects/carenest/` y `/projects/vertice11/`; los estudios técnicos completos quedan para v0.2.
- Identidad original de Ramdren, favicon y capturas de CareNest proporcionadas con datos ficticios.
- CSS con tokens, Manrope autoalojada, diseño responsive y navegación móvil progresiva.
- HTML semántico, foco visible, enlace de salto y respeto a movimiento reducido.
- Metadatos individuales, Open Graph, Twitter Cards, robots, sitemap y página 404.
- Salida estática, sin React, hidratación, backend, formularios ni analítica.

## Contenido

| Archivo | Contenido |
| --- | --- |
| `portfolio.config.mjs` | Canales públicos de contacto y CV |
| `src/data/projects.ts` | Proyectos destacados |
| `src/data/experience.ts` | Casos anonimizados y tecnologías |
| `src/data/services.ts` | Servicios y proceso de trabajo |
| `src/data/media.ts` | Importaciones explícitas de imágenes utilizadas |
| `src/styles/tokens.css` | Colores, espaciado y tipografía |
| `src/assets/README.md` | Origen y uso de los recursos originales |

Los canales vacíos se omiten. No se inventan emails, teléfonos, perfiles ni enlaces a repositorios privados. La primera versión está en español; los datos estructurados facilitan una traducción posterior.

## Recursos

Se conservan las dos láminas originales de Ramdren y siete recursos de CareNest. El wordmark y el favicon muestran regiones de las láminas originales mediante viewports SVG, sin redibujar la marca. Las capturas visibles se optimizan a WebP durante el build y llevan una nota de datos ficticios.

Solo los recursos utilizados se incluyen en `dist`. Los originales reservados para v0.2 permanecen en este repositorio público. No se publica el contexto maestro privado.

## Validación

`npm run build` comprueba cuatro páginas HTML, rutas, anclas, imágenes y otros recursos internos, así como la ausencia de Workers, Functions e hidratación. El workflow `Portfolio CI` ejecuta el build y comprueba SEO en tres escenarios: sin dominio confirmado, producción y preview de rama.

CI utiliza un runner estándar en este repositorio público, permisos de lectura, sin secretos de despliegue ni almacenamiento de artefactos. La ejecución se omite si el repositorio pasa a ser privado.

Ver [docs/validation.md](docs/validation.md) para resultados y límites. La revisión visual en navegador sigue pendiente: el navegador disponible bloquea el acceso a la vista local. No se afirman puntuaciones Lighthouse.

## Publicación

Arquitectura prevista: **GitHub público → Astro SSG → Cloudflare Pages Free → `*.pages.dev`**, con costo operativo de **USD 0 al mes** dentro del plan gratuito.

Antes de completar producción faltan un email o WhatsApp confirmado y el proyecto Pages con su URL real. El código omite los contactos no confirmados. Sin `SITE_URL`, el build es una vista previa no indexable. Al configurar el origen HTTPS de producción, se generan canonical, imagen social absoluta y sitemap; las ramas de preview conservan `noindex`.

Instrucciones: [docs/cloudflare-pages.md](docs/cloudflare-pages.md). Continuidad: [docs/handoff.md](docs/handoff.md).

No añadir adaptadores de servidor, Pages Functions, Workers, bases de datos, APIs comerciales, servicios de email ni dominio de pago al portafolio. Workers y D1 aparecen únicamente en la descripción del proyecto Vértice11.

## Integridad del contenido

CareNest se presenta como PWA y MVP, con App Check integrado y configurado con reCAPTCHA Enterprise, sin afirmar enforcement completo. Los casos empresariales omiten nombres, URLs y código privados. No incluir datos médicos reales, secretos ni información personal ajena al objetivo profesional.

Los recursos de Ramdren y CareNest pertenecen a sus respectivos titulares. Manrope utiliza SIL Open Font License, incluida en `public/LICENSE-Manrope.txt`. No se impone una licencia de software al repositorio sin decisión de su propietario.
