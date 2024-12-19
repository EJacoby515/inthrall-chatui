import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version || '0.4.8'),
    APP_BUILD_HASH: JSON.stringify(process.env.APP_BUILD_HASH || 'dev-build')
  },
  worker: {
    format: 'es'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      },
      '/ollama': {
        target: 'http://localhost:11434',
        changeOrigin: true,
        secure: false
      }
    }
  }
});