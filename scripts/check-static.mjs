import { readdir, readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : path.join(dir, entry.name)));
  return nested.flat();
}

const files = await walk('dist');
assert(!files.some((file) => /(?:^|\/)(?:_worker\.js|functions)(?:\/|$)/.test(file)), 'El build debe ser exclusivamente estático.');
assert(files.length < 20000, 'Límite de archivos de Pages Free.');
for (const file of files) assert((await stat(file)).size < 25 * 1024 * 1024, `Archivo demasiado grande: ${file}`);
const pages = ['index.html', 'projects/carenest/index.html', 'projects/vertice11/index.html', '404.html'];
const generated = new Set(files.map((file) => file.replaceAll(path.sep, '/')));
let checkedLinks = 0;
for (const page of pages) {
  const html = await readFile(`dist/${page}`, 'utf8');
  assert(html.includes('<html lang="es"'), `Idioma incorrecto: ${page}`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `Debe haber un H1: ${page}`);
  assert(!/href="(?:#|mailto:|undefined)"/.test(html), `Enlace vacío: ${page}`);
  assert(!/<script[^>]+src="https?:\/\//.test(html), `Script de terceros: ${page}`);
  assert(!/<astro-island/.test(html), `Hidratación no prevista: ${page}`);
  assert(!/<script(?![^>]*\bsrc=)[^>]*>\s*[^<\s]/.test(html), `Script inline incompatible con CSP: ${page}`);
  const pageUrl = new URL(page.replace(/index\.html$/, ''), 'https://portfolio.invalid/');
  const urls = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const [, srcset] of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    urls.push(...srcset.split(',').map((candidate) => candidate.trim().split(/\s+/)[0]));
  }
  for (const value of urls) {
    const url = new URL(value.replaceAll('&amp;', '&'), pageUrl);
    if (url.origin !== pageUrl.origin) continue;
    const relative = decodeURIComponent(url.pathname).replace(/^\//, '');
    const target = `dist/${relative}${url.pathname.endsWith('/') ? 'index.html' : ''}`;
    assert(generated.has(target), `Recurso o ruta inexistente en ${page}: ${value}`);
    if (url.hash && target.endsWith('.html')) {
      const destination = await readFile(target, 'utf8');
      const ids = [...destination.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
      assert(ids.includes(decodeURIComponent(url.hash.slice(1))), `Ancla inexistente en ${page}: ${value}`);
    }
    checkedLinks += 1;
  }
}
assert(!files.some((file) => /carenest-(audit|editor|owner|print|icon)|ramdren-symbol-board/.test(file)), 'Los originales de reserva no deben publicarse en dist.');
console.log(`Build estático verificado: ${files.length} archivos, ${pages.length} páginas HTML y ${checkedLinks} enlaces/recursos internos. Sin Workers, Functions ni hidratación.`);
