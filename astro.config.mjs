import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [preact(), react(), tailwind()],
  adapter: netlify(), 
});