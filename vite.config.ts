import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { siteStats } from './vite/siteStats.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteStats()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
