import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build(),
    devServer({
      adapter,
      entry: 'src/index.tsx'
    })
  ],
  publicDir: false, // public 폴더를 자동 복사하지 않음 (build 스크립트에서 수동으로 복사)
  build: {
    copyPublicDir: false,
    emptyOutDir: true
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
})
