import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3100,
    strictPort: false,
    hmr: {
      clientPort: 443,
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 10000,
    strictPort: false,
    allowedHosts: ['pinterest-ttkn.onrender.com', '.onrender.com']
  }
})
