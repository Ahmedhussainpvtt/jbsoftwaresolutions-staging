import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://ahmedhussainpvtt.github.io/jbsoftwaresolutions-staging/
export default defineConfig({
  plugins: [react()],
  base: '/jbsoftwaresolutions-staging/',
})
