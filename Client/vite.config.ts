import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// Vite Plugins (plugins to optimize and speed up the development)
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';

// Package (you can change the app information from here)
import { data } from './package.json';

const { title, base, meta, serviceWorker } = data;

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		base,
		plugins: [
			react(),
			mkcert(),
			checker({ typescript: true }),
			createHtmlPlugin({
				minify: true,
				inject: {
					data: {
						title: `<title>${title}</title>`,
						base: `<base href="${base}" />`,
						theme_color: `<meta name="theme-color" content="${meta.themeColor}">`,
						ms_tile_color: `<meta name="msapplication-TileColor" content="${meta.msTileColor}" />`,
					},
				},
			}),
			VitePWA({
				strategies: 'injectManifest',
				srcDir: 'src',
				filename: 'sw.ts',
				includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
				manifest: {
					name: serviceWorker.name,
					short_name: serviceWorker.shortName,
					description: serviceWorker.description,
					theme_color: meta.themeColor,
					icons: [
						{
							src: 'android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: 'android-chrome-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
					],
				},
				devOptions: {
					enabled: true,
					type: 'module',
				},
			}),
		],
		server: {
			port: 3000,
			https: true,
			strictPort: true,
			proxy: {
				'/api': {
					target: process.env.VITE_API_BASE_ADDRESS,
					changeOrigin: true,
					secure: false,
					rewrite: (path: any) => path.replace(/^\/api/, '/api'),
				},
			},
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
	});
};

