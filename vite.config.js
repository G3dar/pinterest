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
    },
    allowedHosts: ['pinterestpulse.com', 'www.pinterestpulse.com', 'pinwrap.com', 'www.pinwrap.com', 'pinterest-dczz.onrender.com', '.onrender.com']
  },
  preview: {
    host: true,
    port: 10000,
    strictPort: false,
    allowedHosts: ['pinterestpulse.com', 'www.pinterestpulse.com', 'pinwrap.com', 'www.pinwrap.com', 'pinterest-dczz.onrender.com', '.onrender.com']
  }
})
