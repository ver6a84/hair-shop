import fs from 'fs';
import path from 'path';
import { ROUTES, CATEGORIES_URLS } from '../src/utils/constants.js';
import { baseUrl } from '../src/api/index.js';

const BASE_URL = 'https://perukytut.com.ua';

const staticUrls = Object.values(ROUTES);
const categoryUrls = Object.values(CATEGORIES_URLS).map(slug => `/category/${slug}`);

const getAllProducts = async () => {
  const response = await fetch(`${baseUrl}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data.products || [];
};

(async () => {
  try {
    const products = await getAllProducts();

    const staticXml = staticUrls.map(url => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);

    const categoryXml = categoryUrls.map(url => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);

    const productXml = products.map(p => {
     const imageUrl = p.variants?.[0]?.images?.[0]?.url;

return `
  <url>
    <loc>${BASE_URL}/product/${p.id}</loc>
    ${imageUrl ? `
    <image:image>
      <image:loc>${BASE_URL}/${imageUrl}</image:loc>
      <image:title>${p.display_name}</image:title>
    </image:image>` : ''}
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1">
${[...staticXml, ...categoryXml, ...productXml].join('')}
</urlset>`;

    const outputPath = path.resolve('public', 'sitemap.xml');
    fs.writeFile(outputPath, xml, err => {
      if (err) {
        console.error('❌ Помилка запису sitemap.xml:', err);
      } else {
        console.log('✅ sitemap.xml згенеровано успішно →', outputPath);
      }
    });
  } catch (error) {
    console.error('❌ Помилка при отриманні продуктів:', error);
  }
})();
