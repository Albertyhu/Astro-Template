/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, d as addAttribute, b as renderComponent } from '../../renderers.mjs';
import { b as $$LogoComponent, a as $$BaseLayout } from './_page_.astro.488b34c3.mjs';

const $$Astro$3 = createAstro();
const $$ContentWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContentWrapper;
  return renderTemplate`${maybeRenderHead()}<div class="w-11/12 h-auto mx-auto">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "D:/Astro/template/src/layouts/ContentWrapper.astro", void 0);

const $$Astro$2 = createAstro();
const $$HomeButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeButton;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`btn-primary ${customStyle}`, "class")} id="HomeButton">Go Home</div>`;
}, "D:/Astro/template/src/components/buttons/home_button.astro", void 0);

const $$Astro$1 = createAstro();
const $$BackButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackButton;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`btn-secondary ${customStyle}`, "class")} id="BackButton">Go Back</div>`;
}, "D:/Astro/template/src/components/buttons/back_button.astro", void 0);

const $$Astro = createAstro();
const $$Error = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Error;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "404 Error Page" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`
        ${renderComponent($$result3, "LogoComponent", $$LogoComponent, { "customStyle": "w-fit h-auto mx-auto mt-10" })}
        ${maybeRenderHead()}<div class="w-full h-auto">
            <h2 class="font-bold text-center">404 Error: The page you are looking for does not exist.</h2>
        </div>
        ${renderComponent($$result3, "HomeButton", $$HomeButton, { "customStyle": "my-10" })}
        ${renderComponent($$result3, "BackButton", $$BackButton, { "customStyle": "my-10" })}
    ` })}
` })}`;
}, "D:/Astro/template/src/pages/error.astro", void 0);

const $$file = "D:/Astro/template/src/pages/error.astro";
const $$url = "/error";

const error = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Error,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContentWrapper as $, error as e };
