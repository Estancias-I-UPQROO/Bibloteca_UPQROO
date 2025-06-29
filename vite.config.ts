import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
   server: {
    allowedHosts: [
      '342f-187-190-174-47.ngrok-free.app', // tu host de ngrok
      // puedes agregar más hosts aquí si quieres
    ],
  },
  plugins: [react()],
})
