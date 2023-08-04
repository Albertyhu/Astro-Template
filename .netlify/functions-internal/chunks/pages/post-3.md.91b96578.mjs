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

				const html = updateImageReferences("<p>This is a chat.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"post-3","pubDate":"2023-07-14T09:03:49.716Z","description":"This is a post about basketball. ","author":"Antsmasher","images":[],"tags":[{"tag":"Astro"},{"tag":"Basketball"}]};
				const file = "D:/Astro/template/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "This is a chat.";
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
