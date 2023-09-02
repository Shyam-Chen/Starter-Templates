import { resolve } from 'path';
import { defineConfig } from 'vite';
import envify from 'process-envify';
import vue from '@vitejs/plugin-vue';
import vueRoutes from 'vite-plugin-vue-routes';
import unocss from 'unocss/vite';
import { presetUno, presetIcons, transformerDirectives } from 'unocss';

export default defineConfig({
  define: envify({}),
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    vueRoutes(),
    unocss({
      presets: [presetUno(), presetIcons()],
      transformers: [transformerDirectives({ enforce: 'pre' })],
      theme: {
        colors: {
          primary: {
            // generated from https://little-color-hub.com/
            50: '#f4f3ff',
            100: '#ebe9fe',
            200: '#d9d5fe',
            300: '#beb5fd',
            400: '#a08bfa',
            500: '#845ef5',
            600: '#753dec',
            700: '#662cd6',
            800: '#5525b2',
            900: '#472191',
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});