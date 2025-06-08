import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AdeebAbu.github.io/', // 👈 MUST match your GitHub repo name
  plugins: [react()],
})
//------