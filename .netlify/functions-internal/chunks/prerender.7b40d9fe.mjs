/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, $ as $$Image, _ as __astro_tag_component__ } from '../renderers.mjs';
import { $ as $$BaseLayout } from './pages/contact.astro.4a8c9382.mjs';
import { $ as $$ContentWrapper } from './pages/index.astro.67248535.mjs';
import '@astrojs/internal-helpers/path';

const $$Astro$9 = createAstro();
const prerender$6 = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Home Page" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<h2>Template</h2>
  ` })}
` })}`;
}, "D:/Astro/template/src/pages/index.astro", void 0);

const $$file$6 = "D:/Astro/template/src/pages/index.astro";
const $$url$6 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$6,
  prerender: prerender$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const prerender$5 = true;
const $$MessageSent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MessageSent;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Message sent" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<div class="mx-auto mt-[20px] block">
        <p class="text-2xl text-center font-bold">Your message has successfully been sent.</p>
        <a href="/"><button class="fancyButton box_shadow mx-auto my-[20px]">Go Home</button></a>
    </div>
` })}`;
}, "D:/Astro/template/src/pages/message_sent.astro", void 0);

const $$file$5 = "D:/Astro/template/src/pages/message_sent.astro";
const $$url$5 = "/message_sent";

const message_sent = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MessageSent,
  file: $$file$5,
  prerender: prerender$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$TagListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TagListItem;
  const {
    tag,
    url
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-fit hover:underline hover:font-bold mx-1 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-base border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem">
    <a${addAttribute(url, "href")}>${tag}</a>
</div>`;
}, "D:/Astro/template/src/components/blogComponents/tagListItem.astro", void 0);

const $$Astro$6 = createAstro();
const $$TagList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TagList;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap ">
    <p class="font-bold">Tags:</p>
    ${tags.map((item) => renderTemplate`${renderComponent($$result, "TagListItem", $$TagListItem, { "url": `../tags/${item.tag}`, "tag": item.tag })}`)}
</div>`;
}, "D:/Astro/template/src/components/blogComponents/tagList.astro", void 0);

const $$Astro$5 = createAstro();
const $$PreviewLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PreviewLink;
  const {
    title,
    author,
    description,
    thumbnail,
    images,
    pubDate,
    tags,
    url
  } = Astro2.props;
  let datePublished = pubDate ? new Date(pubDate) : null;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg box_shadow m-5 bg-white blog-preview-panel" id="blog-preview-panel">
    <div id="preview_wrapper" class="w-11/12 mx-auto py-10">
    ${title && renderTemplate`<a${addAttribute(url, "href")} class="cursor-pointer text-center text-2xl"><h2 class="font-bold">${title}</h2></a>`}
    ${images && images.length > 0 && renderTemplate`<div class="object-fit cursor-pointer">
            <a${addAttribute(url, "href")}>
                ${renderComponent($$result, "Image", $$Image, { "src": thumbnail.default, "alt": images[0].alt, "width": 1e3, "height": 1e3, "class": "w-full h-full" })}
            </a>
        </div>`}
    <p>
    ${author && renderTemplate`<span class="font-bold">Published by <b>${author}</b></span>`} 
    ${datePublished && renderTemplate`<span> | ${datePublished.toLocaleDateString()}</span>`}
    </p>
    ${description && renderTemplate`<p><b>Description: </b>${description}</p>`}
    ${tags && tags.length > 0 && renderTemplate`${renderComponent($$result, "TagList", $$TagList, { "tags": tags })}`}
</div>
</div>`;
}, "D:/Astro/template/src/components/blogComponents/previewLink.astro", void 0);

const $$Astro$4 = createAstro();
const Astro$2 = $$Astro$4;
const prerender$4 = true;
async function getStaticPaths$2() {
  const allPosts = await Astro$2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./pages/post-1.md.279e74a1.mjs').then(n => n.p),"../posts/post-2.md": () => import('./pages/post-2.md.b428904e.mjs'),"../posts/post-3.md": () => import('./pages/post-3.md.37bddd62.mjs'),"../posts/this-is-a-test-blog.md": () => import('./pages/this-is-a-test-blog.md.6c6b22b6.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog.md.c274dd13.mjs')}), () => "../posts/*.md");
  const uniqueAuthors = [...new Set(allPosts.map((post) => post.frontmatter.author))];
  return uniqueAuthors.map((author) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.author === author);
    return {
      params: { author },
      props: {
        posts: filteredPosts
      }
    };
  });
}
const $$authorCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$authorCopy;
  const { author } = Astro2.params;
  const { posts } = Astro2.props;
  const pageTitle = `Blog posts by ${author}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead()}<div id="wrapper" class="mb-[150px]">
    <h1 class="text-3xl font-bold text-center mt-10">${pageTitle}</h1>
    ${posts ? renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
            ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`)}
        </div>` : renderTemplate`<p>This author hasn't published any posts yet.</p>`}
