import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('framer-motion')) return 'vendor-motion';
          if (id.includes('react-router')) return 'vendor-router';
          if (id.includes('/react-dom/') || id.includes('/react/')) return 'vendor-react';
          if (id.includes('lucide-react') || id.includes('react-icons')) return 'vendor-icons';
          return 'vendor';
        },
      },
    },
  },
})
