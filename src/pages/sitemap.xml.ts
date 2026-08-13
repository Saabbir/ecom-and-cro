import { getCollection } from 'astro:content';
import { getEntryUrl } from '../utils/relationships';

export async function GET() {
  const siteUrl = 'https://ecom-cro.dev';
  const entries = await getCollection('knowledge', (e) => !e.data.draft);

  const staticPages = [
    '/',
    '/ecommerce/',
    '/compare/',
    '/shopify/',
    '/metrics/',
    '/cro/',
    '/paths/'
  ];

  const entryUrls = entries.map((e) => getEntryUrl(e));
  const allUrls = [...staticPages, ...entryUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
    <url>
      <loc>${siteUrl}${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>${url === '/' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
