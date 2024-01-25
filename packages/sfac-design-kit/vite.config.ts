import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ copyDtsFiles: true })],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
