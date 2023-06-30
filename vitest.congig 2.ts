import { configDefaults, defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    }
  },
})
