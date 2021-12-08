import { defineConfig } from 'vite'
//@ts-ignore
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-elements.ts',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        //@ts-ignore
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
