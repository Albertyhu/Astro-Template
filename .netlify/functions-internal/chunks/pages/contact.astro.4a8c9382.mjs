/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, F as Fragment, d as addAttribute, s as spreadAttributes, u as unescapeHTML, e as renderSlot, f as renderHead, g as defineScriptVars } from '../../renderers.mjs';
import { useState, useEffect, useRef } from 'preact/hooks';
import { atom, listenKeys } from 'nanostores';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                            */import { optimize } from 'svgo';
import 'clsx';
import uuid from 'react-uuid';

const MobileMenuOpen = atom(false); 

const MessageArray = atom([]);

function useStore(store, opts = {}) {
  let [, forceRender] = useState({});
  let [valueBeforeEffect] = useState(store.get());

  useEffect(() => {
    valueBeforeEffect !== store.get() && forceRender({});
  }, []);
  
  useEffect(() => {
    let batching, timer, unlisten;
    let rerender = () => {
      if (!batching) {
        batching = 1;
        timer = setTimeout(() => {
          batching = undefined;
          forceRender({});
        });
      }
    };
    if (opts.keys) {
      unlisten = listenKeys(store, opts.keys, rerender);
    } else {
      unlisten = store.listen(rerender);
    }
    return () => {
      unlisten();
      clearTimeout(timer);
    }
  }, [store, '' + opts.keys]);

  return store.get()
}

const MobileMenu = () => {
  const $MobileMenuOpen = useStore(MobileMenuOpen);
  const MobileIconRef = useRef(null);
  const toggleMobileMenu = () => {
    if ($MobileMenuOpen) {
      MobileMenuOpen.set(false);
    } else {
      MobileMenuOpen.set(true);
    }
  };
  return jsxs("div", {
    id: "MobileIcon",
    class: "hamburger bg-transparent",
    onClick: () => toggleMobileMenu(),
    ref: MobileIconRef,
    children: [jsx("span", {
      class: "line mb-[10px]"
    }), jsx("span", {
      class: "line mb-[10px]"
    }), jsx("span", {
      class: "line"
    })]
  });
};
__astro_tag_component__(MobileMenu, "@astrojs/preact");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$f = createAstro();
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<button id="themeToggle" class="astro-OEMX5LE4">
  <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="astro-OEMX5LE4">
    <path class="sun astro-OEMX5LE4" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>
    <path class="moon astro-OEMX5LE4" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>
  </svg>
</button>



<script>
const theme = (()=>{
    if(typeof localStorage != undefined && localStorage.getItem("theme")){
        return localStorage.getItem("theme")
    }
    if(window.matchMedia("{prefers-color-scheme: dark}").matches){
        return "dark"
    }
    return "light"
})()

const GoDark = () =>{
document.documentElement.classList.add("dark"); 
}

const GoLight = () =>{
    document.documentElement.classList.remove("dark")
}

if(theme === 'light'){
    GoLight()
}
else{
    GoDark(); 
}

window.localStorage.setItem("theme",  theme)

const toggleClick = () =>{
    const element = document.documentElement; 
    element.classList.toggle("dark"); 
    const isDark = element.classList.contains("dark")
    window.localStorage.setItem("theme", isDark ? "dark" : "light")
} 

 document.getElementById("themeToggle").addEventListener("click", toggleClick);
<\/script>`])), maybeRenderHead());
}, "D:/Astro/template/src/components/ThemeIcon.astro", void 0);

const $$Astro$e = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<a href="/" class="">Home</a>
    <a href="/about/" class="">About</a>
    <a href="/blog/" class="">Blog</a>
    <a href="/contact/" class="mobile-menu-links">Contact</a>
${renderComponent($$result2, "Fragment", Fragment, {})}` })}`;
}, "D:/Astro/template/src/components/navigation.astro", void 0);

const Image = {"src":"/_astro/PlaceholderLogo.cacd32d1.png","width":100,"height":60,"format":"png"};

function Logo () {
    return Image; 
}

const $$Astro$d = createAstro();
const $$LogoComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LogoComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`cursor-pointer object-fit block w-fit ${customStyle ? customStyle : "h-full w-auto cursor-pointer object-fit"}`, "class")} id="LogoWrapper">
    <a href="/">
        <img${addAttribute(Logo().src, "src")} class="h-full w-auto" alt="Logo">
    </a>
</div>`;
}, "D:/Astro/template/src/components/logoComponent.astro", void 0);

