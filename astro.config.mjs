// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://sosalasushku.github.io/shadowlos-web-app',
  base: '/shadowlos-web-app/',
  integrations: [
    tailwind({
      config: { path: './tailwind.config.mjs' },
    }),
    mdx({
      components: {
        TheButton: '/src/components/TheButton.astro'
      }
    })
  ],
  content: {
    sources: ['src/content']
  },
});