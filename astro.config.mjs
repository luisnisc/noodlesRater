// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss({ config: './tailwind.config.js' })],
    server: {
      proxy: {
        '/api': {
          target: 'http://noodle.loseardes77.dev',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  
});