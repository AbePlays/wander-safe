import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin()
  ],
  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@containers': path.resolve('./src/containers'),
      '@icons': path.resolve('./src/icons')
    }
  },
  server: {
    port: 3000
  }
})
