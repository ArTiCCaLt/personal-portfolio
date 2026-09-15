# Continuación de la v0.1

## Base de trabajo

Repositorio: `https://github.com/ArTiCCaLt/personal-portfolio`.

La implementación se integra en `feat/v0.1-portfolio`, a partir del commit inicial `eb56d5a6eb731dde905475925860d9c0b9455916` de `main`. Ese commit contiene el README inicial del propietario. Se conserva como padre de la entrega; no se reinicia el historial.

Antes de integrar la entrega se verificaron ambas ramas en ese commit, un único README de 20 bytes y la ausencia de PR abiertos. Se recuperó y revisó la implementación local existente, conservando los recursos originales y el historial del repositorio.

El sitio todavía no está desplegado en Cloudflare y no tiene una URL pública de producción confirmada.

## Continuar desde GitHub

```bash
git clone --branch feat/v0.1-portfolio https://github.com/ArTiCCaLt/personal-portfolio.git
cd personal-portfolio
npm ci
npm run build
npm run preview
```

Antes de añadir cambios, comprobar el estado y las referencias remotas. No usar force-push ni reinicializar el repositorio.

La fuente incluye el lockfile, los originales de marca y las capturas de demostración aprobadas. Las dependencias y el resultado de compilación se generan localmente; el contexto maestro privado no forma parte del repositorio.

## Pendientes para cerrar la versión

- Confirmar email o WhatsApp; LinkedIn es opcional.
- Revisar la propuesta de cambios y llevar la versión aprobada a `main`.
- Crear el proyecto Cloudflare Pages Free siguiendo [cloudflare-pages.md](cloudflare-pages.md).
- Establecer `SITE_URL` con el subdominio `pages.dev` confirmado y volver a compilar.
- Revisar el aspecto, móvil, teclado, enlaces de contacto y comportamiento del despliegue.

Los datos pendientes se comprueban con `npm run check:release`. Los canales sin confirmar se omiten de la interfaz.

## Recursos y validación

Los nueve adjuntos visuales se recibieron e inspeccionaron. Se integraron el wordmark, el símbolo y las capturas de demostración de CareNest, conservando los originales.

El navegador disponible bloqueó la vista previa local con `ERR_BLOCKED_BY_CLIENT`. No se completaron pruebas visuales en navegador ni se midieron puntuaciones Lighthouse. La compilación y las comprobaciones de enlaces, recursos y SEO pasaron; ver [validation.md](validation.md). El workflow `Portfolio CI` reproduce los builds sin dominio, de producción y de preview con un origen ficticio limitado a CI.
