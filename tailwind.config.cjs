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
			keyframes: {
				"accordion-down": {
				from: { height: 0 },
				to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}
