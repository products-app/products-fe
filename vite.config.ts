import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

const __dirname = path.resolve()

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '@/root': path.join(__dirname, '.'),
      '@': path.join(__dirname, 'src/'),
    },
  },
})
