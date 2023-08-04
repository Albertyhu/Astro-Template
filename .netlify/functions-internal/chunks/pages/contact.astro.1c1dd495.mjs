/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, g as defineScriptVars } from '../../renderers.mjs';
import { $ as $$Icon, s as siteData, a as $$BaseLayout } from './_page_.astro.488b34c3.mjs';
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
import 'preact/hooks';
import 'nanostores';
import 'preact/jsx-runtime';
/* empty css                            */import 'svgo';
import 'clsx';
import 'react-uuid';

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

export { $$Contact as default, $$file as file, $$url as url };
