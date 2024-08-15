/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"primary": "#6700EE",
				"secondary": "#9333ea",
				"light": "#F4F4F4",
				"dark": "#212224",
				"contrast": "#E29D36",

				
			},
			backgroundImage: {
				"iconGrident": "linear-gradient(180deg, #666666 0%, #020617 100%);"
			},
		},
	},
	plugins: [animations],
}
