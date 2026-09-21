import { readdir } from 'node:fs/promises';
import { profile } from '../portfolio.config.mjs';

const problems = [];
try {
  const url = new URL(process.env.SITE_URL || '');
  if (url.protocol !== 'https:' || !url.hostname.endsWith('.pages.dev') || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
    problems.push('SITE_URL debe ser el origen HTTPS confirmado en Cloudflare Pages (*.pages.dev).');
  }
} catch { problems.push('Falta SITE_URL: URL de producción confirmada, sin inventar un dominio.'); }

if (!profile.email && !profile.whatsapp) problems.push('Falta un email o WhatsApp confirmado para contacto directo.');
if (profile.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) problems.push('Formato de email no válido.');
for (const [key, hosts] of [['whatsapp', ['wa.me']], ['linkedin', ['linkedin.com', 'www.linkedin.com']]]) {
  if (!profile[key]) continue;
  try {
    const url = new URL(profile[key]);
    if (url.protocol !== 'https:' || !hosts.includes(url.hostname) || url.pathname === '/' || url.username || url.password) problems.push(`Revisar URL de ${key}.`);
  } catch { problems.push(`URL de ${key} no válida.`); }
}

for (const [folder, name] of [['brand', 'ramdren-wordmark-board'], ['brand', 'ramdren-symbol-board'], ['projects', 'carenest-overview']]) {
  const files = await readdir(`src/assets/${folder}`).catch(() => []);
  const matches = files.filter((file) => new RegExp(`^${name}\\.(png|jpe?g|webp|avif|svg)$`).test(file));
  if (matches.length !== 1) problems.push(`Se requiere exactamente un recurso aprobado: src/assets/${folder}/${name}.*`);
}

if (problems.length) {
  console.error('Pendientes para completar la publicación v0.1:\n' + problems.map((problem) => `- ${problem}`).join('\n'));
  process.exitCode = 1;
} else console.log('Datos de publicación presentes. Confirmar plan Pages Free y revisión visual de los recursos antes de publicar.');
