/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, e as renderSlot, h as createVNode, s as spreadAttributes, F as Fragment } from '../../renderers.mjs';
import { a as $$BaseLayout } from './_page_.astro.488b34c3.mjs';
import { $ as $$ContentWrapper } from './error.astro.3eefdbc4.mjs';
import '@astrojs/internal-helpers/path';

const $$Astro$2 = createAstro();
const $$TagListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TagListItem;
  const {
    tag,
    url
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="hover:underline hover:font-bold my-5 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-[1.5rem] border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem">
    <a${addAttribute(url, "href")}>${tag}</a>
</li>`;
}, "D:/Astro/template/src/components/taglist/tagListItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Taglist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Taglist;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul>
    ${tags.map((item) => renderTemplate`${renderComponent($$result, "TagListItem", $$TagListItem, { "url": `../tags/${item.tag}`, "tag": item.tag })}`)}
</ul>`;
}, "D:/Astro/template/src/components/taglist/taglist.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  const tags = frontmatter.tags;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pateTitle": frontmatter.title, "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`
        ${maybeRenderHead()}<div class="flex flex-col sm:flex-row sm:gap-[5em] mt-5 mb-[150px]">
            <div>
                <h1 class="text-2xl font-bold">${frontmatter.title}</h1>
                <p>Written by <a${addAttribute(`/authors/${frontmatter.author}`, "href")} class="hover:underline cursor-pointer"><b>${frontmatter.author}</b></a></p>
                <hr class="border-2 bg-black w-full mb-5">
                ${renderSlot($$result3, $$slots["default"])}
            </div>
            <div>
                ${tags && tags.length > 0 && renderTemplate`${renderComponent($$result3, "TagList", $$Taglist, { "tags": tags })}`}
            </div>
        </div>  
    ` })}
` })}`;
}, "D:/Astro/template/src/layouts/MarkdownPostLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Published on: 2022-07-01</p>\n<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My First Blog Post","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"Astro Learner","images":[{"alt":"castle","url":"/src/assets/uploads/castle-in-the-sky.jpg"}],"tags":[]};
				const file = "D:/Astro/template/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "\r\nPublished on: 2022-07-01\r\n\r\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\r\n\r\n## What I've accomplished\r\n\r\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\r\n\r\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\r\n\r\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\r\n\r\n## What's next\r\n\r\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$MarkdownPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const post1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    images,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, post1 as p };