const $$Astro$c = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header-component" class="w-full flex bg-black text-white min-h-[50px] z-[100] fixed justify-between">
    ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "customStyle": "ml-[1rem] mr-auto" })}
    ${renderComponent($$result, "MenuIcon", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/template/src/components/HeaderComponent/hamburger.tsx", "client:component-export": "default" })}
    <nav id="header-wrapper" class="nav-links">
        ${renderComponent($$result, "Navigation", $$Navigation, {})}
        ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})}
    </nav>
    ${renderComponent($$result, "MobileMenu", null, { "client:only": "preact", "client:component-hydration": "only", "client:component-path": "D:/Astro/template/src/components/HeaderComponent/MobileMenu.tsx", "client:component-export": "default" })}
</header>`;
}, "D:/Astro/template/src/components/HeaderComponent/header.astro", void 0);

const $$Astro$b = createAstro();
const $$CreatorComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CreatorComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="CreatorContainer"${addAttribute(`${customStyle}`, "class")}>
            <div class="mx-auto">Developed by &nbsp;
                <span class="underline cursor-pointer font-bold text-lg"><a href="http://portfolio-3b68c.web.app/" target="_blank">Albert Hu</a></span>
            </div>
</div>`;
}, "D:/Astro/template/src/components/creatorComponent.astro", void 0);

const title = "template site";
const business_name = "Business Name";
const description = "My musings about the Astro framework";
const owner_name = "TheLastSliceOfPizza";
const owner_email = "hualbert.y@gmail.com";
const image = {
	src: "",
	alt: ""
};
const siteData = {
	title: title,
	business_name: business_name,
	description: description,
	owner_name: owner_name,
	owner_email: owner_email,
	image: image
};

const $$Astro$a = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index;
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="grid gap-[1em] mt-[2rem] absolute bottom-0 right-0 left-0 min-h-[250px] bg-slate-300">
    <div class="w-11/12 mx-auto text-center my-5">
        <div class="sm:grid sm:grid-cols-2 mx-auto">
            <div class="mb-5 sm:mb-0">
                ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "customStyle": "!mx-auto" })}
                <p class="tagline">"Tagline"</p>
            </div>
            <div class="grid footer-links mx-auto">
                <h4 class="font-bold mb-1 text-2xl">Site</h4>
                ${renderComponent($$result, "Navigation", $$Navigation, {})}
            </div>
        </div>
    </div>
    <div class="w-full min-h-[20px] bg-black text-slate-300 text-center relative">
        <span id="WebsiteName">${siteData.business_name}</span> &copy;
        <span id="CopyRight">${YEAR}</span>
        ${renderComponent($$result, "CreatorComponent", $$CreatorComponent, { "customStyle": "sm:absolute sm:right-[10px] sm:top-0" })}
    </div>
</footer>`;
}, "D:/Astro/template/src/components/footer/index.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$9 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "D:/Astro/template/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$8 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>
    ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}
</svg>`;
}, "D:/Astro/template/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$7 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "D:/Astro/template/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$6 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use>
</svg>`;
}, "D:/Astro/template/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$5 = createAstro();
const $$ScrollTopButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ScrollTopButton;
  return renderTemplate`${maybeRenderHead()}<div class="ScrollTopButton block w-fit userselect-none">
