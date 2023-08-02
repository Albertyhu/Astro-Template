/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate } from '../../renderers.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'preact';
import 'preact-render-to-string';
import 'react';
import 'react-dom/server';
import 'mime/lite.js';
import 'html-escaper';
import 'node:fs';
import 'node:path';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';

const $$Astro = createAstro();
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1.md.0e2fdaf5.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2.md.08b5cdd0.mjs'),"../posts/post-3.md": () => import('./post-3.md.44d9dada.mjs'),"../posts/this-is-a-test-blog.md": () => import('./this-is-a-test-blog.md.b24e1c8c.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog.md.4601208b.mjs')}), () => "../posts/*.md");
  Astro2.params;
  Astro2.props;
  return renderTemplate``;
}, "D:/Astro/template/src/pages/blog/[page].astro", void 0);

const $$file = "D:/Astro/template/src/pages/blog/[page].astro";
const $$url = "/blog/[page]";

export { $$page as default, $$file as file, $$url as url };
