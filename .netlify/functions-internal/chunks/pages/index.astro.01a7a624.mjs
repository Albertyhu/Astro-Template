/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, b as renderComponent, d as addAttribute } from '../../renderers.mjs';
import { $ as $$BaseLayout } from './contact.astro.1549b065.mjs';

const $$Astro$2 = createAstro();
const $$ContentWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentWrapper;
  return renderTemplate`${maybeRenderHead()}<div class="w-11/12 h-auto mx-auto">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "D:/Astro/template/src/layouts/ContentWrapper.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1.md.0e2fdaf5.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2.md.08b5cdd0.mjs'),"../posts/post-3.md": () => import('./post-3.md.44d9dada.mjs'),"../posts/this-is-a-test-blog.md": () => import('./this-is-a-test-blog.md.b24e1c8c.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog.md.4601208b.mjs')}), () => "../posts/*.md");
  const allAuthors = [...new Set(allPosts.map((post) => post.frontmatter.author))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Authors" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`
        ${maybeRenderHead()}<h1 class="font-bold">Authors</h1>
        ${allAuthors ? renderTemplate`<ul>
                ${allAuthors.map((author) => renderTemplate`<a${addAttribute(`/authors/${author}`, "href")}><li>${author}</li></a>`)}
            </ul>` : renderTemplate`<p>There are currently no authors on the site yet.</p>`}` })}
` })}`;
}, "D:/Astro/template/src/pages/authors/index.astro", void 0);

const $$file$1 = "D:/Astro/template/src/pages/authors/index.astro";
const $$url$1 = "/authors";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1.md.0e2fdaf5.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2.md.08b5cdd0.mjs'),"../posts/post-3.md": () => import('./post-3.md.44d9dada.mjs'),"../posts/this-is-a-test-blog.md": () => import('./this-is-a-test-blog.md.b24e1c8c.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog.md.4601208b.mjs')}), () => "../posts/*.md");
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const tags = [...new Set(allTags)];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Search Posts By Index" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<h1 class="font-bold text-2xl">Search posts by index</h1>
    <ul>
        ${tags && tags.length > 0 && tags.map((tag) => renderTemplate`<li class="hover:underline hover:font-bold my-5 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-[1.5rem] border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem">
                <a${addAttribute(`../tags/${tag}`, "href")}>${tag}</a>
                </li>`)}
    </ul>
` })}`;
}, "D:/Astro/template/src/pages/tags/index.astro", void 0);

const $$file = "D:/Astro/template/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContentWrapper as $, index as a, index$1 as i };
