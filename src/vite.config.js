import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/walt/', // 👈 MUST match your GitHub repo name
  plugins: [react()],
})
//------
//----