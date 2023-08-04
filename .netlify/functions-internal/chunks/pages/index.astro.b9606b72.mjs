/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../renderers.mjs';
import { a as $$BaseLayout } from './_page_.astro.488b34c3.mjs';
import { $ as $$ContentWrapper } from './error.astro.3eefdbc4.mjs';

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return Astro2.redirect("/blog_posts/1");
}, "D:/Astro/template/src/pages/blog_posts/index.astro", void 0);

const $$file$2 = "D:/Astro/template/src/pages/blog_posts/index.astro";
const $$url$2 = "/blog_posts";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1.md.b42e2ac9.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2.md.641c3cbc.mjs'),"../posts/post-3.md": () => import('./post-3.md.91b96578.mjs'),"../posts/post-4.md": () => import('./post-4.md.d8c22e9e.mjs'),"../posts/post-5.md": () => import('./post-5.md.cba45014.mjs'),"../posts/post-6.md": () => import('./post-6.md.25af6594.mjs'),"../posts/post-7.md": () => import('./post-7.md.5992793d.mjs'),"../posts/this-is-a-test-blog.md": () => import('./this-is-a-test-blog.md.f2d5f2e9.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog.md.80336718.mjs')}), () => "../posts/*.md");
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
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1.md.b42e2ac9.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2.md.641c3cbc.mjs'),"../posts/post-3.md": () => import('./post-3.md.91b96578.mjs'),"../posts/post-4.md": () => import('./post-4.md.d8c22e9e.mjs'),"../posts/post-5.md": () => import('./post-5.md.cba45014.mjs'),"../posts/post-6.md": () => import('./post-6.md.25af6594.mjs'),"../posts/post-7.md": () => import('./post-7.md.5992793d.mjs'),"../posts/this-is-a-test-blog.md": () => import('./this-is-a-test-blog.md.f2d5f2e9.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog.md.80336718.mjs')}), () => "../posts/*.md");
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const tags = [...new Set(allTags)];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Search Posts By Index" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`
        ${maybeRenderHead()}<h1 class="font-bold text-2xl text-center mt-10">Search posts by index</h1>
        <ul>
            ${tags && tags.length > 0 && tags.map((tag) => renderTemplate`<li class="hover:underline hover:font-bold my-5 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-[1.5rem] border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem">
                    <a${addAttribute(`../tags/${tag}`, "href")}>${tag}</a>
                    </li>`)}
        </ul>
    ` })}
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

export { index$1 as a, index as b, index$2 as i };
