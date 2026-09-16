# Publicación en Cloudflare Pages Free

La infraestructura requerida es exclusivamente estática. No se necesita comprar un dominio ni activar un plan de pago.

## Preparar la entrega

1. Revisar los originales de marca y las capturas de demostración integradas, siguiendo `src/assets/README.md`.
2. Completar al menos email o WhatsApp en `portfolio.config.mjs`, únicamente con datos confirmados por Diego.
3. Ejecutar `npm ci` y `npm run build`.
4. Revisar `npm run preview` en escritorio y móvil y abrir las dos páginas de proyectos.
5. Guardar los cambios en GitHub. No utilizar force-push ni sobrescribir trabajo que haya llegado al repositorio.

## Crear el proyecto en Pages

En Cloudflare, abrir **Workers & Pages → Create application → Pages → Import an existing Git repository** y seleccionar `ArTiCCaLt/personal-portfolio`.

| Ajuste | Valor |
| --- | --- |
| Plan | Free |
| Tipo de proyecto | Pages con integración Git |
| Rama de producción | `main` |
| Directorio raíz | Raíz del repositorio |
| Framework | Astro |
| Comando de build | `npm run build` |
| Directorio de salida | `dist` |
| Node | `.node-version` contiene `24.19.0` |
| Functions, Workers y bindings | Ninguno |
| Dominio | Subdominio gratuito `*.pages.dev` |

Elegir el nombre del proyecto según disponibilidad. No dar por disponible `ramdren`, `diego-rangel` ni otro nombre antes de que Cloudflare lo confirme.

La primera publicación puede generarse sin `SITE_URL`; será no indexable. Una vez Cloudflare confirme el subdominio, configurar la variable pública de build `SITE_URL` con el origen HTTPS exacto, sin rutas, y volver a desplegar. No es un secreto y no tiene que incluir comillas en el panel.

`SITE_URL` configura metadatos, no crea ni compra un dominio. No se usa automáticamente `CF_PAGES_URL` como canonical, porque en previews puede contener una URL temporal.

Ejemplo de validación local en PowerShell, sustituyendo el valor solo después de confirmarlo:

```powershell
$env:SITE_URL = "https://SUBDOMINIO-CONFIRMADO.pages.dev"
npm run check:release
npm run build
```

En Bash:

```bash
export SITE_URL='https://SUBDOMINIO-CONFIRMADO.pages.dev'
npm run check:release
npm run build
```

No copiar el subdominio de ejemplo como si fuera la dirección final.

## Preview del PR antes de fusionar

Mientras la implementación esté en `feat/v0.1-portfolio`, mantener `main` como rama de producción. Si `main` todavía solo contiene el README inicial, el primer build de producción fallará con `ENOENT` al buscar `package.json`; ese intento no valida el código de la rama del PR.

1. Conservar la configuración de build de la tabla anterior.
2. En **Settings → Builds / Builds & deployments → Branch control**, permitir previews de `feat/v0.1-portfolio`, mediante **All non-Production branches** o una regla **Custom branches** que incluya esa rama.
3. Un nuevo commit normal en la rama del PR activa el preview tras conectar GitHub. Si ya existe un despliegue de esa rama, se puede reintentar ese despliegue. Reintentar el build fallido de `main` solo volverá a compilar el README.
4. En **Deployments**, confirmar que el despliegue corresponde a **Preview**, a `feat/v0.1-portfolio` y al head actual del PR #1. Usar únicamente la URL que Cloudflare muestre o publique en GitHub.
5. Cuando Cloudflare confirme el origen de producción, establecer el mismo `SITE_URL` en **Production** y **Preview**, sin comillas ni barra final, y reconstruir el preview. No sobrescribir `CF_PAGES_BRANCH`: permite mantener `noindex` en las ramas secundarias aunque compartan el canonical de producción.
6. Revisar escritorio, móvil, rutas directas, 404, contactos, teclado, SEO y headers en ese preview antes de recomendar salir de Draft.
7. La publicación de producción queda pendiente de una autorización explícita para fusionar el PR. Mantener `main` sin cambios durante la revisión.

Referencias oficiales: [previews](https://developers.cloudflare.com/pages/configuration/preview-deployments/) y [control de ramas](https://developers.cloudflare.com/pages/configuration/branch-build-controls/).

## Validación de producción

- Abrir la homepage y las dos rutas `/projects/.../` directamente, incluida una recarga.
- Confirmar la página 404. No añadir una regla SPA `/* /index.html 200`: este sitio usa páginas estáticas reales.
- Probar el menú móvil, teclado, desplegables y canales de contacto.
- Comprobar título, canonical, imagen social, `/robots.txt` y `/sitemap.xml` con la URL real.
- Verificar los headers definidos en `public/_headers`, especialmente CSP y caché de `/_astro/`.
- Revisar las imágenes originales y que todas las capturas tengan datos ficticios.
- Confirmar el plan Free, sin Functions, Workers, bindings, analytics de pago ni otros recursos facturables asociados al portafolio.

## Costo previsto y límites

Con la configuración anterior, el costo operativo previsto es **USD 0 al mes**, sujeto a mantener el plan y los límites gratuitos. La cuenta de Cloudflare y su facturación no se pueden certificar mediante un build local.

Cloudflare documenta las solicitudes a archivos estáticos como gratuitas e ilimitadas. Pages Free permite 500 builds al mes, 20.000 archivos por sitio y un máximo de 25 MiB por archivo. Este proyecto incluye una comprobación de tamaño, cantidad de archivos y ausencia de artefactos de servidor.

Las condiciones del proveedor pueden cambiar. Si se alcanza un límite o cambia la oferta, revisar la solución antes de activar un plan de pago. No habilitar servicios con cargos automáticos para resolverlo.

Fuentes oficiales consultadas el 15 de septiembre de 2026:

- [Astro en Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Precios de Pages y solicitudes estáticas](https://developers.cloudflare.com/pages/functions/pricing/)
- [Límites de Pages Free](https://developers.cloudflare.com/pages/platform/limits/)