${renderComponent($$result, "Icon", $$Icon, { "id": "ScrollTopButton", "class": "mx-auto w-[3rem] h-[3rem] userselect-none", "name": "ic:sharp-arrow-circle-up" })}
<p class="whitespace-nowrap mx-auto text-center">Scroll to top</p>
</div>`;
}, "D:/Astro/template/src/components/scrollTopButton.astro", void 0);

function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

function jsonLDGenerator({ type, post, url }) {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title ? post.title : "website"}",
        "description": "${post.description ? post.description : ""}",
        "image": "../../src${post.images.length > 0 ? post.images[0].image : ""}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date ? post.date : ""}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${"http://localhost:3000"}"
      }
    </script>`;
}

const $$Astro$4 = createAstro();
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    // url = "http://localhost:3000",
    url = Astro2.url,
    image,
    frontmatter,
    robots
  } = Astro2.props;
  const jsonLD = jsonLDGenerator({
    type: frontmatter ? "post" : "website",
    post: frontmatter,
    url
  });
  return renderTemplate`<!-- SEO --><link rel="canonical"${addAttribute(url, "href")}>

<!-- Open Graph -->
<meta property="og:site_name"${addAttribute(siteData.business_name, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:url"${addAttribute(url, "content")}>
<meta property="og:image"${addAttribute(image?.src || siteData.image.src, "content")}>
<meta property="og:image:url"${addAttribute(image?.src || siteData.image.src, "content")}>
<meta property="og:image:secure_url"${addAttribute(image?.src || siteData.image.src, "content")}>
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="600">
<meta property="og:image:alt"${addAttribute(image?.alt || siteData.image.alt, "content")}>

<!-- Twitter -->
<meta name="twitter:title"${addAttribute(title, "content")}>
<meta name="twitter:description"${addAttribute(description, "content")}>
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image"${addAttribute(image?.src || siteData.image.src, "content")}>
<meta name="twitter:image:alt"${addAttribute(title, "content")}>
<meta name="twitter:domain"${addAttribute("http://localhost:3000", "content")}>

${robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`}

<!-- JSON LD -->
${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
}, "D:/Astro/template/src/components/SEO.astro", void 0);

const MessageComponent = () => {
  const $MessageArray = useStore(MessageArray);
  function AnimateMessage(DivElem) {
    setTimeout(() => {
      DivElem?.classList.remove("MessageFadeOut");
      DivElem?.classList.add("MessageFadeIn");
    }, [1]);
    setTimeout(() => {
      MessageArray.set([]);
    }, [6e3]);
    setTimeout(() => {
      DivElem?.classList.remove("MessageFadeIn");
      DivElem?.classList.add("MessageFadeOut");
    }, [5e3]);
  }
  function RenderMessage() {
    return $MessageArray.map((item, index) => {
      const ID = `${item}-${index}`;
      return jsx("p", {
        id: ID,
        className: "",
        children: item
      }, uuid());
    });
  }
  const messageRef = useRef(null);
  useEffect(() => {
    if ($MessageArray && $MessageArray.length > 0) {
      AnimateMessage(messageRef.current);
    }
  }, [$MessageArray]);
  return jsx("div", {
    id: "MessageArray",
    className: "Message box_shadow MessageFadeOut",
    ref: messageRef,
    children: $MessageArray != null && $MessageArray.length > 0 && RenderMessage()
  });
};
__astro_tag_component__(MessageComponent, "@astrojs/preact");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle,
    customDescription,
    frontmatter
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n        <meta name="viewport" content="width=device-width">\n        <meta name="generator"', ">\n        ", "\n        <title>", '</title>\n        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"><\/script>\n    ', "</head>\n    <body>\n        ", "\n        ", '\n        <div class="mt-[60px] min-h-[100vh] sm:min-h-[95vh] mb-[250px] flex flex-col flex-grow">\n            ', "\n        </div>\n        ", "\n        ", "\n        \n    </body>\n</html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "frontmatter": frontmatter, "description": customDescription ? customDescription : "This is a blogging site." }), pageTitle, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "MessageComponent", MessageComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MessageComponent/messageComponent", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Index, {}), renderComponent($$result, "ScrollTopButton", $$ScrollTopButton, {}));
}, "D:/Astro/template/src/layouts/BaseLayout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Email = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Email;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`email-icon ${customStyle}`, "class")}>
    ${renderComponent($$result, "Icon", $$Icon, { "name": "ic:outline-attach-email", "class": "w-9/12 h-9/12 m-auto" })}
