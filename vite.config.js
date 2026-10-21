import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

// GitHub Pages project site: https://ahmedhussainpvtt.github.io/jbsoftwaresolutions-staging/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-github-pages-404',
      closeBundle() {
        const index = resolve(root, 'dist/index.html')
        const fallback = resolve(root, 'dist/404.html')
        if (existsSync(index)) copyFileSync(index, fallback)
      },
    },
  ],
  base: '/jbsoftwaresolutions-staging/',
})
