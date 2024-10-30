import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/assets/icons/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: { overrides: { removeViewBox: false } },
					},
					{
						name: 'convertColors',
						params: {
							currentColor: true
						}
					}
				],
			},
		}),
		svg({ includePaths: ['./src/lib/assets/extra'] }),
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	}
});
