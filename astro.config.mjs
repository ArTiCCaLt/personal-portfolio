import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL?.trim();
if (siteUrl) {
  const url = new URL(siteUrl);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
    throw new Error('SITE_URL debe ser el origen HTTPS de producción, sin rutas ni credenciales.');
  }
}

export default defineConfig({
  site: siteUrl || undefined,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
  prefetch: false,
});
