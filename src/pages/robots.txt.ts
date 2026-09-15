import type { APIRoute } from 'astro';
import { productionBranch } from '../../portfolio.config.mjs';

export const GET: APIRoute = ({ site }) => {
  const preview = process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH !== productionBranch;
  const content = site && !preview
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site)}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
