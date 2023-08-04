/* empty css                           */import { h as createVNode, s as spreadAttributes, F as Fragment } from '../../renderers.mjs';
import { $ as $$MarkdownPostLayout } from './post-1.md.b42e2ac9.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
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
import './_page_.astro.488b34c3.mjs';
import 'preact/hooks';
import 'nanostores';
import 'preact/jsx-runtime';
/* empty css                            */import 'svgo';
import 'clsx';
import 'react-uuid';
import './error.astro.3eefdbc4.mjs';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","pubDate":"2022-07-08T00:00:00.000Z","description":"After learning some Astro, I couldn't stop!","author":"Astro Learner","images":[{"alt":"banner","url":"/src/assets/uploads/action-breeds-confidence.jpg"}],"tags":[]};
				const file = "D:/Astro/template/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "\r\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
