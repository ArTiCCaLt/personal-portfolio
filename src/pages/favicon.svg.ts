import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { resolve } from 'node:path';

// Viewport del símbolo original de la lámina aprobada; no redibuja el logo.
// Todo se genera durante el build estático, sin servicio de imágenes en runtime.
export const GET: APIRoute = async () => {
  const source = await sharp(resolve('src/assets/brand/ramdren-symbol-board.png'))
    .resize({ width: 512 }).webp({ quality: 85 }).toBuffer();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="124 48 240 240"><image href="data:image/webp;base64,${source.toString('base64')}" width="1448" height="1086"/></svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
};
