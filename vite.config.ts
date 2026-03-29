import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/metabee-proposal/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
