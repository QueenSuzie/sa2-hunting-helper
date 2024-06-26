import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import nesting from 'postcss-nesting';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
	plugins: [
		/*
		Uncomment the following line to enable solid-devtools.
		For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
		*/
		// devtools(),
		solidPlugin(),
	],
	css: {
		postcss: {
			plugins: [nesting]
		}
	},
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
	base: '/sa2-hunting-helper',
});
