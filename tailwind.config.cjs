/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xm: { min: "360px" },
				sm: { min: "636px" },
				md: { min: "768px" },
				"md-2": { min: "850px" },
				lg: { min: "1024px" },
				xl: { min: "1280px" },
				"2xl": { min: "1536px" }
			},
		}
	},
	plugins: [],
}
