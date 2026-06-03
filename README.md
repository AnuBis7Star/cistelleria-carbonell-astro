# Cistelleria Carbonell

Static Astro website for Cistelleria Carbonell, a local cistelleria and natural-products shop in Reus.

## Tech stack

- Astro
- TypeScript
- CSS
- GitHub Actions for preview deployment

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
  utils/
    paths.ts
.github/
  workflows/
    deploy.yml
astro.config.mjs
package.json
```

## Local development

```bash
npm install
npm run dev
```

## Build commands

```bash
npm run build
npm run preview
```

## Main files to edit

- `src/data/site.ts`: business details, navigation, products, categories, benefits and reviews.
- `src/pages/index.astro`: page layout, SEO metadata and structured data.
- `src/components/`: reusable page components.
- `src/styles/global.css`: global design system and responsive styling.
- `public/assets/`: static images copied directly into the built site.
- `astro.config.mjs`: Astro site settings and the temporary GitHub Pages preview base path.

## GitHub Pages preview

This repository is configured for preview deployment to GitHub Pages with GitHub Actions.

- GitHub Pages source: `Settings > Pages > Source: GitHub Actions`
- Preview URL: `https://anubis7star.github.io/cistelleria-carbonell-astro/`
- The preview uses `base: "/cistelleria-carbonell-astro/"` in `astro.config.mjs` because GitHub Pages serves project sites from the repository path.
- Public asset paths should go through `src/utils/paths.ts` when referenced from Astro components.
- Image paths stored in `src/data/site.ts` should be relative, for example `assets/product-1.jpg`.

## Future production hosting

If the site moves to Hostinger, another static host, or a custom domain at the root, remove the `base` value from `astro.config.mjs` or update it for the new hosting path.

For Hostinger or a similar static host:

```bash
npm run build
```

Upload the contents of `dist/` to the hosting provider.
