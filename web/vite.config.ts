import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		// Company logos repeat for every role at the same employer, so keep them as
		// separate files instead of inlining a data URI into the HTML each time
		assetsInlineLimit: 0
	},
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	}
});
