import type { APIRoute } from "astro";
import { PAGE_URLS, SITE } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = PAGE_URLS.map((path) => {
    const loc = new URL(path, SITE.siteUrl).toString();
    return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
