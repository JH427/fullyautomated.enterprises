// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fullyautomated.enterprises',
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'static',
  // This site serves authored SVGs directly; no native image processing is needed.
  image: { service: { entrypoint: 'astro/assets/services/noop' } },
  build: {
    format: 'directory'
  }
});
