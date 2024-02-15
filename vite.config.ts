import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		TanStackRouterVite(),
		{
			name: 'markdown-loader',
			transform(code, id) {
				if (id.slice(-3) === '.md') {
					// For .md files, get the raw content
					return `export default ${JSON.stringify(code)};`
				}
			},
		},
	],
})
