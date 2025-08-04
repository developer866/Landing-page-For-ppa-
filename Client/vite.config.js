import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
   server: {
    host: true, // this allows access from local network
    port: 5173, // optional, you can choose another port
  },
})
