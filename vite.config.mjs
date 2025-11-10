import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Vite configuration for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/adv-portfolio-/' : '/', // 👈 conditional base for dev/prod
})
