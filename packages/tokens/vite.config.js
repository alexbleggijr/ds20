import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/utilities.ts',
      formats: ['es'],
    },

    target: 'esnext',
  },
  plugins: [dts()],
});
