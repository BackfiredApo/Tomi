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

## Update Product Ranges and Catalogues

The homepage, `/products/` and the main range pages share `src/data/capabilities.ts`.
Store approved public downloads in `public/catalogues/`. The range pages link to the RFQ form with the relevant category preselected.
Optimized product imagery is in `public/images/ranges/`.

The five range covers in `public/images/ranges/` are 720 × 480 WebP illustrations generated with the built-in ImageGen tool. The catalogue PDFs retain their product photographs.

<details>
<summary>Range cover prompts</summary>

Shared prompt for CNC, pet toys, cables and films:

> Create one photorealistic editorial product render for a B2B manufacturing website's 'Product ranges' cover series. Landscape 3:2 composition. Palette and art direction fixed across the entire series: seamless warm light gray limestone / oatmeal background (#e9e5db), soft muted sage green accents (#778978), graphite, ivory or brushed silver, understated contrast and low saturation. Use a continuous matte limestone studio surface, large diffused daylight from the top left, soft natural shadows extending to the lower right, elevated 35-degree camera angle, medium close-up, refined modern industrial catalog photography. Place the entire main grouping inside the central 75 percent with quiet margins, filling the frame without cutting off the objects. Make the range immediately legible at a small crop. No text of any kind, no logos, no labels, no watermarks, no people, no visual borders, no graphics. Only the specified objects.

Subject directions:

- `cnc.webp`: three custom precision-machined parts on the surface. One substantial brushed-aluminium flanged bearing housing, one short turned steel shaft with machined grooves, one compact angled machined bracket with mounting holes. Artfully grouped in one composition, brushed grain and complex tool marks legible, no oily workshop background.
- `pet-toys.webp`: three recognisable dog training and interactive-play toys. A dark sage textured EVA ball attached to a neatly looped off-white braided rope, a desaturated warm clay EVA tug ring and an ivory flying disc, subtly overlapping in a simple grouping on the same warm light gray limestone surface. Realistic molded foam texture, simple safe-looking product silhouettes with no literal paw icons or text.
- `cables.webp`: two commercial data cables, each with a legible connector facing the camera. One standard clear 8P8C/RJ45 Ethernet plug with gold contacts and graphite strain relief attached to a dark neatly looped cable, and one symmetrical USB-C metal male connector with a sage molded grip and a short neatly looped sage cable. Realistic balanced proportions, two distinct cable types, no patterns or accessories.
- `films.webp`: three rolls of plain professional automotive film, a translucent clear paint protection film roll, a smoke-gray matte roll, and a muted sage satin colour-change film roll. Show natural film reflections and a short unfolded edge from one roll, clustered on the same warm gray limestone surface with understated graphite cores. No car, foil labels, shiny rainbow colors or installation tools.

Apparel prompt:

> Create one photorealistic editorial product render for a B2B manufacturing website's 'Product ranges' cover series. Landscape 3:2 composition. Fixed art direction: seamless warm light gray limestone / oatmeal background (#e9e5db), muted sage (#778978), graphite and ivory, low saturation and understated contrast. Continuous matte limestone studio surface, large diffused daylight from top left and soft natural shadows lower right, elevated 35-degree camera angle, medium close-up, refined modern industrial catalog photography. Subject: folded cream short-sleeve crewneck T-shirt, sage hooded sweatshirt with the hood clearly visible, charcoal work trousers with a cargo/tool pocket, and a smaller ivory and sage children's two-piece set, neatly arranged in a compact group of four with believable scale and no clutter. Make the necklines, hood and cargo pocket easy to recognise at card size. Main grouping inside central 75 percent. No labels, graphics, lettering, logo, watermarks, borders, people or accessories.

</details>

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
