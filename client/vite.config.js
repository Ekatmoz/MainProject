import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // Proxy requests starting with /api to your backend
    },
  },
  build: {
    outDir: 'dist', // Ensure the build output goes to the 'dist' folder
    sourcemap: true, // Optional: Generates sourcemaps for better debugging in production
  },
})
