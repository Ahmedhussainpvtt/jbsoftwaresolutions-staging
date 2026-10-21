import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages project site: https://ahmedhussainpvtt.github.io/jbsoftwaresolutions-staging/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-github-pages-404',
      closeBundle() {
        const index = resolve(__dirname, 'dist/index.html')
        const fallback = resolve(__dirname, 'dist/404.html')
        if (existsSync(index)) copyFileSync(index, fallback)
      },
    },
  ],
  base: '/jbsoftwaresolutions-staging/',
})
