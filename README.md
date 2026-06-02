# Cistelleria Carbonell · Astro Website

An upgraded Astro version of the static Cistelleria Carbonell website.

## What changed

- Converted the project to Astro.
- Added reusable data in `src/data/site.ts`.
- Added a stronger hero section, featured products, shop story, product gallery, benefits, reviews and contact CTA.
- Added mobile menu, scroll-aware header, reveal animations and dynamic background darkening.
- Added SEO meta tags, Open Graph tags, favicon placeholder and local business structured data.
- Improved responsive layout and reusable design variables.

## Project structure

```txt
public/
  assets/
    local.png
    product-1.jpg ... product-7.jpg
src/
  components/
    Header.astro
    Footer.astro
    ProductCard.astro
    SectionHeading.astro
  data/
    site.ts
  pages/
    index.astro
  styles/
    global.css
astro.config.mjs
package.json
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Customize for another local business

Most content is in:

```txt
src/data/site.ts
```

Change the business name, city, links, products, categories, reviews and contact data there. Then change the images inside:

```txt
public/assets/
```

## Deployment note

Before deploying, update `site` in `astro.config.mjs` from `https://example.com` to the real domain.
