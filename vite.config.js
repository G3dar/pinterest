import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true,
    port: 3100,
    strictPort: false,
    hmr: {
      clientPort: 443,
    }
  },
  preview: {
    host: true,
    port: 10000,
    strictPort: false
  }
})
