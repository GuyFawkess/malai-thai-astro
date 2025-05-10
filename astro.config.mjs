// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  server: {
    allowedHosts: ['social-coins-lose.loca.lt']
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon()]
});