import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import node from "@astrojs/node";
//https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  output: 'server',
  integrations: [
    preact(), 
    react(), 
    tailwind(), 
    sitemap(),
  ],
  adapter: netlify(), 
  // adapter: node({
  //   mode: "standalone"
  // })
});