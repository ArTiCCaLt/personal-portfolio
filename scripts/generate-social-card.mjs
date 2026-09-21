import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

// Composición tipográfica de metadatos. No sustituye al logo Ramdren aprobado.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f8fafc"/>
  <rect x="72" y="76" width="44" height="5" fill="#2563eb"/>
  <text x="72" y="153" font-family="DejaVu Sans, sans-serif" font-size="23" fill="#536176">RAMDREN · SOFTWARE ENGINEERING</text>
  <text x="67" y="307" font-family="DejaVu Sans, sans-serif" font-size="91" font-weight="bold" letter-spacing="-4" fill="#0f172a">Diego Rangel</text>
  <text x="72" y="381" font-family="DejaVu Sans, sans-serif" font-size="30" fill="#2563eb">Software Developer &amp; Technology Consultant</text>
  <path d="M72 477 H1128" stroke="#d6dde7"/>
  <text x="72" y="537" font-family="DejaVu Sans, sans-serif" font-size="24" fill="#536176">.NET / React / TypeScript / APIs / SQL</text>
</svg>`;
await mkdir('public', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/social-card.png');
console.log('public/social-card.png · 1200 × 630');
