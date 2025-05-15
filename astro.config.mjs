// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  server: {
    allowedHosts: ['slimy-rooms-hammer.loca.lt']
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon()],
  // Add i18n routing
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});