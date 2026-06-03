import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://anubis7star.github.io',
  // GitHub Pages project previews are served from /repository-name/.
  // Remove this base value for root hosting or a custom domain, or update it if
  // the preview repository name changes.
  base: '/cistelleria-carbonell-astro/',
  output: 'static',
});
