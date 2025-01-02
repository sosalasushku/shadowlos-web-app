/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg-primary': 'var(--bg-primary)',
				'bg-secondary': 'var(--bg-secondary)',
				'text': 'var(--text)',
				'text-muted': 'var(--text-muted)',
				'btn-bg': 'var(--btn-bg)',
				'btn-bg-subtle': 'var(--btn-bg-subtle)',
				'btn-text': 'var(--btn-text)',
				'link-text': 'var(--link-text)',
			},
		},
	},
	plugins: [],
}
