import adapterAuto from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Served from a sub-path on GitHub Pages project sites (e.g. /cv), root elsewhere
		paths: {
			base: process.env.BASE_PATH || ''
		},
		// Use static adapter for GitHub Pages deployment, auto adapter otherwise
		adapter: process.env.GITHUB_PAGES
			? adapterStatic({
					pages: 'build',
					assets: 'build',
					// 404.html so GitHub Pages serves the SPA fallback for deep links,
					// and the prerendered index.html survives
					fallback: '404.html',
					precompress: false,
					strict: false
				})
			: adapterAuto()
	}
};

export default config;
