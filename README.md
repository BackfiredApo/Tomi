# Tomi Trading B2B Inquiry Website

Static Astro website for Guangzhou Tomi Trading Co., Ltd. The site is designed as a B2B inquiry and RFQ website for overseas buyers, not an e-commerce store.

## Tech Stack

- Astro static site
- HTML, CSS and TypeScript
- No backend, database, payments, Shopify or WordPress
- Deployment target: Cloudflare Pages

## Run Locally

```bash
npm install
npm run dev
```

Astro will print a local development URL, usually `http://localhost:4321`.

## Build

```bash
npm run build
```

The production site is generated in:

```text
dist
```

## Deploy to Cloudflare Pages

1. Push this project to a Git repository.
2. In Cloudflare Pages, create a new project from that repository.
3. Use these build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add the custom domain `tomitrading.com` in Cloudflare Pages after the first deployment.

## Update Company Details

Edit the shared site data in:

```text
src/data/site.ts
```

You can update:

- Company name
- Brand name
- Email address
- WhatsApp display number
- WhatsApp link
- Website domain
- Location

Important: the current site intentionally shows only `Guangzhou, China` as the location. Do not add a full company address unless you want it to appear publicly.

## Replace Placeholder Images

The replaceable placeholder images are stored in:

```text
public/images
```

Replace these files with approved product, city, packaging or logistics photos when available:

- `cnc-machined-parts-visual.jpg`
- `sheet-metal-fabrication-visual.jpg`
- `small-machinery-visual.jpg`
- `garments-visual.jpg`
- `home-storage-products-visual.jpg`
- `sourcing-services-visual.jpg`
- `quality-inspection-visual.jpg`
- `quality-site-visit-visual.jpg`
- `export-support-visual.jpg`
- `about-tomi-trading-visual.jpg`
- `contact-rfq-visual.jpg`
- `automotive-film-placeholder.jpg`
- `quality-inspection-placeholder.jpg`
- `export-support-placeholder.jpg`
- `guangzhou-skyline-hero.jpg`

Recommended image ratio is 4:3 or 16:10, with a width of at least 1200px. Use original photos you own or have permission to use. Do not use copyrighted brand logos, fake customer logos or images that imply certifications you do not have.

The Guangzhou skyline and product images are temporary unbranded commercial visuals. Replace each one with your own approved product photography when available. Do not display certification marks or certificate scans until you have the real documents and permission to publish them.

## Contact Form Behavior

The RFQ form on `/contact` uses `mailto:sales@tomitrading.com`. This keeps the site fully static and easy to deploy. Because browser support for mailto forms varies, the page also includes direct Email and WhatsApp buttons.

For drawings or files, buyers are instructed to email:

```text
sales@tomitrading.com
```

## Connect a Real Form Service Later

To use a hosted form service such as Formspree later:

1. Create a Formspree form and copy the endpoint URL.
2. Open `src/pages/contact.astro`.
3. Replace the form action:

```astro
action={mailtoAction}
```

with:

```astro
action="https://formspree.io/f/your-form-id"
method="post"
```

4. Keep the direct email and WhatsApp buttons as backup contact methods.

## SEO Files

The site includes:

- Meta title and description on every page
- Open Graph and Twitter card tags
- Clean Astro routes
- `public/robots.txt`
- `src/pages/sitemap.xml.ts`

The production sitemap URL will be:

```text
https://tomitrading.com/sitemap.xml
```
