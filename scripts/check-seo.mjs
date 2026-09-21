import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Comprueba el HTML publicado, no la implementación de los componentes.
const mode = process.argv[2];
assert(['preview', 'production'].includes(mode), 'Uso: node scripts/check-seo.mjs preview|production');
const site = process.env.SITE_URL;
assert(mode !== 'production' || site, 'La comprobación de producción requiere SITE_URL.');
const routes = ['/', '/projects/carenest/', '/projects/vertice11/'];
const titles = new Set();

for (const route of [...routes, '/404.html']) {
  const filename = route.endsWith('/') ? `${route}index.html` : route;
  const html = await readFile(`dist${filename}`, 'utf8');
  const indexable = mode === 'production' && route !== '/404.html';
  const robots = indexable ? 'index, follow' : 'noindex, nofollow';
  assert(html.includes(`<meta name="robots" content="${robots}">`), `Indexación incorrecta: ${route}`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(title && !titles.has(title), `Título vacío o duplicado: ${route}`);
  titles.add(title);
  assert(/<meta name="description" content="[^"]+">/.test(html), `Descripción ausente: ${route}`);
  if (site && route !== '/404.html') {
    const canonical = new URL(route, site).href;
    assert(html.includes(`<link rel="canonical" href="${canonical}">`), `Canonical incorrecto: ${route}`);
    assert(html.includes(`<meta property="og:url" content="${canonical}">`), `Open Graph URL incorrecta: ${route}`);
    for (const attribute of ['property="og:image"', 'name="twitter:image"']) {
      assert(html.includes(`<meta ${attribute} content="${new URL('/social-card.png', site).href}">`), `Imagen social incorrecta: ${route}`);
    }
  } else {
    assert(!html.includes('rel="canonical"'), 'No generar un canonical para la página 404 ni sin dominio confirmado.');
  }
}

const robots = await readFile('dist/robots.txt', 'utf8');
assert(robots.includes(mode === 'production' ? 'Allow: /' : 'Disallow: /'), 'robots.txt no coincide con el modo.');
if (mode === 'production') assert(robots.includes(`Sitemap: ${new URL('/sitemap.xml', site).href}`));
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(locations, site ? routes.map((route) => new URL(route, site).href) : []);
console.log(`SEO ${mode}: títulos, descripciones, canonical, redes sociales, robots y sitemap correctos.`);
