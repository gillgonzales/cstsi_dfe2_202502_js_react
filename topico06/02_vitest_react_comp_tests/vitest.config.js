/// <reference types="@vitest/browser/providers/playwright" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  test: {
    browser: {
        enabled: true,
        provider: 'playwright',
        instances: [
          { browser: 'chromium' }
        ],
      },
  },
})