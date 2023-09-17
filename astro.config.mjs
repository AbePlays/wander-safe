import path from 'path'
import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@containers': path.resolve('./src/containers')
      }
    }
  }
})