</div>`;
}, "D:/Astro/template/src/components/iconComponents/email.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const FormStyle = `[&>div>label]:text-black rounded-md text-2xl`;
  const publicKey = "QnllaIF1JfocsyzUQ";
  const serviceId = "service_r5tihtr";
  const templateId = "template_wme49qj";
  return renderTemplate(_a || (_a = __template(["", '<form method="POST" class="formBackground w-11/12 md:w-9/12 mx-auto lg:w-6/12 rounded-lg mt-[20px] py-10 box_shadow mb-[120px] sm:mb-[160px]" id="contactForm">\n    <div id="Shell"', '>\n            <div class="grid sm:flex">\n                ', '\n                <section class="mx-auto sm:ml-[5px]">\n                    <h2 class="text-base sm:text-2xl text-center sm:text-left font-bold my-1">Have something to say?</h2>\n                    <h2 class="text-base sm:text-2xl text-center sm:text-left my-1">Share your thoughts.</h2>\n                </section>\n            </div>\n            <div class="grid w-full my-[10px]">\n                <label class="formLabel">Your full name</label>\n                <input name="name" id="nameInput" type="text" class="formInput" placeholder="Type your full name here" required>\n            </div>\n            <div class="grid w-full my-[10px]">\n                <label class="formLabel">Email</label>\n                <input name="email" id="emailInput" type="email" class="formInput" placeholder="Type your email here" required>\n            </div>\n            <div class="grid w-full my-[10px]">\n                <label class="formLabel">Subject Line</label>\n                <input name="subject" id="subjectInput" type="text" class="formInput" placeholder="Type your subject line here" required>\n            </div>\n            <div class="grid w-full my-[10px]">\n                <label class="formLabel">Message</label>\n                <textarea name="message" id="messageInput" rows="5" class="outline-1 border-2 resize-none p-1 rounded-lg bg-transparent placeholder:text-base placeholder:text-slate-800" placeholder="Type your message here."></textarea>\n            </div>\n            <button class="fancyButton !ml-auto !mr-0 bg-slate-300" type="submit">Send</button>\n    </div>\n</form>\n<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"><\/script>\n<script type="module">', `
    (function(){
        try{
            emailjs.init(publicKey);
        } catch(error){
            console.log("error: ", error)
        }
    })();

    const HandleSubmit = () =>{   

        const nameInput = document.getElementById("nameInput"); 
        const emailInput = document.getElementById("emailInput");
        const subjectInput = document.getElementById("subjectInput");
        const messageInput = document.getElementById("messageInput");

        const name = nameInput.value; 
        const email = emailInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;
        var templateParams = {
            to_name: siteData.owner_name, 
            from_name: name, 
            subject_line: subject, 
            message, 
            email,
        };
        try{
            emailjs.send(serviceId, templateId, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.href="/message_sent";
            }, function(error) {
                console.log('FAILED...', error);
            });
        } catch(error){
            console.log("error: ", error)
        }
    }
    const ContactForm = document.getElementById("contactForm"); 
    ContactForm?.addEventListener("submit",(event)=>{
        event.preventDefault()
        HandleSubmit()
    })
<\/script>`])), maybeRenderHead(), addAttribute(`w-11/12 mx-auto ${FormStyle}`, "class"), renderComponent($$result, "EmailIcon", $$Email, { "customStyle": "mx-auto mb-5" }), defineScriptVars({ publicKey, serviceId, templateId, siteData }));
}, "D:/Astro/template/src/components/contact_form.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Contact" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ContactForm", $$ContactForm, {})}
` })}`;
}, "D:/Astro/template/src/pages/contact.astro", void 0);

const $$file = "D:/Astro/template/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, contact as c };