</div>
` })}`;
}, "D:/Astro/template/src/pages/authors/[author] copy.astro", void 0);

const $$file$4 = "D:/Astro/template/src/pages/authors/[author] copy.astro";
const $$url$4 = "/authors/[author] copy";

const _author__copy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$authorCopy,
  file: $$file$4,
  getStaticPaths: getStaticPaths$2,
  prerender: prerender$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const RetrieveImageFromGlob = async (imagePath, globObject) => {
  try {
    const imageFilename = retrieveFileName(imagePath);
    for (var property in globObject) {
      if (property.includes(imageFilename)) {
        const image = await globObject[property]();
        return image;
      }
    }
  } catch (error) {
    console.log("RetrieveImageFromGlob error: ", error);
  }
};
const retrieveFileName = (name) => {
  try {
    if (name.length === 0)
      return "";
    const arr = name.split("/");
    return arr[arr.length - 1];
  } catch (error) {
    console.log("retrieveFileName error: ", error);
    return "";
  }
};
__astro_tag_component__(RetrieveImageFromGlob, "@astrojs/preact");
__astro_tag_component__(retrieveFileName, "@astrojs/preact");

const $$Astro$3 = createAstro();
const Astro$1 = $$Astro$3;
const prerender$3 = true;
async function getStaticPaths$1() {
  const allPosts = await Astro$1.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./pages/post-1.md.279e74a1.mjs').then(n => n.p),"../posts/post-2.md": () => import('./pages/post-2.md.b428904e.mjs'),"../posts/post-3.md": () => import('./pages/post-3.md.37bddd62.mjs'),"../posts/this-is-a-test-blog.md": () => import('./pages/this-is-a-test-blog.md.6c6b22b6.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog.md.c274dd13.mjs')}), () => "../posts/*.md");
  const uniqueAuthors = [...new Set(allPosts.map((post) => post.frontmatter.author))];
  return uniqueAuthors.map((author) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.author === author);
    return {
      params: { author },
      props: {
        posts: filteredPosts
      }
    };
  });
}
const $$author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$author;
  const { author } = Astro2.params;
  const { posts } = Astro2.props;
  const pageTitle = `Blog posts by ${author}`;
  const imageFiles = /* #__PURE__ */ Object.assign({"../../assets/uploads/9ljn35t99td31.jpg": () => import('./9ljn35t99td31.d0989335.mjs'),"../../assets/uploads/action-breeds-confidence.jpg": () => import('./action-breeds-confidence.6c880528.mjs'),"../../assets/uploads/all-legendary.jpg": () => import('./all-legendary.8f344fb6.mjs'),"../../assets/uploads/castle-in-the-sky.jpg": () => import('./castle-in-the-sky.9dd8e1f5.mjs'),"../../assets/uploads/the-scream-cabbage-merchant.jpg": () => import('./the-scream-cabbage-merchant.955622c3.mjs'),"../../assets/uploads/water-sea-waves-photography-sports-surfing-underwater-1920x1200-wallpaper_www.wallmay.com_43.jpg": () => import('./water-sea-waves-photography-sports-surfing-underwater-1920x1200-wallpaper_www.wallmay.com_43.c9e2c4cd.mjs')});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead()}<div id="wrapper" class="mb-[150px]">
    <h1 class="text-3xl font-bold text-center mt-10">${pageTitle}</h1>
    ${posts ? renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
            ${posts.map(async (post) => {
    if (post.frontmatter.images && post.frontmatter.images.length > 0) {
      const thumbnail = await RetrieveImageFromGlob(post.frontmatter.images[0].url, imageFiles);
      return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": thumbnail })}`;
    }
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}
        </div>` : renderTemplate`<p>This author hasn't published any posts yet.</p>`}
</div>
` })}`;
}, "D:/Astro/template/src/pages/authors/[author].astro", void 0);

const $$file$3 = "D:/Astro/template/src/pages/authors/[author].astro";
const $$url$3 = "/authors/[author]";

const _author_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$author,
  file: $$file$3,
  getStaticPaths: getStaticPaths$1,
  prerender: prerender$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const prerender$2 = true;
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<h2>My awesome blog subtitle</h2>
  ` })}
` })}`;
}, "D:/Astro/template/src/pages/about.astro", void 0);

const $$file$2 = "D:/Astro/template/src/pages/about.astro";
const $$url$2 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$2,
  prerender: prerender$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const prerender$1 = true;
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Blog;
  var allPosts = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./pages/post-1.md.279e74a1.mjs').then(n => n.p),"./posts/post-2.md": () => import('./pages/post-2.md.b428904e.mjs'),"./posts/post-3.md": () => import('./pages/post-3.md.37bddd62.mjs'),"./posts/this-is-a-test-blog.md": () => import('./pages/this-is-a-test-blog.md.6c6b22b6.mjs'),"./posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog.md.c274dd13.mjs')}), () => "../pages/posts/*.md");
  } catch (error) {
    console.log(error);
  }
  const pageTitle = "My Astro Learning Blog";
  const imageFiles = /* #__PURE__ */ Object.assign({"../assets/uploads/9ljn35t99td31.jpg": () => import('./9ljn35t99td31.d0989335.mjs'),"../assets/uploads/action-breeds-confidence.jpg": () => import('./action-breeds-confidence.6c880528.mjs'),"../assets/uploads/all-legendary.jpg": () => import('./all-legendary.8f344fb6.mjs'),"../assets/uploads/castle-in-the-sky.jpg": () => import('./castle-in-the-sky.9dd8e1f5.mjs'),"../assets/uploads/the-scream-cabbage-merchant.jpg": () => import('./the-scream-cabbage-merchant.955622c3.mjs'),"../assets/uploads/water-sea-waves-photography-sports-surfing-underwater-1920x1200-wallpaper_www.wallmay.com_43.jpg": () => import('./water-sea-waves-photography-sports-surfing-underwater-1920x1200-wallpaper_www.wallmay.com_43.c9e2c4cd.mjs')});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="mb-[100px]" id="content-wrapper">
    <h1 class="font-bold text-2xl text-center">Blog posts</h1>
    <ul class="[&>a>li]:my-1 list-inside">
      ${allPosts && allPosts.length > 0 && renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
            ${allPosts.map(async (post) => {
    if (post.frontmatter.images && post.frontmatter.images.length > 0) {
      const thumbnail = await RetrieveImageFromGlob(post.frontmatter.images[0].url, imageFiles);
      return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": thumbnail })}`;
    }
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}
        </div>`}
    </ul>
  </div>
` })}`;
}, "D:/Astro/template/src/pages/blog.astro", void 0);

const $$file$1 = "D:/Astro/template/src/pages/blog.astro";
const $$url$1 = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$1,
  prerender: prerender$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const Astro = $$Astro;
const prerender = true;
async function getStaticPaths() {
  var allPosts = [];
  try {
    allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./pages/post-1.md.279e74a1.mjs').then(n => n.p),"../posts/post-2.md": () => import('./pages/post-2.md.b428904e.mjs'),"../posts/post-3.md": () => import('./pages/post-3.md.37bddd62.mjs'),"../posts/this-is-a-test-blog.md": () => import('./pages/this-is-a-test-blog.md.6c6b22b6.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog.md.c274dd13.mjs')}), () => "../posts/*.md");
  } catch (error) {
    console.log(error);
  }
  const allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((tag) => {
    var filteredPosts = allPosts.filter((post) => post.frontmatter.tags?.some((item) => item.tag === tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  posts.filter((val) => val.frontmatter.tags?.some((item) => item.tag == tag));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<p>Posts tagged with ${tag}</p>
  <ul class="[&>li]:my-5">
      ${posts && posts.length > 0 && posts.map((item) => renderTemplate`<li class="hover:font-bold hover:underline">
                  <a${addAttribute(item.url, "href")}>${item.frontmatter.title}</a>
              </li>`)}
  </ul>
` })}`;
}, "D:/Astro/template/src/pages/tags/[tag].astro", void 0);

const $$file = "D:/Astro/template/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _author__copy as _, _author_ as a, about as b, blog as c, _tag_ as d, index as i, message_sent as m };
